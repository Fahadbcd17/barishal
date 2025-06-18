from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.response import Response
from .models import *
from .serializers import *
from rest_framework.permissions import IsAuthenticated
from rest_framework import viewsets, status, generics, permissions

class CityViewSet(viewsets.ModelViewSet):
    queryset = City.objects.all()
    serializer_class = CitySerializer

class CurrentCityViewSet(viewsets.ModelViewSet):
    queryset = CurrentCity.objects.all()
    serializer_class = CurrentCitySerializer
 
class HighlightViewSet(viewsets.ModelViewSet):
    queryset = Highlight.objects.all()
    serializer_class = HighlightSerializer
    permission_classes = [IsAuthenticated]  

    def get_queryset(self):
        queryset = super().get_queryset()
        city_id = self.request.query_params.get('city_id')
        if city_id:
            queryset = queryset.filter(city_id=city_id)
        return queryset

    def create(self, request, *args, **kwargs):
        serializer = HighlightSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    def list(self, request, *args, **kwargs):
        queryset = self.filter_queryset(self.get_queryset())
        serializer = HighlightSerializer(queryset, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

class MessageViewSet(viewsets.ModelViewSet):
    queryset = Message.objects.all()
    serializer_class = MessageSerializer
    permission_classes = [IsAuthenticated]
    def create(self, request, *args, **kwargs):
        serializer = MessageSerializer(data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED) 
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class TravelTipViewSet(viewsets.ModelViewSet):
    queryset = TravelTip.objects.all()
    serializer_class = TravelTipSerializer
    permission_classes = [IsAuthenticated]

    def list(self, request, *args, **kwargs):
        queryset = self.filter_queryset(self.get_queryset())
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK) 