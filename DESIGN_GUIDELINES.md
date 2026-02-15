# AquaIonic Design Guidelines
## Creative System for Consistent Branding

---

## 🎨 Color Palette

### Primary Colors
```css
--deep-blue: #0a2540     /* Main brand color, headings */
--ocean: #1a5276         /* Mid-tone blue, gradients */
--ocean-mid: #1565a0     /* Alternative mid-tone */
--cyan: #00bcd4          /* Primary accent, CTAs, icons */
--cyan-soft: #26c6da     /* Hover states, highlights */
```

### Neutral Colors
```css
--pure-white: #ffffff    /* Backgrounds, text on dark */
--ghost: #f7f9fc         /* Subtle background sections */
--ghost-warm: #fafbfe    /* Alternative light background */
--text: #1e2a3a          /* Primary text color */
--text-mid: #4a5568      /* Secondary text */
--text-light: #8494a7    /* Tertiary text, captions */
--border: rgba(10,37,64,0.06) /* Subtle borders */
```

### Accent Colors
```css
--accent-green: #00c9a7  /* Success states, badges */
--cyan-glow: rgba(0,188,212,0.15) /* Shadows, glows */
```

---

## 📐 Typography

### Font Families
- **Headings**: `font-jakarta` (Plus Jakarta Sans)
- **Body**: `font-dm` (DM Sans)

### Heading Styles
```css
h1: text-5xl md:text-6xl lg:text-7xl, line-height: 1.1, tracking: -0.02em
h2: text-4xl md:text-5xl lg:text-6xl, line-height: 1.15, tracking: -0.02em
h3: text-2xl md:text-3xl lg:text-4xl, line-height: 1.2
h4: text-xl md:text-2xl, line-height: 1.3
p:  text-base md:text-lg, line-height: 1.7
```

### Logo
```tsx
<span className="font-jakarta font-extrabold text-[24px] tracking-[-0.04em]
  bg-gradient-to-r from-deep-blue via-ocean to-cyan bg-clip-text text-transparent">
  AQUAIONIC
</span>
```

---

## 📏 Spacing & Layout

### Container
```css
max-w-[1200px] (or max-w-container)
px-4 sm:px-6 lg:px-8
```

### Section Padding
**REGLA**: Nunca exceder `py-20`
```css
Standard: py-16 md:py-20
Compact: py-12 md:py-16
Large: py-16 md:py-20 (máximo)
```

### Section Gap
```css
Between sections: No extra margin (rely on py padding)
Grid gaps: gap-6 (standard), gap-4 (compact)
```

---

## 🎭 Section Backgrounds

### Alternating Pattern
Create visual rhythm by alternating backgrounds:
```
Hero (white) → TrustBar (ghost) → Services (gray-50) →
WaterTest (dark gradient) → Areas (ghost) → Footer (deep-blue)
```

### Background Types
1. **White**: `bg-white` - Clean, default
2. **Ghost**: `bg-ghost` - Subtle contrast
3. **Gray**: `bg-gray-50` - Light distinction
4. **Dark Gradient**: `bg-gradient-to-br from-deep-blue via-ocean to-deep-blue`
5. **Dark Solid**: `bg-deep-blue` - Footer, dark sections

---

## 🎬 Animations

### Breathe (CTAs)
```css
@keyframes breathe {
  0%, 100% { transform: scale(1); box-shadow: 0 4px 14px rgba(0,188,212,0.15); }
  50% { transform: scale(1.03); box-shadow: 0 6px 20px rgba(0,188,212,0.3); }
}
.animate-breathe { animation: breathe 3s ease-in-out infinite; }
```

### Icon Float
```css
@keyframes iconFloat {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  25% { transform: translateY(-3px) rotate(-2deg); }
  75% { transform: translateY(-3px) rotate(2deg); }
}
.animate-icon-float { animation: iconFloat 4s ease-in-out infinite; }
```

### Usage
- **CTAs**: Apply `animate-breathe` to primary buttons
- **Icons**: Use `animate-icon-float` on hover for playful effect
- **Cards**: `hover:translate-y-[-4px]` with `transition-all duration-200`

---

## 🎯 Component Patterns

### Cards
```tsx
<div className="bg-white rounded-2xl border border-gray-100
  hover:border-cyan/20 hover:shadow-md transition-all duration-200 p-6 md:p-8">
  {/* Content */}
</div>
```

### Icon Container
```tsx
<div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan/20 to-ocean/10
  flex items-center justify-center hover:from-cyan/30 hover:to-ocean/20
  transition-all duration-200">
  <Icon size={20} className="text-cyan" />
</div>
```

### Buttons

#### Primary (CTA)
```tsx
<button className="px-6 py-2.5 bg-cyan hover:bg-cyan-soft text-white
  text-[13.5px] font-semibold rounded-full transition-all duration-200
  animate-breathe">
  Free Water Test
</button>
```

#### Secondary
```tsx
<button className="px-6 py-2.5 bg-transparent border-2 border-gray-200
  text-deep-blue font-semibold rounded-xl hover:border-cyan hover:text-cyan
  transition-colors duration-200">
  Learn More
</button>
```

