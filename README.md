# Stock_Analysis


### Some commands to use

Create project
```
django-admin startproject [project name]
```

Create App inside the project
```
python manage.py startapp [app name]
```

To check version
```
python -m django --version
```


### To run the program

After adding the model to django-admin, run following command for migrating
```
python3 manage.py makemigrations
```


Once the command is done above, run following command for migrate
```
python3 manage.py migrate
```


To run the server
```
python3 manage.py runserver
```


Change your settings.py file (for local)

```
DATABASES = {
'default': {
    'ENGINE': 'django.db.backends.postgresql',
    'NAME': 'stock_API',                      
    'USER': 'postgres',
    'PASSWORD': 'xsw2cde3',
    'HOST': '127.0.0.1',
    'PORT': '5432',
    }
}
```
This will change if we have cloudserver

