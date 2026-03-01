import React, { useReducer } from 'react';

const initialState = {
  name: '',
  address: '',
  mobileNumber: '',
};

const initializer = (initialValue) => {
  console.log("Initializer called only once");
  return initialValue;
};

const reducerFunction = (state, action) => {
  switch (action.type) {
    case 'name':
      return { ...state, name: action.value };
    case 'address':
      return { ...state, address: action.value };
    case 'mobileNumber':
      return { ...state, mobileNumber: action.value };
    case 'RESET':
      return initialState;
    default:
      return state;
  }
};

const MyUseReducer = () => {
  const [formState, dispatch] = useReducer(reducerFunction, initialState, initializer);
  const inputChange = (e) => {
    e.preventDefault();
    dispatch({ type: e.target.name, value: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formState);
    dispatch({ type: 'RESET' });
  };

  return (
    <div>
      <h1> My Form</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            Name:
            <input
              value={formState.name}
              name="name"
              onChange={(e) => inputChange(e)}
            />
          </div>
          <div>
            Address:
            <input
              value={formState.address}
              name="address"
              onChange={(e) => inputChange(e)}
            />
          </div>
          <div>
            Mobile Number:
            <input
              value={formState.mobileNumber}
              name="mobileNumber"
              onChange={(e) => inputChange(e)}
            />
          </div>
          <button type="submit"> Submit</button>
        </form>
      </div>
    </div>
  );
};

export default MyUseReducer;
