from django.db import models


# Regular Commit Author
class Author(models.Model):
    name = models.CharField(max_length=200)  # name
    email = models.CharField(max_length=200)  # email
    date = models.CharField(max_length=100)  # date

    def __str__(self):
        return f'{self.name}@{self.date} ({self.email})'


# Regular Commit
class Commit(models.Model):
    author = models.ForeignKey(Author, on_delete=models.CASCADE, related_name='commits')  # author
    message = models.CharField(max_length=3000)  # message
    treeUrl = models.URLField()  # tree { url }
    url = models.URLField()  # url
    comment_count = models.IntegerField()  # comment

    def __str__(self):
        return f'{self.author.name}: {self.message}'


# GitHub User
class User(models.Model):
    name = models.CharField(max_length=100)  # login
    gitId = models.CharField(max_length=30)  # id
    avatarUrl = models.URLField()  # avatar_url
    apiUrl = models.URLField()  # url
    htmlUrl = models.URLField()  # html_url
    reposUrl = models.URLField()  # repos_url
    type = models.CharField(max_length=50)  # type

    def __str__(self):
        return f'{self.name}. Url: {self.htmlUrl}'


# GitHub Commit Parent
class GitHubCommitParent(models.Model):
    url = models.URLField()
    html_url = models.URLField()

    def __str__(self):
        return f'{self.html_url}'


# GitHub Commit
class GitHubCommit(models.Model):
    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name='author_commits', null=True)  # author
    committer = models.ForeignKey(User, on_delete=models.CASCADE, related_name='committer_commits',
                                  null=True)  # committer
    htmlUrl = models.URLField()  # html_url
    commentsUrl = models.URLField()  # comments_url
    parents = models.ManyToManyField(GitHubCommitParent, related_name='children', symmetrical=True)  # parents
    commit = models.OneToOneField(Commit, on_delete=models.CASCADE)  # commit

    def __str__(self):
        return f'{self.author.name}: {self.commit}'
