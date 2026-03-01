import React, { useCallback, useState } from 'react';

const Abc = React.memo(({ onBtnClick }) => {
  alert('Abc');
  return (
    <div>
      <button onClick={onBtnClick}> Child Abc </button>
    </div>
  );
});

const Pqr = React.memo(({ onBtnClick }) => {
  alert('Pqr');
  return (
    <div>
      <button onClick={onBtnClick}> Child Pqr </button>
    </div>
  );
});

const App = () => {
  const [text, setText] = useState(Date.now());
  const onBtnClickFn = useCallback((e) => {
    e.preventDefault();
    setText(Date.now());
  }, []);
  return (
    <div>
      <h1>{text} </h1>
      <button onClick={() => setText(Date.now())}> Parent </button>
      <Abc onBtnClick={onBtnClickFn} />
      <Pqr onBtnClick={onBtnClickFn} />
    </div>
  );
};

export default App;