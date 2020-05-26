from rest_framework import serializers
from .models import Stock_API

class Stock_API_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Stock_API
        fields = ('name','price','date','PE_ratio','EPS','Book_value') 
    