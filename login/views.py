import email
from http.client import HTTPResponse
from re import U
from django.shortcuts import render, redirect
from functools import reduce
from itertools import chain
from recruiter.models import DeleteJob
from django.http import HttpResponse
from rest_framework.serializers import Serializer
from .models import Sreg, StudentsProfile
from .models import Treg
from .models import nproj
from .models import Newproj
from .models import Grade
from django.contrib import messages
from django.contrib.auth.models import auth, User
import random
from django.utils.datastructures import MultiValueDictKeyError
from django.views.generic import ListView, CreateView, edit  # new
from django.urls import reverse_lazy  # new
from .forms import NewprojForm, searchJobForm
from django.views.generic import TemplateView

from .forms import New_projForm
from django.contrib.auth.decorators import login_required
from django.shortcuts import get_object_or_404
from datetime import date
import datetime

from operator import itemgetter
import psycopg2
from login.forms import StudentsProfileForm
from login.forms import PersonalDetailsForm, EqForm, TrRegisterForm

# rest
from django.shortcuts import render
from rest_framework.views import APIView
from . models import *
from rest_framework.response import Response
from . serializer import *
from login import serializer
from login.serializer import ProjectDetailsSeralizer
import requests


class ProjectDetailsView(APIView):
    serializer_class = ProjectDetailsSeralizer

    def get(self, request):
        p = [{
            "pk": p.pk,
            "Student_name": p.Student_name, 'Username': p.Username,
            'Semester': p.Semester, 'Roll_no': p.Roll_no, 'Div': p.Div, 'Project_name': p.Project_name, 'Subject': p.Subject, 'Teacher_username': p.Teacher_username, 'Project_description': p.Project_description, 'Git_link': p.Git_link,
            'Project_members': p.Project_members, 'domain': p.domain, 'endorsement_count': p.endorsement_count} for p in Newproj.objects.all()]
        return Response(p)


class JobApplyView(APIView):
    serializer_class = JobApplySeralizer

    def get(self, request):
        d = [{"jobid": d.jobid, "Student_username": d.Student_username, "college_name": d.college_name, "student_name": d.student_name, "branch": d.branch, "semester": d.semester, "student_email": d.student_email, "student_mobile": d.student_mobile, "ssc_mks": d.ssc_mks, "hsc_mks": d.hsc_mks, "technical_skills": d.technical_skills, "cgpa": d.cgpa,
              "alternative_email": d.alternative_email, "alternative_mobile": d.alternative_mobile, "yop": d.yop, "linkedin": d.linkedin, 'eq': d.eq, 'endorsement_count': d.endorsement_count, 'endrosed_project_ids': d.endrosed_project_ids} for d in JobApply.objects.all()]
        return Response(d)

    def post(self, request):
        serializer = JobApplySeralizer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)


class TestscoreView(APIView):

    serializer_class = ScoreSerializer

    def get(self, request):
        detail = [{"username": detail.username, "semester": detail.semester, "score": detail.score, "testkey": detail.testkey}
                  for detail in Testscore.objects.all()]
        return Response(detail)

    def post(self, request):

        serializer = ScoreSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)


class QuestionbankView(APIView):
    serializer_class = QuestionSerializer

    def get(self, request):
        que = [{"semester": que.semester, "question": que.question, "optionA": que.optionA, "optionB": que.optionB, "optionC": que.optionC, "optionD": que.optionD, "answer": que.answer, "testkey": que.testkey, "teacher_username": que.teacher_username, "quizname": que.quizname}
               for que in Questionbank.objects.all()]
        return Response(que)

    def post(self, request):

        serializer = QuestionSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)


def viewQuiz(request):
    current_user = str(request.user)
    que = Questionbank.objects.filter(teacher_username=current_user)

    sem = []
    quiz = []
    for i in que:
        print('testkey, sem', i.testkey, sem)
        if i.testkey not in sem:
            sem.append(i.testkey)
            quiz.append(i)

    return render(request, 'quizlist.html', {'quiz': quiz})


