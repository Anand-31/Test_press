from django.urls import path
from login.views import index
from login.views import startquiz

urlpatterns = [
    path('',index, name='index'),
    path('startquiz/', startquiz, name="startquiz")
]