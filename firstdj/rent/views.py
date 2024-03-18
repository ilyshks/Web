from django.http import HttpResponseNotFound
from django.shortcuts import render


menu = {
    "Трасса": "/track",
    "Автомобили": "/cars",
    'Аренда': '/rent',
}


def rent(request):
    data = {
        'title': 'Трек',
        'menu': menu,
    }
    return render(request, 'rent/rent.html', context=data)


def page_not_found(request, exception):
    return HttpResponseNotFound("<h1>Страница не найдена</h1>")