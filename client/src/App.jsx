import React, { Suspense, lazy } from 'react';
import Navbar from './components/navbar';
import Footer from './components/footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './components/Loader.css';
import Loader from './components/Loader';
import { AuthProvider } from './AuthContext'; // Import AuthProvider
import About from './pages/About';

const Home = lazy(() => import('./pages/Home'));

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
              <Route path='/experience' element={<Home />} />
              <Route path='/project' element={<Home />} />
              <Route path='/project/:id' element={<Home />} />
            </Routes>
          </Suspense>
          <Footer />
        </BrowserRouter>
      </Suspense>
    </AuthProvider>
  );
}
