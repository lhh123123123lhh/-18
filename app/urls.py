from django.conf.urls import url

from app import views

urlpatterns = [
    url(r'^$', views.homepage, name='homepage'),
    url(r'^login/$', views.login, name='login'),
    url(r'^register/$', views.register, name='register'),
    url(r'^shopcar/$', views.shopcar, name='shopcar'),
    url(r'^logout/$', views.logout, name='logout')
]
