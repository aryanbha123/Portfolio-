import React, { Suspense } from 'react'
import Navbar from './components/navbar'
import Footer from './components/footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
export default function App() {
  return (
    <Suspense>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' />
        </Routes>
        <Footer />
      </BrowserRouter>
    </Suspense>
  )
}