#### Outline
```tsx
<button className="px-6 py-2.5 bg-white border border-gray-200 text-deep-blue
  hover:border-cyan hover:bg-cyan hover:text-white transition-all duration-200">
  Explore
</button>
```

---

## 🔤 Badge & Label Patterns

### Section Label
```tsx
<span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold
  uppercase tracking-wider bg-cyan/10 border border-cyan/20 text-ocean mb-4">
  NSF & FDA Certified
</span>
```

### Badge
```tsx
<span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full
  text-xs font-semibold bg-cyan-light text-ocean border border-cyan/20">
  <Icon size={14} /> Certified
</span>
```

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
- `sm:` 640px (mobile landscape)
- `md:` 768px (tablets)
- `lg:` 1024px (desktop)
- `xl:` 1280px (large desktop)
- `2xl:` 1400px (extra large)

---

## 🎨 Gradient Patterns

### Text Gradient (Headings)
```css
bg-gradient-to-br from-cyan via-ocean to-deep-blue bg-clip-text text-transparent
```

### Icon Container Gradient
```css
bg-gradient-to-br from-cyan/20 to-ocean/10
hover:from-cyan/30 hover:to-ocean/20
```

### Background Gradient (Dark sections)
```css
bg-gradient-to-br from-deep-blue via-ocean to-deep-blue
```

### With Orbs
```tsx
<section className="relative bg-gradient-to-br from-deep-blue via-ocean to-deep-blue">
  <div className="absolute top-0 right-0 w-96 h-96 bg-cyan/20 rounded-full blur-3xl" />
  <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan/10 rounded-full blur-3xl" />
  {/* Content */}
</section>
```

---

## 🎯 Interactive States

### Hover Effects

#### Cards
```css
hover:border-cyan/20 hover:shadow-md hover:-translate-y-1
transition-all duration-200
```

#### Icons
```css
group-hover:text-cyan group-hover:scale-110 group-hover:rotate-5
transition-all duration-200
```

#### Links
```css
hover:text-cyan transition-colors duration-200
```

---

## 🌊 Scroll Animations

### Using ScrollReveal Component
```tsx
<ScrollReveal delay={0.1}>
  <h2>Content appears on scroll</h2>
</ScrollReveal>
```

**Delay Pattern**:
- First element: `delay={0}` or no delay
- Second: `delay={0.1}`
- Third: `delay={0.15}`
- Fourth: `delay={0.2}`

---

## 📋 Section Checklist

When creating a new section, ensure:

- [ ] Consistent padding: `py-16 md:py-20`
- [ ] Container: `max-w-container mx-auto px-4 sm:px-6 lg:px-8`
- [ ] Background alternates from previous section
- [ ] Headings use `font-jakarta font-bold text-deep-blue`
- [ ] Body text uses `text-gray-600` or `text-text-mid`
- [ ] Cards have `rounded-2xl border border-gray-100`
- [ ] Hover states are subtle but present
- [ ] Icons are `text-cyan` with proper sizing
- [ ] CTAs have `animate-breathe` if primary
- [ ] Responsive grid with proper gaps
- [ ] ScrollReveal animations with staggered delays

---

## 🚫 Don't Do

❌ **Avoid**:
- Excessive shadows (max 1-2 layers)
- Multiple shine/glow effects per element
- Rotation beyond 5-10 degrees
- Scale beyond 1.1
- Padding larger than `py-20`
- More than 3 colors in a gradient
- Pulse/ping animations (too distracting)
- Complex transform combinations
- Overly bright neon colors

✅ **Instead**:
- Single, subtle shadows
- One effect per interaction
- Gentle rotations (2-5deg)
- Minimal scale (1.03-1.05)
- Consistent spacing system
- Simple gradients (2-3 colors)
- Breathe animation for emphasis
- Single transform property
- Muted, professional cyan

---

## 🎯 Brand Personality

**Minimalista pero NO insípido** (Minimal but NOT bland)

### Principles
1. **Clean**: White space is intentional
2. **Confident**: Bold typography, clear hierarchy
3. **Professional**: Subtle, purposeful animations
4. **Modern**: Contemporary design patterns
5. **Trustworthy**: Consistent, predictable interactions
6. **Approachable**: Warm cyan accent, friendly copy
7. **Premium**: Quality over quantity in effects

### Voice
- Direct and clear
- Technically credible
- Helpful, not salesy
- Confident without arrogance
- Focused on benefits and outcomes

---

## 📚 Component Library Reference

### Core Components
- `ScrollReveal` - Scroll-based animations
- `AnimatedCounter` - Number counting on scroll
- `Button` - Consistent button styles
- `Input` - Form field styling
- `ServiceCard` - Service grid cards
- `TrustBar` - Certification badges

### Layout Components
- `Header` - Navigation with dropdown
- `Footer` - Links and branding
- `Container` - Consistent max-width wrapper

---

**Version**: 1.0
**Last Updated**: February 2026
**Designed by**: [Flow Tool](https://flowtool.com)
