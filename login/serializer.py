
from rest_framework import serializers
from .models import *


class ScoreSerializer(serializers.ModelSerializer):
    class Meta:
        model = Testscore
        fields = ['username', 'semester', 'score', 'testkey']


class QuestionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Questionbank
        fields = ['semester', 'question', 'optionA',
                  'optionB', 'optionC', 'optionD', 'answer', 'testkey', 'teacher_username', 'quizname']


class JobApplySeralizer(serializers.ModelSerializer):
    class Meta:
        model = JobApply
        fields = ['jobid', 'Student_username', 'college_name', 'student_name', 'branch', "semester", "student_email", "student_mobile", "ssc_mks", "hsc_mks", "technical_skills", "cgpa",
                  "alternative_email", "alternative_mobile", "yop", "linkedin", 'eq', 'endorsement_count', 'endrosed_project_ids']


class ProjectDetailsSeralizer(serializers.ModelSerializer):
    class Meta:
        model = Newproj
        fields = ['pk', 'Student_name', 'Username',
                  'Semester', 'Roll_no', 'Div', 'Project_name', 'Subject', 'Teacher_username', 'Project_description', 'Git_link',
                  'Project_members', 'domain', 'endorsement_count']
