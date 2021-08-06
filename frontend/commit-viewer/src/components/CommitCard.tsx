import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Accordion, Button, Col, Image, Row } from 'react-bootstrap';
import { IGitCommit } from '../interfaces/git-commit.interface';

interface CommitCardProps {
  commit: IGitCommit;
  index: number;
  onClickMore: any;
}

const CommitCard = ({ commit, index, onClickMore }: CommitCardProps) => {
  return (
    <Accordion.Item eventKey={`commit-${index}`}>
      <Accordion.Header>
        <Col>
          <Row>
            <Col xs={1}>
              <Image rounded src={commit.author.avatarUrl} alt="author-avatar" width={50} />
            </Col>
            <Col>
              <Row>
                <h4 className="text-dark">{commit.author.name}</h4>
              </Row>
              <h6 className="mb-1 text-secondary">{commit.commit.author.date}</h6>
            </Col>
          </Row>
          <Row>
            <Col>
              <br />
              <p className="my-0">
                {commit.commit.message.length > 80
                  ? `${commit.commit.message.substring(0, 80)}...`
                  : commit.commit.message}
              </p>
            </Col>
          </Row>
        </Col>
      </Accordion.Header>
      <Accordion.Body>
        <ReactMarkdown>{commit.commit.message}</ReactMarkdown>
        <Button onClick={onClickMore}>More data</Button>
      </Accordion.Body>
    </Accordion.Item>
  );
};

export default CommitCard;
