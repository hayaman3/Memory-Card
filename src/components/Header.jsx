import React from 'react';
import nbaLogo from '../assets/nba.jpg';

function Header(prop) {
  const { score } = prop;
  return (
    <header>
      <img className="nba" src={nbaLogo} alt="NBA" />
      <div className="header-right">
        <h1>Memory Game</h1>
        <h2>SCORE: {score}</h2>
      </div>
    </header>
  );
}

export default Header;

