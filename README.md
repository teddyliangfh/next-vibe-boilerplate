# Next Vibe Boilerplate

A modern Next.js starter template designed for vibe coding, featuring best practices and a robust developer experience out of the box.

## Features

- **Next.js (App Router)**: Built with the latest Next.js (app directory, server components, routing).
- **React 19**: Fully compatible with React 19.
- **TypeScript**: Type-safe development by default.
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development.
- **pnpm**: Fast, disk space-efficient package manager.
- **Vitest**: Blazing fast unit/component testing with React Testing Library and jsdom.
- **ESLint**: Linting for code quality and consistency.
- **Prettier**: Code formatting for a clean codebase.
- **File-based Routing**: Modern app directory structure.

## Getting Started

1. **Install dependencies**
   ```bash
   pnpm install
   ```
2. **Run the development server**
   ```bash
   pnpm dev
   ```
   Open [http://localhost:3000](http://localhost:3000) to view the app.

3. **Run tests**
   ```bash
   pnpm test
   # or open the interactive UI
   pnpm test:ui
   ```

## Project Structure

- `src/app/` - App router pages, layouts, and route handlers
- `public/` - Static assets
- `globals.css` - Global styles (Tailwind included)
- `vitest.config.ts` - Vitest configuration
- `tsconfig.json` - TypeScript configuration

