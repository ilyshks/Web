from django.urls import path, re_path, register_converter
from . import views  # . means import from current module


urlpatterns = [
    path('', views.track, name='track'),
    path('../', views.track, name='/track'),
]