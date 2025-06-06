import React from 'react';

/**
 * PUBLIC_INTERFACE
 * LeftSidePanel holds filters, search controls, and summaries for books/authors/time-periods.
 * Feature stub areas are marked for Book Relationship Explorer and Personalized Journeys.
 */
function LeftSidePanel() {
  return (
    <aside className="panel left-panel" style={{
      flex: '0 0 270px',
      background: 'var(--base-dark)',
      borderRight: '1px solid var(--border-color)',
      minHeight: '100%',
      padding: '24px 12px 24px 24px',
      boxSizing: 'border-box',
    }}>
      <h3 style={{ color: 'var(--base-light)', fontWeight: 600 }}>Explore</h3>
      {/* Place filter/search UI here */}
      <div style={{ marginBottom: 24 }}>
        <input
          type="text"
          placeholder="Search books, authors..."
          style={{
            width: '93%',
            padding: '8px',
            borderRadius: 4,
            border: `1px solid var(--border-color)`,
            background: 'var(--base-dark)',
            color: 'var(--text-color)'
          }}
        />
      </div>
      {/* BookRelationshipExplorer integration point */}
      <div className="feature-placeholder" style={{
        background: 'var(--base-light)',
        color: 'var(--base-dark)',
        borderRadius: 6,
        padding: 10,
        marginBottom: 18,
      }}>
        {/* TODO: Integrate Book Relationship Explorer panels */}
        Book Relationship Explorer (stub)
      </div>
      {/* Personalized Literary Journeys stub */}
      <div className="feature-placeholder" style={{
        background: 'var(--base-light)',
        color: 'var(--base-dark)',
        borderRadius: 6,
        padding: 10,
      }}>
        {/* TODO: Integrate Personalized Literary Journeys */}
        Personalized Journeys (stub)
      </div>
      {/* Add filters and summaries as feature integration proceeds */}
    </aside>
  );
}

export default LeftSidePanel;
