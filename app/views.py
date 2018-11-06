import hashlib
import uuid

from django.http import HttpResponse, JsonResponse
from django.shortcuts import render, redirect

# Create your views here.
from app.models import Site, Data, Link, Dog, Dog1, Goods, Item, Recommend, User, Image, TimeGoods


# 首页
def homepage(request):
    # 显示
    token = request.COOKIES.get('token')
    user = User.objects.filter(token=token).first()
    # Site
    safesites = Site.objects.all()[0:6]
    honoursites = Site.objects.all()[6:12]
    # Data
    datas = Data.objects.all()
    # Link
    links = Link.objects.all()
    link1s = Link.objects.all()[3:12]
    # Dog
    dogs = Dog.objects.all()[0:5]
    dogs1 = Dog.objects.all()[5:12]
    # Dog1
    dog1s = Dog1.objects.all()
    # Goods
    goods1 = Goods.objects.all()[0:6]
    goods2 = Goods.objects.all()[6:12]
    goods3 = Goods.objects.all()[12:16]
    goods4 = Goods.objects.all()[16:21]
    goods5 = Goods.objects.all()[21:26]
    goods6 = Goods.objects.all()[26:30]
    # Item
    items = Item.objects.all()[0:8]
    item1 = Item.objects.all()[8:16]
    item2 = Item.objects.all()[16:24]
    # Recommend
    r_goods = Recommend.objects.all()
    # Image
    images = Image.objects.all()
    # t_goods
    t_goods_list1 = TimeGoods.objects.all()[0:4]
    t_goods_list2 = TimeGoods.objects.all()[4:8]
    t_goods_list3 = TimeGoods.objects.all()[8:12]
    data = {
        'safesites': safesites,
        'honoursites': honoursites,
        'datas': datas,
        'links': links,
        'link1s': link1s,
        'dogs': dogs, 'dogs1': dogs1,
        'dog1s': dog1s,
        'goods1': goods1, 'goods2': goods2, 'goods3': goods3, 'goods4': goods4, 'goods5': goods5, 'goods6': goods6,
        'items': items, 'item1': item1, 'item2': item2,
        'r_goods': r_goods,
        'user': user,
        'token': token,
        'images': images,
        't_goods_list1': t_goods_list1, 't_goods_list2': t_goods_list2, 't_goods_list3': t_goods_list3,

    }
    return render(request, 'homepage.html', context=data)


# 登录
def login(request):
    if request.method == 'GET':
        return render(request, 'login.html')
    elif request.method == 'POST':
        username = request.POST.get('username')
        password = generate_password(request.POST.get('password'))
        users = User.objects.filter(username=username).filter(password=password)
        if users.exists():
            user = users.first()
            user.token = uuid.uuid5(uuid.uuid4(), 'cxj')
            user.save()
            response = redirect('app:homepage')
            response.set_cookie('token', user.token)
            return response
        else:
            return redirect('app:login')


# 　注册
def register(request):
    if request.method == 'GET':
        return render(request, 'register.html')
    elif request.method == 'POST':
        try:
            tel = request.POST.get('tel')
            username = request.POST.get('username')
            password = generate_password(request.POST.get('password'))
            user = User()
            user.tel = tel
            user.username = username
            user.password = password
            user.token = uuid.uuid5(uuid.uuid4(), 'lhh')
            user.save()
            response = redirect('app:homepage')
            response.set_cookie('token', user.token)
            return response
        except Exception as e:
            return HttpResponse('注册失败{}'.format(e))


# 退出
def logout(request):
    response = redirect('app:homepage')
    response.delete_cookie('token')
    return response


# 密码加密
def generate_password(password):
    md5 = hashlib.md5()
    md5.update(password.encode('utf-8'))
    return md5.hexdigest()


# 购物车
def shopcar(request):
    return render(request, 'shopcar.html')


def common(request):
    return render(request, 'common.html')


# 商品详情页
def goods(request, goodsid):
    t_goods = TimeGoods.objects.get(pk=goodsid)
    return render(request, 'goods.html', context={'t_goods': t_goods})


def goods2(request):
    return render(request, 'goods2.html')


# 手机号验证
def CheckTel(request):
    tel = request.GET.get('phone')
    users = User.objects.filter(tel=tel)
    responseDate = {
        'msg': '该账号可用',
        'status': 1
    }
    if users.exists():
        responseDate['msg'] = '账号已存在',
        responseDate['status'] = -1,
        return JsonResponse(responseDate)
    else:
        return JsonResponse(responseDate)
