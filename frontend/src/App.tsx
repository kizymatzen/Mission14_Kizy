import React, { useState } from 'react';
import Joel from './JoelHiltonHeadshot.jpg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Podcast from './Podcast';
import Movielist from './Movies';
import HomePage from './HomePage';

function Navbar({ setActivePage }: { setActivePage: (page: string) => void }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <span className="navbar-brand" onClick={() => setActivePage('home')}>
        Home
      </span>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <span className="nav-link" onClick={() => setActivePage('podcast')}>
              Podcast
            </span>
          </li>
          <li className="nav-item">
            <span className="nav-link" onClick={() => setActivePage('movies')}>
              Movies
            </span>
          </li>
        </ul>
      </div>
    </nav>
  );
}

function App() {
  const [activePage, setActivePage] = useState('home');

  const renderPage = () => {
    switch (activePage) {
      case 'home':
        return <HomePage />;
      case 'podcast':
        return <Podcast />;
      case 'movies':
        return <Movielist />;
      default:
        return null;
    }
  };

  return (
    <div>
      <Navbar setActivePage={setActivePage} />
      {renderPage()}
    </div>
  );
}

export default App;