def fullQuiz(request, testkey):
    u = str(request.user)
    que = Questionbank.objects.filter(testkey=testkey)
    sc = Testscore.objects.filter(teacher_username=u)
    sreg = Sreg.objects.all()
    #score = []
    stud = []
    res = []
    for i in que:
        name = i.quizname
        sem = i.semester
        break
    for j in sc:
        sreg = Sreg.objects.get(username=j.username)
        res.append({'u': sreg.username, 'n': sreg.name, 's': j.score})
        print('yes', sreg.username, sreg.name, j.score)
    # print(sreg)
    #score = list(zip(sc, stud))

    # print('score',score)
    print('res', res)
    return render(request, 'quizview.html', {'que': que, 'name': name, 'sem': sem, 'sreg': stud, 'score': res})


def index(request):
    return render(request, 'index.html')


def login(request):
    return render(request, 'login.html')


temp1 = 0
temp2 = ''


class StudentDashboard(TemplateView, User):
    template_name = 'sdash.html'

    def eq_bargraph(request):
        user = User()

        new = {}
        data = []
        queryset = PersonalDetails.objects.all()
        eq = [i.eq for i in queryset]
        u = list(set(eq))
        u.sort()
        print("u", u)
        for i in u:
            new[i] = 0
        for i in eq:
            if i in new:
                new[i] += 1
        for i, j in new.items():
            data.append(j)
        print(data)

        return {
            'label': u,
            'data': data
        }

    def tech_piechart(request):
        labels = []
        data = []
        tech = []
        count = []

        queryset = PersonalDetails.objects.all()
        for i in queryset:
            s = i.language.split(",")
            tech.append(s)
        # print('tech:',tech)
        single_list = reduce(lambda x, y: x+y, tech)
        #print('sl, type',single_list,type(single_list))
        clear = []
        if '' in single_list:
            for j in single_list:
                # print('ele',j)
                if j != '':
                    clear.append(j)

        #print('after remove',clear)
        count.append(clear[0]+' '+str(clear.count(clear[0])))
        labels = [clear[0]]
        data = [round((clear.count(single_list[0])*100)/len(clear), 2)]

        for i in range(1, len(clear)):
            if clear[i] not in labels:
                #count.append(single_list[i]+' '+str(single_list.count(single_list[i])))
                labels.append(clear[i])
                data.append(round((clear.count(clear[i])*100)/len(clear), 2))

        return {
            'pielabel': labels,
            'piedata': data,

        }

    def calculateEq(request, p_score, t_score, sem_marks, u):
        print("calc EQ called")
        u = u
        e_details = get_object_or_404(PersonalDetails, username=u)
        n = random.randint(0, 10)
        pd1 = PersonalDetails.objects.get(username=u)
        eq = round((p_score*2+sem_marks+t_score)/3, 2)
        pd1.eq = eq
        pd1.save()

        return eq

    def get_context_data(self, *args, **kwargs):
        us = str(self.request.user)
        print('us', us)
        try:
            pd = PersonalDetails.objects.get(username=us)
        except PersonalDetails.DoesNotExist:
            pd = PersonalDetails.objects.create(username=us)
        print('pd', pd)

        # Project grade
        project_member_list = []
        p_list = []
        project = Newproj.objects.all()
        for i in project:
            project_member_list.append(i.Project_members.split(","))
        p_list = list(zip(project_member_list, project))
        result1 = []
        for new in p_list:
            if us in new[0] or us == new[1].Username:
                result1.append(new[1].id)
        print('res1', result1)
        grade = Grade.objects.all()
        project_score = 0
        no = 0
        for g in grade:
            if g.pid in result1:
                project_score += g.avgtotal
                no += 1
        if len(result1) != 0 and no != 0:
            project_score = round(project_score/no, 2)
        else:
            project_score = 0
        print('p score', project_score)

        # Test Score
        test_score = Testscore.objects.all().filter(username=us)
        t_score = 0
        count = 0
        for i in test_score:
            t_score += i.score
        if len(test_score) != 0:
            t_score = t_score/len(test_score)
        else:
            t_score = 0

        sem_marks = pd.sem_average_marks

        eq = self.calculateEq(project_score, t_score, sem_marks, us)
        print("eq after returned", eq)

        context = super().get_context_data(**kwargs)
        context['chart2'] = self.tech_piechart()
        context['chart'] = self.eq_bargraph()
        context['pd'] = pd
        context['ps'] = project_score*2
        context['ts'] = t_score

        return context


