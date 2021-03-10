"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
import os
from flask import Flask, request, jsonify, url_for, send_from_directory
from flask_migrate import Migrate
from flask_swagger import swagger
from flask_cors import CORS
from api.utils import APIException, generate_sitemap
from api.models import db, User
from api.routes import api
from api.admin import setup_admin
#from models import Person

from werkzeug.security import generate_password_hash, check_password_hash
from flask_jwt_extended import JWTManager, create_access_token, jwt_required, get_jwt_identity

ENV = os.getenv("FLASK_ENV")
static_file_dir = os.path.join(os.path.dirname(os.path.realpath(__file__)), '../public/')
app = Flask(__name__)
app.url_map.strict_slashes = False

# database condiguration
if os.getenv("DATABASE_URL") is not None:
    app.config['SQLALCHEMY_DATABASE_URI'] = os.environ.get('DATABASE_URL')
else:
    app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:////tmp/test.db"

app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
MIGRATE = Migrate(app, db)
db.init_app(app)

# Allow CORS requests to this API
CORS(app)

# add the admin
setup_admin(app)

# Add all endpoints form the API with a "api" prefix
app.register_blueprint(api, url_prefix='/api')

# Handle/serialize errors like a JSON object
@app.errorhandler(APIException)
def handle_invalid_usage(error):
    return jsonify(error.to_dict()), error.status_code

# generate sitemap with all your endpoints
@app.route('/')
def sitemap():
    if ENV == "development":
        return generate_sitemap(app)
    return send_from_directory(static_file_dir, 'index.html')

# any other endpoint will try to serve it like a static file
@app.route('/<path:path>', methods=['GET'])
def serve_any_other_file(path):
    if not os.path.isfile(os.path.join(static_file_dir, path)):
        path = 'index.html'
    response = send_from_directory(static_file_dir, path)
    response.cache_control.max_age = 0 # avoid cache memory
    return response

# include sign-up endpoint
@app.route('/sign-up/', methods=['POST'])
def add_user():
    if request.method == 'POST':
        # user data is received
        user_name = request.json.get("user_name", None)
        fundation_name = request.json.get("fundation_name", None)
        email = request.json.get("email", None)
        password = request.json.get("password", None)
        phone_number = request.json.get("phone_number", None)
        province = request.json.get("province", None)
        
        if not user_name:
            return jsonify("User name is required!"), 400
        if not fundation_name:
            return jsonify("Fundation name is required!"), 400
        if not email:
            return jsonify("Email is required!"), 400
        if not password:
            return jsonify("Password is required!"), 400
        if not phone_number:
            return jsonify("Phone number is required!"), 400
        if not province:
            return jsonify("Province is required!"), 400

        #Verification email
        mail = User.query.filter_by(email = email).first()
        if mail:
            return jsonify({"msg": "Email  already exists"}), 400
        
        #Verification user_name
        username = User.query.filter_by(user_name = user_name).first()
        if username: 
            return jsonify({"msg": "Username  already exists"}), 400
        
        #Encrypt password
        hashed_password = generate_password_hash(password)

        user = User(user_name = user_name, fundation_name = fundation_name, email = email, password = hashed_password, phone_number = phone_number, province = province)

        db.session.add(user)
        db.session.commit()
        
        return jsonify("Your register was successful!"), 200

# this only runs if `$ python src/main.py` is executed
if __name__ == '__main__':
    PORT = int(os.environ.get('PORT', 3001))
    app.run(host='0.0.0.0', port=PORT, debug=True)
