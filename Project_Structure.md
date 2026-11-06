# ALPINE ASCENTS

## Project Overview

Alpine Ascents is a mountaineering information website designed to educate visitors about mountains, mountaineering, famous destinations, climbing experiences, and recent updates.

The website will provide useful information through an attractive, responsive, and easy-to-navigate interface.

## Team Members and Task Allocation

### 1. Favour Leesi Saayor — Team Lead

**Assigned sections: HOME, LEARN, and NAVIGATION BAR**

You are responsible for everything that appears under these sections.

**HOME**
- Build the homepage layout.
- Add the main mountain hero image.
- Add the heading and introductory text.
- Add the call-to-action buttons.
- Add featured content and other homepage elements.
- Make the homepage responsive.

**LEARN**
- Build the complete Learn section.
- Add educational mountaineering information.
- Include relevant topics, explanations, and images.
- Organize information into readable sections or cards.
- Make the section easy for visitors to understand and explore.

**NAVIGATION BAR**
- Add the website logo and name.
- Add the navigation links.
- Include the visitor counter.
- Make navigation links work correctly.
- Add active-link styling.
- Ensure the navigation works on mobile screens.

**Additional responsibility:** Coordinate the team and integrate completed sections.

### 2. Oluwapamilerin Taiwo Adejumo

**Assigned sections: EXPLORE and SUCCESS STORIES**

You are responsible for everything that appears under these sections.

**EXPLORE**
- Build the complete Explore section.
- Display mountain destinations.
- Add mountain images, names, and descriptions.
- Organize destinations into attractive cards or sections.
- Include relevant information about each destination.
- Make the section responsive.

**SUCCESS STORIES**
- Build the complete Success Stories section.
- Include stories about notable climbers and mountaineering achievements.
- Add relevant images and descriptions.
- Organize stories into attractive cards or sections.
- Make the section responsive.

### 3. Marvellous Chukwudubem Michael

**Assigned sections: LATEST, CONTACT, and FOOTER**

You are responsible for everything that appears under these sections.

**LATEST**
- Build the complete Latest section.
- Display recent mountaineering updates and news.
- Include relevant images, descriptions, and links.
- Organize updates into readable cards or sections.

**CONTACT**
- Build the complete Contact section.
- Add contact information.
- Create the contact form.
- Include form fields and basic validation.
- Display appropriate feedback after form submission.

**FOOTER**
- Build the website footer.
- Add useful navigation links.
- Include copyright information.
- Add relevant contact and social links.

## Project Navigation

The website will contain these main navigation sections:

1. Home
2. Learn
3. Explore
4. Success Stories
5. Latest
6. Contact

Each team member should complete all the content, layout, styling, and interactions belonging to their assigned sections.

## Technology Stack

| Technology | Purpose |
|---|---|
| HTML5 | Website structure |
| CSS3 | Styling and responsiveness |
| JavaScript | Website functionality |
| React | Frontend development |
| Vite | Development environment |
| React Router DOM | Page navigation |
| JSON | Organizing website information |
| Git and GitHub | Version control and collaboration |

## Design Guidelines

The website should have a premium, modern, clean, and adventurous appearance.

**Colour palette**

- Charcoal: `#252722`
- Antique Gold: `#BFA052`
- Warm Ivory: `#F4F0E6`
- Deep Forest: `#183C32`
- White: `#FFFFFF`

**Typography**
- Headings: Cormorant Garamond
- Body text: Inter

**Design requirements**
- Use realistic mountain images.
- Maintain consistent colours and typography.
- Keep spacing and layouts consistent.
- Ensure the website works on desktop, tablet, and mobile.
- Avoid overcrowded layouts.

## Project Folder Structure

```text
ALPINE-ASCENTS/
├── public/
│   └── images/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   └── Ticker.jsx
│   ├── data/
│   │   ├── mountains.json
│   │   ├── destinations.json
│   │   └── organisations.json
│   ├── hooks/
│   │   ├── useLocalStorage.js
│   │   └── useVisitorCounter.js
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Learn.jsx
│   │   ├── Explore.jsx
│   │   ├── SuccessStories.jsx
│   │   ├── Latest.jsx
│   │   └── Contact.jsx
│   ├── styles/
│   │   ├── variables.css
│   │   ├── global.css
│   │   └── responsive.css
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
└── README.md
```

## Git and GitHub Workflow

The project will use the following branches:

- `main` — Final working project.
- `develop` — Integration branch.
- `feature/favour` — Favour's work.
- `feature/taiwo` — Taiwo's work.
- `feature/marvellous` — Marvellous's work.

### Before starting work

```bash
git checkout develop
git pull origin develop
git checkout -b feature/your-name
```

If your feature branch already exists:

```bash
git checkout feature/your-name
git pull origin develop
```

### After completing your work

```bash
git add .
git commit -m "Complete assigned section"
git push origin feature/your-name
```

Team members should push their work to their own feature branches. The team lead will coordinate merging completed work into `develop`.

## Documentation Requirements

Each team member must prepare a personal documentation file:

- `Favour_Documentation.md`
- `Taiwo_Documentation.md`
- `Marvellous_Documentation.md`

Each documentation file should include:

1. Assigned sections.
2. Features implemented.
3. Files created or edited.
4. How the features work.
5. Technologies used.
6. Challenges encountered and solutions.
7. Screenshots of completed work.

## Important Project Features

The completed website must include:

- Working navigation links.
- A visitor counter.
- A continuous scrolling information ticker.
- Current date and time in the ticker.
- Location information using browser geolocation, with a suitable fallback if permission is denied.
- Responsive layouts.
- Working contact form interactions.
- A consistent design across all sections.

**Note:** Browser geolocation provides coordinates. Displaying a readable location name may require a reverse-geocoding service. A visitor counter using local storage counts visits in that browser, not total visitors across all devices.

## Final Submission Checklist

- [ ] Home section completed.
- [ ] Learn section completed.
- [ ] Explore section completed.
- [ ] Success Stories section completed.
- [ ] Latest section completed.
- [ ] Contact section completed.
- [ ] Navigation bar completed.
- [ ] Visitor counter working.
- [ ] Scrolling ticker working.
- [ ] Footer completed.
- [ ] Website responsive.
- [ ] All sections integrated.
- [ ] Documentation completed.
- [ ] Project tested successfully.
- [ ] Production build tested using `npm run build`.

## Final Deliverables

The team is expected to submit:

1. The complete Alpine Ascents website.
2. A working website demonstration.
3. The project source code.
4. Individual team documentation.
5. The GitHub repository containing the project.