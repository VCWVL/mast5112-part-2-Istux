Istiyak Patel
ST Number- ST10471810
MAST Part 2

1. Project Title
Christoffel's Culinary App

3. Project Overview

The User Filter Screen App is a mobile-based application developed using React Native and TypeScript, designed to provide an intuitive and efficient way for users to browse and filter menu items in a restaurant-like environment. The application allows users to select categories such as “Starters,” “Mains,” and “Desserts” and instantly view relevant dishes.

This project aims to demonstrate the use of React Native components, context-based state management, and modular TypeScript coding to create a dynamic, responsive, and maintainable mobile interface.

The app is designed for both customers (end-users who explore the menu) and staff members (administrators who can extend functionality to include editing, adding, or removing dishes in future versions).

3. App Purpose and Users
Purpose
To simplify digital menu navigation in restaurants or catering services.

To provide a consistent, clean, and interactive experience for end users.

To serve as a learning model for mobile UI/UX best practices using React Native.

User Roles
Customer (Primary User):

Can browse, view, and filter dishes.

Can open modals to read dish details.

Navigates through the app using menu options.

Admin (Future Integration):

Can modify menu data.

Can manage dish categories and descriptions.


4. Design and User Interface

The interface follows Material Design principles and ensures ease of use and accessibility.

UI Components

Header Section: Displays the app title clearly for orientation.

Filter Buttons: Allow users to quickly switch between categories.

Dish Cards: Present dish name, course, and description.

Modal Window: Provides a detailed view of the selected dish.

Navigation Bar: Allows smooth transitions between Home, Menu, Help, and Login screens.

Visual Hierarchy

Title (largest, boldest font)

Filter Buttons (medium prominence)

Menu List (scrollable, focus area)

Modal (pop-up priority layer)

The app uses an ImageBackground to maintain a modern aesthetic while ensuring legibility through a semi-transparent overlay.

5. Code Architecture

The app follows the component-based architecture of React Native, where each UI and logic unit is encapsulated.

Structure Overview

lib/AppContext.tsx – Provides global menu data via Context API.

lib/types.ts – Defines MenuItem interface for strong typing.

lib/theme.ts – Contains reusable color palette, spacing, and imagery references.

screens/UserFilterScreen.tsx – Handles filtering logic, rendering, and modal control.

screens/UserMenu.tsx, UserHome.tsx, Help.tsx, Login.tsx – Support navigation and extended UI.

Logic Flow

Data (menu items) are loaded into context.

The UserFilterScreen retrieves data and displays it.

User selects a filter (updates selectedCourse state).

Filtered list updates dynamically.

Clicking an item opens a modal displaying its details.

Navigation buttons move between screens.

6. Features

Dynamic Filtering Displays only dishes belonging to the selected category.
Context-Based State Management Prevents prop drilling and improves efficiency.
Modal Interaction Displays detailed information for selected dishes.
Reusable Theme Ensures uniform styling across screens.
Error-Free Navigation Uses expo-router for seamless page transitions.
TypeScript Safety Prevents runtime errors and improves maintainability.
Responsive Layout Adapts automatically to all screen sizes.

7. Security and Performance

No Sensitive Data Stored: The app does not collect or transmit any user data.

Safe Navigation: Routes are controlled and validated.

Optimized Rendering: Filtering logic uses conditional rendering for performance.

Memory Efficiency: State resets when modals close, preventing memory leaks.

Clean Unmounting: Hooks are used properly to avoid side effects.

8. Testing and Debugging
Testing Strategy

Manual Testing: Conducted on both Android and web environments via Expo Go.

Unit Testing (Planned): Future integration using Jest for components and context.

Functional Testing: Verifies filtering and modal toggling functionalities.

Debugging Tools

Expo CLI Logs: For tracking real-time error outputs.

React Developer Tools: For inspecting component states.

TypeScript Compiler: Identifies type-related errors before runtime.

9. Limitations

Currently uses static data instead of a live API.

Lacks user authentication (planned for future).

Modal content is text-only (image integration planned).

