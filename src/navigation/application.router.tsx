import { Suspense, useMemo } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { useScrollToTopHandler } from './hooks';
import { AboutScreen, ContactScreen, HomeScreen, PricingScreen, PrivacyPolicyScreen, ServicesScreen, TermsAndConditionsScreen } from '../screens';

export const ApplicationRouter = () => {
  useScrollToTopHandler()
  const location = useLocation();
  const state = useMemo(() => location.state as { backgroundLocation?: Location }, [location]);

  return (
    <Suspense fallback={<></>} >
      <Routes location={state?.backgroundLocation || location}>

        <Route index element={<HomeScreen />} />

        {/* Starter */}
        <Route path={'/about'} element={<AboutScreen />}/>
        <Route path={'/services'} element={<ServicesScreen />}/>
        <Route path={'/pricing'} element={<PricingScreen />}/>
        <Route path={'/contact'} element={<ContactScreen />}/>
        
        <Route path={'/privacy_policy'} element={<PrivacyPolicyScreen />}/>
        <Route path={'/terms_and_conditions'} element={<TermsAndConditionsScreen />}/>

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
