from django.urls import path, re_path, register_converter
from . import views  # . means import from current module


urlpatterns = [
    path('', views.rent, name='rent'),
    path('../', views.rent, name='/rent'),
]