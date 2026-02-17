# 🎨 AQUAIONIC DESIGN SYSTEM v1.0
## Lineamientos Visuales para Next.js

---

## 📐 ESTRUCTURA BASE DE PÁGINAS

### Layout Universal
```
┌─────────────────────────────────────────┐
│  Header (glassmorphism, fixed)          │
├─────────────────────────────────────────┤
│  Hero Section (full-width, gradient bg) │
├─────────────────────────────────────────┤
│  Content Sections (alternating)         │
│  - Section A (white bg)                 │
│  - Section B (gradient/colored bg)      │
│  - Section A (white bg)                 │
├─────────────────────────────────────────┤
│  CTA Section (gradient, dark)           │
├─────────────────────────────────────────┤
│  Footer (dark bg)                       │
└─────────────────────────────────────────┘
```

---

## 🎯 TIPOS DE PÁGINA Y SUS SECCIONES

### 1. SERVICE PAGES (6 páginas)
```
Hero → Features → Process → Benefits → Testimonial → CTA
```

### 2. LOCATION PAGES (4 páginas)
```
Hero → LocalServices → WhyLocal → ServiceArea → Testimonial → CTA
```

### 3. ABOUT PAGE
```
Hero → Story → Values → Team → Certifications → CTA
```

### 4. SHOP PAGES
```
Hero → ProductGrid → Features → Shipping → CTA
```

### 5. POLICY PAGES
```
Hero (mini) → Content (prose)
```

---

## 🌈 PALETA DE COLORES

### Primarios
```css
--deep-blue: #0a2540;    /* Headers, footer, text */
--ocean: #1a5276;        /* Secondary text, accents */
--cyan: #00bcd4;         /* CTAs, highlights, borders */
```

### Acentos
```css
--accent-green: #00c9a7; /* Success, badges, icons */
--cyan-light: #e0f7fa;   /* Backgrounds sutiles */
```

### Neutrales
```css
--ghost: #f7f9fc;        /* Page backgrounds */
--white: #ffffff;        /* Cards, sections */
--text: #1e2a3a;         /* Body text */
--text-mid: #4a5568;     /* Secondary text */
--text-light: #718096;   /* Placeholder, hints */
--border: #e2e8f0;       /* Borders, dividers */
```

### Gradientes Predefinidos
```css
/* Hero backgrounds */
.gradient-hero: linear-gradient(135deg, #0a2540, #1a5276, #00bcd4);

/* CTA sections */
.gradient-cta-blue: linear-gradient(135deg, #1e3a5f, #1a5276, #00bcd4);
.gradient-cta-green: linear-gradient(135deg, #0a2540, #00c9a7, #00bcd4);

/* Cards hover */
.gradient-card-border: linear-gradient(90deg, #00bcd4, #00c9a7);
```

---

## 📝 TIPOGRAFÍA

### Font Families
```css
--font-jakarta: 'Plus Jakarta Sans'; /* Headlines */
--font-dm: 'DM Sans';                 /* Body text */
```

### Escalas
```css
/* Headlines */
.text-hero: 4rem (64px) - Hero principal
.text-4xl: 2.25rem (36px) - Section titles
.text-3xl: 1.875rem (30px) - Card titles
.text-2xl: 1.5rem (24px) - Subtitles

/* Body */
.text-xl: 1.25rem (20px) - Lead paragraphs
.text-lg: 1.125rem (18px) - Body large
.text-base: 1rem (16px) - Body normal
.text-sm: 0.875rem (14px) - Captions
```

### Weights
```css
.font-extrabold: 800  /* H1, H2, números destacados */
.font-bold: 700       /* H3, buttons, badges */
.font-semibold: 600   /* Subtitles, links */
.font-medium: 500     /* Body emphasized */
.font-normal: 400     /* Body text */
```

---

## 🧱 COMPONENTES REUTILIZABLES

### 1. Section Header
```tsx
<div className="text-center max-w-3xl mx-auto mb-16">
  <span className="section-label">{label}</span>
  <h2 className="text-4xl md:text-5xl font-jakarta font-extrabold text-deep-blue mb-4">
    {title}
  </h2>
  <p className="text-lg text-text-mid">{description}</p>
</div>
```

