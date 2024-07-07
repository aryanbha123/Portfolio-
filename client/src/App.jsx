import React, { Suspense, lazy } from 'react';
import Navbar from './components/navbar';
import Footer from './components/footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './components/Loader.css';
import Loader from './components/Loader';
import { AuthProvider } from './AuthContext'; // Import AuthProvider

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'))
const Exp = lazy(() => import('./pages/Exp'));
const Project  = lazy(() => import('./pages/Project'))
const Projects   = lazy(() => import('./pages/Projects'))
export default function App() {
  return (
    <AuthProvider>
      <Suspense fallback={<Loader />}>
        <BrowserRouter>
          <Navbar />
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/experience' element={<Exp />} />
              <Route path='/project' element={<Projects />} />
              <Route path='/project/:id' element={<Project />} />
              <Route path='/project/:id' element={<> Not Found</>} />
            </Routes>
          </Suspense>
          <Footer />
        </BrowserRouter>
      </Suspense>
    </AuthProvider>
  );
}
