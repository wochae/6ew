import React from 'react';

function Time({ defaultDate, message }) {

  return (
    <div>
      <h2>{message}</h2>
      <p>{defaultDate}</p>
    </div>
  );
}

export default Time;