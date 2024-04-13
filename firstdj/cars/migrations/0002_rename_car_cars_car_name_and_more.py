# Generated by Django 4.0 on 2024-04-01 18:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cars', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='cars',
            old_name='Car',
            new_name='Car_name',
        ),
        migrations.RenameField(
            model_name='cars',
            old_name='acceleration_to_100',
            new_name='Go_to_100',
        ),
        migrations.RenameField(
            model_name='cars',
            old_name='max_speed',
            new_name='Max_speed',
        ),
        migrations.RenameField(
            model_name='cars',
            old_name='type_of_drive',
            new_name='Type_of_drive',
        ),
        migrations.RenameField(
            model_name='cars',
            old_name='type_of_gsb',
            new_name='Type_of_gsb',
        ),
        migrations.AddField(
            model_name='cars',
            name='Img_of_car',
            field=models.CharField(default='', max_length=255),
        ),
    ]
