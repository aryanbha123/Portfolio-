import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Loader from './components/Loader';
import { AuthProvider } from './AuthContext';

const Navbar = lazy(() => import('./components/navbar'));
const Footer = lazy(() => import('./components/footer'));
const Yoni = lazy(() => import('./pages/Yoni'));
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Exp = lazy(() => import('./pages/Exp'));
const Projects = lazy(() => import('./pages/Projects'));
const Project = lazy(() => import('./pages/Project'));

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Suspense fallback={<Loader />}>
          {/* <Navbar /> */}
          <AnimatedRoutes />
          {/* <Footer /> */}
        </Suspense>
      </BrowserRouter>
    </AuthProvider>
  );
}

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode='wait'>
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<PageTransition><Home /></PageTransition>} />
        <Route path='/about' element={<PageTransition><About /></PageTransition>} />
        <Route path='/experience' element={<PageTransition><Exp /></PageTransition>} />
        <Route path='/project' element={<PageTransition><Projects /></PageTransition>} />
        <Route path='/project/:id' element={<PageTransition><Project /></PageTransition>} />
        <Route path='internship/yoni-bleed-with-pride' element={<PageTransition><Yoni /></PageTransition>} />
        <Route path='*' element={<PageTransition><NotFound /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
}

function NotFound() {
  return <div>Not Found</div>;
}

function PageTransition({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.div>
  );
}
