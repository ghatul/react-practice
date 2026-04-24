import React from 'react';
import './style.css';

const MyTable = ({ list }) => {
  return (
    <div className="myCLas">
      <table>
        <tr>
          <th> Name </th> <th> Last Name</th> <th> Mobile Number</th>
        </tr>
        {list.map((item, index) => (
          <tr key={index}>
            <td> {item.name}</td> <td> {item.lastName} </td>{' '}
            <td> {item.mobile}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

const App = () => {
  const list = [
    { name: 'krishna', lastName: 'ghatul', mobile: '9975696181' },
    { name: 'krishna', lastName: 'ghatul', mobile: '8748848393' },
  ];
  return <MyTable list={list} />;
};

export default App;
