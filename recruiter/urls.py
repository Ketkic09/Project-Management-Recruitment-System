from django.urls import path

from . import views
from django.conf.urls import include
from rest_framework.routers import DefaultRouter
from recruiter.views import AccountDetailsViewSet, DeleteJobViewSet
from .views import RegisterAPI
from knox import views as knox_views
from .views import LoginAPI
from django.urls import re_path as url
urlpatterns = [
    path('recruiter_register/', views.recruiter_register,
         name='recruiter_register'),
    path('recruiter_login/', views.recruiter_login,
         name='recruiter_login'),
    path('api/v1/register/', RegisterAPI.as_view(), name='register'),
    path('api/v1/login/', LoginAPI.as_view(), name='login'),
    path('api/v1/logout/', knox_views.LogoutView.as_view(), name='logout'),
    path('api/v1/logoutall/', knox_views.LogoutAllView.as_view(), name='logoutall'),


]
router = DefaultRouter()
router.register("DeleteJob", DeleteJobViewSet, basename="DeleteJob")
router.register("Account", AccountDetailsViewSet, basename="Rreg")


deletejob_urlpatterns = [url("api/v1/", include(router.urls))]