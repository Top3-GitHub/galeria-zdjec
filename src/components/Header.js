import React from 'react';

function Header({ theme, toggleTheme }) {
  return (
    <header className="d-flex justify-content-between align-items-center p-3 bg-primary text-white">
      <h1>Galeria Zdjęć</h1>
      <button className="btn btn-light" onClick={toggleTheme}>
        {theme === 'light' ? 'Ciemny motyw' : 'Jasny motyw'}
      </button>
    </header>
  );
}

export default Header;