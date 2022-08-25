from django.db import models
from django.forms import URLField

# Create your models here.


class Rreg(models.Model):
    name = models.CharField(max_length=100)
    organization = models.CharField(max_length=1000)
    username = models.CharField(max_length=100)
    mobile_no = models.CharField(max_length=13)
    designation = models.CharField(max_length=100)
    email = models.EmailField(max_length=254)


class DeleteJob(models.Model):
    recruiter_username = models.CharField(max_length=100)
    visibility = models.CharField(max_length=10)
    category = models.CharField(max_length=20)
    domain = models.CharField(max_length=500)
    title = models.CharField(max_length=500)  # job_title
    website = models.CharField(max_length=200)
    opportunity_start_date = models.CharField(max_length=10)
    opportunity_end_date = models.CharField(max_length=10)
    opportunity_start_time = models.CharField(max_length=8)
    opportunity_end_time = models.CharField(max_length=8)
    organization = models.CharField(max_length=200)
    country = models.CharField(max_length=200)
    state = models.CharField(max_length=200)
    city = models.CharField(max_length=200)
    application_start_date = models.CharField(max_length=10)
    application_end_date = models.CharField(max_length=10)
    application_start_time = models.CharField(max_length=8)
    application_end_time = models.CharField(max_length=8)
    ssc_marks = models.CharField(max_length=8)
    hsc_marks = models.CharField(max_length=8)
    be_marks = models.CharField(max_length=20)
    year_of_passing = models.CharField(max_length=200)
    rounds = models.CharField(max_length=20000)
    job_description = models.TextField()
    salary_type = models.CharField(max_length=20)
    salary_amount = models.CharField(max_length=40)
    currency = models.CharField(max_length=40)
    period = models.CharField(max_length=40)
    job_update = models.CharField(max_length=40)
    timing = models.CharField(max_length=40)
    contact_name = models.CharField(max_length=400)
    contact_email = models.CharField(max_length=400)
    contact_phone = models.CharField(max_length=20)
    additional_details = models.TextField()


