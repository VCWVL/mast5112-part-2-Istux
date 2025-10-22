Istiyak Patel
ST Number- ST10471810
MAST Part 2

Introduction
A mobile app for managing a restaurant menu with a clean, modern UI. Built with Expo Router and React Native. Includes login, dashboard stats, full menu view, add/remove dishes, filtering, and an in-app help section.

Features
Login screen and protected navigation
Home dashboard with live menu stats:
Total items
Average price per course (Starter/Main/Dessert)
Full menu listing with prices and course labels
Add dish (name, description, course, price)
Remove dish (single or multiple)
Filter menu by course
User menu and help screens
Themed UI with a restaurant background image and readability scrim

Tech Stack
React Native 0.81 + React 19
Expo SDK 54
Expo Router 6 (typed routes enabled)
TypeScript 5.9
React Navigation (via Expo Router)
Expo libs: asset, splash-screen, status-bar, system-ui, web-browser

- Structure of the app.
  app/
    _layout.tsx          # Router stack + AppProvider
    index.tsx            # Redirects to /login
    login.tsx            # Login screen
    home.tsx             # Dashboard with stats & actions
    menu.tsx             # Full menu listing
    add-dish.tsx         # Create menu items
    remove-dish.tsx      # Remove one/many items
    filter.tsx           # Filter by course
    user-menu.tsx        # User-specific view
    help.tsx             # In-app help/instructions
  lib/
    AppContext.tsx       # Global state (user, menu items)
    theme.ts             # Colors, spacing, typography, images
    types.ts             # TypeScript types
  Assets/
    restaurant-background.jpg  # App background image
  app.json               # Expo configuration
  package.json           # Scripts and dependencies
  tsconfig.json          # TypeScript configuration
  eslint.config.js       # ESLint configuration

  
