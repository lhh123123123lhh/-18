# -*- coding: utf-8 -*-
# Generated by Django 1.11.4 on 2018-10-26 12:52
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Data',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('img_src', models.CharField(max_length=50)),
                ('detail', models.CharField(max_length=40)),
            ],
            options={
                'db_table': 'data',
            },
        ),
    ]
