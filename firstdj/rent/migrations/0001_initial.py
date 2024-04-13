# Generated by Django 4.0 on 2024-03-31 20:17

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Cars',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Car', models.CharField(max_length=255)),
            ],
        ),
        migrations.CreateModel(
            name='Client',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Name', models.CharField(max_length=255)),
                ('Email', models.EmailField(max_length=254)),
            ],
        ),
        migrations.CreateModel(
            name='DateTime',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('RentalTime', models.TimeField()),
                ('RentalDate', models.DateField()),
                ('is_rented', models.BooleanField(choices=[(1, 'Rented'), (0, 'Not Rented')], default=0)),
                ('CarID', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='rent.cars')),
            ],
        ),
        migrations.CreateModel(
            name='Rentals',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('ClientID', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='rent.client')),
                ('DateTimeID', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='rent.datetime')),
            ],
        ),
    ]