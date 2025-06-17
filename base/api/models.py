from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator

class City(models.Model):
    # Required fields (should not be null)
    name = models.CharField(max_length=100)
    country = models.CharField(max_length=100)
    
    # Optional fields (can be null/blank)
    tagline = models.CharField(max_length=200, blank=True, null=True)
    hero_image = models.ImageField(upload_to='city_hero_images/', blank=True, null=True)
    description = models.TextField(blank=True, null=True)
    
    # Best time to visit fields
    best_season = models.CharField(max_length=100, blank=True, null=True)
    best_months = models.CharField(max_length=100, blank=True, null=True)
    best_temperature = models.CharField(max_length=50, blank=True, null=True)
    
    class Meta:
        verbose_name_plural = "Cities"
    
    def __str__(self):
        return f"{self.name}, {self.country}"

class QuickFact(models.Model):
    city = models.ForeignKey(City, related_name='quick_facts', on_delete=models.CASCADE)
    label = models.CharField(max_length=100)
    value = models.CharField(max_length=100)
    
    def __str__(self):
        return f"{self.label}: {self.value}"

class FunFact(models.Model):
    city = models.ForeignKey(City, related_name='fun_facts', on_delete=models.CASCADE)
    text = models.CharField(max_length=200)
    
    def __str__(self):
        return self.text

class Highlight(models.Model):
    city = models.ForeignKey(City, related_name='highlights', on_delete=models.CASCADE)
    name = models.CharField(max_length=100)
    description = models.TextField(blank=True, null=True)
    image = models.ImageField(upload_to='highlights/', blank=True, null=True)
    location = models.CharField(max_length=100, blank=True, null=True)
    rating = models.DecimalField(
        max_digits=3, 
        decimal_places=1,
        validators=[MinValueValidator(0), MaxValueValidator(5)],
        blank=True, 
        null=True
    )
    
    def __str__(self):
        return self.name

class Neighborhood(models.Model):
    city = models.ForeignKey(City, related_name='neighborhoods', on_delete=models.CASCADE)
    name = models.CharField(max_length=100)
    description = models.TextField(blank=True, null=True)
    
    def __str__(self):
        return self.name

class NeighborhoodTag(models.Model):
    neighborhood = models.ForeignKey(Neighborhood, related_name='tags', on_delete=models.CASCADE)
    tag = models.CharField(max_length=50)
    
    def __str__(self):
        return f"{self.neighborhood.name} - {self.tag}"

class TransportTip(models.Model):
    city = models.ForeignKey(City, related_name='transport_tips', on_delete=models.CASCADE)
    emoji = models.CharField(max_length=10)
    title = models.CharField(max_length=100)
    description = models.TextField(blank=True, null=True)
    
    def __str__(self):
        return self.title