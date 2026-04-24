import React, { useMemo, useState } from 'react';

const userList = new Array(1000).fill(0).map((item, index) => ({
  id: index,
  name: `user ${index}`,
}));

const App = () => {
  const [inputSearch, setInputSearch] = useState('');
  const [count, setCount] = useState(0);

  const searchedList = useMemo(() => {
    console.log('i ran');
    return userList.filter((user) =>
      user.name.toLowerCase().includes(inputSearch.toLowerCase())
    );
  }, [inputSearch]);

  return (
    <div>
      <div>
        <label> My Input: </label>
        <input
          onChange={(e) => {
            setInputSearch(e.target.value);
          }}
        />
      </div>
      <div>
        <label> My Count: </label>
        <button
          onClick={(e) => {
            setCount((prev) => (prev += 1));
          }}
        >
          Add
        </button>
        <label> {count} </label>
      </div>
      <ul>
        {searchedList &&
          searchedList.map((item) => <li key={item.name}> {item.name} </li>)}
      </ul>
    </div>
  );
};

export default App;
