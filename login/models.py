from django.db import models

# Create your models here.


class Sreg(models.Model):
    name = models.CharField(max_length=100)
    username = models.CharField(max_length=100)
    password = models.CharField(max_length=100)
    email = models.EmailField(max_length=100, default="")


class Treg(models.Model):
    name = models.CharField(max_length=100)
    username = models.CharField(max_length=100)
    password = models.CharField(max_length=100)
    organization = models.CharField(max_length=200, default='')
    qualification = models.CharField(max_length=200, default='')
    area_of_interest = models.CharField(max_length=500, default='')
    experience = models.CharField(max_length=100, default='')
    designation = models.CharField(max_length=100, default='')
    email = models.CharField(max_length=100, default='')
    pno = models.CharField(max_length=10, default='')
    resume = models.FileField(upload_to='TeacherResumes/',
                              default='settings.MEDIA_ROOT/TeacherResumes/sample.docx')


class nproj(models.Model):
    pid = models.IntegerField()
    name = models.CharField(max_length=100)
    username = models.CharField(max_length=100)
    sem = models.CharField(max_length=100)
    rno = models.IntegerField()
    div = models.CharField(max_length=5)
    pname = models.CharField(max_length=100)
    subj = models.CharField(max_length=100)
    tuser = models.CharField(max_length=100)
    desc = models.TextField()
    git = models.URLField(max_length=200)
    pmem = models.CharField(max_length=200)
    file = models.ImageField(upload_to='images/')


class Newproj(models.Model):
    Student_name = models.CharField(max_length=100)
    Username = models.CharField(max_length=100)
    Semester = models.CharField(max_length=100)
    Roll_no = models.IntegerField()
    Div = models.CharField(max_length=5)
    Project_name = models.CharField(max_length=100)
    Subject = models.CharField(max_length=100)
    Teacher_username = models.CharField(max_length=100)
    Project_description = models.TextField()
    Git_link = models.URLField(max_length=200)
    Project_members = models.CharField(max_length=200)
    domain = models.CharField(max_length=500, default="Others")
    endorsement_count = models.IntegerField(default=0)
    Output_File = models.FileField(
        upload_to='projectfiles/', default='settings.MEDIA_ROOT/projectfiles/sample.docx')


class Grade(models.Model):
    pid = models.IntegerField()
    username = models.CharField(max_length=20, default="")
    suggestions = models.TextField()
    avgtotal = models.IntegerField()
    endorsement = models.CharField(max_length=10, default=0)


class StudentsProfile(models.Model):
    student_id = models.FloatField()
    student_username = models.CharField(max_length=50)
    project_score = models.IntegerField()
    sem_average_marks = models.IntegerField()
    language = models.CharField(max_length=100)
    current_sem = models.CharField(max_length=30)
    resume = models.FileField(upload_to="resumes/")


class TestSeries(models.Model):
    student_id = models.IntegerField()
    student_username = models.CharField(max_length=50)
    gaming_score = models.IntegerField()
    aptitude_score = models.IntegerField()
    coding_score = models.IntegerField()
    avg_test_score = models.IntegerField()


class Testscore(models.Model):
    username = models.CharField(max_length=50)
    semester = models.CharField(max_length=50)
    score = models.IntegerField()
    testkey = models.CharField(max_length=10)
    teacher_username = models.CharField(max_length=10, default='admin')


class Questionbank(models.Model):

    semester = models.CharField(max_length=50)
    question = models.CharField(max_length=5000)
    optionA = models.CharField(max_length=500)
    optionB = models.CharField(max_length=500)
    optionC = models.CharField(max_length=500)
    optionD = models.CharField(max_length=500)
    answer = models.CharField(max_length=500)
    testkey = models.CharField(max_length=10)
    teacher_username = models.CharField(max_length=50)
    quizname = models.CharField(max_length=500)


state = (
    ("1", "1"),
    ("2", "2"),
    ("3", "3"),
    ("4", "4"),
    ("5", "5"),
    ("6", "6"),
    ("7", "7"),
    ("8", "8"),
)
city = (
    ("1", "1"),
    ("2", "2"),
    ("3", "3"),
    ("4", "4"),
    ("5", "5"),
    ("6", "6"),
    ("7", "7"),
    ("8", "8"),
)
specialization = (
    ("computer science", "Computer Science"),
    ("computer science", "Computer Science"),
)


class PersonalDetails(models.Model):
    username = models.CharField(max_length=100)
    email = models.EmailField(max_length=254, default='')
    gender = models.CharField(max_length=20, default='')
    state = models.CharField(max_length=100,
                             default='Maharashtra')
    city = models.CharField(max_length=100,
                            default='Mumbai')
    specialization = models.CharField(max_length=200, default='',)
    organization = models.CharField(max_length=200, default='')
    yos = models.CharField(max_length=100, default='')  # year of study
    course = models.CharField(max_length=100, default='')  # BE, BTECH ,MTECH
    dob = models.DateField(default='2000-07-12')
    yop = models.CharField(max_length=20, default='')
    mbno = models.CharField(max_length=10, default='')
    linkedin = models.URLField(max_length=200)
    github = models.URLField(max_length=200)
    description = models.TextField(default="")
    profile_image = models.ImageField(
        upload_to='profile_img/', default='settings.MEDIA_ROOT/profile_img/s.png')
    sem_average_marks = models.FloatField(default=0)
    language = models.CharField(max_length=100, default='')
    current_sem = models.CharField(max_length=30, default='')
    resume = models.FileField(upload_to="resumes/",
                              default='settings.MEDIA_ROOT/resumes/Resume.pdf')
    eq = models.FloatField(default=0)
    codechef_username = models.CharField(max_length=100, default='')
    codechef_stars = models.CharField(max_length=100, default='')


class JobApply(models.Model):
    jobid = models.IntegerField()
    Student_username = models.CharField(max_length=200, default='')
    college_name = models.CharField(max_length=200, default='')
    student_name = models.CharField(max_length=200, default='')
    branch = models.CharField(max_length=200, default='')
    semester = models.CharField(max_length=200, default='')
    student_email = models.EmailField(max_length=254)
    student_mobile = models.CharField(max_length=200, default='')
    ssc_mks = models.CharField(max_length=200, default='')
    hsc_mks = models.CharField(max_length=200, default='')
    technical_skills = models.TextField()  # languages included
    cgpa = models.CharField(max_length=200, default='')
    alternative_email = models.CharField(max_length=200, default='')
    alternative_mobile = models.CharField(max_length=200, default='')
    yop = models.CharField(max_length=200, default='')
    linkedin = models.URLField(max_length=200)
    resume = models.FileField(upload_to="JobResumes/",
                              default='settings.MEDIA_ROOT/resumes/Resume.pdf')
    eq = models.FloatField(default=0)
    endorsement_count = models.IntegerField(default=0)
    endrosed_project_ids = models.CharField(max_length=200, default='')
