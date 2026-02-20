# Claude Code — Guía del Proyecto y Template de Nuevo Sitio

## Sobre este proyecto

Sitio web bilingüe (EN/ES) para negocio de servicios locales construido con:

- **Framework**: Next.js 14 (App Router)
- **i18n**: next-intl con rutas localizadas (`/en/...` y `/es/...`)
- **Estilos**: Tailwind CSS con sistema de diseño personalizado
- **Animaciones**: Framer Motion (scroll-triggered via `ScrollReveal`)
- **Iconos**: Lucide React
- **Tipografía**: Plus Jakarta Sans (headings) + DM Sans (body)

---

## Estructura de archivos críticos

```
src/
├── lib/
│   ├── config/
│   │   └── site.config.ts      ← FUENTE ÚNICA: todos los datos del negocio
│   ├── content/
│   │   └── pages.ts            ← SEO metadata por página y locale
│   └── i18n/
│       ├── routing.ts          ← Slugs localizados de rutas
│       ├── config.ts           ← Locales disponibles
│       └── navigation.ts       ← Link/redirect locale-aware
├── messages/
│   ├── en.json                 ← Copy UI en inglés
│   └── es.json                 ← Copy UI en español
├── components/
│   ├── layout/Header.tsx       ← Navbar + language switcher + CTA
│   ├── layout/Footer.tsx
│   ├── ui/ScrollReveal.tsx     ← Wrapper Framer Motion scroll animations
│   ├── ui/AnimatedCounter.tsx  ← Contadores animados para stats
│   └── ui/WhatsAppFloat.tsx    ← Botón flotante WhatsApp
└── app/[locale]/
    ├── layout.tsx              ← JSON-LD @graph global (LocalBusiness + WebSite + FAQPage)
    ├── page.tsx                ← Home
    ├── [servicio]/page.tsx     ← Páginas de servicio (6)
    ├── [ciudad]/page.tsx       ← Páginas de ubicación (4)
    └── contact/page.tsx        ← Formulario de contacto
middleware.ts                   ← next-intl locale detection + redirect
next.config.mjs                 ← Redirect / → /en (301) + rewrites slugs ES
tailwind.config.ts              ← Colores de marca, tipografía, animaciones
src/app/sitemap.ts              ← Sitemap dinámico con URLs /en/ y /es/
src/app/robots.ts               ← robots.txt con crawlers de IA permitidos
public/llms.txt                 ← Índice para crawlers de IA (ChatGPT, Claude, Perplexity)
```

---

## Convenciones de URL — CRÍTICO

El sitio usa `localePrefix: 'always'` en next-intl. Todas las URLs **siempre** incluyen el prefijo de locale:

| Correcto | Incorrecto |
|----------|-----------|
| `aquaionic.us/en/` | `aquaionic.us/` |
| `aquaionic.us/en/well-water-treatment/` | `aquaionic.us/well-water-treatment/` |
| `aquaionic.us/es/tratamiento-agua-de-pozo/` | `aquaionic.us/tratamiento-agua-de-pozo/` |

- **Canonicals EN** → siempre `https://dominio.com/en/slug/`
- **Canonicals ES** → siempre `https://dominio.com/es/slug/`
- **Home EN** → `https://dominio.com/en/`
- **Home ES** → `https://dominio.com/es/` (key `'home'` en `pagesMetadata.es`)
- **Redirect raíz** → `/` → `/en` con `permanent: true` (301, no 302)

---

## Patrón de página de servicio

Cada página de servicio sigue esta estructura exacta (ver `well-water-treatment/page.tsx`):

1. `generateMetadata()` — metadata dinámica con hreflang alternates
2. Objeto `content` con keys `en` y `es` para todo el texto
3. **Schemas JSON-LD** (en orden, dentro del `return`):
   - Service schema
   - FAQPage schema
   - BreadcrumbList schema → `[{ Home → aquaionic.us/en/ }, { Página → URL completa }]`
4. **Secciones** (en orden):
   - Hero: badge + title (split color) + subtitle + 2 CTAs + 4 stats animados
   - Trust bar: 4 tarjetas de confianza
   - Benefits: 3 tarjetas grandes
   - Features: checklist 8 items en 2 columnas
   - Process: 4 pasos numerados
   - FAQ: 4 preguntas
   - CTA final: fondo gradiente + botón
5. `ScrollReveal` con delays escalonados en cada sección

## Patrón de página de ubicación

Cada página de ubicación sigue el patrón de `miami/page.tsx`:

1. `generateMetadata()` con hreflang alternates
2. **Schemas JSON-LD** (en orden):
   - LocalBusiness schema específico de la ciudad
   - BreadcrumbList schema → `[{ Home → aquaionic.us/en/ }, { Ciudad → URL completa }]`
3. Secciones: Hero → Trust Bar → Benefits → Neighborhoods → Services → FAQ → CTA

