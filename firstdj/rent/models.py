from django.db import models
from cars.models import Cars


class DateTime(models.Model):
    RentalTime = models.TimeField()
    RentalDate = models.DateField()
    CarID = models.ForeignKey(Cars, on_delete=models.CASCADE)

    class Status(models.IntegerChoices):
        RENTED = 1  # Арендовано
        NOT_RENTED = 0  # Свободно

    is_rented = models.BooleanField(choices=Status.choices, default=Status.NOT_RENTED)


class Client(models.Model):
    Name = models.CharField(max_length=255, default='')
    Email = models.EmailField(max_length=254, default='')


class Rentals(models.Model):
    DateTimeID = models.ForeignKey('DateTime', on_delete=models.PROTECT)
    ClientID = models.ForeignKey('Client', on_delete=models.PROTECT)
