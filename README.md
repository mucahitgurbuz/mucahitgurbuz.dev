# mucahitgurbuz.dev

Personal website of Mücahit Gürbüz - Senior Software Engineer

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 + shadcn/ui
- **Animations**: Framer Motion
- **Deployment**: Vercel

## Features

- Server-side rendering (SSR) for optimal SEO
- Interactive particle background with mouse tracking
- Terminal-style command interface with Easter eggs
- Konami code Easter egg (↑ ↑ ↓ ↓ ← → ← → B A)
- Custom cursor effects on desktop
- Responsive design for all devices
- Dark mode by default
- Structured data (JSON-LD) for SEO
- Auto-generated sitemap and robots.txt

## Getting Started

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start
```

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── experience/        # Experience page
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── sitemap.ts         # Sitemap generation
│   ├── robots.ts          # Robots.txt generation
│   └── manifest.ts        # PWA manifest
├── components/
│   ├── ui/                # shadcn/ui components
│   ├── layout/            # Header, Footer
│   ├── home/              # Home page components
│   ├── about/             # About page components
│   ├── experience/        # Experience page components
│   └── shared/            # Shared components
├── hooks/                 # Custom React hooks
└── lib/                   # Utilities and constants
```

## Environment

No environment variables required for local development.

## Author

**Mücahit Gürbüz**
- Website: [mucahitgurbuz.dev](https://mucahitgurbuz.dev)
- LinkedIn: [linkedin.com/in/mucahit](https://linkedin.com/in/mucahit)
- GitHub: [github.com/mucahitgurbuz](https://github.com/mucahitgurbuz)
- Twitter: [@Sosyal_Muhendis](https://twitter.com/Sosyal_Muhendis)

## License

MIT
