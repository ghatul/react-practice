import React, { Suspense, useEffect, useState, lazy } from 'react';

const MyLazyComponent = lazy(() => import('./MyLazyComponent'));

const MySuspense = () => {
  return (
    <Suspense
      fallback={
        <div
          style={{
            position: 'fixed',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: 'rgba(0,0,0,0.4)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div style={{ backgroundColor: 'red' }}>Loading</div>
        </div>
      }
    >
      <MyLazyComponent />
    </Suspense>
  );
};

export default MySuspense;
