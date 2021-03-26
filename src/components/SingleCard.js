import React from 'react';
import { Card } from 'react-bootstrap';
const SingleCard = ({ Obj }) => {
  return (
    <Card className='Col m-2' style={{ width: '18rem' }}>
      <Card.Img variant='top' src={Obj.Poster} />
      <Card.Body>
        <Card.Title>{Obj.Title}</Card.Title>
      </Card.Body>
    </Card>
  );
};

export default SingleCard;