---

## Schema JSON-LD global (layout.tsx)

`src/app/[locale]/layout.tsx` contiene un `@graph` con tres schemas:

```ts
{
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "LocalBusiness", "@id": ".../#business", ... },
    { "@type": "WebSite", "@id": ".../#website", potentialAction: SearchAction },
    { "@type": "FAQPage", mainEntity: [3 preguntas globales] }
  ]
}
```

Al usar como template: actualizar `name`, `url`, `telephone`, `areaServed`, y las 3 preguntas del FAQPage.

---

## Cómo usar como template para un nuevo sitio

### PASO 1 — Clonar y renombrar

```bash
git clone <este-repo> <nuevo-proyecto>
cd <nuevo-proyecto>
rm -rf .git && git init
npm install
```

### PASO 2 — Configurar el negocio (5 archivos)

#### 2a. `src/lib/config/site.config.ts`
Reemplaza **todos** los valores:
- `SITE_NAME`, `SITE_URL`, `SITE_TAGLINE`
- `SCHEMA_BUSINESS_TYPE` → elige el tipo correcto de schema.org:
  - Plomería: `"Plumber"`
  - HVAC: `"HVACBusiness"`
  - Dental: `"Dentist"`
  - Legal: `"LegalService"`
  - Auto: `"AutoRepair"`
  - Restaurante: `"Restaurant"`
  - Limpieza: `"HouseCleaning"` (usar `"LocalBusiness"`)
- `CONTACT` → teléfono, email, WhatsApp, dirección, horarios
- `SERVICES` → lista de servicios del nuevo negocio (slugs EN + ES)
- `LOCATIONS` → ciudades / zonas de servicio
- `NAV_CTA` → texto del botón principal en el navbar

#### 2b. `tailwind.config.ts`
Cambia el bloque `colors` con la nueva paleta de marca:
```ts
colors: {
  'primary-dark': '#NUEVO_COLOR',   // Antes: deep-blue
  'primary':      '#NUEVO_COLOR',   // Antes: ocean
  'accent':       '#NUEVO_COLOR',   // Antes: cyan
  'accent-2':     '#NUEVO_COLOR',   // Antes: accent-green
  // ... mantener: ghost, text, text-mid, text-light, border, whatsapp
}
```
Actualiza también `fontFamily` si cambias de tipografía.

#### 2c. `src/messages/en.json` + `es.json`
Reemplaza todo el copy de UI:
- `header.nav.*` → nombres de navegación
- `hero.*` → texto del hero home
- `services.*` → nombres y descripciones de servicios
- `trustBar.*` → textos de los 4 indicadores de confianza
- `common.*` → botones y mensajes comunes

#### 2d. `src/lib/content/pages.ts`
Actualiza SEO metadata para cada página:
- Cambia `pagesMetadata.en` y `pagesMetadata.es`
- **Canonical EN** siempre con prefijo `/en/`: `https://dominio.com/en/slug/`
- **Canonical ES** siempre con prefijo `/es/`: `https://dominio.com/es/slug/`
- Home ES usa key `'home'`, canonical `https://dominio.com/es/`
- Keys de locations en ES sin sufijo `-es`: usar `'miami'`, no `'miami-es'`

#### 2e. `src/lib/i18n/routing.ts`
Actualiza los `pathnames` con los slugs del nuevo negocio:
```ts
pathnames: {
  '/': '/',
  '/nuevo-servicio-1': {
    en: '/new-service-1',
    es: '/nuevo-servicio-1',
  },
  '/contact': { en: '/contact', es: '/contacto' },
  // ... un entry por servicio + contact
}
```

### PASO 3 — Crear páginas de servicio

Para cada servicio en `SERVICES`, crea:
`src/app/[locale]/[slug-en]/page.tsx`

Copia la estructura de `well-water-treatment/page.tsx` y cambia:
- El objeto `content.en` y `content.es` con el texto del nuevo servicio
- La función `generateMetadata` con los slugs correctos
- Los schemas JSON-LD: Service, FAQ, **BreadcrumbList** (posición 2 con URL correcta)
- Las imágenes referenciadas

### PASO 4 — Crear páginas de ubicación

Para cada ciudad en `LOCATIONS`, crea:
`src/app/[locale]/[slug]/page.tsx`

Copia el patrón de `miami/page.tsx`. Incluye LocalBusiness + **BreadcrumbList** schemas.

### PASO 5 — Reemplazar imágenes

Estructura esperada en `/public/images/`:
```
images/
├── hero/           ← hero-bg.jpg, hero-mobile.jpg
├── services/       ← [slug].jpg por cada servicio
├── locations/      ← [ciudad].jpg por cada ubicación
├── logos/          ← logo.svg, logo-white.svg, favicon
└── og/             ← og-[slug].jpg (1200×630) por página
```

### PASO 6 — Actualizar next.config.mjs

