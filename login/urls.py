from urllib import request
from django.urls import path

from . import views
#from . views import CreateNewprojView
from . views import fullview
from . views import delete_proj
from . views import grades
from . views import editproj
from . views import sprojview
from . views import *
from . views import Student_profile
from django.urls import re_path

urlpatterns = [
    path('', views.index, name='index'),
    path('registerstud/', views.registerstud, name='registerstud'),
    path('registertr/', views.registertr, name='registertr'),
    path('editTreg/', views.editTreg, name='editTreg'),
    #url(r'^editTreg/(?P<username>\w+)$', views.editTreg, name='editTreg'),
    path('tlogin/', views.tlogin, name='tlogin'),
    re_path('slogin/', views.slogin, name='slogin'),
    path('sdash/', views.sdash, name='sdash'),
    path('TeacherDashboard/', views.tdash, name='TeacherDashboard'),
    #path('newproject/',views.newproject, name='newproject'),
    path('grades/',views.grades, name='grades'),
    path('logout/', views.logout, name='logout'),
    #path('post/', CreateNewprojView.as_view(), name='add_post'),
    path('addProject/', views.addProject, name='addProject'),
    path('editproj/', views.editproj, name='editproj'),
    #path('sdash/', CreateNewprojView.as_view(), name='add_post'),
    #path('post/CreateNewprojView/', views.CreateNewprojView, name='CreateNewprojView'),
    #path('post/', views.enter_proj, name='post'),
    path('miniprojview/', views.miniprojview, name='miniprojview'),
    path('sprojview/', views.sprojview, name='sprojview'),
    path('Tinfo/', views.Tinfo, name='Tinfo'),
    #url(r'^sprojview/(?P<pk>\d+)$',views.sprojview, name='sprojview'),
    re_path(r'^sfullview/(?P<pk>\d+)$', views.sfullview, name='sfullview'),
    #path('grades/miniprojview/',views.miniprojview, name='miniprojview'),
   re_path(r'^fullview/(?P<pk>\d+)$', views.fullview, name='fullview'),
    re_path(r'^editproj/(?P<pk>\d+)$', views.editproj, name='editproj'),
    re_path(r'^sprojview/(?P<pk>\d+)$', views.delete_proj, name='delete_proj'),
    re_path(r'^grades/(?P<pk>\d+)$', views.grades, name='grades'),
    #path('fullview/',views.fullview, name='fullview')
    #path('profile/',
        #views.Student_profile, name='Student_profile'),
    path('QuizList/', views.viewQuiz, name='Quiz'), 
    re_path(r'^fullQuiz/(?P<testkey>\w+)$', views.fullQuiz, name='fullQuiz'),  

    path('personaldetails/', views.personaldetails, name='personaldetails'),
    #path('Createpersonaldetails/', views.create_pd, name='Createpersonaldetails'),
    #path('Eq/', views.calculateEq, name='Eq'),
    re_path(r'^edit_profile/(?P<username>\w+)$',views.edit_profile, name='edit_profile'),
    path('edit_personalDetails/',views.edit_personalDetails, name='edit_personalDetails'),
    #path('jobapply/',views.jobapply, name='jobapply'),
    re_path(r'jobapply/(?P<pk>\d+)$', views.jobapply, name='jobapply'),
    path('jobList/',views.jobList, name='jobList'),
    path('jobApplied/',views.jobApplied, name='jobApplied'),
    re_path(r'jobView/(?P<pk>\d+)$', views.jobView, name='jobView'),
    path('StudentDashboard/', StudentDashboard.as_view(), name='StudentDashboard'),


]
