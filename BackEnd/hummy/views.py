from rest_framework import viewsets
from drf_multiple_model.views import MultipleModelAPIView

from .serializers import (CashSerializer,
                          IngredientSerializer,
                          MealSerializer,
                          DeliverySerializer,
                          StockIngredientSerializer,
                          MealIngredientSerializer,
                          DeliveryMealSerializer)
from .models import (Cash,
                     Ingredient,
                     Meal,
                     Delivery,
                     StockIngredient,
                     MealIngredient,
                     DeliveryMeal)


class CashViewSet(viewsets.ModelViewSet):
    queryset = Cash.objects.all()
    serializer_class = CashSerializer


class IngredientViewSet(viewsets.ModelViewSet):
    queryset = Ingredient.objects.all()
    serializer_class = IngredientSerializer


class StockIngredientViewSet(viewsets.ModelViewSet):
    queryset = StockIngredient.objects.all()
    serializer_class = StockIngredientSerializer


class MealViewSet(viewsets.ModelViewSet):
    queryset = Meal.objects.all()
    serializer_class = MealSerializer


class DeliveryViewSet(viewsets.ModelViewSet):
    queryset = Delivery.objects.all()
    serializer_class = DeliverySerializer


class MealIngredientViewSet(viewsets.ModelViewSet):
    queryset = MealIngredient.objects.all()
    serializer_class = MealIngredientSerializer


class DeliveryMealViewSet(viewsets.ModelViewSet):
    queryset = DeliveryMeal.objects.all()
    serializer_class = DeliveryMealSerializer


class HummyView(MultipleModelAPIView):
    objectify = True

    queryList = [
        (Cash.objects.all(), CashSerializer),
        (Ingredient.objects.all(), IngredientSerializer),
        (Meal.objects.all(), MealSerializer),
        (Delivery.objects.all(), DeliverySerializer),
        (StockIngredient.objects.all(), StockIngredientSerializer),
    ]