```js
// Redirect raíz — siempre permanent: true (301)
{ source: '/', destination: '/en', permanent: true },

// Rewrites: mapear slugs ES → slug EN interno
{ source: '/es/nuevo-slug-es', destination: '/es/new-slug-en' },
```

### PASO 7 — Actualizar el sitemap

En `src/app/sitemap.ts`, actualiza:
- `baseUrl` con el nuevo dominio
- Las rutas de servicios y ubicaciones
- El sitemap genera **dos entradas por página** (EN + ES), cada una con `alternates.languages` cruzados
- `changeFrequency`: `yearly` legales · `monthly` servicios/locations · `weekly` home/shop/blog

### PASO 8 — Actualizar robots.ts

En `src/app/robots.ts`, actualiza la URL del sitemap:
```ts
sitemap: 'https://nuevo-dominio.com/sitemap.xml',
host: 'https://nuevo-dominio.com',
```
Los crawlers de IA (GPTBot, Claude-Web, anthropic-ai, PerplexityBot) están permitidos por defecto.

### PASO 9 — Actualizar llms.txt

En `public/llms.txt`, reemplaza servicios, áreas, contacto y key facts del nuevo negocio.

### PASO 10 — Actualizar Schema @graph en layout.tsx

En `src/app/[locale]/layout.tsx`, actualizar el objeto `siteSchema`:
- `LocalBusiness`: `name`, `url`, `telephone`, `areaServed`, `hasOfferCatalog`
- `WebSite`: `url`, `name`
- `FAQPage`: 3 preguntas relevantes al nuevo negocio

---

## Checklist de launch

- [ ] `site.config.ts` — todos los valores actualizados
- [ ] Colores en `tailwind.config.ts` — nueva paleta
- [ ] Mensajes `en.json` + `es.json` — copy completo
- [ ] `pages.ts` — canonicals con `/en/` y `/es/` correctos, keys ES sin sufijo `-es`
- [ ] `routing.ts` — slugs correctos + `/contact`
- [ ] Páginas de servicio creadas (una por servicio) con BreadcrumbList
- [ ] Páginas de ubicación creadas (una por ciudad) con BreadcrumbList
- [ ] Imágenes en `/public/images/`
- [ ] OG images (1200×630) por página
- [ ] `next.config.mjs` — redirect 301 + rewrites ES actualizados
- [ ] `sitemap.ts` — dominio y rutas actualizadas (doble entrada EN+ES)
- [ ] `robots.ts` — URL del sitemap actualizada
- [ ] `llms.txt` — contenido del nuevo negocio
- [ ] Schema `@graph` en `layout.tsx` actualizado (LocalBusiness + WebSite + FAQPage)
- [ ] BreadcrumbList en todas las páginas de servicio y ubicación
- [ ] `.env.local` con variables si hay integraciones (email, analytics)
- [ ] Favicon y `manifest.json` actualizados

---

## Comandos de desarrollo

```bash
npm run dev      # Servidor local en http://localhost:3000
npm run build    # Build de producción
npm run start    # Servidor de producción
npm run lint     # Lint
```

---

## Convenciones importantes

- **Nunca** hardcodear el nombre del negocio, teléfono o URL en componentes.
  Siempre importar desde `@/lib/config/site.config`.
- Cada página de servicio es **self-contained**: todo su copy vive dentro del
  objeto `content` del propio archivo `.tsx`.
- Los mensajes en `en.json`/`es.json` son para **UI compartida** (header, footer,
  botones, trust bar). El copy específico de página va inline en la página.
- `ScrollReveal` acepta `delay` en segundos. Escalonar con `i * 0.08` para
  animaciones en cascada.
- Para añadir un servicio nuevo: agregar a `SERVICES` en `site.config.ts`,
  crear la página con Service + FAQ + BreadcrumbList schemas, agregar a `routing.ts`,
  agregar metadata a `pages.ts`, añadir rewrite en `next.config.mjs` si tiene slug ES,
  añadir al `sitemap.ts`, añadir al `llms.txt`.
- El switch de idioma usa `LocaleLink` de `@/lib/i18n/navigation` con `href={pathname}` —
  next-intl traduce automáticamente el pathname canónico al slug del locale destino.
- Google puede tardar días/semanas en actualizar URLs indexadas. Usar
  Google Search Console → URL Inspection → "Request indexing" para forzar re-crawl.

---

## Nichos probados con esta arquitectura

- Servicios del hogar (plomería, HVAC, electricidad, limpieza)
- Salud local (dental, quiropráctico, dermatología)
- Servicios legales locales
- Auto (taller, detailing, llantería)
- Servicios de jardinería / landscaping
- Cualquier negocio con múltiples servicios + múltiples zonas geográficas

**No recomendado sin cambios mayores para**: e-commerce, SaaS, blogs con CMS,
aplicaciones con autenticación de usuario real.
