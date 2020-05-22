from django.shortcuts import render
from rest_framework import viewsets
from .models import Stock_API
from .serializers import Stock_API_Serializer

class Stock_API_View(viewsets.ModelViewSet):
    queryset = Stock_API.objects.all()
    serializer_class = Stock_API_Serializer
    