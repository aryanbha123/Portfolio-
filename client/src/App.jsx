import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import  Navbar from './components/navbar';
import Footer from './components/footer';
import Loader from './components/Loader';
import { AuthProvider } from './AuthContext';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Exp = lazy(() => import('./pages/Exp'));
const Projects = lazy(() => import('./pages/Projects'));
const Project = lazy(() => import('./pages/Project'));

export default function App() {
  return (
    <AuthProvider> {/* Wrap your app with AuthProvider */}
      <BrowserRouter>
        <Navbar />
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/experience' element={<Exp />} />
            <Route path='/project' element={<Projects />} />
            <Route path='/project/:id' element={<Project />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </Suspense>
        <Footer />
      </BrowserRouter>
    </AuthProvider>
  );
}

function NotFound() {
  return <div>Not Found</div>;
}
