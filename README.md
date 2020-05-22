# Stock_Analysis

1. After adding the model to django-admin, run following command for migrating
### python3 manage.py makemigrations

1. Once the command is done above, run following command for migrate
### python3 manage.py migrate

1. To run the server
### python3 manage.py runserver 




Change your settings.py file (for local)

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

This will change if we have cloudserver

