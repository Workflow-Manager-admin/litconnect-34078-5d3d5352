import React from 'react';

/**
 * PUBLIC_INTERFACE
 * Footer displays site information or secondary navigation.
 * For now, it's a minimal placeholder positioned at the bottom.
 */
function Footer() {
  return (
    <footer
      style={{
        background: 'var(--base-dark)',
        color: 'var(--text-secondary)',
        padding: '18px 0',
        textAlign: 'center',
        borderTop: '1px solid var(--border-color)',
        fontSize: '0.95rem'
      }}
    >
      © {new Date().getFullYear()} LitConnect • ChronicleReads
    </footer>
  );
}

export default Footer;
