import React, { Suspense, useEffect, useState, lazy } from 'react';
const MyLazyComponent = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let val = 0;
    for (let i = 0; i < 1000000000; i++) {
      val += i;
    }
    setValue(val);
  }, []);

  return <div> {value} </div>;
};

export default MyLazyComponent;
