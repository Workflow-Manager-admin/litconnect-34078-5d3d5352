import React from 'react';
import './App.css';

import SidePanel from './components/SidePanel';
import BookRelationshipExplorer from './components/BookRelationshipExplorer';
import AuthorBiographies from './components/AuthorBiographies';
import HistoricalContextMap from './components/HistoricalContextMap';
import GeographicalVisualization from './components/GeographicalVisualization';
import PersonalizedJourneys from './components/PersonalizedJourneys';
import MapTimeline from './components/MapTimeline';
import SearchBar from './components/SearchBar';
import Popup from './components/Popup';

/**
 * LitConnectMainContainer - Central app container for LitConnect
 * Handles structure: fixed top navbar, central interactive region,
 * left/right panels, and stubs for feature/components.
 */
function App() {
  // Demo state for Popup and Search
  const [showPopup] = React.useState(false);

  return (
    <div className="app litconnect-main">
      {/* Top Navigation Bar */}
      <nav className="navbar">
        <div className="container navbar-content">
          <div className="logo">
            <span className="logo-symbol">&#10023;</span>
            <span className="brand-title">LitConnect</span>
          </div>
          <button className="btn btn-accent">Sign In</button>
        </div>
      </nav>
      
      {/* Main content area with sidebars and central region */}
      <main className="main-layout">

        {/* Left Side Panel (filters, details) */}
        <SidePanel position="left" />

        {/* Central interactive/map/timeline container */}
        <section className="center-interactive">
          <div className="hero">
            <div className="subtitle">Explore books, authors & history</div>
            <h1 className="title">LitConnect</h1>
            <div className="description">
              Discover literary works, biographies, historical events, and connections—<br />
              visualize narratives across time & place for an immersive reading journey.
            </div>
            <button className="btn btn-large btn-accent">Start Exploring</button>
          </div>
          {/* Placeholders for interactive feature components */}
          <div className="feature-placeholders">
            {/* PUBLIC_INTERFACE: Core feature components stubs */}
            <BookRelationshipExplorer />
            <AuthorBiographies />
            <HistoricalContextMap />
            <GeographicalVisualization />
            <PersonalizedJourneys />
            <MapTimeline />
          </div>
          {/* PUBLIC_INTERFACE: Overlay for search and popups */}
          <SearchBar />
          {/* Demo: Popup stub (hidden by default, see showPopup state) */}
          <Popup visible={showPopup} />
        </section>

        {/* Right Side Panel (context/actions) */}
        <SidePanel position="right" />
      </main>
    </div>
  );
}

export default App;
