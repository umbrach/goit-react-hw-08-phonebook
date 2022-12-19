import { Suspense } from 'react';

import { Outlet } from 'react-router-dom';
import ApBar from 'components/AppBar/AppBar';

export const Layout = () => {
  return (
    <>
      <ApBar />
      <Suspense fallback={<p>loading...</p>}>
        <Outlet />
      </Suspense>
    </>
  );
};
