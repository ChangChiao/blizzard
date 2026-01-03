# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A Vue 2 landing page clone of the Blizzard Entertainment official website. Features a hand-crafted carousel with autoplay animation, responsive design, and ITCSS-organized SCSS.

## Commands

```bash
# Development server
npm run serve

# Production build (outputs to /docs for GitHub Pages)
npm run build

# Lint and fix
npm run lint
```

## Architecture

### SCSS Organization (ITCSS)

The project uses ITCSS (Inverted Triangle CSS) architecture in `src/scss/`:

1. **Settings** - Variables and configuration
   - `setting.base.scss` - Base variables
   - `setting.rwd.scss` - Breakpoint values ($pc-media: 1600px, $pad-media: 768px, etc.)

2. **Tools** - Mixins and functions
   - `tools.rwd.scss` - Responsive mixins (`@include pad-width()`, `@include phone-width()`, etc.)

3. **Generic** - Reset/normalize styles
   - `generic.reset.scss`

4. **Elements** - Bare HTML element styles
   - `elements.base.scss`

5. **Components** - Reusable component styles (BEM naming)
   - `components.button.scss`, `components.title.scss`, etc.

Import order is defined in `main.scss`.

### Responsive Breakpoints

Use the RWD mixins for mobile-first responsive design:
- `phone-width()` - 480px+
- `pad-width()` - 768px+
- `padl-width()` - 992px+
- `pcs-width()` - 1200px+
- `pc-width()` - 1600px+

### Component Structure

- `LandingPage.vue` - Main page container, manages mobile menu state
- `Carousel.vue` - Custom carousel with autoplay (5s interval), CSS transitions, and pagination
- `Header.vue` / `MobileHeader.vue` - Separate desktop/mobile navigation
- `MobileMenu.vue` - Full-screen mobile navigation overlay

### Carousel Implementation

The carousel (`src/components/Carousel.vue`) is hand-crafted without external libraries:
- Uses CSS transform/transition for smooth sliding
- Clone-based infinite loop pattern (4 slides for 3 items)
- Autoplay with 5-second intervals
- Click pagination and prev/next controls
- Staggered fade-in animations for content elements

## Code Style

- ESLint + Prettier with 4-space indentation
- BEM naming convention for CSS classes
- Vue single-file components with scoped SCSS
