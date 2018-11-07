from django.conf.urls import url

from app import views

urlpatterns = [
    url(r'^homepage/$', views.homepage, name='homepage'),
    url(r'^login/$', views.login, name='login'),
    url(r'^register/$', views.register, name='register'),
    url(r'^shopcar/$', views.shopcar, name='shopcar'),
    url(r'^logout/$', views.logout, name='logout'),
    url(r'^common/$', views.common, name='common'),
    url(r'^goods/(\d+)/$', views.goods, name='goods'),
    url(r'^goods2/$', views.goods2, name='goods2'),
    url(r'^CheckTel/$', views.CheckTel, name='CheckTel'),
    url(r'^AddToCart/$', views.AddToCart, name='AddToCart'),
]
