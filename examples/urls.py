from django.urls import path
from . import views

urlpatterns = [
    path('', views.main, name='main'),
    path('block', views.block, name='block'),
    path('snake', views.snake, name='snake'),
]