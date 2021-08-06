# Generated by Django 3.2.6 on 2021-08-04 23:03

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Author',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('email', models.CharField(max_length=100)),
                ('date', models.DateTimeField()),
            ],
        ),
        migrations.CreateModel(
            name='Commit',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('message', models.CharField(max_length=80)),
                ('treeUrl', models.URLField()),
                ('url', models.URLField()),
                ('comment_count', models.IntegerField()),
                ('author', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='commits', to='back.author')),
            ],
        ),
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('gitId', models.CharField(max_length=30)),
                ('avatarUrl', models.URLField()),
                ('apiUrl', models.URLField()),
                ('htmlUrl', models.URLField()),
                ('reposUrl', models.URLField()),
                ('type', models.CharField(max_length=50)),
            ],
        ),
        migrations.CreateModel(
            name='GitHubCommit',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('htmlUrl', models.URLField()),
                ('commentsUrl', models.URLField()),
                ('author', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='gitCommits', to='back.user')),
                ('commit', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='back.commit')),
                ('committer', models.OneToOneField(on_delete=django.db.models.deletion.PROTECT, to='back.user')),
                ('parents', models.ManyToManyField(to='back.GitHubCommit')),
            ],
        ),
    ]