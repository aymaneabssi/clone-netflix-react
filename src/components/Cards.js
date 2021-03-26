import React from 'react';
import SingleCard from './SingleCard';
const Cards = ({ movie }) => {
  return (
    <>
      {movie.map((item) => (
        <SingleCard item={item} />
      ))}
    </>
  );
};

export default Cards;
