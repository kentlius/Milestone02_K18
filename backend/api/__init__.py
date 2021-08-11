import os
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_praetorian import Praetorian
from flask_cors import CORS

app = Flask(__name__)
app.config['SECRET_KEY'] = '7ed7e42da7d8244f5b19cda5b29346dd07fe5d50'
app.config['SQLALCHEMY_DATABASE_URI'] = app.config['SQLALCHEMY_DATABASE_URI'] = f"sqlite:///{os.path.join(os.getcwd(), 'database.db')}"
app.config['JWT_ACCESS_LIFESPAN'] = {'hours': 24}
app.config['JWT_ACCESS_LIFESPAN'] = {'hours': 24}

db = SQLAlchemy(app)
guard = Praetorian()
cors = CORS()

from api import routes