def registerstud(request):
    global temp1, temp2
    sreg = Sreg()
    if request.method == 'POST':
        name = request.POST["name"]
        username = request.POST["username"]
        password1 = request.POST["password1"]
        password2 = request.POST["password2"]
        email = request.POST["email"]
        if password1 == password2:
            if User.objects.filter(username=username).exists():
                messages.info(request, 'Oops! Username taken')
                return render(request, 'registerstud.html')
            else:
                user = User.objects.create_user(
                    first_name=name, username=username, password=password2, email=email)
                sreg = Sreg(name=name, username=username,
                            password=password2, email=email)
                pd = PersonalDetails.objects.create(username=username)
                pd.save()
                sreg.save()
                temp1 = sreg.pk
                temp2 = sreg.username
                user.save()
                print('SUBMITTED')
                #form = StudentsProfileForm()

                # return render(request, 'StudentProfile.html', {'form': form})
                return redirect('slogin')

        else:
            messages.info(request, 'Passwords did not match!')
            return render(request, 'registerstud.html')
    else:
        return render(request, 'registerstud.html')


def registertr(request):
    treg = Treg()
    if request.method == 'POST':
        name = request.POST["name"]
        username = request.POST["username"]
        password1 = request.POST["password1"]
        password2 = request.POST["password2"]
        organization = request.POST["organization"]
        qualification = request.POST["qualification"]
        area_of_interest = request.POST["area_of_interest"]
        experience = request.POST["experience"]
        designation = request.POST["designation"]
        email = request.POST["email"]
        pno = request.POST["pno"]
        resume = request.FILES["resume"]
        if password1 == password2:
            if User.objects.filter(username=username).exists():
                messages.info(request, 'Oops! Username taken')
                return render(request, 'registertr.html')
            else:
                user = User.objects.create_user(
                    first_name=name, username=username, password=password2)
                treg = Treg(name=name, username=username, password=password2, organization=organization, qualification=qualification,
                            area_of_interest=area_of_interest, experience=experience, designation=designation, email=email, pno=pno, resume=resume)
                user.save()
                treg.save()
                print('SUBMITTED')
                return render(request, 'tlogin.html')

        else:
            messages.info(request, 'Passowords did not match!')
            return render(request, 'registertr.html')
    else:
        return render(request, 'registertr.html')


def tdash(request):
    cu = str(request.user)
    treg = Treg.objects.filter(username=cu)

    return render(request, 'Tinfo.html', {'treg': treg})


def slogin(request):
    global temp1, temp2
    print("temp", temp1)
    print("temp2", temp2)

    if request.method == 'POST':
        username = request.POST["username"]
        password = request.POST["password"]
        user = auth.authenticate(username=username, password=password)
        sreg = Sreg.objects.filter(username=username)

        if user and sreg:

            auth.login(request, user)
            print("slogin success!")
            pd = PersonalDetails.objects.filter(username=username)
            return redirect('StudentDashboard')
            # return render(request,'sdash.html',{'user':user})

        else:
            messages.info(request, 'Check username or password')
            return redirect('slogin')

    else:
        #messages.info(request,'Invalid Credential. Try Again!')
        print("post method not found")
        return render(request, 'slogin.html')


def tlogin(request):
    global temp1, temp2
    print("temp", temp1)
    print("temp2", temp2)
    if request.method == 'POST':
        username = request.POST["username"]
        password = request.POST["password"]
        user = auth.authenticate(username=username, password=password)
        treg = Treg.objects.filter(username=username)

        if user and treg:
            auth.login(request, user)
            print("slogin success!")
            pd = PersonalDetails.objects.filter(username=username)
            return redirect('TeacherDashboard')
            # return render(request,'sdash.html',{'user':user}
        else:
            messages.info(request, 'Check username or password')
            return redirect('tlogin')

    else:
        #messages.info(request,'Invalid Credential. Try Again!')
        print("post method not found")
        return render(request, 'tlogin.html')


