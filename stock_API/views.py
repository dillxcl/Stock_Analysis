from django.shortcuts import render
from rest_framework import viewsets
from .models import Stock_API
from .serializers import Stock_API_Serializer
from . import Get_Stock_Data
from

company = 'AC.TO'

class Stock_API_View(viewsets.ModelViewSet):

    ##need to change this (add conditions to check if existed)
    '''
    date, price = Get_Stock_Data.get_history(company)
    stock_data = Stock_API(name=company, price=price, date=date, PE_ratio='test', EPS='test', Book_value='test')
    stock_data.save()
    '''
    queryset = Stock_API.objects.all()
    serializer_class = Stock_API_Serializer
    
