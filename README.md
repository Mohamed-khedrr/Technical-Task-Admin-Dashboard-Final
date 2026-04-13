# Admin Dashboard

A production-ready Angular admin dashboard featuring order management, sidebar navigation, and topbar search.

Built with Angular 21, standalone components, and Angular Signals for state management.

## Features

### Sidebar Navigation
Persistent sidebar with icon-based navigation links. Provides quick access to all major sections of the dashboard. Built as a reusable layout component (`main-sidebar`) with individual link items (`main-sidebar-link`).

### Topbar Search
Global search bar in the top navigation bar (`main-topbar`) allowing users to quickly find orders across the application without leaving the current page.

### Orders Page
Dedicated orders listing page (`/orders`) displaying a paginated, filterable table of orders. Shows key order data at a glance.

### Order Details
Drill-down order detail view accessible from the orders list. Displays full information for a selected order including line items, status, and metadata.

### Mock Data
All order data is served from in-memory mock data. No backend or API connection is required to run the application.

## Project Structure

```
src/app/
  features/
    orders/
      pages/
        orders-page/          # Orders listing page
        order-details-page/   # Single order detail view
      components/             # Shared order-specific components
  layout/
    main-layout/              # Root layout shell
    main-sidebar/             # Sidebar navigation
    main-sidebar-link/        # Individual sidebar nav link
    main-topbar/              # Top navigation bar with search
  shared/
    components/               # Reusable UI components
  core/                       # Services, guards, interceptors
```

## Getting Started

### Prerequisites

- Node.js 18+
- Angular CLI 21

### Installation

```bash
npm install
```

### Development server

```bash
ng serve
```

Open `http://localhost:4200/` in your browser. The app reloads automatically on file changes.

### Build

```bash
ng build
```

Build artifacts are output to the `dist/` directory. The production build is optimized for performance.

## Testing

### Unit tests

```bash
ng test
```

Runs unit tests via [Vitest](https://vitest.dev/).

### End-to-end tests

```bash
ng e2e
```

## Tech Stack

- **Framework:** Angular 21
- **Language:** TypeScript (strict mode)
- **State:** Angular Signals
- **Styling:** SCSS
- **Testing:** Vitest

## Additional Resources

- [Angular CLI docs](https://angular.dev/tools/cli)
