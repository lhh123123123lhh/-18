# -*- coding: utf-8 -*-
# Generated by Django 1.11.4 on 2018-10-27 02:09
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0005_auto_20181027_0958'),
    ]

    operations = [
        migrations.CreateModel(
            name='Dog1',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('img_src', models.CharField(max_length=100)),
                ('detail', models.CharField(max_length=100)),
            ],
            options={
                'db_table': 'dogone',
            },
        ),
    ]
