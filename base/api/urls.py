from django.urls import path, include, re_path
from . import views
from rest_framework import routers
from .views import *
router = routers.DefaultRouter()
# router.register(r'shops', views.ShopViewSet)
# router.register(r'sellers', views.SellerViewSet)
# router.register(r'taxes', views.TaxViewSet)
# router.register(r'invoice', views.InvoiceViewSet)
# router.register(r'package', views.PackageVieweSet, basename='package')
# router.register(r'message', views.MessageViewSet, basename='message')
# router.register(r'proof', views.ProofViewSet, basename='proof')



app_name = "api"
urlpatterns =  [
    re_path(r'^auth/', include('djoser.urls')),
    re_path(r'^auth/', include('djoser.urls.authtoken')),
    re_path(r'^auth/', include('djoser.urls.jwt')),  
]

urlpatterns = [
    path('auth/', include('djoser.urls')),
    path('auth/', include('djoser.urls.authtoken')),
    path('auth/', include('djoser.urls.jwt')),
    path('', include(router.urls)),  # Include router URLs properly
]
# urlpatterns += router.urls