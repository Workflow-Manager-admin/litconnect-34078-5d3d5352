import React from 'react';
import LeftSidePanel from './LeftSidePanel';
import RightSidePanel from './RightSidePanel';
import CentralMapAndTimeline from './CentralMapAndTimeline';
import '../App.css';

/**
 * PUBLIC_INTERFACE
 * MainContainer arranges the core app layout: left panel, central map/timeline, and right panel.
 * Uses flexbox for responsive design; serves as an integration hub for all major features.
 */
function MainContainer() {
  return (
    <main className="main-container" style={{
      marginTop: 72, // Clear Navbar
      display: 'flex',
      flexDirection: 'row',
      minHeight: 'calc(100vh - 112px)',
      background: 'var(--base-dark)',
      color: 'var(--text-color)',
    }}>
      {/* Left: filters, summaries */}
      <LeftSidePanel />
      {/* Center: interactive map/timeline and popups */}
      <CentralMapAndTimeline />
      {/* Right: details, biographies, etc. */}
      <RightSidePanel />
    </main>
  );
}

export default MainContainer;
