# LitConnect Main Container Architecture

## Overview

The LitConnect Main Container serves as the foundational UI framework for the ChronicleReads web application—a platform enabling deep literary exploration through connections between books, authors, historical periods, and relevant geographic locations. It utilizes a modern, responsive design in React JS, laying the groundwork for integration with rich, contextual features and data sources.

---

## Component Hierarchy

The application is structured to provide an intuitive and interactive user experience. Below is the proposed high-level component hierarchy for the Main Container:

```mermaid
graph TD
    App[App]
    Navbar[Navbar]
    MainLayout[MainLayout]
    CentralMapTimeline[CentralMapTimeline]
    LeftPanel[LeftPanel<br/>(Details, Filters)]
    RightPanel[RightPanel<br/>(Book/Author Info, Biographies)]
    Popups[ContextualPopups]
    Footer[Footer]

    App --> Navbar
    App --> MainLayout
    MainLayout --> LeftPanel
    MainLayout --> CentralMapTimeline
    MainLayout --> RightPanel
    CentralMapTimeline --> Popups
    App --> Footer
```

**Description of Key Components**:

- **App**: The root React component. Responsible for theming, global state, and primary layout.
- **Navbar**: Persistent top navigation, branding, and global action entry points.
- **MainLayout**: Houses the main interactive area, split into side panels and the central feature.
  - **LeftPanel**: Resource filters, search, and summaries related to books, authors, or periods.
  - **CentralMapTimeline**: Core interactive map and timeline visualization, showing relationships and events.
      - **ContextualPopups**: Surface contextual information on selection or hover.
  - **RightPanel**: Displays detailed information, such as book or author profiles and biographies.
- **Footer**: Optional site-wide controls or metadata.

---

## Feature Integration Points

The following features are planned, with clear integration touchpoints within the architecture:

- **Book Relationship Explorer**
  - Integrates primarily with the CentralMapTimeline to visualize book, author, and event connections.
  - Search and filter handled via LeftPanel.
  - Details and metadata appear in the RightPanel.

- **Author Biographies**
  - Accessed through relationship graph or search results.
  - Biographical content surfaces in the RightPanel; timeline associations in CentralMapTimeline.

- **Historical Context Mapping**
  - Timeline overlays and event highlights within CentralMapTimeline.
  - Search and navigation from LeftPanel; details shown in both panels.

- **Geographical Visualization**
  - Central map integration for location markers and interactions.
  - Location context may trigger popups; relevant info also presented in side panels.

- **Personalized Literary Journeys**
  - User-driven feature augmenting all core panels—saved journeys filter map/timeline and details in Left and Right Panels.

> **Note:** This architecture allows feature stubs to be introduced incrementally. Placeholder components and mock data handlers should be used as scaffolding, facilitating modular development and early-stage prototyping without full backend/API integration.

---

## Color Palette and Theme Application

The UI leverages a clean, modern aesthetic with a light-themed bias. The current color palette is defined by CSS variables for maintainability and scalability:

- **Primary**: `#2D3142` (deep blue-gray)
- **Secondary**: `#BFC0C0` (light gray)
- **Accent**: `#EF8354` (vivid orange)
- **Base Light**: `#00ffff`
- **Base Dark**: `#00008b`
- **Text**: `#ffffff`
- **Text Secondary**: `rgba(255, 255, 255, 0.7)`
- **Border**: `rgba(255, 255, 255, 0.1)`

CSS custom properties are located in `litconnect/src/App.css` and may be extended for feature-specific styling. All core layout and interactive elements should utilize these variables for consistency. Light/dark toggling can be supported in the future via dynamic variable overrides.

---

## High-Level Layout Structure

The application layout consists of:

- **Persistent Navbar** at the top.
- **Main Content Area** below, arranged with:
  - **Left Panel** (filters/search/summaries)
  - **Central Map/Timeline** (interactive canvas + popups)
  - **Right Panel** (details, biographies)
- **Optional Footer** as the anchor for secondary navigation information or controls.

Responsiveness is achieved through CSS Flexbox, with adaptive stacking for mobile and tablet views. The main usability focus is accessibility and clear spatial relationship between the timeline/map and supporting details.

---

## Next Steps

1. **Component Scaffold**
   - Create React components for each main structural element (Navbar, MainLayout, LeftPanel, CentralMapTimeline, RightPanel, Popups, Footer).
   - Implement initial static layouts with placeholder content and demonstration of color/theme usage.

2. **Feature Stubbing**
   - Design mock interfaces and props for major features, including map/timeline data, book/author object structure, and event handlers.
   - Insert “Coming Soon” or stub versions of Book Explorer, Biographies, Context Mapping, Geo Visuals, and Journeys.

3. **Theme Refinement**
   - Enhance CSS variable usage for all elements; consider accessibility improvements and conduct browser testing.

4. **Integration Planning**
   - Plan for external API or data integration points (document architecture for API wrappers or async loaders).
   - Define data contract interfaces (TypeScript types or JSDoc).

5. **Testing and Modularization**
   - Introduce basic Jest/React Testing Library test suites for top-level and atomic components.
   - Ensure modular build and clear separation of feature code for future scale.

---

*This document serves as the architectural baseline for LitConnect’s Main Container and should evolve with ongoing implementation and feature planning.*

