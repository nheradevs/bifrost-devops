# Bifrost | DevOps training landing

Landing page for a fictional DevOps training platform. Pure HTML, CSS and JS. No frameworks, no third-party requests, no cookies.

Built as a portfolio case by Karen Gil: https://nheradev.com

## Sections

Hero, 8 training pillars, photo strip, audience split, 3 training tiers (demo placeholders), FAQ, demo-locked contact form.

## Stack notes

- Self-hosted fonts: Space Grotesk (display), Public Sans (body), JetBrains Mono (accents). OFL licenses included.
- Palette: Gunmetal #32373b, Iron Grey #4a5859, Almond Silk #f4d6cc, Honey Bronze #f4b860, Blushed Brick #c83e4d.
- Accessibility: skip link, focus-visible, aria on nav and menu, prefers-reduced-motion, contrast AA.
- SEO: meta description, Open Graph, Twitter Card, robots.txt, sitemap.xml.
- Security headers via _headers (CSP, nosniff, referrer policy).

## Deploy (Cloudflare Pages)

1. Connect the repo to Pages.
2. Framework preset: None. Build command: empty. Output directory: /.
3. Domain: update og:url, og:image, twitter:image, robots.txt and sitemap.xml if the project URL differs from https://bifrost-devops.pages.dev/
