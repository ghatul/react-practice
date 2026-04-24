import React, { memo, useState, useRef } from 'react';

const ChildComponent = memo(({ name }) => {
  const childRef = useRef({});
  if (!childRef?.current || !childRef.current?.value) {
    childRef.current.value = 0;
  }
  childRef.current.value += 1;
  console.log('rendered');
  return (
    <div>
      <div>Input Value:{name} </div>
      <div>Child Component render count: {childRef.current.value} </div>
    </div>
  );
});

function MyMemo() {
  const [count, setCount] = useState(0);
  const [inputText, setInputText] = useState('');
  const changeCount = () => {
    setCount((prev) => (prev += 1));
  };

  return (
    <div>
      <h3>Count: {count} </h3>
      <button onClick={changeCount}> Increase Count</button>
      <input
        onChange={(e) => {
          setInputText(e.target.value);
        }}
      />
      <ChildComponent name={inputText} />
    </div>
  );
}

export default MyMemo;
