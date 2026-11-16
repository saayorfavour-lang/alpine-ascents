 # ALPINE ASCENTS

## 1. Project Overview

Alpine Ascents is a mountaineering information website designed to educate visitors about mountains, mountaineering, famous destinations, climbing experiences, safety guidelines, and recent updates.

The website provides useful information through an attractive, responsive, and easy-to-navigate interface.

The project was developed using React and Vite, with Git and GitHub used for version control and team collaboration.

## 2. Team Members and Task Allocation

### 2.1 Favour Leesi Saayor — Team Lead

**Assigned sections: Home, Learn, and Navigation Bar**

Responsibilities:

**Home**
- Developed the homepage layout.
- Added the main mountain hero section.
- Added the main heading and introductory content.
- Added call-to-action elements and homepage content.
- Worked on the homepage's responsive layout.

**Learn**
- Developed the Learn section and its educational content.
- Organised mountaineering topics into readable sections.
- Included information about mountain history, hazards, safety, sheltering, types of mountains, and safety guidelines.
- Implemented an interactive safety guidelines checklist.

**Navigation Bar**
- Worked on the website header and navigation links.
- Integrated the website logo and name.
- Implemented the visitor counter.
- Worked on navigation functionality and presentation.

**Additional responsibilities**
- Coordinated team activities.
- Integrated team members' contributions.
- Worked on the scrolling information ticker.
- Helped maintain consistency across the website.

### 2.2 Oluwapamilerin Taiwo Adejumo

**Assigned sections: Explore and Success Stories**

Responsibilities:

**Explore**
- Developed the Explore section.
- Presented mountain destinations.
- Organised destination information into visual sections or cards.
- Included relevant mountain images and descriptions.

**Success Stories**
- Developed the Success Stories section.
- Presented stories about notable climbers and mountaineering achievements.
- Organised stories with relevant images and descriptions.

### 2.3 Marvellous Chukwudubem Michael

**Assigned sections: Latest, Contact, and Footer**

Responsibilities:

**Latest**
- Developed the Latest section.
- Presented mountaineering updates and news.
- Organised updates using relevant images and descriptions.

**Contact**
- Developed the Contact section.
- Added contact information and a contact form.
- Implemented form interactions and feedback.

**Footer**
- Developed the website footer.
- Added useful navigation links and copyright information.
- Worked on the footer layout and presentation.

## 3. Project Navigation

The website contains the following main sections:

1. Home
2. Learn
3. Explore
4. Success Stories
5. Latest
6. Contact

React Router DOM is used to navigate between the different pages.

## 4. Technology Stack

| Technology | Purpose |
|---|---|
| HTML5 | Website structure |
| CSS3 | Styling and responsive layouts |
| JavaScript | Website functionality |
| React | Frontend development |
| Vite | Development environment |
| React Router DOM | Page navigation |
| JSON | Organising structured information |
| Local Storage | Storing selected information in the browser |
| Git | Version control |
| GitHub | Code hosting and team collaboration |

## 5. Design Guidelines

The website follows a premium, modern, clean, and adventurous design direction.

### Colour Palette

- Charcoal: `#252722`
- Antique Gold: `#BFA052`
- Warm Ivory: `#F4F0E6`
- Deep Forest: `#183C32`
- White: `#FFFFFF`

### Typography

- Headings: Cormorant Garamond
- Body text: Inter

### Design Requirements

- Use realistic mountain images.
- Maintain consistent colours and typography.
- Keep spacing and layouts consistent.
- Ensure the website works on desktop, tablet, and mobile screens.
- Avoid overcrowded layouts.

## 6. Project Folder Structure

The project is organised into components, pages, hooks, data, and styling files.

```text
ALPINE-ASCENTS/
│
├── public/
│   └── images/
│
├── src/
│   ├── assets/
│   │
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   └── Ticker.jsx
│   │
│   ├── hooks/
│   │   └── useVisitorCounter.js
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Learn.jsx
│   │   ├── LearnTopic.jsx
│   │   ├── Explore.jsx
│   │   ├── SuccessStories.jsx
│   │   ├── Latest.jsx
│   │   └── Contact.jsx
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── index.html
├── package.json
└── README.md
```

