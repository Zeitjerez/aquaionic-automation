# Deployment Guide - Aquaionic Next.js Migration

## Current Status

✅ **Completed:**
- Base Next.js 14 structure with App Router
- i18n configuration with next-intl (EN/ES)
- Tailwind CSS + Custom animations and glassmorphism
- Layout components (Header, Footer, AmbientBackground)
- UI base components (Button, Input, Badge, Icon, FloatingBadge, WhatsAppFloat)
- Section components (Hero, TrustBar, ServicesGrid, WaterTestCTA, AreasGrid)
- Content system with page metadata for all 38 pages
- Core page examples (Home, About) with proper structure
- Forms (WaterTestForm) and API routes (/api/water-test)
- TypeScript types and configurations

📝 **Remaining Work:**
- Create remaining 36 page files (following the examples provided)
- Add actual images to /public/images/
- Test all pages and forms
- Deploy to Vercel
- Clean up old WordPress files

---

## Step 1: Install Dependencies

```bash
cd aquaionic-nextjs
npm install
```

## Step 2: Create Environment Variables

```bash
cp .env.example .env.local
```

Edit `.env.local` with your actual values:
```env
NEXT_PUBLIC_SITE_URL=https://aquaionic.us
NEXT_PUBLIC_WHATSAPP_NUMBER=+13054671525
CONTACT_EMAIL=info@aquaionic.us
```

## Step 3: Test Development Server

```bash
npm run dev
```

Visit:
- English: http://localhost:3000/
- Spanish: http://localhost:3000/es/inicio/

You should see the home page with Hero, TrustBar, Services, WaterTestCTA, and Areas sections.

## Step 4: Create Remaining Pages

Follow the pattern established in:
- `src/app/[locale]/page.tsx` (Home)
- `src/app/[locale]/about/page.tsx` (About)

### Service Pages (6 × 2 languages = 12 pages)

Create these files:
```
src/app/[locale]/well-water-treatment/page.tsx
src/app/[locale]/iron-sulfur-removal/page.tsx
src/app/[locale]/hard-water-solutions/page.tsx
src/app/[locale]/reverse-osmosis-systems/page.tsx
src/app/[locale]/whole-house-filtration/page.tsx
src/app/[locale]/city-water-purification/page.tsx
```

**Template for Service Page:**
```typescript
import { Metadata } from 'next';
import { getPageMetadata } from '@/lib/content/pages';

interface ServicePageProps {
  params: { locale: string };
}

export async function generateMetadata({ params: { locale } }: ServicePageProps): Promise<Metadata> {
  const slug = locale === 'en' ? 'well-water-treatment' : 'tratamiento-agua-de-pozo';
  const metadata = getPageMetadata(slug, locale as 'en' | 'es');

  if (!metadata) {
    return { title: 'Service | Aquaionic' };
  }

  return {
    title: metadata.title,
    description: metadata.description,
    keywords: metadata.keywords,
    alternates: {
      canonical: metadata.canonical,
      languages: {
        'en': 'https://aquaionic.us/well-water-treatment/',
        'es': 'https://aquaionic.us/es/tratamiento-agua-de-pozo/',
      },
    },
  };
}

export default function ServicePage({ params: { locale } }: ServicePageProps) {
  return (
    <div className="section-padding">
      <div className="container-custom">
        <h1>{/* Service title */}</h1>
        {/* Service content */}
      </div>
    </div>
  );
}
```

### Location Pages (4 × 2 languages = 8 pages)

Create these files:
```
src/app/[locale]/miami/page.tsx
src/app/[locale]/boca-raton/page.tsx
src/app/[locale]/fort-lauderdale/page.tsx
src/app/[locale]/palm-beach/page.tsx
```

Follow the same pattern as service pages, just change the slug mappings.

### Shop & Account Pages (5 × 2 languages = 10 pages)

Create these files:
```
src/app/[locale]/shop/page.tsx
src/app/[locale]/cart/page.tsx
src/app/[locale]/checkout/page.tsx
src/app/[locale]/my-account/page.tsx
src/app/[locale]/blog/page.tsx
```

### Legal Pages (2 × 2 languages = 4 pages)

Create these files:
```
src/app/[locale]/privacy-policy/page.tsx
src/app/[locale]/refund-policy/page.tsx
```

## Step 5: Add Images

Copy your images to `public/images/`:
```
public/images/
├── logo.png
├── hero-water-drop.svg
├── services/
├── products/
└── locations/
```

Update image references in components to use Next.js `<Image>` component.

## Step 6: Build and Test

```bash
npm run build
npm start
```

Test all pages in both languages:
- Navigation works
- Forms submit correctly
- Images load
- Metadata is correct
- Mobile responsive

## Step 7: Deploy to Vercel

### Option A: GitHub Integration (Recommended)

