# Aquaionic Image Inventory

## Hero Images (public/images/hero/)
- `hero-main.jpg` - Main hero image for homepage (1920px water treatment)
- `hero-water.jpg` - Alternative hero image (pure water focus)

## Service Images (public/images/services/)
- `water-filtration.jpg` - Water filtration systems and equipment
- `reverse-osmosis.jpg` - RO system installation/technology
- `water-softener.jpg` - Water softening equipment
- `well-water.jpg` - Well water treatment solutions

## Product Images (public/images/products/)
- `ro-system.jpg` - Reverse osmosis unit product shot
- `water-filter.jpg` - Water filter product
- `softener-unit.jpg` - Water softener unit

## Location Images (public/images/locations/)
- `miami.jpg` - Miami cityscape/area
- `palm-beach.jpg` - Palm Beach coastal area
- `fort-lauderdale.jpg` - Fort Lauderdale location
- `florida-coast.jpg` - Florida coastal scenery

## Logos (public/images/logos/)
- `aquaionic-logo.svg` - Full logo with text (200x60)
- `aquaionic-icon.svg` - Icon-only version for favicons (60x60)

## Logo Design Details

### Color Palette
- Primary: `#00BCD4` (Cyan) - Represents pure water and technology
- Secondary: `#0A2540` (Deep Blue) - Professional, trustworthy
- Accent: `#26C6DA` (Cyan Soft) - Gradients and highlights
- Background: `#E0F7FA` (Cyan Light) - Subtle backgrounds

### Logo Concept
The logo features:
- Water droplet shape (universal symbol of water purity)
- Ionic waves inside (representing ion exchange technology)
- Small ions/particles (molecular level water treatment)
- Modern, clean sans-serif typography
- Two-tone text: "Aqua" (dark) + "ionic" (cyan)
- Tagline: "PURE WATER SOLUTIONS"

## Usage in Code

```jsx
// Full logo (navbar, footer)
<Image src="/images/logos/aquaionic-logo.svg" alt="Aquaionic" width={200} height={60} />

// Icon only (favicon, mobile menu)
<Image src="/images/logos/aquaionic-icon.svg" alt="Aquaionic Icon" width={60} height={60} />

// Hero images
<Image src="/images/hero/hero-main.jpg" alt="Water Treatment" fill />

// Service cards
<Image src="/images/services/water-filtration.jpg" alt="Water Filtration" width={400} height={300} />
```

## Notes
- All images are high-quality Unsplash photos (placeholder - replace with client photos)
- SVG logos are scalable and optimized for web
- Images follow naming convention: lowercase with hyphens
- Recommended to add `priority` prop for hero images in Next.js
