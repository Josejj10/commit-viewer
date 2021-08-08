import React from 'react';
import { Button, Card, Form } from 'react-bootstrap';

interface HomeCardProps {
  title?: string;
  text?: string;
  link?: string;
  children?: React.ReactNode;
  onSearch?: any;
  onButtonClick?: any;
}

const HomeCard = ({ title, text, link, children, onSearch, onButtonClick }: HomeCardProps) => {
  return (
    <Card className="" border="primary" style={{ width: '20rem' }}>
      <Card.Header>
        <Card.Title>{title}</Card.Title>
      </Card.Header>
      <Card.Body>
        <Card.Text>{text}</Card.Text>
      </Card.Body>
      {children ? (
        <Form onSubmit={onSearch}>
          <Card.Body>{children}</Card.Body>
          <Card.Footer>
            <Button variant="primary" type="submit">
              Try it out!
            </Button>
          </Card.Footer>
        </Form>
      ) : (
        <Card.Footer>
          <Button variant="primary" href={link} onClick={onButtonClick}>
            Try it out!
          </Button>
        </Card.Footer>
      )}
    </Card>
  );
};

HomeCard.defaultProps = {
  title: '',
  text: '',
  link: '',
  children: '',
  onSearch: () => undefined,
  onButtonClick: () => undefined,
};

export default HomeCard;
