# DBMS Sem 5 (Backend)

---
#### Creating Virtual Enviornment:
```
virtualenv env
```
#### Activating Virtual Env on Windows:
```
env\Scripts\activate
```

#### Activating Virtual Env on Linux:
```
source env/bin/activate
```

#### Installing Dependencies:
```
pip install -r requirements.txt
```
#### Run Python Development Server:
```
python manage.py runserver
```


> ### **API Endpoints**

| Endpoint    | Method      | Description               |
| ----------- | ----------- | ------------------------- |
| /api/user/login/           | POST         | Login a user. Recieves Auth Token.    |
| /api/user/register/                 | POST         | Register a User.              |
| /api/user/profile/            | GET          | Get a User Profile with token.    |
| /api/user/upload/ | POST         | Upload ML Model Parameters.    |