No offline caching implemented yet.

Testing coverage is minimal, relying mainly on manual checks.

10. Future Improvements
Add real-time API integration for dynamic menu updates.
Include user login and admin panel.
Implement search functionality.
Add image support for dishes.
Introduce dark mode and custom animations.
Integrate unit and UI testing.

11. Ethical & Accessibility Considerations

Follows WCAG 2.1 accessibility guidelines.

Uses contrast-friendly colors and readable text.

Avoids bias by presenting all dishes equally without prioritization.

Does not collect or store user data, ensuring confidentiality.

Complies with ethical UX design by maintaining transparency and usability.




Visuals from the app.

<img width="1919" height="1079" alt="Screenshot 2025-10-22 193256" src="https://github.com/user-attachments/assets/114ffae2-9521-47fb-98bf-88487517d560" />
<img width="1918" height="1079" alt="Screenshot 2025-10-22 193308" src="https://github.com/user-attachments/assets/b35c4b61-1575-4189-901b-03c910d2cb71" />
<img width="1919" height="1079" alt="Screenshot 2025-10-22 193316" src="https://github.com/user-attachments/assets/b1d43fd7-4115-43f1-90b2-5e54bd0fd9ec" />
<img width="1919" height="1079" alt="Screenshot 2025-10-22 193325" src="https://github.com/user-attachments/assets/aebe9c5d-c43a-45f9-9506-045a4f559330" />
<img width="1919" height="1079" alt="Screenshot 2025-10-22 193337" src="https://github.com/user-attachments/assets/a19744bf-6f70-4738-8718-8f13476daad6" />
<img width="1918" height="1079" alt="Screenshot 2025-10-22 193349" src="https://github.com/user-attachments/assets/a90372ee-e92b-4a6b-b29f-a0f507085657" />
<img width="1919" height="1079" alt="Screenshot 2025-10-22 193405" src="https://github.com/user-attachments/assets/7bcbfbfd-643c-49f2-a50b-482fe1543b40" />
<img width="1919" height="1074" alt="Screenshot 2025-10-22 193443" src="https://github.com/user-attachments/assets/ac887795-d64d-4873-b8e6-8a7099adb2e9" />
<img width="1919" height="1079" alt="Screenshot 2025-10-22 193449" src="https://github.com/user-attachments/assets/4eab8a89-66f4-4e28-b32c-6845c789cb79" />
<img width="1919" height="1079" alt="Screenshot 2025-10-22 193458" src="https://github.com/user-attachments/assets/3b1418b8-dc7f-43cd-8a4d-e585ce7e073a" />
<img width="1910" height="1079" alt="Screenshot 2025-10-22 193510" src="https://github.com/user-attachments/assets/93a524d8-f71b-4848-84ae-858259a7a4b2" />



References

Expo. (2024). React Native development with Expo Router. Available at: https://docs.expo.dev/router/introduction/
 (Accessed 22 October 2025).
Meta Platforms, Inc. (2023). React Native Documentation. Available at: https://reactnative.dev/docs
 (Accessed 22 October 2025).
TypeScript Team. (2024). TypeScript Handbook. Microsoft. Available at: https://www.typescriptlang.org/docs/
 (Accessed 22 October 2025).
W3C. (2021). Web Content Accessibility Guidelines (WCAG) 2.1. Available at: https://www.w3.org/TR/WCAG21/
 (Accessed 22 October 2025).
React Community. (2024). Using Hooks for State Management in React. Available at: https://react.dev/reference/react
 (Accessed 22 October 2025).
Google Developers. (2023). Material Design Guidelines for Mobile Applications. Available at: https://m3.material.io
 (Accessed 22 October 2025).
Nielsen Norman Group. (2022). 10 Usability Heuristics for User Interface Design. Available at: https://www.nngroup.com/articles/ten-usability-heuristics/
 (Accessed 22 October 2025).
OpenJS Foundation. (2023). React Native and Expo Best Practices for Performance Optimization. Available at: https://openjsf.org
 (Accessed 22 October 2025).