def logout(request):
    auth.logout(request)
    return redirect('/')


def reset_pswd(request):
    username = 'admin'
    user = User.objects.get(username=username)


def editTreg(request):

    current_user = str(request.user)
    print('tr user ', current_user)
    ins = get_object_or_404(Treg, username=current_user)
    if request.method == 'POST':

        form = TrRegisterForm(request.POST, request.FILES, instance=ins)
        if form.is_valid():
            form.save()
            print('Saved')
            return render(request, 'Tinfo.html', {'current_user': current_user})
    else:
        print('Entered else')
        form = TrRegisterForm(instance=ins)
        return render(request, 'edit_treg.html', {'form': form, 'current_user': current_user})


def miniprojview(request):
    current_user = str(request.user)
    newprojs = Newproj.objects.all()
    gr = Grade.objects.filter(username=current_user)
    # str(current_user)))
    for i in newprojs:
        print('Entered for')

        print(str(i.Teacher_username))

    # print(newprojs.Project_name)
    g = []
    h = []
    for i in newprojs:
        g.append(i.Teacher_username.split(","))
    #single_list1 = reduce(lambda x, y: x+y, g)
  #  print(single_list1)
    h = zip(g, newprojs)
    h = list(h)
    result = []
    for new in h:
        if current_user in new[0]:
            result.append(new[1])

    return render(request, 'miniprojview.html', {'current_user': current_user, 'result': result, 'gr': gr})


def sdash(request):
    username = str(request.user)
    pd = PersonalDetails.objects.filter(username=username)
    return render(request, 'sdash.html', {'pd': pd})


def sprojview(request):
    current_user = str(request.user)
    newprojs = Newproj.objects.all()
    #gr = Grade.objects.filter(id=pk)
    # str(current_user)))
    # print(newprojs.Project_name)
    print('current user : ', current_user)
    print('newprojs : ', newprojs)
    f = []
    single_list = []
    for i in newprojs:
        f.append(i.Project_members.split(","))
    if len(f) != 0:

        single_list = reduce(lambda x, y: x+y, f)
        print(single_list)
    else:
        single_list = []
    # for i in newprojs:
    # if current_user == i.Username:
    #print('Entered if ')
    #print('username:', i.Username)

    return render(request, 'sprojview.html', {'current_user': current_user, 'newprojs': newprojs, 'single_list': single_list})


def addProject(request):
    np = Newproj()
    if request.method == 'POST':
        np.Student_name = request.POST["name"]
        np.Username = request.POST["username"]
        np.Semester = request.POST["sem"]
        np.Roll_no = request.POST["rno"]
        np.Div = request.POST["div"]
        np.Project_name = request.POST["pname"]
        np.Subject = request.POST["subj"]
        np.Teacher_username = request.POST["tuser"]
        np.Project_description = request.POST["desc"]
        np.Git_link = request.POST["git"]
        np.Project_members = request.POST["pmem"]
        dom = request.POST.getlist("domain")
        np.domain = ",".join(dom)
        np.Output_File = request.FILES["projectfiles"]
        np.save()
        print("project Added")
        return redirect('StudentDashboard')
    else:
        return render(request, "newproject.html")


def grades(request, pk):
    current_user = str(request.user)
    new = Newproj.objects.filter(id=pk)
    newprojs = Newproj.objects.all()
    gr = Grade(request.POST)
    if request.method == 'POST':
        print('IF')
        pid = request.POST["pid"]
        suggestions = request.POST["suggestions"]
        avgtotal = request.POST["avgtotal"]
        endorsement = request.POST["endorsement"]
        print("endor", type(endorsement))
        #endorsement = int(endorsement)
        #avgtotal= int(avgtotal)
        gr = Grade.objects.create(
            pid=pid, suggestions=suggestions, avgtotal=avgtotal, endorsement=endorsement, username=current_user)
        gr.save()
        if endorsement == "5":
            pd = Newproj.objects.get(id=pid)
            pd.endorsement_count += 1
            pd.save()
        print("Success")
        # return render(request,'Tinfo.html')

        return render(request, 'miniprojview.html', {'current_user': current_user, 'result': newprojs})
    else:

        print('else')
        return render(request, 'grades.html', {'new': new})


