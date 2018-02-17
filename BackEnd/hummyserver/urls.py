from django.conf.urls import url, include
from django.contrib import admin
from rest_framework.routers import DefaultRouter

from hummy.views import (CashViewSet,
                         IngredientViewSet,
                         MealViewSet,
                         DeliveryViewSet,
                         StockIngredientViewSet,
                         HummyView)

router = DefaultRouter()
router.register(r'cash', CashViewSet)
router.register(r'ingredient', IngredientViewSet)
router.register(r'meal', MealViewSet)
router.register(r'delivery', DeliveryViewSet)
router.register(r'stockingredient', StockIngredientViewSet)

urlpatterns = [
    url(r'^', include(router.urls)),
    url(r'^all/$', HummyView.as_view()),
    url(r'^admin/', admin.site.urls),
    url(r'^api-auth/', include('rest_framework.urls'))
]
