import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';

const SingleCard = ({ item }) => {
  return (
    <Col key={uuidv4()}>
      <Card className='mb-1' style={{ width: '8rem' }}>
        <Card.Img variant='top' src={item.Poster} />
      </Card>
    </Col>
  );
};

export default SingleCard;
