import flask_praetorian
from flask import request
from api import app, db, guard, cors
from api.models import User

guard.init_app(app, User)
db.init_app(app)
cors.init_app(app)

with app.app_context():
    db.create_all()
    if db.session.query(User).filter_by(username='admin').count() < 1:
        db.session.add(User(
          username='admin',
          password=guard.hash_password('admin123'),
          roles='admin'
            ))
    db.session.commit()

@app.route('/api/')
def home():
    return {"Hello": "World"}, 200

@app.route('/api/login', methods=['POST'])
def login():
    data = request.get_json(force=True)
    username = data.get('username', None) 
    password = data.get('password', None)
    user = guard.authenticate(username, password)
    ret = {'access_token': guard.encode_jwt_token(user)}
    return ret, 200

@app.route('/api/refresh', methods=['POST'])
def refresh():
    print('Refresh request')
    old_token = request.get_data()
    new_token = guard.refresh_jwt_token(old_token)
    ret = {'access_token': new_token}
    return ret, 200

@app.route('/api/protected')
@flask_praetorian.auth_required
def protected():
    return {'message': f'protected endpoint (allowed user \
        {flask_praetorian.current_user().username})'}