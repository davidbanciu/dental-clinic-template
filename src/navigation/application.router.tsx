import { Suspense, useMemo } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { useScrollToTopHandler } from './hooks';
import { HomeScreen } from '../screens';
import { ContactScreen } from '../screens/contact';

export const ApplicationRouter = () => {
  useScrollToTopHandler()
  const location = useLocation();
  const state = useMemo(() => location.state as { backgroundLocation?: Location }, [location]);

  return (
    <Suspense fallback={<></>} >
      <Routes location={state?.backgroundLocation || location}>
        <Route index element={<HomeScreen />} />

        <Route path={'/contact'} element={<ContactScreen />}/>
      </Routes>
    </Suspense>
  )
}
