# Portfolio Website

This is a simple personal portfolio website for Kunal Saini. The site is built with plain HTML, CSS, and a small amount of JavaScript for the contact form.

## File Structure

- `index.html` - Home page. Introduces the portfolio, gives a short summary of skills, and links visitors to the projects page.
- `about.html` - About page. Describes professional background, core skills, and includes a CV download link.
- `projects.html` - Projects page. Shows featured projects with screenshots and external links to live demos.
- `contact.html` - Contact page. Contains the contact form with fields for name, email, subject, and message.
- `contact.js` - Client-side form handler. Prevents the default submit action, checks that the fields are filled in, and shows a status message on the page.
- `style.css` - Shared stylesheet used by all pages.
- `bitlinks.png` - Screenshot used on the projects page for the Bitlinks project.
- `Imdb.png` - Screenshot used on the projects page for the IMDB Clone project.
- `health.png` - Screenshot used on the projects page for the Health Care project.
- `portfolio.png` - Screenshot used on the projects page for the portfolio project.
- `C V Kunal.pdf` - Resume/CV file linked from the About page.

## Page Intent

### Home
The home page is meant to give a quick introduction to the developer, highlight the main skill areas, and direct users to explore the rest of the site.

### About
The about page is intended to explain the developer's background, technical strengths, and broader approach to building accessible and responsive websites.

### Projects
The projects page is intended to showcase selected work samples. Each card includes an image, a short description, and a link to the live project.

### Contact
The contact page is intended to let visitors send a message using the form. The form is handled in the browser by `contact.js`, so the feedback appears immediately on the page.

## Notes

- All pages share the same navigation and footer so the site feels consistent.
- The design is responsive and uses one common stylesheet.
- The contact form currently demonstrates front-end handling only. To actually send messages to email or a database, a backend service would be needed.

## How to View

Open `index.html` in a browser to start browsing the site.
