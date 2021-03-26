import React from 'react';
import { Row, Container } from 'react-bootstrap';
// import components
import Cards from './Cards';

const Home = ({ movies }) => {
  return (
    <Container fluid>
      {movies.map((movie) => (
        <Row className='overflow-auto flex-nowrap my-2'>
          <Cards movie={movie} />
        </Row>
      ))}
    </Container>
  );
};

export default Home;
