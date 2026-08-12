# Tapcord Engineering Website

A complete marketing website for Tapcord Engineering — an MEP (Electrical, Plumbing, Facility Management) company serving Lagos and Onitsha, Nigeria.

## Tech Stack

- **Framework**: Next.js 14+ (App Router) with TypeScript
- **Styling**: Tailwind CSS with custom brand colors
- **Icons**: Inline SVG icons
- **Animations**: CSS keyframes and transitions

## Brand Colors

- **Primary Background**: Dark Navy / Near-Black (`#0A1128`)
- **Primary Text**: White / Off-white (`#F8F9FA`)
- **Accent Color**: Gold / Warm Yellow (`#FFB703`)
- **Secondary Accent**: Slate Gray (`#8A99B4`)

## Project Structure

```
tapcordsite/
├── app/
│   ├── globals.css      # Global styles and Tailwind imports
│   ├── layout.tsx       # Root layout with metadata
│   └── page.tsx         # Main page assembling all sections
├── components/
│   ├── AboutSection.tsx
│   ├── ContactSection.tsx
│   ├── FAQSection.tsx
│   ├── Footer.tsx
│   ├── HeroSection.tsx
│   ├── ServiceCard.tsx
│   ├── ServicesGrid.tsx
│   ├── StatCard.tsx
│   ├── StatsSection.tsx
│   ├── TestimonialsSection.tsx
│   ├── WhatsAppButton.tsx
│   ├── WhyChooseCard.tsx
│   └── WhyChooseUsSection.tsx
├── public/              # Static assets
├── tailwind.config.ts   # Tailwind configuration with brand colors
├── tsconfig.json        # TypeScript configuration
└── package.json         # Dependencies and scripts
```

## Sections

1. **Hero Section** — Headline, subheadline, CTA buttons, trust badges
2. **Services Grid** — 4 main services (cards) + 3 premium services (row)
3. **About / Sustainability** — Company commitment + best practices
4. **Why Choose Us** — 4 cards highlighting key differentiators
5. **Testimonials / Our Works** — Client quote + 3 project examples
6. **Stats / Trust Indicators** — Experience, customers, projects
7. **FAQ Section** — 3 common questions with answers
8. **Contact / Final CTA** — Contact form + WhatsApp links
9. **Footer** — Company info, quick links, contact details
10. **WhatsApp Floating Button** — Fixed button linking to Lagos number

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for Production

```bash
# Create optimized production build
npm run build

# Start production server
npm run start
```

## Deployment

### Vercel (Recommended)

1. Push your code to a Git repository
2. Import the project on [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and deploy

### Other Platforms

The site can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- Render
- Self-hosted with `npm run start`

## Contact Information

- **Lagos**: 08140790116 (WhatsApp available)
- **Onitsha**: 07025455698 (WhatsApp available)
- **Service Area**: Lagos & Onitsha, Nigeria

## License

Copyright © 2024 Tapcord Engineering. All rights reserved.