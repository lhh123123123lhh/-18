from django.db import models


# Create your models here.
class Site(models.Model):
    img_src = models.CharField(max_length=50)

    class Meta:
        db_table = 'site'


class Data(models.Model):
    img_src = models.CharField(max_length=50)
    detail = models.CharField(max_length=40)

    class Meta:
        db_table = 'data'


class Link(models.Model):
    name = models.CharField(max_length=30)

    class Meta:
        db_table = 'link'


class Dog(models.Model):
    img_src = models.CharField(max_length=255)
    name = models.CharField(max_length=20)
    num = models.CharField(max_length=10)

    class Meta:
        db_table = 'dog'


class Dog1(models.Model):
    img_src = models.CharField(max_length=100)
    detail = models.CharField(max_length=100)

    class Meta:
        db_table = 'dogone'


class Goods(models.Model):
    img_src = models.CharField(max_length=200)
    detail = models.CharField(max_length=100)

    class Meta:
        db_table = 'goods'


class Item(models.Model):
    img_src = models.CharField(max_length=200)
    name = models.CharField(max_length=100)
    price = models.CharField(max_length=20)

    class Meta:
        db_table = 'item'


class Recommend(models.Model):
    img_src = models.CharField(max_length=200)
    name = models.CharField(max_length=100)
    price = models.CharField(max_length=100)
    reason = models.CharField(max_length=50)
    p = models.CharField(max_length=255)

    class Meta:
        db_table = 'recommend'


class User(models.Model):
    tel = models.CharField(max_length=20, unique=True)
    username = models.CharField(max_length=30)
    password = models.CharField(max_length=30)

    class Meta:
        db_table = 'user'
