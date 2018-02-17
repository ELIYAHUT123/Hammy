from django.contrib import admin
from .models import Cash, Ingredient, Meal, Delivery, StockIngredient, MealIngredient, DeliveryMeal

admin.site.register(Cash)
admin.site.register(Ingredient)
admin.site.register(Meal)
admin.site.register(Delivery)
admin.site.register(StockIngredient)
admin.site.register(MealIngredient)
admin.site.register(DeliveryMeal)