def fullview(request, pk):
    np = Newproj.objects.filter(id=pk)
    gr = Grade.objects.filter(pid=pk)
    us = str(request.user)

    return render(request, 'fullview.html', {'np': np, 'gr': gr})

    # return render(request,'fullview.html')


def sfullview(request, pk):
    np = Newproj.objects.filter(id=pk)
    gr = Grade.objects.filter(pid=pk)

    return render(request, 'sfullview.html', {'np': np, 'gr': gr})


def delete_proj(request, pk):
    Newproj.objects.filter(id=pk).delete()
    current_user = str(request.user)
    newprojs = Newproj.objects.all()
    return render(request, 'sprojview.html', {'current_user': current_user, 'newprojs': newprojs})


def editproj(request, pk):
    ins = get_object_or_404(Newproj, pk=pk)
    current_user = str(request.user)
    newprojs = Newproj.objects.all()
    if request.method == 'POST':

        form = NewprojForm(request.POST, request.FILES, instance=ins)
        if form.is_valid():
            form.save()
            print('Saved')
            f = []
            for i in newprojs:
                f.append(i.Project_members.split(","))
            single_list = reduce(lambda x, y: x+y, f)
            print(single_list)
            return render(request, 'sprojview.html', {'current_user': current_user, 'newprojs': newprojs, 'single_list': single_list})
    else:
        print('Entered else')
        form = NewprojForm(instance=ins)
        return render(request, 'editproj.html', {'form': form, 'current_user': current_user, 'newprojs': newprojs})


def Tinfo(request):
    return render(request, 'Tinfo.html')


def Student_profile(request):
    global temp1, temp2
    print("temp", temp1)
    print("temp2", temp2)
    if request.method == 'POST':
        form = StudentsProfileForm(request.POST)
        if form.is_valid():
            files = request.POST['resume']
            sd = StudentsProfile.objects.create(
                student_id=temp1, student_username=temp2, project_score=30, sem_average_marks=form['sem_average_marks'].value(), language=form['language'].value(), current_sem=form['current_sem'].value(), resume=files)
            sd.save()
            print(sd)
            print('Saved')
            return render(request, 'newproject.html')
    else:
        print('Entered else')
        form = StudentsProfileForm()
        return render(request, 'StudentProfile.html', {'form': form})


def student_profile2(request):
    if request.method == 'POST':
        global temp1, temp2
        st = StudentsProfile()
        st.student_id = temp1
        st.student_username = temp2
        st.project_score = '30'
        st.sem_average_marks = request.POST['sem_average_marks']
        st.sem_average_marks = float(st.sem_average_marks)
        st.language = request.POST['language']
        st.current_sem = request.POST['current_sem']
        st.resume = request.FILES['resume']
        st.save()
    return render(request, 'slogin.html')


def edit_profile(request, username):
    global temp1, temp2
    e_profile = get_object_or_404(StudentsProfile, student_username=username)
    edit_profile = StudentsProfile.objects.filter(
        student_username=username).values()
    if request.method == "POST":
        form = StudentsProfileForm(request.POST, instance=e_profile)
        form.resume = request.FILES.get("resume")
        print('form.resume', form.resume)
        if form.is_valid():
            # instance = StudentsProfile(student_id=request.FILES['resume'],resume=request.FILES['resume'],resume=request.FILES['resume'],resume=request.FILES['resume'],resume=request.FILES['resume'],resume=request.FILES['resume'],resume=request.FILES['resume'])
            # instance.save()
            form.save()
            return render(request, 'sdash.html')
    else:
        form = StudentsProfileForm(instance=e_profile)
        return render(request, 'edit_profile.html', {'form': form})


