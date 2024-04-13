from django.http import HttpResponseNotFound
from django.shortcuts import render
from .models import Rentals, Client, DateTime


menu = {
    "Трасса": "/track",
    "Автомобили": "/cars",
    'Аренда': '/rent',
}


def rent(request):
    #notes = DateTime.objects.all()

    data = {
        'title': 'Аренда',
        'menu': menu,
    }

    # if request.POST:
    #
    #
    #     new_client = Client.objects.create(Name=request.POST["name"], Email=request.POST["email"])
    #
    #     Rentals.objects.create()

    return render(request, 'rent/rent.html', context=data)


def page_not_found(request, exception):
    return HttpResponseNotFound("<h1>Страница не найдена</h1>")