# literal

Source code for [doedja.com](https://doedja.com) - my personal blog.

Built with Astro. Inspired by [mataroa.blog](https://mataroa.blog)'s clean, no-nonsense approach.

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

1. Connect GitHub repo to Cloudflare Pages
2. Set build command: `bun run build`
3. Set output directory: `dist`
4. (Optional) Add environment variables for analytics:
   - `UMAMI_WEBSITE_ID`: your Umami website ID
   - `UMAMI_SRC`: your Umami script URL

Then just:

```bash
bun run deploy
```

## License

MIT
