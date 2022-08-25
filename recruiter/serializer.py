from pyexpat import model
#from attrs import fields
from rest_framework import serializers
from .models import *
from .models import DeleteJob
from django.contrib.auth.models import User


class JobPostSerializer(serializers.ModelSerializer):
    class Meta:
        model = DeleteJob
        fields = ['recruiter_username', 'visibility',
                  'category', 'domain', 'title', 'website', 'opportunity_start_date', 'opportunity_start_time', 'opportunity_end_date', 'opportunity_end_time',
                  'organization', 'country', 'state', 'city', 'application_start_date', 'application_end_date', 'application_start_time', 'application_end_time',
                  'ssc_marks', 'hsc_marks', 'be_marks', 'year_of_passing', 'rounds', 'job_description', 'salary_type', 'salary_amount', 'currency', 'period', 'job_update',
                  'timing', 'contact_name', 'contact_email', 'contact_phone', 'additional_details'
                  ]


class DeleteJobSerializer(serializers.ModelSerializer):
    class Meta:
        model = DeleteJob

        fields = [
            'id', 'recruiter_username', 'visibility',
            'category', 'domain', 'title', 'website', 'opportunity_start_date', 'opportunity_start_time', 'opportunity_end_date', 'opportunity_end_time',
            'organization', 'country', 'state', 'city', 'application_start_date', 'application_end_date', 'application_start_time', 'application_end_time',
            'ssc_marks', 'hsc_marks', 'be_marks', 'year_of_passing', 'rounds', 'job_description', 'salary_type', 'salary_amount', 'currency', 'period', 'job_update',
            'timing', 'contact_name', 'contact_email', 'contact_phone', 'additional_details'

        ]


class AccountDetailsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Rreg
        fields = [
            'id', 'name', 'organization', 'username', 'mobile_no', 'designation', 'email'
        ]


class Recruiter_ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Rreg
        fields = [
            'id', 'name', 'organization', 'username', 'mobile_no', 'designation', 'email'
        ]


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email')

# Register Serializer


class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'password')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = User.objects.create_user(
            validated_data['username'], validated_data['email'], validated_data['password'])

        return user
