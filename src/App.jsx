import { useEffect, useState } from 'react'
import './assets/images/css/VGstyles.css'
// import './assets/images/css/contact.css'
import Footer from './components/Footer'
import LinearGradient from './components/LinearGradient'
import Main from './components/Main'

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
    <div className='wrapper'>
      <LinearGradient darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Main />
      <Footer />
    </div>
  )
}

export default App
