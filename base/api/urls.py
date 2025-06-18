from django.urls import path, include, re_path
from . import views
from rest_framework import routers
from .views import *
router = routers.DefaultRouter()
router.register(r'city', CityViewSet)
router.register(r'currentcity', CurrentCityViewSet)
router.register(r'message', views.MessageViewSet, basename='message')
router.register(r'attraction', views.HighlightViewSet, basename='attraction')

app_name = "api"
urlpatterns =  [
    re_path(r'^auth/', include('djoser.urls')),
    re_path(r'^auth/', include('djoser.urls.authtoken')),
    re_path(r'^auth/', include('djoser.urls.jwt')),  
]

# urlpatterns = [
#     path('auth/', include('djoser.urls')),
#     path('auth/', include('djoser.urls.authtoken')),
#     path('auth/', include('djoser.urls.jwt')),
#     path('', include(router.urls)),  # Include router URLs properly
# ]
urlpatterns += router.urls