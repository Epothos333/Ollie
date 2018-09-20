from rest_framework.viewsets import ModelViewSet

from .serializers import PetSerializer
from .models import Pet

class PetViewSet(ModelViewSet):
	queryset = Pet.objects.all()
	serializer_class = PetSerializer