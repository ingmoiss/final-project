from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()


class User(db.Model):
    __tablename__ = 'user'
    id = db.Column(db.Integer, primary_key = True)
    user_name = db.Column(db.String(200), unique=True, nullable=False)
    fadation_name = db.Column(db.String(200), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    phone_number = db.Column(db.String(20), unique=True, nullable=False)
    province = db.Column(db.String(20), unique=False, nullable=False)
    pet = db.relationship('Pets', lazy=True) #Se crea relacion para llave foranea 

    def __repr__(self):
        return '<User %r>' % self.id

    def serialize(self):
        return {
            "id": self.id,
            "user_name": self.user_name,
            "fadation_name": self.fadation_name,
            "email": self.email,
            "phone_number": self.phone_number,
            "province": self.province,
            # do not serialize the password, its a security breach
        }

class Pets(db.Model):
    __tablename__ = 'pets'
    id = db.Column(db.Integer, primary_key = True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id')) #Se crea llave foranea 
    pet_type = db.Column(db.String(120), unique=False, nullable=False)
    foundation_worker = db.Column(db.String(120), unique=False, nullable=False)
    descripcition = db.Column(db.String(2000), unique=False, nullable=False)
    color_hair = db.Column(db.String(80), unique=False, nullable=False)
    age = db.Column(db.Integer, unique=False, nullable=False)
    size =  db.Column(db.Integer, unique=False, nullable=False)
    cheer_up = db.Column(db.String(2000), unique=False, nullable=False)
    vaccines =  db.Column(db.Boolean(), unique=False, nullable=False)
    gender = db.Column(db.String(80), unique=False, nullable=False)


    def __repr__(self):
        return '<User %r>' % self.id

    def serialize(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "pet_type": self.pet_type,
            "foundation_worker": self.foundation_worker,
            "descripcition": self.descripcition,
            "color_hair": self.color_hair,
            "age": self.age,
            "size": self.size,
            "vaccines": self.vaccines,
            "gender": self.gender,
        }