1. **Create GitHub Repository:**
   ```bash
   cd aquaionic-nextjs
   git init
   git add .
   git commit -m "Initial commit: Next.js 14 migration"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/aquaionic-nextjs.git
   git push -u origin main
   ```

2. **Connect to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel auto-detects Next.js settings
   - Add environment variables:
     - `NEXT_PUBLIC_SITE_URL`
     - `NEXT_PUBLIC_WHATSAPP_NUMBER`
     - `CONTACT_EMAIL`
   - Click "Deploy"

3. **Configure Custom Domain:**
   - Go to Project Settings → Domains
   - Add `aquaionic.us`
   - Follow DNS configuration instructions
   - Vercel automatically handles SSL

### Option B: Vercel CLI

```bash
npm i -g vercel
vercel login
vercel --prod
```

Follow prompts to deploy.

## Step 8: Post-Deployment Checklist

- [ ] Test all 38 pages (19 EN + 19 ES)
- [ ] Verify language switcher works
- [ ] Test forms (water test, contact, newsletter)
- [ ] Check WhatsApp float button
- [ ] Verify metadata and SEO tags
- [ ] Test mobile responsiveness
- [ ] Run Lighthouse audit (aim for 95+ score)
- [ ] Check all internal links
- [ ] Verify SSL certificate
- [ ] Test on multiple devices/browsers

## Step 9: DNS Migration

Once verified on Vercel preview domain:

1. **Update DNS records** to point to Vercel:
   ```
   A record: @ → 76.76.21.21
   CNAME: www → cname.vercel-dns.com
   ```

2. **Wait for DNS propagation** (can take 24-48 hours)

3. **Verify** at https://aquaionic.us

## Step 10: Clean Up Old Files

After successful deployment and verification:

```bash
cd /workspaces/aquaionic-automation
# Create backup first
tar -czf wordpress-backup-$(date +%Y%m%d).tar.gz *.py *.sh *.php *.html *.css *.md

# Remove old files (be careful!)
rm -f *.py *.sh *.php *.sql
rm -rf 01-cleanup 02-theme-setup 03-seo-foundation
rm -f aquaionic-*.html aquaionic-*.css
rm -f *.json (except package.json types)
rm -f ssh_key_aquaionic* .credentials

# Keep only:
# - aquaionic-nextjs/ (new Next.js app)
# - README.md (updated)
# - .env.example
# - .gitignore
```

---

## Troubleshooting

### Build Errors

**Error: Module not found**
```bash
npm install
rm -rf .next
npm run build
```

**Error: Type errors**
```bash
npm run type-check
# Fix TypeScript errors in reported files
```

### Runtime Errors

**404 on pages**
- Check file naming: `src/app/[locale]/page-slug/page.tsx`
- Verify slug matches in `pages.ts` metadata
- Check middleware.ts locale configuration

**Forms not submitting**
- Check API route exists at `/api/water-test/route.ts`
- Verify CORS settings
- Check browser console for errors

**Images not loading**
- Ensure images are in `public/images/`
- Use proper Next.js `<Image>` component
- Check image paths (relative to `public/`)

### Performance Issues

**Slow page loads**
- Optimize images (use WebP format, proper sizes)
- Check for large bundle sizes: `npm run build` output
- Lazy load heavy components

**Low Lighthouse score**
- Enable Next.js Image Optimization
- Add proper alt text to images
- Reduce JavaScript bundle size
- Use proper semantic HTML

---

## Maintenance

### Adding New Pages

1. Create page file in `src/app/[locale]/new-page/page.tsx`
2. Add metadata to `src/lib/content/pages.ts`
3. Add translations to `src/messages/en.json` and `es.json`
4. Add navigation links if needed
5. Test and deploy

### Updating Content

Content is in TypeScript files:
- Page metadata: `src/lib/content/pages.ts`
- Services: Referenced in `ServicesGrid.tsx` via translations
- Translations: `src/messages/en.json` and `es.json`

To update, edit these files, commit, and push. Vercel auto-deploys.

### Monitoring

- **Analytics**: Add Google Analytics or Vercel Analytics
- **Errors**: Check Vercel logs for runtime errors
- **Performance**: Regular Lighthouse audits

---

## Support

For issues:
1. Check this guide
2. Review Next.js 14 docs: https://nextjs.org/docs
3. Check next-intl docs: https://next-intl-docs.vercel.app

---

## Summary

You now have a modern, performant Next.js 14 application ready for deployment:
- ✅ 38 pages structure (examples provided, follow pattern for rest)
- ✅ Bilingual EN/ES with clean URLs
- ✅ All components and styles migrated
- ✅ SEO optimized with proper metadata
- ✅ Ready for Vercel deployment with auto-deploy

**Estimated remaining time:** 4-6 hours to create all remaining pages following the provided examples.

Good luck with your migration! 🚀
