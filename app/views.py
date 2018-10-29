from django.shortcuts import render, redirect

# Create your views here.
from app.models import Site, Data, Link, Dog, Dog1, Goods, Item, Recommend, User


def homepage(request):
    tel = request.COOKIES.get('tel')
    user = User.objects.filter(tel=tel)
    safesites = Site.objects.all()[0:6]
    honoursites = Site.objects.all()[6:12]
    datas = Data.objects.all()
    links = Link.objects.all()
    link1s = Link.objects.all()[3:12]
    dogs = Dog.objects.all()
    dog1s = Dog1.objects.all()
    goods1 = Goods.objects.all()[0:6]
    goods2 = Goods.objects.all()[6:12]
    goods3 = Goods.objects.all()[12:16]
    goods4 = Goods.objects.all()[16:21]
    goods5 = Goods.objects.all()[21:26]
    goods6 = Goods.objects.all()[26:30]
    items = Item.objects.all()[0:8]
    item1 = Item.objects.all()[8:16]
    item2 = Item.objects.all()[16:24]
    r_goods = Recommend.objects.all()
    data = {
        'safesites': safesites,
        'honoursites': honoursites,
        'datas': datas,
        'links': links,
        'link1s': link1s,
        'dogs': dogs,
        'dog1s': dog1s,
        'goods1': goods1, 'goods2': goods2, 'goods3': goods3, 'goods4': goods4, 'goods5': goods5, 'goods6': goods6,
        'items': items, 'item1': item1, 'item2': item2,
        'r_goods': r_goods,
        'user': user,
        'tel': tel
    }
    return render(request, 'homepage.html', context=data)


def login(request):
    if request.method == 'GET':
        return render(request, 'login.html')
    elif request.method == 'POST':

        response = redirect('app:homepage')
        return response


def register(request):
    if request.method == 'GET':
        return render(request, 'register.html')
    elif request.method == 'POST':
        tel = request.POST.get('tel')
        username = request.POST.get('username')
        password = request.POST.get('password')
        user = User()
        user.tel = tel
        user.username = username
        user.password = password
        user.save()
        response = redirect('app:homepage')
        response.set_cookie('tel', user.tel)
        return response


def shopcar(request):
    return render(request, 'shopcar.html')


# def logout(request):
#     response = redirect('app:homepage')
#     response.delete_cookie('tel')
#     return response
