# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- **Start development server**: `npm run dev` (runs on http://localhost:3000)
- **Build for production**: `npm run build`
- **Start production server**: `npm run start`
- **Lint code**: `npm run lint`
- **Type checking**: Use `npx tsc --noEmit` for standalone type checking

## Project Architecture

This is a Next.js 15 blog application using Nextra Blog Theme with the App Router architecture and TypeScript.

### Key Structure
- **App Directory**: `app/` - Uses Next.js App Router with Nextra
  - `app/layout.tsx` - Root layout with Nextra theme CSS imports
  - `app/page.mdx` - Homepage in MDX format
  - `app/posts/[slug]/page.mdx` - Blog posts using Next.js dynamic routing
  - `app/globals.css` - Global styles (retained from original setup)
- **Configuration Files**:
  - `next.config.ts` - Next.js config with Nextra integration
  - `theme.config.jsx` - Nextra blog theme configuration
  - `tsconfig.json` - TypeScript config with `@/*` path alias
  - `eslint.config.mjs` - ESLint configuration
- **Public Assets**: `public/` - Static assets (SVG icons, images)

### Technology Stack
- **Framework**: Next.js 15.5.2 with App Router
- **Static Site Generator**: Nextra 4.4.0 with Blog Theme
- **Language**: TypeScript with strict mode enabled
- **Content**: MDX for blog posts and pages
- **Styling**: Nextra theme styles (Tailwind CSS removed in favor of theme)
- **React**: Version 19.1.0

### Content Management
- **Blog Posts**: Create directories `app/posts/[slug]/page.mdx` for each post
- **Frontmatter**: Each post should include title, date, description, tag, and author
- **Homepage**: Edit `app/page.mdx` for homepage content
- **URLs**: Posts are accessible at `/posts/[slug]` (e.g., `/posts/hello-world`)

### Development Notes
- Uses Next.js App Router with Nextra 4.0 (requires App Router)
- Blog posts are automatically indexed and displayed by Nextra
- MDX allows mixing Markdown with React components
- Theme configuration supports dark mode, custom navigation, and SEO settings
- Path alias `@/*` maps to the project root