### 2. Feature Card
```tsx
<div className="bg-white rounded-2xl p-8 border border-border
     hover:border-cyan hover:shadow-xl transition-all duration-300
     group relative overflow-hidden">
  {/* Gradient top border on hover */}
  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r
       from-cyan to-accent-green transform scale-x-0
       group-hover:scale-x-100 transition-transform duration-300" />

  <div className="w-16 h-16 bg-cyan-light rounded-2xl flex items-center
       justify-center mb-6 group-hover:bg-cyan/20 transition-colors">
    <Icon className="w-8 h-8 text-cyan" />
  </div>

  <h3 className="text-xl font-jakarta font-bold text-deep-blue mb-3">
    {title}
  </h3>
  <p className="text-text-mid">{description}</p>
</div>
```

### 3. Stats Box
```tsx
<div className="bg-gradient-to-br from-cyan-light to-white rounded-3xl p-8
     border-2 border-cyan/20 shadow-lg">
  <div className="text-5xl font-jakarta font-extrabold text-gradient mb-2">
    {value}
  </div>
  <div className="text-lg font-semibold text-ocean">{label}</div>
</div>
```

### 4. CTA Section
```tsx
<section className="section-padding bg-gradient-to-br from-deep-blue via-ocean to-cyan
         text-white relative overflow-hidden">
  <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
  <div className="container-custom text-center relative z-10">
    <h2 className="text-4xl md:text-5xl font-jakarta font-extrabold mb-6">
      {title}
    </h2>
    <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
      {subtitle}
    </p>
    <a href="#contact" className="btn-primary bg-white text-ocean
       hover:bg-cyan-light hover:shadow-2xl">
      {buttonText}
    </a>
  </div>
</section>
```

### 5. Icon + Text List
```tsx
<ul className="space-y-4">
  {features.map((feature, i) => (
    <li key={i} className="flex items-start gap-3">
      <svg className="w-6 h-6 text-accent-green flex-shrink-0 mt-0.5"
           fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5}
              d="M5 13l4 4L19 7" />
      </svg>
      <span className="text-lg text-text-mid">{feature}</span>
    </li>
  ))}
</ul>
```

---

## 🎭 ANIMACIONES

### Clases de Animación
```css
.animate-float    /* Movimiento suave arriba/abajo - iconos, badges */
.animate-drift    /* Movimiento lento de fondo - blobs */
.animate-pulse    /* Pulso con sombra - WhatsApp button */
.animate-fade-up  /* Fade in hacia arriba - entrada de elementos */
```

### Transiciones Standard
```css
.transition-all .duration-300  /* Hovers normales */
.transition-all .duration-500  /* Transiciones suaves */
```

### Hover Effects
```css
/* Cards */
hover:shadow-xl hover:-translate-y-1

/* Buttons */
hover:shadow-lg hover:-translate-y-0.5

/* Links */
hover:text-cyan
```

---

## 📱 RESPONSIVE BREAKPOINTS

```css
sm: 640px   /* Mobile landscape */
md: 768px   /* Tablet */
lg: 1024px  /* Desktop */
xl: 1280px  /* Large desktop */
2xl: 1536px /* Extra large */
```

### Patrones Comunes
```css
/* Grid columns */
grid-cols-1 md:grid-cols-2 lg:grid-cols-3

/* Section padding */
py-16 md:py-24 lg:py-32

/* Text sizing */
text-3xl md:text-4xl lg:text-5xl
```

---

## 🖼️ IMÁGENES Y ASSETS

### Placeholders hasta tener imágenes
```tsx
// Stats/Numbers Box
<div className="aspect-square bg-gradient-to-br from-{color}-100 to-cyan-100
     rounded-3xl p-12 border-2 border-{color}-300">
  <div className="text-8xl mb-4 animate-float">{emoji}</div>
  <div className="text-5xl font-extrabold text-gradient">{number}</div>
  <div className="text-xl font-semibold text-ocean">{label}</div>
</div>

// Emojis sugeridos por servicio:
// Well Water: 🚰
// Iron/Sulfur: ⚗️
// Hard Water: 💎
// Reverse Osmosis: 💧
// Whole House: 🏠
// City Water: 🌊
```

### Cuando se agreguen imágenes
```tsx
import Image from 'next/image';

<div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
  <Image
    src="/images/services/{service}.jpg"
    alt={description}
    fill
    className="object-cover"
    sizes="(max-width: 768px) 100vw, 50vw"
  />
</div>
```

---

## 📄 TEMPLATE DE PÁGINA DE SERVICIO

