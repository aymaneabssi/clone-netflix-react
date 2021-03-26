import React from 'react';
import { Card, Col } from 'react-bootstrap';
const SingleCard = ({ item }) => {
  return (
    <Col>
      <Card className='mb-1' style={{ width: '8rem' }}>
        <Card.Img variant='top' src={item.Poster} />
      </Card>
    </Col>
  );
};

export default SingleCard;
