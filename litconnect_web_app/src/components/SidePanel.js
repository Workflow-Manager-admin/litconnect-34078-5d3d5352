import React from 'react';

/**
 * SidePanel - Stub Component
 * PUBLIC_INTERFACE
 *
 * Placeholder for contextual side panels on left/right (filters, details, actions).
 * Accepts "position" prop: "left" or "right".
 */
function SidePanel({ position = "left", children }) {
  return (
    <aside className={`side-panel side-${position}`}>
      <div className="side-placeholder">
        {children || (
          <>
            <span className="panel-title">
              {position === "left" ? "Filters & Details" : "Context & Actions"}
            </span>
          </>
        )}
      </div>
    </aside>
  );
}

export default SidePanel;
