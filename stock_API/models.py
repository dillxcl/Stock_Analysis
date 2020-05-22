from django.contrib.postgres.fields import ArrayField
from django.db import models

class Post(models.Model):
    name = models.CharField(max_length=200,default='AC')
    price = ArrayField(models.CharField(max_length=200), default=list)
    date = ArrayField(models.CharField(max_length=200), default=list)
    PE_ratio = models.CharField(max_length=200,default='5')
    EPS = models.CharField(max_length=200,default='7')
    Book_value = models.CharField(max_length=200, default='10')

    def __str__(self):
        return self.name