from rest_framework import serializers
from .models import *

class QuickFactSerializer(serializers.ModelSerializer):
    class Meta:
        model = QuickFact
        fields = ['label', 'value']

class FunFactSerializer(serializers.ModelSerializer):
    class Meta:
        model = FunFact
        fields = ['text']

class NeighborhoodTagSerializer(serializers.ModelSerializer):
    class Meta:
        model = NeighborhoodTag
        fields = ['tag']

class NeighborhoodSerializer(serializers.ModelSerializer):
    tags = NeighborhoodTagSerializer(many=True, read_only=True)
    
    class Meta:
        model = Neighborhood
        fields = ['name', 'description', 'tags']

class HighlightSerializer(serializers.ModelSerializer):
    class Meta:
        model = Highlight
        fields = ['name', 'description', 'image', 'location', 'rating']

class TransportTipSerializer(serializers.ModelSerializer):
    class Meta:
        model = TransportTip
        fields = ['emoji', 'title', 'description']

class CitySerializer(serializers.ModelSerializer):
    quick_facts = QuickFactSerializer(many=True, read_only=True)
    fun_facts = FunFactSerializer(many=True, read_only=True)
    highlights = HighlightSerializer(many=True, read_only=True)
    neighborhoods = NeighborhoodSerializer(many=True, read_only=True)
    transport_tips = TransportTipSerializer(many=True, read_only=True)
    
    best_time = serializers.SerializerMethodField()
    
    def get_best_time(self, obj):
        return {
            'season': obj.best_season,
            'months': obj.best_months,
            'temperature': obj.best_temperature
        }
    
    class Meta:
        model = City
        fields = [
            'name', 'country', 'tagline', 'hero_image', 'description',
            'quick_facts', 'fun_facts', 'best_time', 'highlights',
            'neighborhoods', 'transport_tips'
        ]
class CurrentCitySerializer(serializers.ModelSerializer):
    class Meta:
        model = CurrentCity
        fields = ['city_id']


class MessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Message
        fields = "__all__"
