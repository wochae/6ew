import React from 'react';

function Time({ today }) {
  return (
    <div>
      <h2>What Time is it?</h2>
      <p>{today}</p>
    </div>
  );
}

export default Time;