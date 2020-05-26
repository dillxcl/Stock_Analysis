from django.urls import path, include
from .views import Stock_API_View
from rest_framework import routers 

router = routers.DefaultRouter()
router.register('Stock_API', Stock_API_View)

urlpatterns = [
    path('', include(router.urls)),
    ]
