import React, { useState } from 'react';
import { createPortal } from 'react-dom';
const MyModal = ({ children, isOpen, onClose }) => {
  if (!isOpen) return null;
  return createPortal(
    <div
      style={{
        position: 'fixed',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          border: '1px solid white',
          padding: '20px',
          backgroundColor: 'white',
          borderRadius: '5px',
        }}
      >
        {children}
        <button onClick={onClose}> Close</button>
      </div>
    </div>,
    document.body
  );
};

const MyPortal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onPortalChange = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div>
      <MyModal isOpen={isOpen} onClose={onPortalChange}>
        <div> My portal</div>
      </MyModal>
      <button onClick={onPortalChange}> Open</button>
    </div>
  );
};
export default MyPortal;
