import React from 'react';
// import React, { useEffect, useState } from 'react';

function Modal({ setShow, setScore }) {
  const hideModal = () => {
    setShow(false);
    setScore(0);
  };
  return (
    <div className="modal">
      <div className="modal-content">
        <h1>You Win</h1>
        <button
          className="modal-button"
          type="button"
          onClick={hideModal}
        >
          Play Again?
        </button>
      </div>
    </div>
  );
}

export default Modal;

