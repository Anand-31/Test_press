# Generated by Django 3.2 on 2021-04-25 11:37

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='quiz_details',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('user_name', models.CharField(default='', max_length=50)),
                ('total_question', models.CharField(default='', max_length=50)),
                ('correct_answer', models.CharField(default='', max_length=50)),
                ('wrong_answer', models.CharField(default='', max_length=50)),
                ('time_taken', models.CharField(default='', max_length=50)),
            ],
        ),
        migrations.CreateModel(
            name='user',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
            ],
        ),
    ]
