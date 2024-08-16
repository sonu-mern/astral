import React, { Suspense } from 'react';
import Loader from './components/loader';

// Lazy load the LandingPage component
const LandingPage = React.lazy(() => import('./Pages/LandingPage'));

function Page() {
  return (
    <>
      
      <Suspense fallback={<Loader/>}>
        <LandingPage />
      </Suspense>
    </>
  );
}

export default Page;
