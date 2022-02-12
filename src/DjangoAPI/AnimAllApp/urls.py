from django.urls import re_path
from AnimAllApp import views

from django.conf.urls.static import static
from django.conf import settings

urlpatterns=[
    re_path(r'^$'),
    re_path(r'^shelter$',views.shelterApi),
    re_path(r'^shelter/([0-9]+)$',views.shelterApi),

    re_path(r'^animal$',views.animalApi),
    re_path(r'^animal/([0-9]+)$',views.animalApi),

    re_path(r'^animal/savefile',views.SaveFile)
]+static(settings.MEDIA_URL,document_root=settings.MEDIA_ROOT)