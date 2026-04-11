import React, { useState } from 'react';

const MyCrudUpdate = () => {
  const [list, setList] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [recordToEdit, setRecordToEdit] = useState('');
  const [editInputVal, setEditInputVal] = useState('');
  const onInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const addToList = () => {
    if (!inputValue) return;
    setList((prev) => [
      ...prev,
      { value: inputValue, id: new Date().getTime() },
    ]);
  };

  const onDelete = (recordToDelete) => {
    const newList = list.filter((record) => record.id !== recordToDelete.id);
    setList([...newList]);
  };

  const recordToEditFun = (recordToEdit) => {
    setRecordToEdit(recordToEdit.id);
    setEditInputVal(recordToEdit.value);
  };

  const onSaveEdit = () => {
    const listToUpdate = [...list];
    const updatedList = listToUpdate.map((record) => {
      if (record.id === recordToEdit) {
        return { ...record, value: editInputVal };
      } else {
        return record;
      }
    });
    setList(updatedList);
    setRecordToEdit('');
  };

  return (
    <div>
      <div>
        <input value={inputValue} onChange={onInputChange} />
        <button onClick={addToList}> Add List </button>
      </div>
      {inputValue}
      <div>
        <ul>
          {list.map((record) => (
            <li key={record.id}>
              {recordToEdit !== record.id ? (
                <>
                  {record.value}
                  <button onClick={() => recordToEditFun(record)}>Edit</button>
                  <button onClick={() => onDelete(record)}>Delete </button>
                </>
              ) : (
                <>
                  <input
                    value={editInputVal}
                    onChange={(e) => {
                      setEditInputVal(e.target.value);
                    }}
                  />
                  <button onClick={() => onSaveEdit()}>Save</button>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MyCrudUpdate;