```tsx
// src/app/[locale]/[service-slug]/page.tsx

import { Metadata } from 'next';
import { getPageMetadata } from '@/lib/content/pages';

interface Props {
  params: { locale: string };
}

// Contenido bilingüe
const content = {
  en: {
    badge: 'Professional Service',
    heroTitle: 'Service Title',
    heroHighlight: 'Highlighted Word',
    heroSubtitle: 'Service description...',
    ctaButton: 'Get Free Quote',
    // Features section
    featuresLabel: 'Why Choose Us',
    featuresTitle: 'Features Title',
    featuresSubtitle: 'Description...',
    features: ['Feature 1', 'Feature 2', ...],
    // Stats
    statValue: '99%',
    statLabel: 'Satisfaction',
    // CTA
    ctaTitle: 'Ready to Start?',
    ctaSubtitle: 'Contact us today...',
    ctaButtonText: 'Schedule Now',
  },
  es: { /* Spanish translations */ }
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const meta = getPageMetadata('service-slug', params.locale);
  return {
    title: meta.title,
    description: meta.description,
    // ... rest of metadata
  };
}

export default function ServicePage({ params: { locale } }: Props) {
  const t = content[locale as keyof typeof content] || content.en;

  return (
    <>
      {/* HERO SECTION */}
      <section className="relative min-h-[70vh] bg-gradient-to-br from-deep-blue via-ocean to-cyan
                          flex items-center overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-cyan/30 rounded-full blur-3xl" />

        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <span className="badge mb-4">{t.badge}</span>
            <h1 className="text-5xl md:text-6xl font-jakarta font-extrabold text-white mb-6">
              {t.heroTitle}{' '}
              <span className="text-cyan">{t.heroHighlight}</span>
            </h1>
            <p className="text-xl text-white/80 mb-8">{t.heroSubtitle}</p>
            <a href="#contact" className="btn-primary">{t.ctaButton}</a>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="section-padding bg-ghost">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <span className="section-label">{t.featuresLabel}</span>
              <h2 className="text-4xl font-jakarta font-extrabold text-deep-blue mb-4">
                {t.featuresTitle}
              </h2>
              <p className="text-lg text-text-mid mb-8">{t.featuresSubtitle}</p>

              {/* Feature list */}
              <ul className="space-y-4">
                {t.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-accent-green flex-shrink-0 mt-0.5"
                         fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round"
                            strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-lg text-text-mid">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Stats Visual */}
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-cyan-100 to-white
                              rounded-3xl p-12 border-2 border-cyan/30 shadow-xl">
                <div className="h-full flex items-center justify-center text-center">
                  <div>
                    <div className="text-8xl mb-4 animate-float">💧</div>
                    <div className="text-6xl font-jakarta font-extrabold text-gradient mb-2">
                      {t.statValue}
                    </div>
                    <div className="text-xl font-semibold text-ocean">{t.statLabel}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="section-padding bg-gradient-to-br from-deep-blue via-ocean to-cyan
                          text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="container-custom text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-jakarta font-extrabold mb-6">
            {t.ctaTitle}
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            {t.ctaSubtitle}
          </p>
          <a href="#contact" className="btn-primary bg-white text-ocean
             hover:bg-cyan-light hover:shadow-2xl text-lg px-8 py-4">
            {t.ctaButtonText}
          </a>
        </div>
      </section>
    </>
  );
}
```

---

## 📄 TEMPLATE DE PÁGINA DE LOCATION

```tsx
// src/app/[locale]/[location-slug]/page.tsx
// Similar structure, pero con:
// - Map/service area visual
// - Local testimonials
// - "Services in {City}" grid
// - Local contact info
```

---

## ✅ CHECKLIST POR PÁGINA

□ Metadata SEO (title, description, canonical)
□ Hero con gradiente y badge
□ Mínimo 3 secciones de contenido
□ Al menos 1 sección con gradiente de fondo
□ Stats/números destacados con animación
□ Lista de features con checkmarks
□ CTA section al final
□ Contenido bilingüe (EN/ES)
□ Responsive en mobile/tablet/desktop
□ Hover effects en cards/buttons

---

## 🚀 WORKFLOW DE IMPLEMENTACIÓN

### Para cada página nueva:
1. Copiar template base según tipo (Service/Location/About)
2. Reemplazar contenido estático con traducciones
3. Ajustar colores de gradiente según servicio
4. Verificar metadata SEO
5. Test responsive
6. Deploy y verificar

---

## 📁 ARCHIVOS DE REFERENCIA

```
aquaionic-nextjs/
├── src/app/globals.css          # Variables CSS, clases base
├── tailwind.config.ts           # Colores, fonts, animaciones
├── src/components/ui/           # Componentes atómicos
├── src/components/sections/     # Secciones reutilizables
└── AQUAIONIC-DESIGN-SYSTEM.md   # Este documento
```

---

*Versión 1.0 - Febrero 2026*
*Para uso con Next.js 14 + Tailwind CSS*
