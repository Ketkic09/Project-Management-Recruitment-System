# Generated by Django 3.0.5 on 2022-03-21 18:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('login', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='jobapply',
            name='eq',
            field=models.FloatField(default=0),
        ),
    ]
