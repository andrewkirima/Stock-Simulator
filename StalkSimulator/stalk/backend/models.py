from django.db import models
from django.contrib.auth.models import User


class Stock(models.Model):
    user = models.TextField(null=True)
    shares = models.IntegerField(default=0)
    name = models.TextField(null=True)
