# Landing Page Builder Feature Proposal

## 1. Overview

The goal is to create a "Landing Page Builder" that allows users to:

1.  **Start** from an existing industry template.
2.  **Customize** the layout by mixing and matching components (sections) and changing their variants.
3.  **Preview** changes dynamically without needing to edit code.
4.  **Export** the final design as a single HTML file (or configuration) to hand off to a webmaster.

## 2. Architecture

Since the project uses Astro (Static Site Generation), creating a fully dynamic builder requires a hybrid approach.

### 2.1. Hybrid Rendering Mode

We will switch the Astro configuration to `output: 'hybrid'`.

-   **Main Site:** Remains static (SSG) for performance.
-   **Builder Routes:** Use Server-Side Rendering (SSR) to dynamically render previews based on user selection.

### 2.2. Route Structure

-   `/builder` (React App): The main builder interface. Client-side only.
-   `/builder/preview` (Astro SSR): A headless page that renders the template based on query parameters.

## 3. User Experience (UX)

### 3.1. The Builder Interface (`/builder`)

A split-screen interface:

-   **Left Sidebar (Controls):**
    -   **Industry Selector:** Dropdown to pick the starting point (e.g., "Real Estate").
    -   **Section List:** A drag-and-drop list of current sections.
    -   **Section Controls:** When a section is selected, show a dropdown to change its `variant` (e.g., Hero: `split` -> `video-bg`).
    -   **Add Section:** Button to append new sections from the library.
-   **Main Area (Preview):**
    -   An `iframe` displaying `/builder/preview`.
    -   Updates automatically when controls change.

### 3.2. The Preview Engine (`/builder/preview`)

-   Accepts state via URL parameters: `?industry=realestate&blueprint=[JSON_STRING]`.
-   Parses the JSON blueprint.
-   Uses a `DynamicTemplateRenderer` to render the requested components.
-   Since it runs on the server (SSR), it can render **both** React and Astro components (like `AwardsBadges`, `ShowcaseGallery`) correctly.

## 4. Technical Implementation

### 4.1. State Management

The Builder UI (React) will manage the state:

```typescript
interface BuilderState {
    industry: IndustryType;
    sections: Array<{
        id: string;
        component: string;
        variant?: string;
        props?: Record<string, any>;
    }>;
}
```

### 4.2. Communication

When state changes, the React app updates the `iframe.src`:

```javascript
const blueprintString = encodeURIComponent(JSON.stringify(state.sections));
iframe.src = `/builder/preview?industry=${state.industry}&blueprint=${blueprintString}`;
```

_Note: We will use compression (LZString) if URL limits become an issue, but standard URLs support ~2KB which is sufficient for most layouts._

### 4.3. Export Functionality

Two export options:

1.  **"Copy Config"**: Generates the JSON configuration to be pasted into `src/config/industries.ts`. Best for developers using this codebase.
2.  **"Download One-Pager"**: Fetches the HTML content of the preview frame and downloads it as `landing-page.html`.
    -   _Implementation:_ The React app performs a `fetch()` to the preview URL, gets the text, and triggers a file download.
    -   _Styles:_ Since Tailwind CSS is used, the CSS is usually external. For a true "one-pager", we can configure the preview route to inline critical CSS or ensure the CSS file is included in the download package.

## 5. Roadmap

1.  **Configuration Update:** Enable `output: 'hybrid'` in `astro.config.mjs`.
2.  **Preview Route:** Create `src/pages/builder/preview.astro` with dynamic rendering logic.
3.  **Builder UI:** Create `src/pages/builder/index.astro` (wrapping a React `BuilderApp` component).
4.  **State Logic:** Implement the blueprint editor (add/remove/reorder/edit).
5.  **Export Logic:** Implement the HTML fetch and download.

## 6. Questions / Decisions

-   **Deployment:** This requires a host that supports SSR (Vercel, Netlify, Node.js), not just a static bucket (S3/GitHub Pages). Is this acceptable?
-   **Authentication:** Should the builder be public or password protected?