*Note: This is the documented project structure based on the files identified during development. Check the actual project directory before submission and add any additional files or folders that are present.*

## 7. Git and GitHub Workflow

Git and GitHub were used to manage the source code, track changes, and support collaboration between team members.

### Branches Used

- `main` — Main project branch used to integrate completed work.
- `feature/marvellous` — Branch used for Marvellous's contributions.
- `feature/taiwo` — Feature branch allocated to Taiwo.
- `fix/footer-homepage` — Branch used for homepage and footer-related corrections.
- `feature/favour-documentation` — Branch used for Favour's documentation-related work.

### Collaboration Process

1. Team members worked on their assigned sections.
2. Changes were saved and tracked using Git.
3. Completed work was committed with descriptive commit messages.
4. Feature branches were pushed to GitHub.
5. Pull Requests were used to submit changes for review.
6. Approved changes were merged into the main project branch.

### Common Git Commands

Check the current branch:

```bash
git branch --show-current
```

Check project changes:

```bash
git status
```

Stage changes:

```bash
git add .
```

Commit changes:

```bash
git commit -m "Describe the changes made"
```

Push a feature branch:

```bash
git push -u origin branch-name
```

Pull the latest changes:

```bash
git pull origin main
```

## 8. Important Project Features

The website includes the following important features:

- Working navigation links.
- Visitor counter.
- Continuous scrolling information ticker.
- Current date and time displayed in the ticker.
- Browser geolocation functionality with an appropriate fallback.
- Educational mountaineering information.
- Interactive safety guidelines checklist.
- Responsive page layouts.
- Contact form interactions.
- Consistent design across the website.

### Visitor Counter

The visitor counter uses browser storage to keep track of visits on the current browser. It is not a global visitor count across all devices.

### Scrolling Information Ticker

The ticker displays information such as the current date, time, and location. JavaScript provides the date and time, while browser geolocation can retrieve the visitor's coordinates after permission is granted.

A readable location name may require reverse geocoding. A fallback should be displayed when location permission is unavailable or denied.

### Interactive Safety Guidelines Checklist

The Safety Guidelines page includes an interactive checklist that allows visitors to mark completed preparation items.

The checklist uses React state to update its selected items and calculate completion progress. Browser local storage can be used to preserve selections between visits when implemented.

## 9. Individual Documentation Requirements

Each team member is responsible for preparing an individual documentation file.

- `Favour_Documentation.md`
- `Taiwo_Documentation.md`
- `Marvellous_Documentation.md`

Each document should contain:

1. Assigned sections.
2. Features implemented.
3. Files created or edited.
4. Explanation of how the features work.
5. Technologies used.
6. Challenges encountered and solutions.
7. Screenshots of completed work.

## 10. Final Submission Checklist

- [ ] Home section completed.
- [ ] Learn section completed.
- [ ] Explore section completed.
- [ ] Success Stories section completed.
- [ ] Latest section completed.
- [ ] Contact section completed.
- [ ] Navigation bar completed.
- [ ] Visitor counter working.
- [ ] Scrolling ticker working.
- [ ] Date and time displayed.
- [ ] Location functionality tested.
- [ ] Safety guidelines checklist tested.
- [ ] Footer completed.
- [ ] Website responsive.
- [ ] All sections integrated.
- [ ] Individual documentation completed.
- [ ] Project tested successfully.
- [ ] Production build tested using `npm run build`.

## 11. Final Deliverables

The team is expected to submit:

1. The complete Alpine Ascents website.
2. A working website demonstration.
3. The project source code.
4. Individual team documentation.
5. The GitHub repository containing the project.

## 12. Conclusion

Alpine Ascents brings together educational mountaineering information, destination exploration, climbing success stories, recent updates, and visitor interaction in one website.

The project also provided practical experience in React development, responsive web design, component organisation, Git version control, and collaborative software development.