def create_pd(request):
    form = PersonalDetailsForm()
    pd = PersonalDetails()
    u = str(request.user)
    if request.method == 'POST':
        form = PersonalDetailsForm(request.POST)
        if form.is_valid():
            pd.username = u
            pd.email = form.cleaned_data["email"]
            pd.gender = form.cleaned_data["gender"]
            pd.state = form.cleaned_data["state"]
            pd.city = form.cleaned_data["city"]
            pd.specialization = form.cleaned_data["specialization"]
            pd.organization = form.cleaned_data["organization"]
            pd.yos = form.cleaned_data["yos"]
            pd.course = form.cleaned_data["course"]
            pd.dob = form.cleaned_data["dob"]
            pd.yop = form.cleaned_data["yop"]
            pd.mbno = form.cleaned_data["mbno"]
            pd.linkedin = form.cleaned_data["linkedin"]
            pd.github = form.cleaned_data["github"]
            pd.description = form.cleaned_data["description"]
            pd.sem_average_marks = form.cleaned_data["sem_average_marks"]
            pd.profile_image = request.FILES["profile_image"]
            pd.language = form.cleaned_data["language"]
            pd.current_sem = form.cleaned_data["current_sem"]
            pd.resume = request.FILES["resume"]
            pd.save()
            print("Pd saved!")

            return render(request, 'sdash.html')
        else:
            print("pd form failed")
            print("pro img", form["profile_image"].value())
            print("resume", form["resume"])
            return render(request, 'pdform.html', {'form': form})
    else:
        return render(request, 'pdform.html', {'form': form})


def personaldetails(request):
    global temp1, temp2
    username = str(request.user)
    pd = PersonalDetails()
    if request.method == 'POST':
        form = PersonalDetailsForm(request.POST)
        # print('state',form['state'].value())
        # print(form['username'].value())
        # print(form['profile_image'].value())
        #pd.username = temp2
        # check whether it's valid:
        print("Post method")
        username = username
        email = request.POST["email"]
        gender = request.POST["gender"]
        state = request.POST["state"]
        city = request.POST["city"]
        dob = request.POST["dob"]
        yop = request.POST["yop"]
        mbno = request.POST["mbno"]
        linkedin = request.POST["linkedin"]
        github = request.POST["github"]
        description = request.POST["description"]
        yos = request.POST["yos"]
        organization = request.POST["organization"]
        specialization = request.POST["specialization"]
        course = request.POST["course"]
        profile_image = request.FILES["profile_image"]
        sem_average_marks = request.POST["sem_average_marks"]
        language = request.POST["language"]
        current_sem = request.POST["current_sem"]
        resume = request.FILES["resume"]

        pd = PersonalDetails.objects.create(language=language, current_sem=current_sem, resume=resume, username=username, email=email, gender=gender, state=state, city=city, dob=dob, yop=yop, mbno=mbno, linkedin=linkedin,
                                            github=github, description=description, profile_image=profile_image, yos=yos, organization=organization, specialization=specialization, course=course, sem_average_marks=sem_average_marks)
        pd.save()
        print("Personal details Form submitted")
        return render(request, 'sdash.html')

    else:
        form = PersonalDetailsForm()
        return render(request, 'personaldetails.html')


def edit_personalDetails(request):
    global temp1, temp2
    u = str(request.user)
    e_details = get_object_or_404(PersonalDetails, username=u)
    pd = PersonalDetails()
    #edit_details =PersonalDetailsForm.objects.filter(Username=username).values()
    if request.method == "POST":
        form = PersonalDetailsForm(
            request.POST or None, request.FILES, instance=e_details)
        n = random.randint(0, 10)
        if form.is_valid():
            form.save()
            print("PD edited")
            pd1 = PersonalDetails.objects.filter(username=u)
            return redirect('StudentDashboard')
        else:
            print("PD edit failed")
            # print("edit",form["profile_image"].value)
            return render(request, 'edit_personalDetails.html', {'form': form})
    else:
        form = PersonalDetailsForm(instance=e_details)
        return render(request, 'edit_personalDetails.html', {'form': form})


