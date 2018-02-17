from rest_framework import serializers
from .models import Cash, Ingredient, Meal, Delivery, StockIngredient, MealIngredient, DeliveryMeal


class MealIngredientSerializer(serializers.ModelSerializer):
    ingredient_id = serializers.ReadOnlyField(source='ingredient.id')

    class Meta:
        model = MealIngredient
        fields = ('ingredient_id', 'amount')


class DeliveryMealSerializer(serializers.ModelSerializer):
    meal_id = serializers.ReadOnlyField(source='meal.id')

    class Meta:
        model = DeliveryMeal
        fields = ('meal_id', 'amount')


class CashSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cash
        fields = ('cash',)


class IngredientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ingredient
        fields = ('id', 'name')


class MealSerializer(serializers.ModelSerializer):
    ingredients = MealIngredientSerializer(many=True, source="mealingredient_set")

    class Meta:
        model = Meal
        fields = ('id', 'name', 'description', 'price', 'ingredients')


class DeliverySerializer(serializers.ModelSerializer):
    meals = DeliveryMealSerializer(many=True, source="deliverymeal_set")

    class Meta:
        model = Delivery
        fields = ('id', 'address', 'status', 'meals')


class StockIngredientSerializer(serializers.ModelSerializer):
    ingredient_id = serializers.ReadOnlyField(source='ingredient.id')

    class Meta:
        model = StockIngredient
        fields = ('ingredient_id', 'amount')
