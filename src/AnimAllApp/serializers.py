from rest_framework import serializers
from AnimAllApp.models import Shelters, Animals

class ShelterSerializer(serializers.ModelSerializer):
    class Meta:
        model=Shelters
        fields=('ShelterId','ShelterName')

class AnimalSerializer(serializers.ModelSerializer):
    class Meta:
        model=Animals
        fields=('AnimalId','AnimalName','Shelter','DateOfArriving','PhotoFileName')