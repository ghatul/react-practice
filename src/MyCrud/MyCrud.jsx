import React, { useState } from 'react';

const MyCrud = () => {
  const [inputValue, setInputValue] = useState('');
  const [list, setList] = useState([]);
  const [idToEdit, setIdToEdit] = useState('');
  const [valueToEdit, setValueToEdit] = useState('');

  const onInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const addToList = () => {
    if (!inputValue) return;
    setList([...list, { id: Date.now(), name: inputValue }]);
    setInputValue('');
  };

  const removeFromList = (id) => {
    const newList = list.filter((item) => item.id !== id);
    setList([...newList]);
  };

  const editFromList = (item) => {
    setIdToEdit(item.id);
    setValueToEdit(item.name);
  };

  const saveEditValue = () => {
    if (!idToEdit) return;
    const editList = list.map((item) => ({
      ...item,
      name: idToEdit === item.id ? valueToEdit : item.name,
    }));
    setList(editList);
    setIdToEdit('');
    setValueToEdit('');
  };

  return (
    <div>
      <h1> CRUD </h1>
      <input value={inputValue} onChange={onInputChange} />
      <button onClick={addToList}> Add </button>
      <div>
        <ol>
          {list.map((listItem) => (
            <li key={listItem.id}>
              {idToEdit && idToEdit === listItem.id ? (
                <input
                  value={valueToEdit}
                  onChange={(e) => setValueToEdit(e.target.value)}
                />
              ) : (
                <span>{listItem.name}</span>
              )}
              <button onClick={() => removeFromList(listItem.id)}>
                Delete
              </button>
              {idToEdit !== listItem.id && (
                <button onClick={() => editFromList(listItem)}>Edit</button>
              )}
              {idToEdit && idToEdit === listItem.id && (
                <button onClick={() => saveEditValue()}>Save</button>
              )}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default MyCrud;
