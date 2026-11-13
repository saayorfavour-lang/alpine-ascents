# ALPINE ASCENTS
## Project Documentation – Marvellous's Contribution

### 1. Assigned sections
Latest, Contact and Footer.

### 2. Features implemented
- **Latest:** news and developments loaded from `src/data/latest.json`; filter buttons (All / Current / Recent history / Ongoing); each card has a label, date, summary, Wikipedia lead image with credit, and a source link; the newest item is featured; responsive grid.
- **Contact:** validated form (name, email, subject, message) with per-field error messages, character counter, loading state and status feedback. Delivery works in three ways: a form service (`VITE_FORM_ENDPOINT`), the visitor's email app (`email` in `contact.json`), or an honest demo mode that says nothing was emailed. Also shows contact information and an emergency notice. The email links open Gmail in a new tab.
- **Footer:** brand text, links to every page and every Learn topic, contact links, copyright with the current year, and a back-to-top button. Every link scrolls to the top of the new page.

### 3. Files created or edited
`src/pages/Latest.jsx`, `Latest.css`, `src/pages/Contact.jsx`, `Contact.css`, `src/components/Footer.jsx`, `Footer.css`, `src/data/latest.json`, `src/data/contact.json`.

### 4. How the features work
- `Latest.jsx` imports `latest.json`, keeps the selected filter in React state (`useState`) and renders the matching items. `ArticleImage` fetches the Wikipedia lead image with `useEffect`.
- `Contact.jsx` keeps form values, errors and status in state. `validate()` checks every field on submit; errors clear as the user types.
- `Footer.jsx` uses React Router `Link` components so navigation does not reload the page.

### 5. Technologies used
React, Vite, React Router DOM, JavaScript, CSS3, JSON, Git and GitHub.

### 6. Challenges and solutions
- No backend exists, so the form cannot send email by itself. Solution: support a form service or a mailto fallback, and a clearly labelled demo mode instead of pretending the message was sent.
- Route changes keep the previous scroll position. Solution: footer links scroll to the top on click.
- Verified news was needed. Solution: every item links to a source.

### 7. Screenshots
(Add screenshots of the Latest, Contact and Footer sections here before submission.)
