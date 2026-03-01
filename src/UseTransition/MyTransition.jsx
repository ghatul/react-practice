import React, { useTransition, useState } from 'react';

const MyTransition = () => {
  const [val, setVal] = useState('');
  const [list, setList] = useState([]);
  const [isPending, startTransition] = useTransition();

  const onInputChange = (e) => {
    setVal(e.target.value);
    startTransition(() => {
      setList([...list, { id: Date.now(), name: e.target.value }]);
    });
  };

  return (
    <div>
      <input value={val} onChange={(e) => onInputChange(e)} />
      {isPending ? (
        <div>'Loading' </div>
      ) : (
        <div>
          {list.map((item) => (
            <li key={item.id}> {item.name} </li>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyTransition;
