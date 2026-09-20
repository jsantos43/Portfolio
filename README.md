# João Pedro's Portfolio

A responsive personal portfolio built with React and Vite. It presents my background in computer science, selected work, professional experience, technical skills, certifications, and contact details in a focused single-page experience.

## Highlights

- Responsive layout with desktop and mobile navigation
- Smooth scrolling between the About, Experience, Work, and Contact sections
- Dedicated achievements page for courses and certificates
- Project and experience content maintained in simple JSON data files
- Downloadable resume and links to live projects, GitHub, LinkedIn, and other profiles
- Subtle visual effects and custom typography

## Built with

- [React](https://react.dev/)
- [Vite](https://vite.dev/)
- [React Router](https://reactrouter.com/)
- JavaScript (ES6+), HTML, and CSS

## Getting started

### Prerequisites

- Node.js 18 or newer
- npm

### Installation

```bash
git clone https://github.com/jsantos43/portfolio.git
cd portfolio
npm install
```

### Run locally

```bash
npm run dev
```

The development server is configured to open at [http://localhost:3000](http://localhost:3000).

### Production build

```bash
npm run build
```

The optimized production files are generated in `dist/`. To preview that build locally:

```bash
npm run preview
```

## Project structure

```text
src/
├── animations/     # Reusable visual effects
├── assets/         # Fonts, images, and global styles
├── components/     # Shared interface components
├── data/           # Portfolio content in JSON files
├── hooks/          # Custom React hooks
├── icons/          # SVG-based icon components
├── layouts/        # Main portfolio sections
├── pages/          # Routed pages, including achievements
├── App.jsx         # Application shell and routes
└── index.jsx       # Application entry point

public/
├── certificates/   # Course certificates
└── resume.pdf      # Downloadable resume
```

## Customizing the content

Most portfolio copy is separated from the UI. Update the files in `src/data/` to change the hero introduction, bio, experience, featured work, project list, contact message, and certifications without editing the section components.

Images and fonts live in `src/assets/`; public files such as the resume and certificates belong in `public/`.

## Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Starts the Vite development server. |
| `npm start` | Alias for the development server. |
| `npm run build` | Creates an optimized production build in `dist/`. |
| `npm run preview` | Serves the production build locally. |

## Contact

Interested in working together? Feel free to reach out.

- Email: [joao.santos.2007sp@gmail.com](mailto:joao.santos.2007sp@gmail.com)
- LinkedIn: [joaosantos2007](https://www.linkedin.com/in/joaosantos2007/)
- GitHub: [jsantos43](https://github.com/jsantos43)
