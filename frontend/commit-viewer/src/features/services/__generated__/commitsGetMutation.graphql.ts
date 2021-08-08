/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type commitsGetMutationVariables = {
    userName: string;
    repoName: string;
};
export type commitsGetMutationResponse = {
    readonly getCommits: {
        readonly commits: ReadonlyArray<{
            readonly author: {
                readonly name: string;
                readonly gitId: string;
                readonly avatarUrl: string;
                readonly apiUrl: string;
                readonly htmlUrl: string;
                readonly reposUrl: string;
                readonly type: string;
            } | null;
            readonly committer: {
                readonly name: string;
                readonly gitId: string;
                readonly avatarUrl: string;
                readonly apiUrl: string;
                readonly htmlUrl: string;
                readonly reposUrl: string;
                readonly type: string;
            } | null;
            readonly htmlUrl: string;
            readonly commentsUrl: string;
            readonly commit: {
                readonly author: {
                    readonly name: string;
                    readonly email: string;
                    readonly date: string;
                };
                readonly message: string;
                readonly treeUrl: string;
                readonly url: string;
                readonly commentCount: number;
            };
            readonly parents: {
                readonly edges: ReadonlyArray<{
                    readonly node: {
                        readonly url: string;
                        readonly htmlUrl: string;
                    } | null;
                } | null>;
            };
        } | null> | null;
    } | null;
};
export type commitsGetMutation = {
    readonly response: commitsGetMutationResponse;
    readonly variables: commitsGetMutationVariables;
};



/*
mutation commitsGetMutation(
  $userName: String!
  $repoName: String!
) {
  getCommits(input: {userName: $userName, repoName: $repoName}) {
    commits {
      author {
        name
        gitId
        avatarUrl
        apiUrl
        htmlUrl
        reposUrl
        type
        id
      }
      committer {
        name
        gitId
        avatarUrl
        apiUrl
        htmlUrl
        reposUrl
        type
        id
      }
      htmlUrl
      commentsUrl
      commit {
        author {
          name
          email
          date
          id
        }
        message
        treeUrl
        url
        commentCount
        id
      }
      parents {
        edges {
          node {
            url
            htmlUrl
            id
          }
        }
      }
      id
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "repoName"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "userName"
},
v2 = [
  {
    "fields": [
      {
        "kind": "Variable",
        "name": "repoName",
        "variableName": "repoName"
      },
      {
        "kind": "Variable",
        "name": "userName",
        "variableName": "userName"
      }
    ],
    "kind": "ObjectValue",
    "name": "input"
  }
],
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "gitId",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "avatarUrl",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "apiUrl",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "htmlUrl",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "reposUrl",
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "type",
  "storageKey": null
},
v10 = [
  (v3/*: any*/),
  (v4/*: any*/),
  (v5/*: any*/),
  (v6/*: any*/),
  (v7/*: any*/),
  (v8/*: any*/),
  (v9/*: any*/)
],
v11 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "commentsUrl",
  "storageKey": null
},
v12 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "email",
  "storageKey": null
},
v13 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "date",
  "storageKey": null
},
v14 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "message",
  "storageKey": null
},
v15 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "treeUrl",
  "storageKey": null
},
v16 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "url",
  "storageKey": null
},
v17 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "commentCount",
  "storageKey": null
},
v18 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v19 = [
  (v3/*: any*/),
  (v4/*: any*/),
  (v5/*: any*/),
  (v6/*: any*/),
  (v7/*: any*/),
  (v8/*: any*/),
  (v9/*: any*/),
  (v18/*: any*/)
];
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "commitsGetMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "GetCommitsPayload",
        "kind": "LinkedField",
        "name": "getCommits",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "GitHubCommitNode",
            "kind": "LinkedField",
            "name": "commits",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "UserNode",
                "kind": "LinkedField",
                "name": "author",
                "plural": false,
                "selections": (v10/*: any*/),
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "UserNode",
                "kind": "LinkedField",
                "name": "committer",
                "plural": false,
                "selections": (v10/*: any*/),
                "storageKey": null
              },
              (v7/*: any*/),
              (v11/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "CommitNode",
                "kind": "LinkedField",
                "name": "commit",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "AuthorNode",
                    "kind": "LinkedField",
                    "name": "author",
                    "plural": false,
                    "selections": [
                      (v3/*: any*/),
                      (v12/*: any*/),
                      (v13/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v14/*: any*/),
                  (v15/*: any*/),
                  (v16/*: any*/),
                  (v17/*: any*/)
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "GitHubCommitParentNodeConnection",
                "kind": "LinkedField",
                "name": "parents",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "GitHubCommitParentNodeEdge",
                    "kind": "LinkedField",
                    "name": "edges",
                    "plural": true,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "GitHubCommitParentNode",
                        "kind": "LinkedField",
                        "name": "node",
                        "plural": false,
                        "selections": [
                          (v16/*: any*/),
                          (v7/*: any*/)
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Mutations",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "commitsGetMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "GetCommitsPayload",
        "kind": "LinkedField",
        "name": "getCommits",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "GitHubCommitNode",
            "kind": "LinkedField",
            "name": "commits",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "UserNode",
                "kind": "LinkedField",
                "name": "author",
                "plural": false,
                "selections": (v19/*: any*/),
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "UserNode",
                "kind": "LinkedField",
                "name": "committer",
                "plural": false,
                "selections": (v19/*: any*/),
                "storageKey": null
              },
              (v7/*: any*/),
              (v11/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "CommitNode",
                "kind": "LinkedField",
                "name": "commit",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "AuthorNode",
                    "kind": "LinkedField",
                    "name": "author",
                    "plural": false,
                    "selections": [
                      (v3/*: any*/),
                      (v12/*: any*/),
                      (v13/*: any*/),
                      (v18/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v14/*: any*/),
                  (v15/*: any*/),
                  (v16/*: any*/),
                  (v17/*: any*/),
                  (v18/*: any*/)
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "GitHubCommitParentNodeConnection",
                "kind": "LinkedField",
                "name": "parents",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "GitHubCommitParentNodeEdge",
                    "kind": "LinkedField",
                    "name": "edges",
                    "plural": true,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "GitHubCommitParentNode",
                        "kind": "LinkedField",
                        "name": "node",
                        "plural": false,
                        "selections": [
                          (v16/*: any*/),
                          (v7/*: any*/),
                          (v18/*: any*/)
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              (v18/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "57982fececf46277c1a8fba6f5d09263",
    "id": null,
    "metadata": {},
    "name": "commitsGetMutation",
    "operationKind": "mutation",
    "text": "mutation commitsGetMutation(\n  $userName: String!\n  $repoName: String!\n) {\n  getCommits(input: {userName: $userName, repoName: $repoName}) {\n    commits {\n      author {\n        name\n        gitId\n        avatarUrl\n        apiUrl\n        htmlUrl\n        reposUrl\n        type\n        id\n      }\n      committer {\n        name\n        gitId\n        avatarUrl\n        apiUrl\n        htmlUrl\n        reposUrl\n        type\n        id\n      }\n      htmlUrl\n      commentsUrl\n      commit {\n        author {\n          name\n          email\n          date\n          id\n        }\n        message\n        treeUrl\n        url\n        commentCount\n        id\n      }\n      parents {\n        edges {\n          node {\n            url\n            htmlUrl\n            id\n          }\n        }\n      }\n      id\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '411e04e34965a67c2cfbab8a77212433';
export default node;
