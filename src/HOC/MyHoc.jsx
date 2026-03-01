import React from 'react';

const maiHooHoc = (WrappedComponent) => {
  return function WrapComp(props) {
    return (
      <div style={{ border: '2px solid red', padding: '30px 10px' }}>
        <WrappedComponent {...props} />
      </div>
    );
  };
};

const MyInfo = ({ name, address }) => {
  return (
    <div>
      <h3> My Information </h3>
      <div> Name : {name} </div>
      <div> Address : {address} </div>
    </div>
  );
};

const CompnyInfo = ({ name, address }) => {
  return (
    <div>
      <h3> Other Information </h3>
      <div> comapny : {name} </div>
      <div> Address : {address} </div>
    </div>
  );
};

const MyInfoBorder = maiHooHoc(MyInfo);
const CompnyInfoWithBorder = maiHooHoc(CompnyInfo);

const MyHoc = () => {
  return (
    <div>
      <h1> My HOC </h1>
      <MyInfoBorder name="Krishna" address="Earth, India" />
      <CompnyInfoWithBorder name="XYZ" address="PQR" />
    </div>
  );
};

export default MyHoc;
