from .api import PetViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'pets', PetViewSet)

urlpatterns = router.urls