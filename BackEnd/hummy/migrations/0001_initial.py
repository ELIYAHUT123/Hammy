# -*- coding: utf-8 -*-
# Generated by Django 1.10.1 on 2016-09-12 19:53
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Cash',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('cash', models.IntegerField()),
            ],
        ),
        migrations.CreateModel(
            name='Ingredient',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
            ],
        ),
        migrations.CreateModel(
            name='Meal',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
                ('description', models.CharField(max_length=500)),
                ('price', models.IntegerField()),
            ],
        ),
        migrations.CreateModel(
            name='MealIngredient',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('amount', models.IntegerField()),
            ],
        ),
        migrations.CreateModel(
            name='StockIngredient',
            fields=[
                ('ingredient', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, primary_key=True, serialize=False, to='hummy.Ingredient')),
                ('amount', models.IntegerField()),
            ],
        ),
        migrations.AddField(
            model_name='mealingredient',
            name='ingredient',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='hummy.Ingredient'),
        ),
        migrations.AddField(
            model_name='mealingredient',
            name='meal',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='hummy.Meal'),
        ),
        migrations.AlterUniqueTogether(
            name='mealingredient',
            unique_together=set([('ingredient', 'meal')]),
        ),
    ]
