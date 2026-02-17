# AquaIonic Design Guidelines
## Reglas y Restricciones para Mantener Consistencia

> **📘 Documento Base**: Este archivo complementa [AQUAIONIC-DESIGN-SYSTEM.md](./AQUAIONIC-DESIGN-SYSTEM.md)
> Para templates de código y estructura de páginas, consulta el Design System principal.

---

## ⚠️ REGLAS CRÍTICAS

### 1. Espaciado Máximo
**REGLA**: Nunca exceder `py-20` en section padding

```css
✅ Correcto:
py-16 md:py-20    /* Standard */
py-12 md:py-16    /* Compact */

❌ Incorrecto:
py-24 md:py-32    /* Demasiado espaciado */
py-20 lg:py-28    /* Excede el máximo */
```

**Razón**: Mantiene la página compacta y evita espacios vacíos excesivos que dilluyen el contenido.

### 2. Alternancia de Fondos
Create visual rhythm by alternating backgrounds:

```
Hero (gradient)    → bg-gradient-to-br from-deep-blue via-ocean to-cyan
↓
Section 1 (light)  → bg-white or bg-ghost
↓
Section 2 (color)  → bg-gray-50 or bg-cyan-light
↓
Section 3 (light)  → bg-white
↓
CTA (dark)         → bg-gradient-to-br from-deep-blue via-ocean to-cyan
↓
Footer (dark)      → bg-deep-blue
```

**Nunca uses**:
- 2 secciones con fondo oscuro consecutivas
- 3+ secciones con el mismo fondo seguidas

---

## 🎨 Paleta de Colores (Referencia Rápida)

```css
/* Primarios */
--deep-blue: #0a2540
--ocean: #1a5276
--cyan: #00bcd4

/* Acentos */
--accent-green: #00c9a7
--cyan-light: #e0f7fa

/* Neutrales */
--ghost: #f7f9fc
--white: #ffffff
--text: #1e2a3a
--text-mid: #4a5568
--text-light: #718096
--border: #e2e8f0
```

---

## 📐 Espaciado y Layout

### Container
```css
.container-custom {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;        /* px-4 */
}

@media (min-width: 640px) {
  padding: 0 1.5rem;      /* sm:px-6 */
}

@media (min-width: 1024px) {
  padding: 0 2rem;        /* lg:px-8 */
}
```

### Section Padding Standard
```css
Standard: py-16 md:py-20
Compact:  py-12 md:py-16
Large:    py-16 md:py-20  (máximo permitido)
```

### Grid Gaps
```css
Standard: gap-6
Compact:  gap-4
Large:    gap-8
```

---

## 🎬 Animaciones

### Breathe (CTAs)
```css
@keyframes breathe {
  0%, 100% {
    transform: scale(1);
    box-shadow: 0 4px 14px rgba(0,188,212,0.15);
  }
  50% {
    transform: scale(1.03);
    box-shadow: 0 6px 20px rgba(0,188,212,0.3);
  }
}

.animate-breathe {
  animation: breathe 3s ease-in-out infinite;
}
```

### Icon Float
```css
@keyframes iconFloat {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  25% { transform: translateY(-3px) rotate(-2deg); }
  75% { transform: translateY(-3px) rotate(2deg); }
}

.animate-icon-float {
  animation: iconFloat 4s ease-in-out infinite;
}
```

### Usage Guidelines
- **CTAs**: Apply `animate-breathe` to primary buttons
- **Icons**: Use `animate-icon-float` on hover for playful effect
- **Cards**: `hover:-translate-y-1` with `transition-all duration-200`

---

## 🔤 Badge & Label Patterns

### Section Label
```tsx
<span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold
  uppercase tracking-wider bg-cyan/10 border border-cyan/20 text-ocean mb-4">
  NSF & FDA Certified
</span>
```

También disponible como clase:
```tsx
<span className="section-label">Label Text</span>
```

### Badge
```tsx
<span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full
  text-xs font-semibold bg-cyan-light text-ocean border border-cyan/20">
  <Icon size={14} /> Certified
</span>
```

---

## 🌊 Scroll Animations

### Using ScrollReveal Component
```tsx
import ScrollReveal from '@/components/ui/ScrollReveal';

<ScrollReveal delay={0.1}>
  <h2>Content appears on scroll</h2>
</ScrollReveal>
```

### Delay Pattern
```tsx
First element:  delay={0}   or no delay
Second:         delay={0.1}
Third:          delay={0.15}
Fourth:         delay={0.2}
```

**No exceder**: `delay={0.3}` (se siente lento)

---

## 🎯 Interactive States

### Hover Effects

#### Cards
```css
hover:border-cyan/20
hover:shadow-md
hover:-translate-y-1
transition-all duration-200
```

#### Icons
```css
group-hover:text-cyan
group-hover:scale-110
group-hover:rotate-5
transition-all duration-200
```

#### Links
```css
hover:text-cyan
transition-colors duration-200
```

#### Buttons
```tsx
/* Primary */
<button className="px-6 py-2.5 bg-cyan hover:bg-cyan-soft text-white
  text-[13.5px] font-semibold rounded-full transition-all duration-200
  animate-breathe">
  Free Water Test
</button>

/* Secondary */
<button className="px-6 py-2.5 bg-transparent border-2 border-gray-200
  text-deep-blue font-semibold rounded-xl hover:border-cyan hover:text-cyan
  transition-colors duration-200">
  Learn More
</button>
```

---

## 🚫 Don't Do

### ❌ Avoid

