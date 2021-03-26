import React from 'react';
import { Row } from 'react-bootstrap';
// import components
import Cards from './Cards';

const Home = () => {
  return (
    <div>
      {array.map((item) => (
        <Row className='d-flex justify-content-center align-items-center m-5'>
          <Cards item={item} />
        </Row>
      ))}
    </div>
  );
};

export default Home;
