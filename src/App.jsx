import React, { useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';

function App() {
  const [score, setScore] = useState(0);
  const props = [score, setScore];

  return (
    <>
      <Header score={score} />
      <Main props={props} />
    </>
  );
}

export default App;

