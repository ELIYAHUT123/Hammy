from django.db import models


class Cash(models.Model):
    cash = models.IntegerField()

    def __str__(self):
        return "Cash - %s" % self.cash


class Ingredient(models.Model):
    name = models.CharField(max_length=50)

    def __str__(self):
        return self.name


class Meal(models.Model):
    name = models.CharField(max_length=50)
    description = models.CharField(max_length=500)
    price = models.IntegerField()

    def __str__(self):
        return "%s - %s" % (self.name, self.description)


class Delivery(models.Model):
    TODO = 'TODO'
    IN_PROGRESS = 'In Progress'
    DONE = 'Done'
    STATUSES = (
        (TODO, TODO),
        (IN_PROGRESS, IN_PROGRESS),
        (DONE, DONE),
    )
    status = models.CharField(
        max_length=20,
        choices=STATUSES,
        default=TODO,
    )
    address = models.CharField(max_length=50)

    def __str__(self):
        return "%s - %s" % (self.id, self.address)


class StockIngredient(models.Model):
    ingredient = models.OneToOneField(
        Ingredient,
        on_delete=models.CASCADE,
        primary_key=True
    )
    amount = models.IntegerField()

    def __str__(self):
        return "%s X %s" % (self.ingredient.name, self.amount)


class MealIngredient(models.Model):
    ingredient = models.ForeignKey(Ingredient, on_delete=models.CASCADE)
    amount = models.IntegerField()
    meal = models.ForeignKey(Meal, on_delete=models.CASCADE)

    class Meta:
        unique_together = (("ingredient", "meal"),)

    def __str__(self):
        return "%s - %s X %s" % (self.meal.name, self.ingredient.name, self.amount)


class DeliveryMeal(models.Model):
    meal = models.ForeignKey(Meal, on_delete=models.CASCADE)
    amount = models.IntegerField()
    delivery = models.ForeignKey(Delivery, on_delete=models.CASCADE)

    class Meta:
        unique_together = (("meal", "delivery"),)

    def __str__(self):
        return "%s - %s X %s" % (self.delivery.address, self.meal.name, self.amount)
