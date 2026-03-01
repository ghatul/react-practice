import React, { forwardRef, useRef } from 'react';

const ChildComponent = forwardRef((props, myRef) => {
  return (
    <div>
      <input /> <span> </span>
      <input ref={myRef} /> <span> {props.name} </span>
      <input /> <span> </span>
    </div>
  );
});

const MyRef = () => {
  const ref = useRef();

  const changeRef = () => {
    ref.current.focus();
    ref.current.style.backgroundColor = 'red';
  };
  return (
    <div>
      <ChildComponent ref={ref} name="Krishna" />
      <button onClick={changeRef}> Chagne</button>
    </div>
  );
};

export default MyRef;
