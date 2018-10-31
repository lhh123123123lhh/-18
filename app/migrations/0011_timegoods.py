# -*- coding: utf-8 -*-
# Generated by Django 1.11.4 on 2018-10-31 11:31
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0010_image_user'),
    ]

    operations = [
        migrations.CreateModel(
            name='TimeGoods',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('img_src', models.CharField(max_length=150)),
                ('longname', models.CharField(max_length=150)),
                ('low_price', models.CharField(max_length=30)),
                ('price', models.CharField(max_length=30)),
                ('zhe_kou', models.CharField(max_length=50)),
                ('start_str', models.CharField(max_length=30)),
            ],
            options={
                'db_table': 't_goods',
            },
        ),
    ]
