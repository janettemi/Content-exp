This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev


Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Tech stack
Framework: Next.js 15 (App Router)

State Management: TanStack Query (React Query) v5

Styling: Tailwind CSS

Icons: Lucide-inspired Custom SVGs

API: DummyJSON API



Architecture & Features

F-1: Listing Page
Hybrid Rendering: The main grid uses a combination of Server-side initial data and Client-side filtering for an instant feel.

Responsive Grid: Implemented a mobile-first 1-column layout that scales to 2 columns on tablets and 4 columns on large desktops.

Metadata: Each card displays title, price, category, and star ratings using accessible SVG icons.

F-2: Detail Page (Dynamic Routing)
Server Components: Product details are fetched on the server to maximize SEO and minimize client-side JavaScript.

Dynamic Metadata: Uses generateMetadata to ensure social sharing previews (OpenGraph) show the correct product title and image.

F-3: Search Functionality
URL State Sync: Search queries are synced with the browser URL, making results shareable and supporting the "Back" button.

Debouncing: Implemented a custom useDebounce hook to reduce API overhead.

F-4: User Experience (UX)
Skeleton Screens: Used Tailwind-based shimmer animations for loading states to prevent Cumulative Layout Shift (CLS).

Graceful Fallbacks: Handled 404s  I implemented a dual-layer error handling strategy: notFound() for missing resource identifiers to provide a graceful 'Not Found' UI, and a standard ErrorBoundary (error.tsx) to catch and recover from unexpected runtime or network failures.


Performance Optimizations (Requirement 3.2)
I have implemented and verified the following three key optimizations:

1. Image Optimization & LCP Reduction
I utilized the Next.js <Image /> component with the priority attribute for "above-the-fold" products. This ensures the browser preloads critical images immediately, significantly lowering the Largest Contentful Paint (LCP).

2. Search Debouncing & Request Throttling
To optimize network efficiency, I implemented a 300ms debounce on the search input. This prevents "request storms"—stopping the application from firing an API call for every single keystroke—and ensures a smooth UI thread.

3. Data Caching & Deduplication
I leveraged Next.js's native fetch cache and TanStack Query’s staleTime. This creates a Stale-While-Revalidate (SWR) pattern where users experience near-instant navigation while data refreshes silently in the background.


Trade-offs & Decisions
Pagination vs. Load More: I opted for a Static/Initial Load of 20 items to meet the F-1 requirement quickly while keeping the bundle size small. For a production-scale app, I would implement TanStack useInfiniteQuery.

Tailwind vs. Component Library: I chose raw Tailwind over a library like Shadcn/UI for this assessment to demonstrate my ability to build clean, custom UI components from scratch without unnecessary abstraction.
```
