import { useEffect, useState } from 'react'
import './assets/images/css/VGstyles.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import Contact from './views/Contact';
import { ThemeProvider } from './ThemeContext';

import Footer from './components/Footer'
import LinearGradient from './components/LinearGradient'
import Header from './components/Header';
import Main from './components/Main';



function App() {

  return (
    <ThemeProvider>
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Contact' element={<Contact />} />
          </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
