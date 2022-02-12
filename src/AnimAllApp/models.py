from django.db import models

# Create your models here.

class Shelters(models.Model):
    ShelterId = models.AutoField(primary_key=True)
    ShelterName = models.CharField(max_length=500)

class Animals(models.Model):
    AnimalId = models.AutoField(primary_key=True)
    AnimalName = models.CharField(max_length=500)
    Shelter = models.CharField(max_length=500)
    DateOfArriving = models.DateField()
    PhotoFileName = models.CharField(max_length=500)