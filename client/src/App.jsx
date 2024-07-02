import React, { Suspense, lazy } from 'react'
import Navbar from './components/navbar'
import Footer from './components/footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './components/Loader.css'
import Loader from './components/Loader'
const Home = lazy(() => import('./pages/Home'));
export default function App() {
  return (
    <Suspense fallback={<Loader />}>
      <BrowserRouter>
        <Navbar />
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<Home />} />
            <Route path='/experience' element={<Home />} />
            <Route path='/project' element={<Home />} />
            <Route path='/project/:id' element={<Home />} />
          </Routes>
        </Suspense>
        <Footer />
      </BrowserRouter>
    </Suspense>
  )
}
