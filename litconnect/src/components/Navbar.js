import React from 'react';
import '../App.css';

/**
 * PUBLIC_INTERFACE
 * Navbar displays the site title, logo, and space for global actions.
 * It remains fixed at the top and may be extended with menus or profile actions.
 */
const Navbar = () => (
  <nav className="navbar">
    <div className="container" style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
      <div className="logo">
        <span className="logo-symbol">*</span> LitConnect
      </div>
      {/* Placeholder for actions or menu */}
      <button className="btn" style={{ marginLeft: 'auto' }}>Sign In</button>
    </div>
  </nav>
);

export default Navbar;
