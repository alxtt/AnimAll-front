from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http import JsonResponse

from AnimAllApp.models import Shelters, Animals
from AnimAllApp.serializers import ShelterSerializer, AnimalSerializer

from django.core.files.storage import default_storage

# Create your views here.

@csrf_exempt
def SaveFile(request):
    file=request.FILES['file']
    file_name=default_storage.save(file.name,file)
    return JsonResponse(file_name,safe=False)

    from functools import wraps
    import jwt

    def get_token_auth_header(request):
        """Obtains the Access Token from the Authorization Header
        """
        auth = request.META.get("HTTP_AUTHORIZATION", None)
        parts = auth.split()
        token = parts[1]

        return token

    def requires_scope(required_scope):
        """Determines if the required scope is present in the Access Token
        Args:
            required_scope (str): The scope required to access the resource
        """
        def require_scope(f):
            @wraps(f)
            def decorated(*args, **kwargs):
                token = get_token_auth_header(args[0])
                decoded = jwt.decode(token, verify=False)
                if decoded.get("scope"):
                    token_scopes = decoded["scope"].split()
                    for token_scope in token_scopes:
                        if token_scope == required_scope:
                            return f(*args, **kwargs)
                response = JsonResponse({'message': 'You don\'t have access to this resource'})
                response.status_code = 403
                return response
            return decorated
        return require_scope

@csrf_exempt
def shelterApi(request,id=0):
    if request.method=='GET':
        shelters = Shelters.objects.all()
        shelters_serializer=ShelterSerializer(shelters,many=True)
        return JsonResponse(shelters_serializer.data,safe=False)
    elif request.method=='POST':
        shelter_data=JSONParser().parse(request)
        shelters_serializer=ShelterSerializer(data=shelter_data)
        if shelters_serializer.is_valid():
            shelters_serializer.save()
            return JsonResponse("Added Successfully",safe=False)
        return JsonResponse("Failed to Add",safe=False)
    elif request.method=='PUT':
        shelter_data=JSONParser().parse(request)
        shelter=Shelters.objects.get(ShelterId=shelter_data['ShelterId'])
        shelters_serializer=ShelterSerializer(shelter,data=shelter_data)
        if shelters_serializer.is_valid():
            shelters_serializer.save()
            return JsonResponse("Updated Successfully",safe=False)
        return JsonResponse("Failed to Update")
    elif request.method=='DELETE':
        shelter=Shelters.objects.get(ShelterId=id)
        shelter.delete()
        return JsonResponse("Deleted Successfully",safe=False)

@csrf_exempt
def animalApi(request,id=0):
    if request.method=='GET':
        animals = Animals.objects.all()
        animals_serializer=AnimalSerializer(animals,many=True)
        return JsonResponse(animals_serializer.data,safe=False)
    elif request.method=='POST':
        animal_data=JSONParser().parse(request)
        animals_serializer=AnimalSerializer(data=animal_data)
        if animals_serializer.is_valid():
            animals_serializer.save()
            return JsonResponse("Added Successfully",safe=False)
        return JsonResponse("Failed to Add",safe=False)
    elif request.method=='PUT':
        animal_data=JSONParser().parse(request)
        animal=Animals.objects.get(AnimalId=animal_data['AnimalId'])
        animals_serializer=AnimalSerializer(animal,data=animal_data)
        if animals_serializer.is_valid():
            animals_serializer.save()
            return JsonResponse("Updated Successfully",safe=False)
        return JsonResponse("Failed to Update")
    elif request.method=='DELETE':
        animal=Animals.objects.get(AnimalId=id)
        animal.delete()
        return JsonResponse("Deleted Successfully",safe=False)

