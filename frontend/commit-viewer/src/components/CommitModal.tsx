import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Button, Col, Image, Modal, Spinner, Tab, Tabs } from 'react-bootstrap';
import { IGitCommit } from '../interfaces/git-commit.interface';

interface CommitModalProps {
  commit: IGitCommit | undefined;
  show: boolean;
  handleClose: any;
}

const CommitModal = ({ commit, show, handleClose }: CommitModalProps) => {
  return (
    <Modal show={show} onHide={handleClose} size="xl">
      {commit === undefined ? (
        <Spinner animation="border" role="status" />
      ) : (
        <>
          <Modal.Header closeButton>
            <Image rounded src={commit.author.avatarUrl} alt="author-avatar" width={32} className="my-0" />
            <Col className="mx-3 my-0">
              <h6 className="text-dark mb-0">{commit.author.name}</h6>
              <p className="my-0">{commit.commit.author.date}</p>
            </Col>
          </Modal.Header>
          <Modal.Body>
            <Tabs defaultActiveKey="message" id="modal-tabs" className="my-1">
              <Tab className="py-3 px-2" eventKey="author" title="Author">
                <Col>{commit.author.htmlUrl}</Col>
              </Tab>
              <Tab className="py-3 px-2" eventKey="committer" title="Committer">
                <Col>{commit.committer.htmlUrl}</Col>
              </Tab>
              <Tab className="py-3 px-2" eventKey="comments" title="Comments">
                asfasfsaf
              </Tab>
              <Tab className="py-3 px-2" eventKey="message" title="Message">
                <ReactMarkdown>{commit.commit.message}</ReactMarkdown>
              </Tab>
              <Tab className="py-3 px-2" eventKey="parents" title="Parents">
                asfasfsaf
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

export default CommitModal;
