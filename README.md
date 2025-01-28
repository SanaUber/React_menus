<<<<<<< HEAD
# React_menus
React_menus
=======
# React Sidebar Navigation Project

## Overview

This project is a simple React application that implements a sidebar navigation menu with nested submenus using `styled-components` and `react-router-dom`.

## Features

- **Sidebar Navigation**: A responsive sidebar that can be toggled open or closed.
- **Submenu Items**: Nested submenu items that can be expanded or collapsed.
- **Styled Components**: Use of `styled-components` for modular and scoped CSS.
- **React Icons**: Integration of icons from `react-icons`.

## Project Structure


├── src
│ ├── components
│ │ ├── Navbar.js
│ │ ├── SidebarData.js
│ │ ├── SubMenu.js
│ │ └── Navbar.css
│ ├── App.js
│ ├── index.js
│ └── ...
├── package.json
└── README.md

Features
Sidebar Navigation: A sidebar that can be toggled open or closed.
Submenu Items: Expandable/collapsible submenu items.
Icons: Integrates icons using react-icons.
Components
Navbar.js
Purpose: Contains the main navigation bar and sidebar.
Key Points:
Uses useState to manage the sidebar's visibility.
Toggles sidebar visibility using FaBars and AiOutlineClose icons.
Maps through SidebarData to render SubMenu components.
SidebarData.js
Purpose: Holds an array of objects representing sidebar menu items and their submenus.
Key Points:
Each menu item can have nested submenus with their own paths and icons.
SubMenu.js
Purpose: Handles rendering of submenu items.
Key Points:
Uses useState to manage the visibility of submenus.
Toggles submenu visibility and displays appropriate icons for open/close states.
Maps through subNav items to render nested DropdownLink components.
Technical Highlights:
useState is a React hook that allows   to add state to functional components.
FaIcons and AiIcons are imports from react-icons for adding icons to your project.
SidebarData contains the data for the sidebar menu items.
Link is from react-router-dom for navigation.
IconContext is from react-icons to provide a global icon style.
styled is from styled-components for styling components.
>>>>>>> 1dbb4be657702d129679252b7c8f2fe1d363291c
