import React from 'react';

/**
 * PUBLIC_INTERFACE
 * RightSidePanel houses details for the currently selected book, author, or journey.
 * Acts as a host for feature blocks like Author Biographies and Historical Context overlays.
 */
function RightSidePanel() {
  return (
    <aside className="panel right-panel" style={{
      flex: '0 0 300px',
      background: 'var(--base-dark)',
      borderLeft: '1px solid var(--border-color)',
      minHeight: '100%',
      padding: '24px 24px 24px 12px',
      boxSizing: 'border-box',
    }}>
      <h3 style={{ color: 'var(--base-light)', fontWeight: 600 }}>Details</h3>
      {/* AuthorBiographies integration point */}
      <div className="feature-placeholder" style={{
        background: 'var(--base-light)',
        color: 'var(--base-dark)',
        borderRadius: 6,
        padding: 10,
        marginBottom: 18,
      }}>
        {/* TODO: Integrate Author Biographies */}
        Author Biographies (stub)
      </div>
      {/* Additional placeholders for details as features are developed */}
    </aside>
  );
}

export default RightSidePanel;
