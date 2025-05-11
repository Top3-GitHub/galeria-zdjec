import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Header from './components/Header';
import Gallery from './components/Gallery';

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className={`app ${theme}`}>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <div className="container mt-3">
        <Gallery />
      </div>
    </div>
  );
}

export default App;