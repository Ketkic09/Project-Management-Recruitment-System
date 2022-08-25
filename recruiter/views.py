from ast import Delete
import re
from django.shortcuts import render, redirect
from recruiter.models import DeleteJob, Rreg
from django.contrib.auth.models import auth, User
from django.contrib import messages
from rest_framework.views import APIView
from rest_framework import viewsets

from recruiter.serializer import AccountDetailsSerializer, DeleteJobSerializer, JobPostSerializer, Recruiter_ProfileSerializer, UserSerializer, RegisterSerializer
from rest_framework.response import Response
from recruiter import serializer
from . models import *
# User creation
from rest_framework import generics, permissions
from rest_framework.response import Response
from knox.models import AuthToken
# user login
from django.contrib.auth import login

from rest_framework import permissions
from rest_framework.authtoken.serializers import AuthTokenSerializer
from knox.views import LoginView as KnoxLoginView
# Create your views here.


class DeleteJobView(APIView):
    serializer_class = JobPostSerializer

    def get(self, request):
        job = [{"recruiter_username": job.recruiter_username,
                "visibility": job.visibility,
                "category": job.category, "domain": job.domain, "title": job.title, "website": job.website,
                "opportunity_start_date": job.opportunity_start_date,
                "opportunity_start_time": job.opportunity_start_time, "opportunity_end_date": job.opportunity_end_date, "opportunity_end_time": job.opportunity_end_time,
                "organization": job.organization, "country": job.country, "state": job.state, "city": job.city, "application_start_date": job.application_start_date, "application_end_date": job.application_end_date, "application_start_time": job.application_start_time, "application_end_time": job.application_end_time,
                "ssc_marks": job.ssc_marks, "hsc_marks": job.hsc_marks, "be_marks": job.be_marks, "year_of_passing": job.year_of_passing, "rounds": job.rounds, "job_description": job.job_description, "salary_type": job.salary_type, "salary_amount": job.salary_amount, "currency": job.currency, "period": job.period, "job_update": job.job_update,
                "timing": job.timing, "contact_name": job.contact_name, "contact_email": job.contact_email, "contact_phone": job.contact_phone, "additional_details": job.additional_details,
                }for job in DeleteJob.objects.all()]
        return Response(job)

    def post(self, request):

        serializer = JobPostSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)

    def delete(self, request, format=None):
        serializer = JobPostSerializer(data=request.data)

        serializer.delete()
        return Response(serializer.data)

# Create your views here.


def recruiter_register(request):
    global temp1, temp2
    rreg = Rreg()
    if request.method == 'POST':
        name = request.POST["name"]
        username = request.POST["username"]
        password1 = request.POST["password1"]
        password2 = request.POST["password2"]
        organization = request.POST["organization"]
        mobile_no = request.POST["mobile_no"]
        designation = request.POST["designation"]
        email = request.POST["email"]

        if password1 == password2:
            if User.objects.filter(username=username).exists():
                messages.info(request, 'Oops! Username taken')
                return render(request, 'recruiter_register.html')
            else:
                user = User.objects.create_user(
                    first_name=name, username=username, password=password2, email=email)
                rreg = Rreg(name=name, username=username, password=password2, organization=organization,
                            mobile_no=mobile_no, designation=designation, email=email)
                rreg.save()
                temp1 = rreg.pk
                temp2 = rreg.username
                user.save()
                print('SUBMITTED')
                #form = StudentsProfileForm()

                # return render(request, 'StudentProfile.html', {'form': form})
                return render(request, 'recruiter_login.html')

        else:
            messages.info(request, 'Passwords did not match!')
            return render(request, 'recruiter_register.html')
    else:
        return render(request, 'recruiter_register.html')


def recruiter_login(request):
    global temp1, temp2

    if request.method == 'POST':
        username = request.POST["username"]
        password = request.POST["password"]
        rreg = Rreg.objects.filter(
            username=username,
            password=password)
        if len(rreg) != 0:
            print("Success")
            return render(request, 'recruiter_dashboard.html')
        else:
            messages.info(request, "Check username or password")
            return redirect('recruiter_login')
    return render(request, 'recruiter_login.html')


class DeleteJobViewSet(viewsets.ModelViewSet):

    serializer_class = DeleteJobSerializer
    queryset = DeleteJob.objects.all()

    def perform_create(self, serializer):
        serializer.save()

    def get_queryset(self):
        return self.queryset.filter()


class AccountDetailsViewSet(viewsets.ModelViewSet):

    serializer_class = AccountDetailsSerializer
    queryset = Rreg.objects.all()

    def perform_create(self, serializer):
        serializer.save()

    def get_queryset(self):
        return self.queryset.filter()


class RecruiterProfileViewSet(APIView):
    serializer_class = Recruiter_ProfileSerializer

    def get(self, request):
        job = [{"name": job.name, "ogranization": job.organization, "mobile_no": job.mobile_no, "designation": job.designation, "email": job.email
                }for job in Rreg.objects.all()]
        return Response(job)

    def post(self, request):

        serializer2 = Recruiter_ProfileSerializer(data=request.data)
        if serializer2.is_valid(raise_exception=True):
            serializer2.save()
            return Response(serializer2.data)
# Register API


class RegisterAPI(generics.GenericAPIView):
    serializer_class = RegisterSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        return Response({
            "user": UserSerializer(user, context=self.get_serializer_context()).data,
            "token": AuthToken.objects.create(user)[1]
        })


class LoginAPI(KnoxLoginView):
    permission_classes = (permissions.AllowAny,)

    def post(self, request, format=None):
        serializer = AuthTokenSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        login(request, user)
        return super(LoginAPI, self).post(request, format=None)
