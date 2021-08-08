import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Button, Card, Col, Image, Modal, Row, Spinner, Tab, Tabs } from 'react-bootstrap';
import { IGitCommit } from '../interfaces/git-commit.interface';
import { IUser } from '../interfaces/user.interface';

interface CommitModalProps {
  commit: IGitCommit | undefined;
  show: boolean;
  handleClose: any;
}

export const UserCard = ({ user }: { user: IUser }) => (
  <Card>
    <Card.Header>Pushed to GitHub by</Card.Header>
    <Card.Body>
      <Row>
        <Col xs={1} className="me-2">
          <Image
            rounded
            src={user?.avatarUrl || 'https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg'}
            alt="author-avatar"
            width={100}
            className="my-0"
          />
        </Col>
        <Col className="mx-3 my-0">
          <h4 className="text-dark">
            {user?.htmlUrl ? (
              <a href={user?.htmlUrl} rel="noreferrer" target="_blank">
                {user?.name || 'GitHub API returned null'}
              </a>
            ) : (
              user?.name || 'GitHub API returned null'
            )}
          </h4>
          {user?.apiUrl && <p className="my-0">API Url: {user.apiUrl}</p>}
          {user?.gitId && <p className="my-0">Git Id: {user.gitId}</p>}
        </Col>
      </Row>
    </Card.Body>
  </Card>
);

const parentsList = (parents: any[]) => {
  return parents.map((par: any, index: number) => (
    <Card key={`parent-${par.url}`}>
      <Card.Header>Parent #{index}</Card.Header>
      <Card.Body>
        Api: {par.url || par.node.url}
        <br />
        <a href={par.htmlUrl || par.node.htmlUrl} target="_blank" rel="noreferrer">
          Show in GitHub
        </a>
      </Card.Body>
    </Card>
  ));
};

export const CommitModal = ({ commit, show, handleClose }: CommitModalProps) => {
  return (
    <Modal show={show} onHide={handleClose} size="xl">
      {commit === undefined ? (
        <Spinner animation="border" role="status" />
      ) : (
        <>
          <Modal.Header closeButton>
            <Image
              rounded
              src={
                commit.author.avatarUrl ||
                'https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg'
              }
              alt="author-avatar"
              width={32}
              className="my-0"
            />
            <Col className="mx-3 my-0">
              <h6 className="text-dark">
                {commit?.author?.name || commit?.commit?.author?.name || 'API returned null author'}
              </h6>
              <p className="my-0">{commit.commit.author.date}</p>
            </Col>
          </Modal.Header>
          <Modal.Body>
            <Tabs defaultActiveKey="message" id="modal-tabs" className="my-1">
              <Tab className="py-3 px-2" eventKey="author" title="Author">
                <>
                  <UserCard user={commit.author} />
                  <Card className="mt-3">
                    <Card.Header>Git commited by</Card.Header>
                    <Card.Body>
                      <Row>
                        <Col className="mx-3 my-0">
                          <h4 className="text-dark">
                            {commit?.commit?.author?.name || 'GitHub API returned null author'}
                          </h4>
                          {commit?.commit?.author?.email && (
                            <p className="my-0">Email: {commit?.commit?.author?.email}</p>
                          )}
                        </Col>
                      </Row>
                    </Card.Body>
                    <Card.Footer>*Git is different from GitHub</Card.Footer>
                  </Card>
                </>
              </Tab>
              <Tab className="py-3 px-2" eventKey="committer" title="Committer">
                <UserCard user={commit.committer} />
                For more info about a git committer you can visit this{' '}
                <a
                  href="https://stackoverflow.com/questions/18750808/difference-between-author-and-committer-in-git"
                  target="_blank"
                  rel="noreferrer"
                >
                  link
                </a>
                .
              </Tab>
              <Tab className="py-3 px-2" eventKey="comments" title="Comments">
                API URL: {commit.commentsUrl}
              </Tab>
              <Tab className="py-3 px-2" eventKey="message" title="Message">
                <ReactMarkdown>{commit.commit.message}</ReactMarkdown>
              </Tab>
              <Tab className="py-3 px-2" eventKey="parents" title="Parents">
                This commit was based on:
                {(commit?.parents as any)?.edges
                  ? parentsList((commit?.parents as any).edges)
                  : parentsList(commit?.parents)}
                For more info about a git committer you can visit this{' '}
                <a
                  href="https://stackoverflow.com/questions/38239521/what-is-the-parent-of-a-git-commit-how-can-there-be-more-than-one-parent-to-a-g"
                  target="_blank"
                  rel="noreferrer"
                >
                  link
                </a>
                .
              </Tab>
            </Tabs>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="info" target="_blank" href={commit.htmlUrl}>
              Compare Changes in Github
            </Button>
          </Modal.Footer>
        </>
      )}
    </Modal>
  );
};
