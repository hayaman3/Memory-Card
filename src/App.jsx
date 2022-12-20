import React, { useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Modal from './components/Modal';

function App() {
  const [score, setScore] = useState(0);
  const [show, setShow] = useState(false);

  return (
    <>
      <Header score={score} />
      <Main score={score} setScore={setScore} setShow={setShow} />
      {show ? <Modal setScore={setScore} setShow={setShow} /> : null}
    </>
  );
}

export default App;