def jobapply(request, pk):
    job = JobApply()
    j = DeleteJob.objects.filter(pk=pk)
    u = str(request.user)
    pd = PersonalDetails.objects.get(username=u)
    gr = Grade.objects.filter(endorsement='5')
    print("JA user", u)
    print("pk", pk)
    grade = [i.pid for i in gr]
    grade = list(set(grade))
    print('grade:', grade)
    # new proj filter
    np = Newproj.objects.all()
    count_endros = 0
    endros_project_ids = []
    for i in np:
        if i.id in grade and u == i.Username or u in i.Project_members.split(","):
            if j[0].domain in i.domain.split(","):
                count_endros += 1
                endros_project_ids.append(i.id)

    if request.method == "POST":
        print("if pk", pk)

        job.jobid = pk
        job.Student_username = u
        job.student_name = request.POST["student_name"]
        job.college_name = request.POST["college_name"]
        job.student_name = request.POST["semester"]
        job.branch = request.POST["branch"]
        job.semester = request.POST["yop"]
        job.student_email = request.POST["student_email"]
        job.student_mobile = request.POST["student_mobile"]
        job.ssc_mks = request.POST["ssc_mks"]
        job.hsc_mks = request.POST["hsc_mks"]
        # languages included
        job.technical_skills = request.POST["technical_skills"]
        job.cgpa = request.POST["cgpa"]
        job.alternative_email = request.POST["alternative_email"]
        job.alternative_mobile = request.POST["alternative_mobile"]
        job.yop = request.POST["yop"]
        job.linkedin = request.POST["linkedin"]
        job.resume = request.FILES["resume"]
        job.eq = pd.eq
        # endrosment count
        job.endorsement_count = count_endros
        job.endrosed_project_ids = endros_project_ids
        job.save()
        print("job applied")
        return render(request, 'sdash.html')
    return render(request, 'jobapply.html', {'pk': pk, 'j': j})


def jobList(request):
    u = str(request.user)
    job = DeleteJob.objects.filter(visibility='public')
    apply = JobApply.objects.filter(Student_username=u)
    jobid = [i.jobid for i in apply]
    today = date.today()
    current_time = datetime.datetime.now()
    form = searchJobForm(request.POST or None, use_required_attribute=False)
    dict = []
    for i in job:
        print('i.id', i.id)
        end = datetime.datetime(int(i.application_end_date[:4]), int(i.application_end_date[5:7]), int(
            i.application_end_date[8:10]), int(i.application_end_time[:2]), int(i.application_end_time[3:5]))
        if current_time < end and str(i.id) not in jobid:
            dict.append(i)
    print("dict:", dict)

    if request.method == 'POST':

        search = []
        print('search form', form['title'].value())
        queryset1 = DeleteJob.objects.filter(title__icontains=form['title'].value(),
                                             domain__icontains=form['domain'].value(), organization__icontains=form['Company_Name'].value())
        queryset2 = DeleteJob.objects.filter(
            domain__icontains=form['domain'].value())
        queryset3 = DeleteJob.objects.filter(
            organization__icontains=form['Company_Name'].value())
        queryset = queryset1 | queryset2 | queryset3
        for i in queryset:
            end = datetime.datetime(int(i.application_end_date[:4]), int(i.application_end_date[5:7]), int(
                i.application_end_date[8:10]), int(i.application_end_time[:2]), int(i.application_end_time[3:5]))
            if current_time < end and str(i.id) not in jobid:
                search.append(i)

        return render(request, 'joblist.html', {'form': form, 'queryset': search})
    return render(request, 'joblist.html', {'job': dict, 'form': form})


def jobView(request, pk):
    job = DeleteJob.objects.filter(pk=pk)
    return render(request, 'viewjob.html', {'job': job})


def jobApplied(request):
    j = []
    u = str(request.user)
    ja = JobApply.objects.filter(Student_username=u)
    print('jobapply', ja)
    job = [int(i.jobid) for i in ja]
    print('job id', job)
    jo = DeleteJob.objects.all()
    for i in jo:
        if i.id in job:
            j.append(i)
    print('j', j)

    return render(request, 'jobapplied.html', {'job': j, 'app': ja, 'j': job})
