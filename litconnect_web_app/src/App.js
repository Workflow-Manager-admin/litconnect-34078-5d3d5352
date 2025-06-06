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

// Import routing utilities
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation
} from 'react-router-dom';

/**
 * HeroSection - Central landing section for introduction and actions.
 * Placed on "/" (home) route.
 * PUBLIC_INTERFACE
 */
function HeroSection() {
  return (
    <div className="hero">
      <div className="subtitle">Explore books, authors & history</div>
      <h1 className="title">LitConnect</h1>
      <div className="description">
        Discover literary works, biographies, historical events, and connections—<br />
        visualize narratives across time & place for an immersive reading journey.
      </div>
      <Link to="/books">
        <button className="btn btn-large btn-accent">Start Exploring</button>
      </Link>
    </div>
  );
}

/**
 * MainFeatureSwitch - Displays the correct feature stub based on the current route.
 * Centralizes the switching logic for the core content area.
 */
function MainFeatureSwitch() {
  // Demo state for Popup and Search (can extend context later if needed)
  const [showPopup] = React.useState(false);

  // Render feature content according to the route.
  return (
    <section className="center-interactive">
      <Routes>
        <Route
          path="/"
          element={<>
            <HeroSection />
            {/* Show all feature stubs below fold */}
            <div className="feature-placeholders">
              <BookRelationshipExplorer />
              <AuthorBiographies />
              <HistoricalContextMap />
              <GeographicalVisualization />
              <PersonalizedJourneys />
              <MapTimeline />
            </div>
            <SearchBar />
            <Popup visible={showPopup} />
          </>}
        />
        <Route path="/books" element={
          <>
            <h2 className="subtitle">Book Relationship Explorer</h2>
            <BookRelationshipExplorer />
          </>
        }/>
        <Route path="/authors" element={
          <>
            <h2 className="subtitle">Author Biographies</h2>
            <AuthorBiographies />
          </>
        }/>
        <Route path="/history" element={
          <>
            <h2 className="subtitle">Historical Context Mapping</h2>
            <HistoricalContextMap />
          </>
        }/>
        <Route path="/geo" element={
          <>
            <h2 className="subtitle">Geographical Visualization</h2>
            <GeographicalVisualization />
          </>
        }/>
        <Route path="/journeys" element={
          <>
            <h2 className="subtitle">Personalized Literary Journeys</h2>
            <PersonalizedJourneys />
          </>
        }/>
        {/* Add additional routes as features grow */}
      </Routes>
    </section>
  );
}

/**
 * Navbar - Top navigation with routing links.
 */
function Navbar() {
  // For highlighting current nav
  const location = useLocation();
  return (
    <nav className="navbar">
      <div className="container navbar-content">
        <div className="logo">
          <span className="logo-symbol">&#10023;</span>
          <span className="brand-title">LitConnect</span>
        </div>
        {/* Navigation links */}
        <div style={{ display: "flex", gap: "1.4rem" }}>
          <Link
            to="/books"
            className={`btn btn-accent${location.pathname === "/books" ? " btn-large" : ""}`}
          >
            Book Explorer
          </Link>
          <Link
            to="/authors"
            className={`btn btn-accent${location.pathname === "/authors" ? " btn-large" : ""}`}
          >
            Biographies
          </Link>
          <Link
            to="/history"
            className={`btn btn-accent${location.pathname === "/history" ? " btn-large" : ""}`}
          >
            History Map
          </Link>
          <Link
            to="/geo"
            className={`btn btn-accent${location.pathname === "/geo" ? " btn-large" : ""}`}
          >
            Map/Geo
          </Link>
          <Link
            to="/journeys"
            className={`btn btn-accent${location.pathname === "/journeys" ? " btn-large" : ""}`}
          >
            Journeys
          </Link>
        </div>
        <button className="btn btn-accent" style={{ marginLeft: "1rem" }}>Sign In</button>
      </div>
    </nav>
  );
}

/**
 * LitConnectMainContainer - now with React Router switch logic.
 * PUBLIC_INTERFACE
 */
function App() {
  return (
    <Router>
      <div className="app litconnect-main">
        <Navbar />
        {/* Main content area with sidebars and central region */}
        <main className="main-layout">
          <SidePanel position="left" />
          <MainFeatureSwitch />
          <SidePanel position="right" />
        </main>
      </div>
    </Router>
  );
}

export default App;
