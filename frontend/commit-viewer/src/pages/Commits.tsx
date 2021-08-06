import React, { useEffect, useState } from 'react';
import { Accordion, Breadcrumb, Col, Nav, Row, Spinner, Tab } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import CommitCard from '../components/CommitCard';
import CommitModal from '../components/CommitModal';
import { SearchCommits } from '../components/SearchCommits';
import { commitsLoadAction } from '../features/commits/actions/load.actions';
import { IState } from '../features/reducers';
import { IGitCommit } from '../interfaces/git-commit.interface';

export const Commits: React.FC = () => {
  const dispatch = useDispatch();
  const { commits, error, loading, repoName, userName } = useSelector((state: IState) => state.commits);
  const [showModal, setshowModal] = useState(false);
  const [currentCommit, setCurrentCommit] = useState(undefined);

  useEffect(() => {
    if (commits.length < 1) dispatch(commitsLoadAction.request({ userName, repoName }));
  }, [dispatch, userName, repoName, commits]);

  const onSearchRepo = (data: any) => {
    dispatch(commitsLoadAction.request(data));
  };

  const selectCommit = (commit: any) => {
    setshowModal(true);
    setCurrentCommit(commit);
  };

  const CommitList = () => {
    if (loading) return <Spinner animation="border" role="status" />;
    return (
      <Accordion>
        {commits.map((commit: IGitCommit, index: number) => (
          <CommitCard commit={commit} index={index} onClickMore={() => selectCommit(commit)} />
        ))}
      </Accordion>
    );
  };

  return (
    <div className="home">
      <Breadcrumb>
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item active>Commits</Breadcrumb.Item>
      </Breadcrumb>
      <SearchCommits onSubmitForm={onSearchRepo} error={error} />
      <Row>
        <Col>
          <p className="my-0">Currently viewing</p>
          <h2>{repoName}</h2>
          <h5 className="mb-1">by: {userName}</h5>
          <p className="mb-4">
            View it on{' '}
            <a target="_blank" rel="noreferrer" href={`https://github.com/${userName}/${repoName}`}>
              GitHub
            </a>
            .
          </p>
        </Col>
      </Row>
      <Tab.Container id="left-tabs-example" defaultActiveKey="react">
        <Row>
          <Col sm={3}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="react">Using React</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="django">Using Django</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              <Tab.Pane eventKey="react">
                <CommitList />
              </Tab.Pane>
              <Tab.Pane eventKey="django">
                <CommitList />
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
      <CommitModal show={showModal} commit={currentCommit} handleClose={() => setshowModal(false)} />
    </div>
  );
};
