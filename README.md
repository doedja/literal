# literal

A minimal Astro blog. Mataroa simplicity, yours to customize.

Source for [doedja.com](https://doedja.com). Inspired by [mataroa.blog](https://mataroa.blog).

## Use as a template

Feel free to fork this repo and make it your own. Just update `site.config.ts` with your details and replace the content in `src/content/`.

## Features

- Clean URLs (`/post-title`)
- Markdown + MDX
- Categories via folders
- Static pages (about, books, projects)
- Pagination
- Zero JavaScript
- ~2 second builds

## Quick Start

```bash
bun install
bun run dev
```

## Configuration

Edit `site.config.ts`:

```ts
export const siteConfig = {
  title: "your site",
  description: "your description",
  author: "your name",
  footer: "your tagline",
};
```

## Content

### Posts

Create `src/content/posts/{category}/post-name.md`:

```markdown
---
title: "Post Title"
date: 2024-01-01
---

Content here...
```

### Pages

Edit files in `src/content/pages/`:

- `about.md`
- `books.md`
- `projects.md`

## Deploy

Connect your repo to Cloudflare Pages with:
- Build command: `bun run build`
- Output directory: `dist`

Then just push to GitHub - Cloudflare auto-deploys.

Set environment variables in Cloudflare dashboard for analytics:
- `UMAMI_WEBSITE_ID`: your Umami website ID
- `UMAMI_SRC`: your Umami script URL

## License

MIT
