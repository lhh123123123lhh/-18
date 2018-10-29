# -*- coding: utf-8 -*-
# Generated by Django 1.11.4 on 2018-10-27 01:40
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0003_link'),
    ]

    operations = [
        migrations.CreateModel(
            name='Dog',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('img_src', models.CharField(max_length=50)),
                ('name', models.CharField(max_length=20)),
                ('num', models.CharField(max_length=10)),
            ],
            options={
                'db_table': 'dog',
            },
        ),
    ]