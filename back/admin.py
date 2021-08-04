from django.contrib import admin
from .models import Author, Commit, GitHubCommit, User

# Register your models here.
admin.site.register(Author)
admin.site.register(Commit)
admin.site.register(GitHubCommit)
admin.site.register(User)
