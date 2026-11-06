# ALPINE ASCENTS
### Explore Beyond Limits

## About the Project

Alpine Ascents is a mountaineering information website designed to provide visitors with information about mountains, mountain destinations, mountaineering organisations, and exploration experiences.

The platform aims to make mountain-related information accessible through an organised, interactive and visually engaging website.

## Features

- **Homepage:** Introduction to Alpine Ascents and featured mountain destinations.
- **Mountains:** Information about mountains, including names, locations, elevations and rankings.
- **Destinations:** Explore mountain destinations and their geographical locations.
- **Gallery:** A collection of mountain photographs and videos.
- **Organisations:** Information about mountaineering organisations.
- **Interactive Maps:** Display geographical locations using Leaflet.
- **Visitor Counter:** Keep track of website visits.
- **Live Information Ticker:** Display the current date, time and location.
- **About:** Information about the platform and its purpose.
- **Contact:** A page for visitor enquiries.

## Technologies Used

- React.js
- Vite
- JavaScript
- HTML5
- CSS3
- React Router DOM
- XML
- Leaflet Maps

## Project Structure

```text
src/
├── assets/
├── components/
│   ├── Header.jsx
│   └── Footer.jsx
├── data/
│   ├── mountains.json
│   ├── destinations.json
│   └── organisations.json
├── hooks/
│   ├── useLocalStorage.js
│   └── useVisitorCounter.js
├── pages/
│   ├── Home.jsx
│   ├── Mountains.jsx
│   ├── Destinations.jsx
│   ├── Gallery.jsx
│   ├── About.jsx
│   └── Contact.jsx
├── styles/
│   ├── variables.css
│   ├── global.css
│   └── responsive.css
├── App.jsx
├── App.css
├── index.css
└── main.jsx
```

## Getting Started

### Prerequisites

- Node.js
- npm
- Visual Studio Code or another code editor

### Installation

1. Clone the repository:

```bash
git clone https://github.com/saayorfavour-lang/alpine-ascents.git
```

2. Navigate into the project directory:

```bash
cd alpine-ascents
```

3. Install the project dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm run dev
```

5. Open the local URL provided by Vite in your browser.

## Design System

The website uses a consistent visual identity inspired by alpine landscapes.

| Element | Value |
|---|---|
| Primary Colour | `#102A43` |
| Background | `#F4F7FA` |
| Secondary Colour | `#6B8295` |
| Accent Colour | `#8CCFE8` |
| Highlight | `#D5AD67` |
| Heading Font | Cormorant Garamond |
| Body Font | Inter |

## Development Guidelines

- Maintain a consistent design across all pages.
- Use reusable React components.
- Keep data separate from presentation.
- Follow the existing folder structure.
- Ensure the website is responsive.
- Test features before integration.
- Write clean and readable code.

## Project Status

**Development in Progress.**