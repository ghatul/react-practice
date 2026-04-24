import React, { useState } from 'react';
import './style.css';

const MyCrudTable = () => {
  const [list, setList] = useState([]);
  const [nameInput, setNameInput] = useState('');
  const [lastNameInput, setLastNameInput] = useState('');
  const [recordToEdit, setRecordToEdit] = useState({});

  const onAdd = () => {
    if (nameInput && lastNameInput) {
      setNameInput('');
      setLastNameInput('');
      setList([
        ...list,
        { name: nameInput, lastName: lastNameInput, id: Date.now() },
      ]);
    }
  };

  const onEdit = (e, record) => {
    setRecordToEdit(record);
  };

  const onSave = () => {
    setList((prev) => {
      const neList = prev.map((item) => {
        if (item.id === recordToEdit.id) {
          return { ...recordToEdit };
        } else {
          return item;
        }
      });
      return neList;
    });
    setRecordToEdit({});
  };

  const onDelete = (e, recordToDelete) => {
    setList((prev) => {
      const neList = prev.filter((item) => item.id !== recordToDelete.id);
      return neList;
    });
  };

  return (
    <table>
      <tr>
        <th> Name</th> <th> Last Name</th>
      </tr>
      {list &&
        list.map((record) => (
          <>
            {recordToEdit.id === record.id ? (
              <tr key={record.id}>
                <td className="cell">
                  <input
                    value={recordToEdit.name}
                    onChange={(e) => {
                      setRecordToEdit({
                        ...recordToEdit,
                        name: e.target.value,
                      });
                    }}
                  />
                </td>
                <td>
                  <input
                    value={recordToEdit.lastName}
                    onChange={(e) => {
                      setRecordToEdit({
                        ...recordToEdit,
                        lastName: e.target.value,
                      });
                    }}
                  />
                </td>
                <td>
                  <button onClick={(e) => onSave(e, record)}> Save </button>
                </td>
                <td>
                  <button
                    onClick={(e) => {
                      setRecordToEdit({});
                    }}
                  >
                    Cancel
                  </button>
                </td>
              </tr>
            ) : (
              <tr key={record.id}>
                <td>{record.name} </td> <td>{record.lastName} </td>
                <td>
                  <button onClick={(e) => onEdit(e, record)}> Edit </button>
                </td>
                <td>
                  <button onClick={(e) => onDelete(e, record)}> Delete </button>
                </td>
              </tr>
            )}
          </>
        ))}
      <tr>
        <td>
          <input
            value={nameInput}
            onChange={(e) => setNameInput(e.target.value)}
          />
        </td>
        <td>
          <input
            value={lastNameInput}
            onChange={(e) => setLastNameInput(e.target.value)}
          />
        </td>
        <td>
          <button onClick={onAdd}> Add </button>
        </td>
      </tr>
    </table>
  );
};

const App = () => {
  return (
    <div>
      <MyCrudTable />
    </div>
  );
};

export default App;
