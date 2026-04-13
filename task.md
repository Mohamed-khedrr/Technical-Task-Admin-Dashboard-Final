# 📊 Admin Dashboard (Angular) – Technical Task

## 📌 Overview
Build a responsive **Admin Dashboard** in Angular that closely matches the provided Figma design.

🔗 Figma UI:
https://www.figma.com/community/file/1219539931881953752/simple-dashboard-ui

The dashboard should include:
- Analytics cards
- Charts (line & bar)
- Recent orders table
- Sidebar & top navigation

---

## 🎯 Goals & Objectives

1. Recreate the UI as close as possible to the design.
2. Demonstrate **mid-to-senior Angular best practices**.
3. Ensure **responsive design** (desktop, tablet, mobile).
4. Use **modern Angular features**.

---

## ⚙️ Requirements

### 1. Angular Setup
- Use latest stable Angular version (v14+)
- Setup via Angular CLI

---

### 2. Architecture & Structure
- Use **modular architecture**
  - Example: `DashboardModule`, `OrdersModule`
- Apply **lazy loading** where appropriate
- Follow **TypeScript best practices**
  - Strict typing
  - Interfaces for models
- Create **reusable components**
  - Cards
  - Charts
  - Tables

---

### 3. Styling
- Use:
  - Angular Material **or**
  - Tailwind CSS **or both**
- Prefer **SCSS** with Angular Material
- Ensure:
  - Clean & modern UI
  - Fully responsive layout

---

### 4. Layout

#### 📌 Sidebar
- Navigation links:
  - Dashboard
  - Orders
  - Items
  - Transactions
  - Reports
  - Messages
  - Support
  - Settings
- Collapsible on smaller screens

#### 📌 Top Navbar
- User profile (avatar + name)
- Notifications / search input

#### 📌 Main Content

##### 🔹 Analytics Cards
- Total Revenue
- Daily Revenue
- Items Sold
- Active Users

📅 Must support filtering:
- Today
- Yesterday
- This Week
- Last Week
- This Month
- Last Month
- Custom range (date picker)

---

##### 🔹 Charts
- Line / Area chart → analytics over time
- Bar chart → visits data

---

##### 🔹 Recent Orders Table
- Columns:
  - Item Name
  - Quantity
  - Date
  - Price
  - Status
- Pagination required (if large data)
- Row click → navigate to Orders page

---

##### 🔹 Routing
- Navigation to:
  - Orders page
  - Order details

---

### 5. Data Handling
- Use:
  - Mock data **or**
  - Public APIs:
    - https://fakestoreapi.com
    - https://fakeapi.platzi.com
- Organize logic in services:
  - `AnalyticsService`
  - `OrdersService`

✅ Must demonstrate:
- Async data fetching
- Loading states
- Error handling

---

### 6. Charts
- Use one of:
  - ng2-charts
  - ngx-charts
  - ApexCharts

📊 Features:
- Tooltips
- Labels
- Interactive UI

---

### 7. Authentication (Optional / Bonus)
- Simple login system
- Role-based access (Admin / User)
- Restrict:
  - Sidebar items
  - Routes

---

### 8. Testing & Code Quality
- Add unit tests (components/services)
- Use ESLint
- No console errors/warnings

---

### 9. Documentation
Include a `README.md` with:
- Setup instructions
- Project structure explanation
- Architecture decisions
- Libraries used
- Trade-offs

---

### 10. Delivery
- Upload project to GitHub
- Provide:
  - Repository link
  - Run instructions

---

## ✅ Acceptance Criteria

### 1. UI Parity
- Matches design closely

### 2. Responsiveness
- Works on all screen sizes
- Sidebar adapts on mobile

### 3. Charts
- Display dynamic data correctly

### 4. Orders Table
- Shows data with pagination
- Supports navigation

### 5. Code Quality
- Clean, modular, maintainable
- Well documented

---

## ⭐ Bonus Features (Optional)

- ✨ Animations & transitions
- 🧠 State management (NgRx)
- 🔐 Role-based navigation
- 🚀 CI/CD (GitHub Actions)

---

## 🔍 What We’re Evaluating

- Angular expertise (mid–senior level)
- Code structure & maintainability
- UI accuracy & responsiveness
- Problem-solving approach
- Attention to detail

---

## 📝 Notes
Focus on:
> **Quality over quantity** — clean architecture and solid implementation matter more than completing all features.