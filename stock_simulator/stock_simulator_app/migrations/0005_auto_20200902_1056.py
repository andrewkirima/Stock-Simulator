# Generated by Django 3.0.5 on 2020-09-02 09:56

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('stock_simulator_app', '0004_auto_20200902_1048'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='userprofile',
            name='stock',
        ),
        migrations.RemoveField(
            model_name='userprofile',
            name='user',
        ),
        migrations.DeleteModel(
            name='Stock',
        ),
        migrations.DeleteModel(
            name='UserProfile',
        ),
    ]