| Don't | Why | Instead |
|-------|-----|---------|
| Excessive shadows (3+ layers) | Too heavy, distracting | Max 1-2 subtle shadows |
| Multiple shine/glow effects | Visual clutter | One effect per element |
| Rotation beyond 10deg | Looks broken | Gentle 2-5deg rotations |
| Scale beyond 1.1 | Too aggressive | Use 1.03-1.05 |
| Padding larger than py-20 | Wastes space | Stick to py-16 md:py-20 |
| 3+ colors in gradient | Too busy | 2-3 colors max |
| Pulse/ping animations | Too distracting | Use breathe instead |
| Complex transform combos | Performance issues | Single transform property |
| Bright neon colors | Unprofessional | Muted, professional cyan |

### ✅ Instead

| Best Practice | Implementation |
|--------------|----------------|
| Single, subtle shadow | `shadow-md` or `shadow-lg` |
| One effect per interaction | Either scale OR rotate, not both |
| Gentle rotations | `rotate-2` or `hover:rotate-3` |
| Minimal scale | `scale-105` or `hover:scale-[1.03]` |
| Consistent spacing | Use py-16 md:py-20 exclusively |
| Simple gradients | 2-3 colors: from-color via-color to-color |
| Breathe for emphasis | `animate-breathe` on CTAs only |
| Single transform | `hover:-translate-y-1` OR `hover:scale-105` |
| Muted professional | Use --cyan (#00bcd4) not bright cyan |

---

## 🎯 Brand Personality

**Minimalista pero NO insípido** (Minimal but NOT bland)

### Principles

1. **Clean**: White space is intentional, not accidental
2. **Confident**: Bold typography, clear hierarchy
3. **Professional**: Subtle, purposeful animations
4. **Modern**: Contemporary design patterns (2024-2026)
5. **Trustworthy**: Consistent, predictable interactions
6. **Approachable**: Warm cyan accent, friendly copy
7. **Premium**: Quality over quantity in effects

### Voice

- **Direct and clear** - No fluff, get to the point
- **Technically credible** - Speak with authority
- **Helpful, not salesy** - Educate before selling
- **Confident without arrogance** - Assertive, not pushy
- **Benefit-focused** - What the customer gains

---

## 📚 Component Library Reference

### Core Components
```
ScrollReveal      - Scroll-based animations (delay prop)
AnimatedCounter   - Number counting on scroll
Button            - Consistent button styles (primary/secondary)
Input             - Form field styling
ServiceCard       - Service grid cards (icon, title, desc)
TrustBar          - Certification badges (2x2 grid on mobile)
```

### Layout Components
```
Header            - Navigation with language dropdown
Footer            - Links and branding
Container         - max-w-[1200px] wrapper
```

### Section Components
```
HeroSection       - Full-width hero with gradient
CTASection        - Call-to-action with gradient background
FeaturesGrid      - 2/3/4 column feature cards
ProcessSteps      - Numbered step-by-step flow
```

---

## 📋 Section Checklist

When creating a new section, ensure:

- [ ] Consistent padding: `py-16 md:py-20` (never exceed)
- [ ] Container: `max-w-container mx-auto px-4 sm:px-6 lg:px-8`
- [ ] Background alternates from previous section
- [ ] Headings use `font-jakarta font-extrabold text-deep-blue`
- [ ] Body text uses `text-text-mid` (not text-gray-600)
- [ ] Cards have `rounded-2xl border border-border`
- [ ] Hover states present but subtle
- [ ] Icons are `text-cyan` with proper sizing (w-6 h-6 or w-8 h-8)
- [ ] CTAs have `animate-breathe` if primary
- [ ] Responsive grid with proper gaps (gap-6 standard)
- [ ] ScrollReveal animations with staggered delays (0.1, 0.15, 0.2)

---

## 📱 Responsive Patterns

### Grid Layouts
```tsx
// 4 columns
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

// 3 columns
<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

// 2 columns
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
```

### Breakpoints
```css
sm:  640px   /* Mobile landscape */
md:  768px   /* Tablets */
lg:  1024px  /* Desktop */
xl:  1280px  /* Large desktop */
2xl: 1536px  /* Extra large */
```

---

## 🎨 Gradient Patterns

### Text Gradient (Headings)
```css
bg-gradient-to-br from-cyan via-ocean to-deep-blue
bg-clip-text text-transparent
```

### Icon Container Gradient
```css
bg-gradient-to-br from-cyan/20 to-ocean/10
hover:from-cyan/30 hover:to-ocean/20
```

### Background Gradient (Dark sections)
```css
bg-gradient-to-br from-deep-blue via-ocean to-cyan
```

### With Decorative Orbs
```tsx
<section className="relative bg-gradient-to-br from-deep-blue via-ocean to-cyan">
  {/* Grid background */}
  <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />

  {/* Orbs */}
  <div className="absolute top-0 right-0 w-96 h-96 bg-cyan/20 rounded-full blur-3xl" />
  <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent-green/10 rounded-full blur-3xl" />

  {/* Content */}
  <div className="container-custom relative z-10">
    {/* ... */}
  </div>
</section>
```

---

## 🔗 Recursos Relacionados

- **[AQUAIONIC-DESIGN-SYSTEM.md](./AQUAIONIC-DESIGN-SYSTEM.md)** - Templates de código y estructura de páginas
- **[AQUAIONIC-PAGE-TEMPLATES.tsx](./AQUAIONIC-PAGE-TEMPLATES.tsx)** - Templates copy/paste ready
- **[tailwind.config.ts](./tailwind.config.ts)** - Configuración de colores, fonts, y animaciones
- **[src/app/globals.css](./src/app/globals.css)** - Variables CSS y clases base

---

**Version**: 2.0 (Actualizado para complementar AQUAIONIC-DESIGN-SYSTEM.md)
**Last Updated**: February 2026
**Designed by**: [Flow Tool](https://flowtool.com)
