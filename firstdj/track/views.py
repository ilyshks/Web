from django.http import HttpResponseNotFound
from django.shortcuts import render, redirect

menu = {
    "Трасса": "/track",
    "Автомобили": "/cars",
    'Аренда': '/rent',
}


def track(request):
    data = {
        'title': 'Трек',
        'menu': menu,
    }
    return render(request, 'track/track.html', context=data)


def home(request):
    return redirect('track')


def page_not_found(request, exception):
    return HttpResponseNotFound("<h1>Страница не найдена</h1>")