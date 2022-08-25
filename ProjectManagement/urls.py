"""ProjectManagement URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from unicodedata import name
from django.contrib import admin
from django.db import router
from django.urls import path, include, re_path
from django.conf import settings
from django.conf.urls.static import static

from login.views import *
from recruiter.views import *
from login import views
from rest_framework import routers
from recruiter.urls import deletejob_urlpatterns

router = routers.SimpleRouter()


# add new app urls here
urlpatterns = [
    path('', include('login.urls')),
    path('recruiter/', include('recruiter.urls')),
    path('admin/', admin.site.urls),
    path('wel/', TestscoreView.as_view(), name="something"),
    path('que/', QuestionbankView.as_view(), name="Questions"),
    path('jobapply/', JobApplyView.as_view(), name="JobsApply"),
    path('projectdetails/', ProjectDetailsView.as_view(), name="ProjectDetails"),
    path('recruiter/create_job/', DeleteJobView.as_view(), name="CreateJob"),
    path('recruiter/account/', RecruiterProfileViewSet.as_view(), name="profile")


]
urlpatterns += deletejob_urlpatterns   # notes URLs


urlpatterns = urlpatterns + \
    static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
