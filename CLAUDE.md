# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server (Vite HMR)
npm run build    # Production build to dist/
npm run preview  # Preview production build locally
npm run lint     # Run ESLint
```

## Architecture

This is a React 19 e-commerce storefront for "Echoes of Abandon" - an art/merchandise store selling liminal-themed prints, canvas art, and drinkware. Built with Vite, no routing library (single-page layout).

### Key Structure

- **State Management**: React Context (`src/context/CartContext.jsx`) provides cart state, toast notifications, and localStorage persistence. Access via `useCart()` hook.
- **Data**: Product catalog in `src/data/products.js` - products have `id`, `name`, `description`, `price`, `category` (prints/canvas/drinkware), optional `badge`, `hue` (for placeholder gradients), and `featured` flag.
- **Styling**: Hybrid Tailwind CSS v4 + custom CSS. Most layouts use Tailwind utility classes; complex patterns (animations, gradients, pseudo-elements) remain in co-located CSS files.

### Tailwind CSS v4

Uses CSS-first configuration in `src/index.css` with `@theme` block for custom values:
- Colors: `bg-primary`, `bg-secondary`, `text-primary`, `text-secondary`, `text-muted`, `accent`, `accent-hover`, `border`
- Fonts: `font-sans` (Inter), `font-serif` (Playfair Display), `font-mono` (Space Mono)
- Custom animations: `fade-in-up`, `fade-in`, `scroll-pulse`

CSS files kept for complex patterns:
- `Hero.css` - keyframe animations, multi-layer gradients
- `ProductCard.css` - dynamic HSL gradients via `--hue` variable, hover overlays
- `Navbar.css` - underline animation, mobile menu transforms
- `CategoryBanner.css` - dynamic HSL gradients, letter-spacing transitions
- `Newsletter.css` - gradient backgrounds
- `CartSidebar.css` - slide animation, dynamic HSL cart item images
- `Toast.css` - center transform animation
- `AboutSection.css` - gradient placeholder

### Design System

Dark theme with warm gold accent (`#d4a574`). Film grain overlay applied globally via `.grain-overlay`.

### ESLint

Custom rule: `varsIgnorePattern: '^[A-Z_]'` allows unused variables starting with uppercase or underscore.
