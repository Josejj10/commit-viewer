import React, { useEffect, useState } from 'react';
import { Accordion, Breadcrumb, Col, Nav, Row, Spinner, Tab } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useLazyLoadQuery } from 'react-relay/hooks';
import CommitCard from '../components/CommitCard';
import { CommitModal } from '../components/CommitModal';
import { SearchCommits } from '../components/SearchCommits';
import { commitsLoadAction } from '../features/commits/actions/load.actions';
import { IState } from '../features/reducers';
import { IGitCommit } from '../interfaces/git-commit.interface';
import { GetCommitsMutation } from '../features/services/commits.service';
import { commitsSetShowTypeAction } from '../features/commits/actions/setType.actions';

const CommitList = ({ commits, loading, selectCommit }: any) => {
  if (loading) return <Spinner animation="border" role="status" />;
  return (
    <Accordion flush>
      {commits.map((commit: IGitCommit, index: number) => (
        <CommitCard
          key={commit.commit.url}
          commit={commit}
          index={index}
          onClickMore={(event: any) => selectCommit(event, commit)}
        />
      ))}
    </Accordion>
  );
};

export const Commits: React.FC = () => {
  const dispatch = useDispatch();
  const { commits, error, loading, repoName, userName, showType } = useSelector((state: IState) => state.commits);
  const [showModal, setshowModal] = useState(false);
  const [currentCommit, setCurrentCommit] = useState(undefined);

  // GraphQL
  let commitsGraphQL = { getCommits: { commits: [] } };
  try {
    commitsGraphQL = useLazyLoadQuery(GetCommitsMutation, { userName, repoName }) as any;
  } catch {
    commitsGraphQL = { getCommits: { commits: [] } };
  }

  useEffect(() => {
    if (commits.length < 0) dispatch(commitsLoadAction.request({ userName, repoName }));
  }, [dispatch, userName, repoName, commits]);

  const onSearchRepo = (data: any) => {
    dispatch(commitsLoadAction.request(data));
  };

  const selectCommit = (event: any, commit: any) => {
    event?.stopPropagation();
    setshowModal(true);
    setCurrentCommit(commit);
  };

  const setShowType = (type: string | null) => {
    if (type) dispatch(commitsSetShowTypeAction(type));
  };

  return (
    <div className="home">
      <Breadcrumb>
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item active>Commits</Breadcrumb.Item>
      </Breadcrumb>

      <SearchCommits onSubmitForm={onSearchRepo} error={error} />
      <Tab.Container id="left-tabs-example" defaultActiveKey={showType} onSelect={k => setShowType(k)}>
        <Row className="mt-5">
          <Col sm={3}>
            <>
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
            </>
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
                <p>Using axios and redux:</p>
                <CommitList commits={commits} loading={loading} selectCommit={selectCommit} />
              </Tab.Pane>
              <Tab.Pane eventKey="django">
                <p>Using a Django backend with GraphQL and relay:</p>
                <CommitList commits={commitsGraphQL.getCommits.commits} loading={loading} selectCommit={selectCommit} />
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
      <CommitModal show={showModal} commit={currentCommit} handleClose={() => setshowModal(false)} />
    </div>
  );
};
