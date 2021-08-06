import React from 'react';
import { Accordion, Alert, Button, Col, Form, InputGroup, Row } from 'react-bootstrap';

export const SearchCommits = ({ onSubmitForm, error }: any) => {
  const onSubmit = (event: any) => {
    event.preventDefault();
    onSubmitForm({ userName: event.target.userName.value, repoName: event.target.repoName.value });
  };

  return (
    <Accordion defaultActiveKey="accordion-search" className="my-3">
      <Accordion.Item eventKey="accordion-search">
        <Accordion.Header>View a different repository</Accordion.Header>
        <Accordion.Body>
          <p>
            {`This project's architecture lets it be flexible and show commits not only from its repository, but from
          any GitHub repository. Give it a try!`}
          </p>
          <Form onSubmit={onSubmit}>
            <Row>
              <Col xs={4}>
                <Form.Label>GitHub User</Form.Label>
                <InputGroup>
                  <InputGroup.Text id="userName-addon">@</InputGroup.Text>
                  <Form.Control id="userName" name="userName" type="text" placeholder="Josejj10" />
                </InputGroup>
                <Form.Text id="userName" muted>
                  E.g: facebook, fulltimeforce
                </Form.Text>
              </Col>
              <Col>
                <Form.Label>GitHub Repo</Form.Label>
                <InputGroup>
                  <InputGroup.Text id="repoName-addon">@</InputGroup.Text>
                  <Form.Control id="repoName" name="repoName" type="text" placeholder="commit-viewer" />
                </InputGroup>
                <Form.Text id="repoName" muted>
                  E.g: react, rhx
                </Form.Text>
              </Col>
              <Col className="align-self-center" xs={3}>
                <Button variant="primary" type="submit" className="mt-2">
                  Show me this repo
                </Button>
              </Col>
            </Row>
          </Form>
          <p className="mt-2">
            Search for GitHub users{' '}
            <a target="_blank" rel="noreferrer" href="https://github.com/search?type=users">
              here
            </a>{' '}
            and GitHub repos{' '}
            <a target="_blank" rel="noreferrer" href="https://github.com/search?type=repos">
              here
            </a>
            .
          </p>
          {error && <Alert variant="danger">Error: {error.data.message}</Alert>}
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};
