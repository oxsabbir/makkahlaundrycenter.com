# Makkah Laundry Center — Vite React

The original template is now a Vite React single-page application with clean
routes, JSX pages, shared layouts, and reusable data-driven sections.

## Start development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

Static images, fonts, stylesheets, and vendor scripts live in `public/assets`.
Page modules live in `src/pages`, route definitions live in `src/routes`, and
shared UI lives in `src/components`. Service and testimonial content can be
edited centrally in `src/data`.

Vite requires the root `index.html` as its application mount point. All visible
pages and layouts are JSX and use clean routes such as `/services` and
`/testimonials`.
