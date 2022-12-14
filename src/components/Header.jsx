import React from 'react';

function Header(score) {
  console.log(score);
  return (
    <header>
      <h1>NBA TOP 16 Memory Game</h1>
      {/* <h2>{score}</h2> */}
    </header>
  );
}

export default Header;

