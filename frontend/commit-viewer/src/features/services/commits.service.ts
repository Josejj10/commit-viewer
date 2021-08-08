import { Environment, Network, RecordSource, Store } from 'relay-runtime';
import { graphql } from 'babel-plugin-relay/macro';
import { httpDjango, https } from '../../utilities/https';
import { GitCommitModel, IGitCommit } from '../../interfaces/git-commit.interface';

export class CommitsService {
  static getAll = async ({
    userName,
    repoName,
  }: {
    userName: string;
    repoName: string;
  }): Promise<{ userName: string; repoName: string; commits: IGitCommit[] }> => {
    const rawCommits = await https.get(`/repos/${userName}/${repoName}/commits`);

    const commits = (rawCommits as any).map((commit: any) => new GitCommitModel(commit));

    return Promise.resolve({ userName, repoName, commits });
  };

  static getGraphQL = async (params: any, variables: any): Promise<any> => {
    const rawData = await httpDjango.post(
      '/graphql/',
      JSON.stringify({
        query: params.text,
        variables,
      })
    );

    return rawData;
  };
}

export const RelayEnvironment = new Environment({
  network: Network.create(CommitsService.getGraphQL),
  store: new Store(new RecordSource()),
});

export const GetCommitsMutation = graphql`
  mutation commitsGetMutation($userName: String!, $repoName: String!) {
    getCommits(input: { userName: $userName, repoName: $repoName }) {
      commits {
        author {
          name
          gitId
          avatarUrl
          apiUrl
          htmlUrl
          reposUrl
          type
        }
        committer {
          name
          gitId
          avatarUrl
          apiUrl
          htmlUrl
          reposUrl
          type
        }
        htmlUrl
        commentsUrl
        commit {
          author {
            name
            email
            date
          }
          message
          treeUrl
          url
          commentCount
        }
        parents {
          edges {
            node {
              url
              htmlUrl
            }
          }
        }
      }
    }
  }
`;
