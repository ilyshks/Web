from django.http import HttpResponseNotFound
from django.shortcuts import render
from .models import Cars


menu = {
    'Трасса': '/track',
    'Автомобили': '/cars',
    'Аренда': '/rent',
}


def auto(request):
    cars_info = Cars.objects.all()

    data = {
        'title': 'Автопарк',
        'menu': menu,
        'cars_info': cars_info,
        }
    return render(request, 'cars/auto.html', context=data)


def page_not_found(request, exception):
    return HttpResponseNotFound("<h1>Страница не найдена</h1>")
