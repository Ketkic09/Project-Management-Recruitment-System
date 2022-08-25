from random import choices
from tokenize import Name
from tracemalloc import DomainFilter
from turtle import title
from django import forms
from .models import Newproj, PersonalDetails, Treg
from recruiter.models import DeleteJob
from .models import StudentsProfile
from .models import state, city


class NewprojForm(forms.ModelForm):

    class Meta:
        model = Newproj
        fields = ['Student_name', 'Username', 'Semester', 'Roll_no', 'Div', 'Project_name', 'Subject',
                  'Teacher_username', 'Project_description', 'Project_members', 'Git_link', 'Output_File']

        widgets = {

            'Student_name': forms.TextInput(
                attrs={
                    'placeholder': 'Student Name',
                    'class': 'form-control'
                }
            ),
            'Username': forms.TextInput(
                attrs={
                    'placeholder': 'Student Username',
                    'class': 'form-control'
                }
            ),
            'Semester': forms.TextInput(
                attrs={
                    'placeholder': 'Semester',
                    'class': 'form-control'
                }
            ),
            'Roll_no': forms.TextInput(
                attrs={
                    'placeholder': 'Roll no.',
                    'class': 'form-control'
                }
            ),
            'Div': forms.TextInput(
                attrs={
                    'placeholder': 'Division',
                    'class': 'form-control'
                }
            ),
            'Project_name': forms.TextInput(
                attrs={
                    'placeholder': 'Project Name',
                    'class': 'form-control'
                }
            ),
            'Subject': forms.TextInput(
                attrs={
                    'placeholder': 'Subject',
                    'class': 'form-control'
                }
            ),
            'Teacher_username': forms.TextInput(
                attrs={
                    'placeholder': 'Teacher Username',
                    'class': 'form-control'
                }
            ),
            'Project_description': forms.Textarea(
                attrs={
                    'placeholder': 'Project Description',
                    'class': 'form-control'
                }
            ),
            'Project_members': forms.TextInput(
                attrs={
                    'placeholder': 'Tag your project members',
                    'class': 'form-control'
                }
            ),
            'Git_link': forms.TextInput(
                attrs={
                    'placeholder': 'Drop your git link',
                    'class': 'form-control'
                }
            )

        }


class TrRegisterForm(forms.ModelForm):
    class Meta:
        model = Treg
        fields = ['name', 'email', 'pno', 'organization', 'designation',
                  'experience', 'qualification', 'area_of_interest', 'resume']


class StudentsProfileForm(forms.ModelForm):
    class Meta:
        model = StudentsProfile
        fields = [
            'project_score',
            'sem_average_marks',
            'language',
            'current_sem',
            'resume'
        ]
        widgets = {
            'project_score': forms.TextInput(
                attrs={
                    'placeholder': 'project_score',
                    'class': 'form-control'
                }
            ),
            'sem_average_marks': forms.TextInput(
                attrs={
                    'placeholder': 'sem_average_marks',
                    'class': 'form-control'
                }
            ),
            'language': forms.TextInput(
                attrs={
                    'placeholder': 'language',
                    'class': 'form-control'
                }
            ),
            'current_sem': forms.TextInput(
                attrs={
                    'placeholder': 'current_sem',
                    'class': 'form-control'
                }
            ),

        }


class New_projForm(forms.Form):
    Student_name = forms.CharField(label='Your name', max_length=100)


state = (
    ("Maharashtra", "Maharashtra"),
    ("Gujarat", "Gujarat"),
    ("Odisha", "Odisha"),
    ("Rajasthan", "Rajasthan"),
    ("Madhya Pradesh", "Madhya Pradesh"),
    ("Karnataka", "Karnataka"),
)
city = (
    ("Mumbai", "Mumbai"),
    ("Surat", "Surat"),
    ("Bhubaneswar", "Bhubaneswar"),
    ("Jaipur", "Jaipur"),
    ("Bhopal", "Bhopal"),
    ("Bengaluru", "Bengaluru"),
)
special = (
    ("computer science", "computer science"),
    ("Information Technology", "Information Technology"),
    ("Electronis & Telecommunication", "Electronis & Telecommunication"),
    ("Mechanical", "Mechanical"),
    ("Civil", "Civil"),
    ("Instumentation", "Instumentation"),
)

gender = (
    ("Female", "Female"),
    ("Male", "Male"),
    ("Transgender", "Transgender"),
    ("Intersex", "Intersex"),
    ("nb", "Non binary"),
)

course = (
    ("BE", "BE"),
    ("BTECH", "BTECH")
)

yos = (
    ("FE", "FE"),
    ("SE", "SE"),
    ("TE", "TE"),
    ("BE", "BE")
)
yop = (

    ("2015", "2015"),
    ("2016", "2016"),
    ("2017", "2017"),
    ("2018", "2018"),
    ("2019", "2019"),
    ("2020", "2020"),
    ("2021", "2021"),
    ("2022", "2022"),
    ("2023", "2023"),
    ("2024", "2024"),
    ("2025", "2025"),
    ("2026", "2026"),
    ("2027", "2027"),
    ("2028", "2028"),
    ("2029", "2029"),
    ("2030", "2030"),

)


class PersonalDetailsForm(forms.ModelForm):
    specialization = forms.ChoiceField(choices=special)
    state = forms.ChoiceField(choices=state)
    city = forms.ChoiceField(choices=city)
    yop = forms.ChoiceField(choices=yop)
    #resume = forms.FileField()
    #profile_image = forms.FileField()

    class Meta:
        model = PersonalDetails
        fields = ['email', 'gender', 'state', 'city', 'dob', 'yop', 'mbno', 'linkedin', 'github', 'description', 'yos',
                  'course', 'organization', 'specialization', 'sem_average_marks', 'language', 'current_sem', 'codechef_username', 'resume', 'profile_image']
        widgets = {
            'mbno': forms.TextInput(
                attrs={
                    'class': 'form-control',
                    'type': 'tel'
                }
            ),
            'dob': forms.DateInput(
                attrs={
                    'class': 'form-control',
                    'type': 'date'
                }
            ),


            'gender': forms.RadioSelect(choices=gender),
            'yos': forms.RadioSelect(choices=yos),
            'course': forms.RadioSelect(choices=course)
        }


class EqForm(forms.ModelForm):
    class Meta:
        model = PersonalDetails
        fields = ["eq"]


job = DeleteJob.objects.all()
jobl = [i.title for i in job]
jobl = set(jobl)
jobtitle = ((i, i) for i in jobl)
d = set((i.domain, i.domain) for i in job)
o = set((i.organization, i.organization) for i in job)
print('domain', d)
print('form job', job)


class searchJobForm(forms.ModelForm):
    title = forms.ChoiceField(choices=jobtitle)
    domain = forms.ChoiceField(choices=d)
    Company_Name = forms.ChoiceField(choices=o)

    class Meta:
        model = DeleteJob
        fields = ['title', 'domain', 'Company_Name']
        widgets = {
            'title': forms.TextInput(
                attrs={
                    'class': 'col-12 col-md-3',

                }
            ),
            'domain': forms.TextInput(
                attrs={
                    'class': 'col-12 col-md-3',

                }
            ),
            'Company_Name': forms.TextInput(
                attrs={
                    'class': 'col-12 col-md-3 ',

                }
            ),
        }
