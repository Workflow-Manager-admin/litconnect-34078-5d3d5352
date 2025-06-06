import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import MainContainer from './components/MainContainer';
import Footer from './components/Footer';

/**
 * PUBLIC_INTERFACE
 * App is the root component for LitConnect.
 * Responsible for theming, global state, and the primary structure:
 * - Navbar at the top
 * - MainContainer as the app's central area
 * - Optional Footer at the bottom
 */
function App() {
  return (
    <div className="app">
      {/* Persistent top navigation */}
      <Navbar />
      {/* Main interactive container holding side panels and central map/timeline */}
      <MainContainer />
      {/* Footer (optional, can be enhanced or removed as needed) */}
      <Footer />
    </div>
  );
}

export default App;