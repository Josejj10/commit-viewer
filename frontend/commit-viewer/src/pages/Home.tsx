import React from 'react';
import { Form, InputGroup, Row } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import HomeCard from '../components/HomeCard';
import { commitsLoadAction } from '../features/commits/actions/load.actions';
import { commitsSetShowTypeAction } from '../features/commits/actions/setType.actions';

export const Home: React.FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const onSearch = (event: any) => {
    event.preventDefault();
    dispatch(
      commitsLoadAction.request({
        userName: event.target.userName.value,
        repoName: event.target.repoName.value,
      })
    );
    history.push('commits');
  };

  const setShowType = (showType: string) => {
    dispatch(commitsSetShowTypeAction(showType));
  };

  const cardsData = [
    {
      id: 1,
      title: 'Fetch Commits using React',
      text: `Show this project's list of commits connecting directly to the GitHub API from React.`,
      link: 'commits',
      onButtonClick: () => setShowType('react'),
    },
    {
      id: 2,
      title: 'Fetch Commits using Django',
      text:
        'Using a Django backend to connect to the GitHub API and transform it into a GraphQL schema that will be sent to this frontend.',
      link: 'commits',
      onButtonClick: () => setShowType('django'),
    },
    {
      id: 3,
      title: 'Search for other repos',
      text: `This project's architecture lets it be flexible and show commits not only from its repository, but from any GitHub repository.`,
      onSearch,
      children: (
        <>
          <Row>
            <Form.Label>GitHub User</Form.Label>
            <InputGroup>
              <InputGroup.Text id="userName-addon">@</InputGroup.Text>
              <Form.Control id="userName" name="userName" type="text" placeholder="Josejj10" />
            </InputGroup>
            <Form.Text id="userName" muted>
              E.g: facebook, fulltimeforce
            </Form.Text>
          </Row>
          <Row className="mt-2">
            <Form.Label>GitHub Repo</Form.Label>
            <InputGroup>
              <InputGroup.Text id="repoName-addon">@</InputGroup.Text>
              <Form.Control id="repoName" name="repoName" type="text" placeholder="commit-viewer" />
            </InputGroup>
            <Form.Text id="repoName" muted>
              E.g: react, rhx
            </Form.Text>
          </Row>
        </>
      ),
    },
  ];

  return (
    <div className="home">
      <h1>Commit Viewer</h1>
      <p>Welcome to Commit Viewer, a project that uses the GitHub API to show its list of commits.</p>
      <div className="d-flex justify-content-around">
        {cardsData.map(card => (
          <HomeCard {...card} key={card.id} />
        ))}
      </div>
      <p className="mt-3">
        This project was made for the FullTimeForce Technical Test. Feel free to contact me at jose.javier@pucp.edu.pe
        should any doubt arise.
      </p>
    </div>
  );
};
