# -*- coding: utf-8 -*-
# Generated by Django 1.11.4 on 2018-10-27 07:26
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0010_user'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='user',
            name='verification',
        ),
    ]
