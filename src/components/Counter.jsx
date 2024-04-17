import React from 'react';

const Counter = ({ good, neutral, bad, total }) => {
  return (
    <>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
    </>
  );
};

export default Counter;
