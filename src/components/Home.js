import React from 'react';
import { Row, Container } from 'react-bootstrap';
// import components
import Cards from './Cards';
import { v4 as uuidv4 } from 'uuid';

// const Home = ({ movies, queriedMovies }) => {
//   if (queriedMovies.length > 0) {
//     return (
//       <Container fluid>
//         {queriedMovies.map((movie) => (
//           <Row className='overflow-auto flex-nowrap'>
//             <Cards movie={movie} />
//           </Row>
//         ))}
//       </Container>
//     );
//   } else {
//     return (
//       <Container fluid>
//         {movies.map((movie) => (
//           <Row className='overflow-auto flex-nowrap'>
//             <Cards movie={movie} />
//           </Row>
//         ))}
//       </Container>
//     );
//   }
// };

const Home = ({ movies, queriedMovies }) => {
  return (
    <Container fluid>
      {movies.map((movie) => (
        <Row key={uuidv4()} className='overflow-auto flex-nowrap'>
          <Cards movie={movie} />
        </Row>
      ))}
    </Container>
  );
};

export default Home;
