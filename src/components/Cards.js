import React from 'react';
import SingleCard from './SingleCard';
const Cards = ({ item }) => {
  return (
    <>
      {item.map((Obj) => (
        <SingleCard Obj={Obj} />
      ))}
    </>
  );
};

export default Cards;
