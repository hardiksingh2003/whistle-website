# Whistle — Invisible Aligners Website

A React page section built from the Whistle Figma design as part of the Unbundl Frontend Developer Assessment.

## Setup & Run

\```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev
\```

The app runs at `http://localhost:5173` by default.

### Build for Production

\```bash
npm run build
npm run preview
\```

## API / Data Source

The Figma design features dental aligner content (pricing, before/after results, clinic details) which does not map well to any of the provided public APIs (Fake Store, DummyJSON, JSONPlaceholder). Therefore, **local mock data** (`src/data/mockData.json`) is used to populate the components. The data is fetched asynchronously via dynamic import with an 800ms simulated delay to demonstrate proper `useEffect`/`useState` lifecycle handling, loading states, and error handling.

## Sections Built (7 Frames)

1. **Hero Section** — Announcement bar with offer pricing, headline with pastel gradient background, hero image, booking form with radio buttons (Yes/No), name and phone inputs, and CTA button.
2. **Clinic Banner** — Clove Dental partnership banner with expand/collapse interaction.
3. **Marquee** — Auto-scrolling benefit strip with launch offers.
4. **Dream Smiles** — Product pricing card with green checkmarks and "Learn more" link.
5. **Results You'll Love** — Before/after comparison cards with concern type and treatment duration.
6. **Why Whistle?** — Four feature cards with images, titles, and descriptions in a responsive 4-column grid layout.
7. **The Whistle Difference** — Split layout with three feature items (Next-Gen, Hassle-Free, Transparent Pricing) on the left and a product image on the right.

## Interaction (Task C)

- **Find Clinic expand/collapse** — clicking the "Find Clinic" button toggles a dropdown with clinic cities (primary interaction).
- **Hover effects** on all cards (Why Whistle cards, Result cards, Product card) — lift + shadow animation with image zoom on Why Whistle cards.
- **CTA button hover** — subtle color shift and upward lift on the "Book a Free Scan" button.
- **Learn More arrow animation** — arrow slides right on hover.
- **Radio button selection** — custom styled radio buttons with purple fill state.

## Replacing Placeholder Images

All images use `picsum.photos` placeholders. To replace with actual assets:
1. Add your images to `src/assets/` or `public/`
2. Update the `src` attributes in the corresponding component JSX files
3. Update image URLs in `src/data/mockData.json` for data-driven images

## Approach

- **Vite + React** for fast development and HMR.
- **Plain CSS** — no UI libraries (Material UI, Ant Design, Chakra, etc.); each component has its own CSS file for clean separation.
- **Responsive** — layouts adapt across three breakpoints: desktop (4-column grids), tablet (2-column), and mobile (stacked/2-column).
- **Placeholder images** from Picsum sized to approximate the Figma design dimensions.

## Tech Stack

- React 18
- Vite 5
- Plain CSS (component-scoped files)
- Google Fonts (Inter)