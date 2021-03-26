import React from 'react';
import { Row, Container } from 'react-bootstrap';
// import components
import Cards from './Cards';


const Home = ({ movies, queriedMovies }) => {
  if (queriedMovies.length > 0) {
    return (
      <Container fluid>
        {queriedMovies.map((movie) => (
          <Row className='overflow-auto flex-nowrap'>
            <Cards movie={movie} />
          </Row>
        ))}
      </Container>
    );
  } else {
    return (
      <Container fluid>
        {movies.map((movie) => (
          <Row className='overflow-auto flex-nowrap'>
            <Cards movie={movie} />
          </Row>
        ))}
      </Container>
    );
  }


export default Home;
