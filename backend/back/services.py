import requests
from .models import Author, Commit, GitHubCommit, GitHubCommitParent, User

git_root_api = "https://api.github.com"


def get_parent(git_commit, rawParent):
    parent = GitHubCommitParent.objects.get_or_create(url=rawParent['url'], html_url=rawParent['html_url'])[0]
    parent.children.add(git_commit)


def get_user(raw_user):
    if raw_user is None:
        return None, None

    return User.objects.get_or_create(name=raw_user['login'], gitId=raw_user['id'], avatarUrl=raw_user['avatar_url'],
                                      apiUrl=raw_user['url'], htmlUrl=raw_user['html_url'],
                                      reposUrl=raw_user['repos_url'], type=raw_user['type'])


def map_git_commit(raw_data):
    raw_commit = raw_data['commit']
    raw_author = raw_commit['author']
    (author, _) = Author.objects.get_or_create(name=raw_author['name'], email=raw_author['email'],
                                               date=raw_author['date'])
    (commit, _) = Commit.objects.get_or_create(author=author, message=raw_commit['message'],
                                               treeUrl=raw_commit['tree']['url'], url=raw_commit['url'],
                                               comment_count=raw_commit['comment_count'])
    (git_author, _) = get_user(raw_data['author'])
    (git_committer, _) = get_user(raw_data['committer'])
    (git_commit, _) = GitHubCommit.objects.get_or_create(author=git_author, committer=git_committer,
                                                         htmlUrl=raw_data['html_url'],
                                                         commentsUrl=raw_data['comments_url'],
                                                         commit=commit)
    for result in map(lambda parent: get_parent(git_commit, parent), raw_data['parents']):
        pass

    return git_commit


def get_commits(user_name, repo_name):
    r = requests.get(f'{git_root_api}/repos/{user_name}/{repo_name}/commits')
    data = r.json()
    # Will search for commits in the db, and create if not there
    git_commits = map(map_git_commit, data)
    return git_commits
