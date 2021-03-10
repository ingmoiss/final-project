from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()


class User(db.Model):
    __tablename__ = 'user'
    id = db.Column(db.Integer, primary_key = True)
    user_name = db.Column(db.String(200), unique=True, nullable=False)
    fundation_name = db.Column(db.String(200), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(300), unique=False, nullable=False)
    phone_number = db.Column(db.String(200), unique=True, nullable=False)
    province = db.Column(db.String(200), unique=False, nullable=False)
    pet = db.relationship('Pets', lazy=True) #Se crea relacion para llave foranea 

    def __repr__(self):
        return '<User %r>' % self.id

    def serialize(self):
        return {
            "id": self.id,
            "user_name": self.user_name,
            "fundation_name": self.fundation_name,
            "email": self.email,
            "phone_number": self.phone_number,
            "province": self.province,
            # do not serialize the password, its a security breach
        }
