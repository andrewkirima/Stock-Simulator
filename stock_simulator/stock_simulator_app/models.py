from django.db import models
from django.contrib.auth.models import User


# Create your models here.
class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)

    stock = models.ForeignKey(Stock, on_delete=models.CASCADE)
    balance = models.ForeignKey(Money, on_delete=models.CASCADE)

    def __str__(self):
        return self.user.username


class Stock(models.Model):
    stock_name = models.CharField(max_length=30)
    stock_value = models.IntegerField(max_length=30)


class Money(models.Model):
    balance = models.IntegerField(default=20000)
