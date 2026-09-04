import { Suspense, useMemo } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { useScrollToTopHandler } from './hooks';
import { AboutScreen, ContactScreen, HomeScreen } from '../screens';

export const ApplicationRouter = () => {
  useScrollToTopHandler()
  const location = useLocation();
  const state = useMemo(() => location.state as { backgroundLocation?: Location }, [location]);

  return (
    <Suspense fallback={<></>} >
      <Routes location={state?.backgroundLocation || location}>

        <Route index element={<HomeScreen />} />

        {/* Starter */}
        <Route path={'/contact'} element={<ContactScreen />}/>
        <Route path={'/about'} element={<AboutScreen />}/>
        <Route path={'/services'} element={<>Services Screen</>}/>
        <Route path={'/pricing'} element={<>Pricing Screen</>}/>
        <Route path={'/privacy_policy'} element={<>Privacy Policy Screen</>}/>

        {/* Professional */}
        {/* Testimonials.
        Before & After gallery.
        FAQ.
        Google Maps.
        Opening hours.
        Appointment CTA everywhere. */}


        {/* Growth */}
        {/* Blog.
        Individual treatment pages.
        SEO optimization.
        Google Reviews integration.
        Analytics.
        Monthly content. */}
      </Routes>
    </Suspense>
  )
}
