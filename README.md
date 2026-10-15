# Sarra Zerguerras Portfolio

Personal portfolio for Khayra Sarra Zerguerras, built with Next.js,
TypeScript, Tailwind CSS, and MDX. The site presents engineering projects,
research interests, creative work, and writing about AI and software
engineering.

## Development

The project requires Node.js 20 or newer.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) after the development
server starts.

## Scripts

- `npm run dev` starts the development server.
- `npm run build` creates the production build.
- `npm run start` serves the production build locally.

## Project structure

```text
app/                 Routes, layouts, and the contact API route
components/          Shared site, homepage, section, blog, and UI components
config/              Site-wide navigation and social-link configuration
content/posts/       Published blog posts rendered as MDX
lib/                  Content loaders and shared utilities
public/               Static images, logos, icons, and downloadable files
```

### Adding a blog post

1. Add an `.mdx` file under `content/posts/`.
2. Add its metadata and slug to the registry in `lib/posts.ts`.
3. Put post-specific images under
   `public/images/blog/<post-slug>/` and reference them with root-relative
   paths such as `/images/blog/<post-slug>/figure-1.png`.

### Contact form configuration

The contact API uses Gmail SMTP credentials supplied through environment
variables. Create a local `.env.local` file with:

```text
EMAIL_USER=your-address@example.com
EMAIL_PASS=your-app-password
```

Do not commit environment files or credentials. They are excluded by
`.gitignore`.

## Deployment

The app can be deployed to any Next.js-compatible host. Set the contact
environment variables in the host's secret or environment-variable settings
before enabling the contact form.
