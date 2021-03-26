import React from 'react';
import { Card, Col } from 'react-bootstrap';
const SingleCard = ({ item }) => {
  return (
    <Col>
      <Card className='' style={{ width: '15rem' }}>
        <Card.Img variant='top' src={item.Poster} />
      </Card>
    </Col>
  );
};

export default SingleCard;
