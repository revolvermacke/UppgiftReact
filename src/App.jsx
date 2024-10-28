import { useEffect, useState } from 'react'
import './assets/images/css/VGstyles.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import Contact from './views/Contact';

import Footer from './components/Footer'
import LinearGradient from './components/LinearGradient'
import Header from './components/Header';
import Main from './components/Main';



function App() {
  
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('darkMode');
    return savedTheme ? JSON.parse(savedTheme) : false;
  });

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    }
    else {
      document.body.classList.remove('dark-mode');
    }
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
  }

  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Contact' element={<Contact />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App
