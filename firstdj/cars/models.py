from django.db import models


class Cars(models.Model):
    Car_name = models.CharField(max_length=255, default='')
    Power = models.PositiveIntegerField(default=0)
    Go_to_100 = models.FloatField(default=0)
    Max_speed = models.PositiveIntegerField(default=0)
    Type_of_gsb = models.CharField(max_length=14, default='')
    Type_of_drive = models.CharField(max_length=8, default='')
    Img_of_car = models.CharField(max_length=255, default='')

    def __str__(self):
        return self.Car_name
