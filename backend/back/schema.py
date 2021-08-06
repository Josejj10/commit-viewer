import graphene
from graphene import relay, ObjectType
from graphene_django import DjangoObjectType
from graphene_django.filter import DjangoFilterConnectionField
from .services import get_commits

from .models import Author, Commit, GitHubCommit, GitHubCommitParent, User


# GraphQL for Author
class AuthorNode(DjangoObjectType):
    class Meta:
        model = Author
        filter_fields = {
            'name': ['exact', 'icontains', 'istartswith'],
            'email': ['exact', 'icontains'],
            'date': ['exact'],
        }
        interfaces = (relay.Node, )


# GraphQL for Commit
class CommitNode(DjangoObjectType):
    class Meta:
        model = Commit
        filter_fields = {
            'message': ['exact', 'icontains', 'istartswith'],
            'treeUrl': ['exact'],
            'url': ['exact'],
            'comment_count': ['exact'],
            'author': ['exact'],
        }
        interfaces = (relay.Node, )


# GraphQL for User
class UserNode(DjangoObjectType):
    class Meta:
        model = User
        filter_fields = {
            'name': ['exact', 'icontains', 'istartswith'],
            'gitId': ['exact', 'icontains'],
            'avatarUrl': ['exact'],
            'apiUrl': ['exact'],
            'htmlUrl': ['exact'],
            'reposUrl': ['exact'],
            'type': ['exact'],
            'author_commits': ['exact'],
            'committer_commits': ['exact']
        }
        interfaces = (relay.Node, )


# GraphQL for GitHub Commit Parent
class GitHubCommitParentNode(DjangoObjectType):
    class Meta:
        model = GitHubCommitParent
        filter_fields = {
            'html_url': ['exact'],
            'url': ['exact'],
        }
        interfaces = (relay.Node, )


# GraphQL for GitHub Commit
class GitHubCommitNode(DjangoObjectType):
    class Meta:
        model = GitHubCommit
        filter_fields = {
            'author': ['exact'],
            'committer': ['exact'],
            'htmlUrl': ['exact'],
            'commentsUrl': ['exact'],
            'parents': ['exact'],
            'commit': ['exact']
        }
        interfaces = (relay.Node, )


# GraphQL Mutation to get commits using user and repo names
class GetCommits(relay.ClientIDMutation):

    class Input:
        user_name = graphene.String(required=True)
        repo_name = graphene.String(required=True)

    commits = graphene.List(GitHubCommitNode)
    # https://docs.graphene-python.org/en/latest/relay/mutations/

    @classmethod
    def mutate_and_get_payload(cls, root, info, **input):
        user_name = input['user_name']
        repo_name = input['repo_name']
        commits = get_commits(user_name, repo_name)
        return GetCommits(commits=commits)


# GraphQL Mutation to search for users
# class SearchUsers(relay.ClientIDMutation):

# GraphQL Mutation to search for user's repos
# class SearchUserRepos(relay.ClientIDMutation):
class Query(ObjectType):
    author = relay.Node.Field(AuthorNode)
    all_authors = DjangoFilterConnectionField(AuthorNode)

    commit = relay.Node.Field(CommitNode)
    all_commits = DjangoFilterConnectionField(CommitNode)

    user = relay.Node.Field(UserNode)
    all_users = DjangoFilterConnectionField(UserNode)

    gitHubCommit = relay.Node.Field(GitHubCommitNode)
    all_gitHubCommits = DjangoFilterConnectionField(GitHubCommitNode)


class Mutation(ObjectType):
    get_commits = GetCommits.Field()