# Generated by Django 2.1.1 on 2018-09-17 20:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('pets', '0002_auto_20180917_2015'),
    ]

    operations = [
        migrations.AddField(
            model_name='pet',
            name='neutered',
            field=models.BooleanField(default=False),
        ),
    ]