from django.shortcuts import render
from django.core import serializers
from rest_framework import viewsets
from .models import Stock_API
from .serializers import Stock_API_Serializer
from . import Get_Stock_Data
from datetime import datetime
from pytz import timezone
from babel.dates import format_date, format_datetime, format_time
company = 'AC.TO'

class Stock_API_View(viewsets.ModelViewSet):

    ##need to change this (add conditions to check if existed)
    '''
    date, price = Get_Stock_Data.get_history(company)
    stock_data = Stock_API(name=company, price=price, date=date, PE_ratio='test', EPS='test', Book_value='test')
    stock_data.save()
    '''
    current_date = datetime.now(timezone('US/Aleutian'))
    current_date = str(format_date(current_date, locale='en')).replace(",","")
    queryset = Stock_API.objects.all()
    date = Stock_API.objects.filter(date__0=current_date)
    
    #print(current_date)
    #print(date)


    
