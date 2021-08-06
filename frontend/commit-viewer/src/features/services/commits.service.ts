import { https } from '../../utilities/https';
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
}
