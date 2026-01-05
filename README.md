# JobDoneCrew — Industrial Deck Construction

Premium, high-performance landing page for a heavy-duty deck building company. Designed with a "Dark Industrial" aesthetic, optimized for conversion, SEO, and flawless mobile experience.

## 🛠 Tech Stack
- **Framework:** [Next.js 16](https://nextjs.org/) (App Router, React 19)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/) + Tailwind Animate
- **Icons:** [Lucide React](https://lucide.dev/)
- **UI Components:** Radix UI / Shadcn UI
- **Deployment:** Vercel Optimized

## 🚀 Key Features
- **Adaptive Hero Section:** Vertical-centered layout with dynamic header transitions (transparent to frosted glass).
- **Responsive Navigation:** Smart breakpoint management (`lg`) with a custom mobile hamburger menu.
- **Hybrid Routing:** Project gallery uses **Intercepting & Parallel Routes** for seamless modal previews while maintaining SEO-friendly direct links.
- **Performance First:** Next/Image optimization with priority loading for LCP elements.
- **Dark Industrial UI:** High-contrast design using Zinc and Amber palettes, engineered for professional trust.

## 📂 Project Architecture
- `src/app/`: File-based routing, including `@modal` for parallel route logic.
- `src/components/industrial/`: Business-logic components (Hero, FAQ, Testimonials).
- `src/components/ui/`: Reusable atomic UI elements (Buttons, Cards, Modals).
- `src/lib/`: Single source of truth for project data and utility functions.

## 🛠 Getting Started
1. **Install dependencies:** `npm install`
2. **Run development server:** `npm run dev`
3. **Build for production:** `npm run build`

---
© 2025 JOBDONECREW. Built for durability. Engineered for the web.
