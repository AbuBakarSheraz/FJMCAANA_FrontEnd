# FJMCAANA Website - Deployment Checklist

## 📋 Pre-Deployment Tasks

### 1. Image Placement
Follow the **IMAGE_GUIDE.md** for detailed instructions.

#### High Priority Images
- [ ] Logo: `/public/images/Logo.png` (already exists)
- [ ] President photo: `/public/images/president.png` (already exists)
- [ ] Hero video: `/public/videos/hero.mp4` and `/public/videos/hero-poster.jpg`

#### Team Photos
- [ ] All team member photos in `/public/team/`
  - Amnah_Andrabi.png ✓
  - Hina_Iqbal.png ✓
  - Sehrish_Mehmood.png ✓
  - Naghmna_Bajwa.png ✓
  - Fauzia_Anwar.png ✓
  - Azra_Khan.png ✓
  - Sumra_Rathore.jpeg ✓

#### Project Images
Place in `/public/projects/`:
- [ ] cornea-transplant.jpg
- [ ] scholarship.jpg
- [ ] qurbani.jpg
- [ ] flood-relief.jpg
- [ ] diabetic-care.jpg
- [ ] wellness.jpg
- [ ] autism-center.jpg
- [ ] e-library.jpg
- [ ] mother-child.jpg
- [ ] takmil.jpg

#### PDF Reports
Place in `/public/reports/`:
- [ ] fjmcaana-annual-report-2022.pdf
- [ ] president-report-2022.pdf
- [ ] cornea-transplant-report-2022.pdf
- [ ] flood-relief-kashani-basti.pdf
- [ ] scholarship-impact-report.pdf
- [ ] financial-statement-2022.pdf
- [ ] donor-impact-2022.pdf

#### Loan Program Materials
Place in `/public/flyers/`:
- [ ] interest-free-loan-flyer.jpg
- [ ] interest-free-loan-flyer.pdf

### 2. Content Verification

#### Review All Pages
- [ ] Homepage (/) - Check hero, stats, leaders, team, causes
- [ ] About (/about) - Verify mission, president message, committee
- [ ] Projects (/projects) - Verify annual and regular projects display
- [ ] Reports (/reports) - Check all report links
- [ ] Loan (/loan) - Verify flyer displays, links work
- [ ] Help (/help) - Check student and professional resources
- [ ] Get Involved (/get-involved) - Verify membership info
- [ ] Our Impact (/impact) - Check projects, gallery, events
- [ ] Contact (/contact) - Test contact form
- [ ] Team (/team) - Verify all team members display

#### Navigation Check
- [ ] All menu items link correctly
- [ ] Mobile menu works properly
- [ ] Footer links are functional
- [ ] Donate button works

### 3. Technical Testing

#### Development Build
```powershell
# Install dependencies (if not done)
npm install

# Run development server
npm run dev
```
- [ ] Site loads without errors at http://localhost:3000
- [ ] No console errors in browser
- [ ] All pages accessible

#### Production Build
```powershell
# Create production build
npm run build

# Test production build locally
npm run start
```
- [ ] Build completes without errors
- [ ] Production site works correctly
- [ ] All optimizations applied

### 4. Responsive Testing

Test on different screen sizes:
- [ ] Mobile (320px-480px)
- [ ] Tablet (768px-1024px)
- [ ] Desktop (1280px-1920px)
- [ ] Large screens (>1920px)

Check in different browsers:
- [ ] Chrome/Edge
- [ ] Firefox
- [ ] Safari (if available)
- [ ] Mobile browsers

### 5. Accessibility Check

- [ ] All images have alt text
- [ ] Keyboard navigation works
- [ ] Color contrast is sufficient
- [ ] Headings are properly structured (H1 → H2 → H3)
- [ ] Links have descriptive text
- [ ] Forms have proper labels

### 6. Performance Optimization

#### Images
- [ ] Compress all images (use TinyPNG, ImageOptim, or Squoosh)
- [ ] Convert large photos to WebP where possible
- [ ] Verify images are appropriate size (not uploading 4K for thumbnails)

#### Code
- [ ] Remove unused dependencies
- [ ] Verify bundle size is reasonable
- [ ] Check for console warnings

### 7. Content Review

#### Text Content
- [ ] All text is professional and error-free
- [ ] Contact information is correct (team@fjmcaana.org)
- [ ] Dates and statistics are current
- [ ] Links to external sites work (PayPal, etc.)

#### Legal/Compliance
- [ ] Privacy policy (if applicable)
- [ ] Terms of service (if applicable)
- [ ] Copyright notices
- [ ] Proper attribution for images/content

### 8. SEO & Metadata

- [ ] Page titles are descriptive
- [ ] Meta descriptions are set
- [ ] Open Graph tags for social sharing (if needed)
- [ ] Sitemap generated (if applicable)
- [ ] Robots.txt configured (if applicable)

### 9. Analytics & Tracking (if applicable)

- [ ] Google Analytics configured
- [ ] Tracking codes installed
- [ ] Privacy compliance for tracking

### 10. Backup & Version Control

- [ ] All changes committed to git
- [ ] Backup of old site (if replacing)
- [ ] Documentation is complete

## 🚀 Deployment Steps

### Option A: Vercel (Recommended for Next.js)
```powershell
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Production deployment
vercel --prod
```

### Option B: Netlify
1. Connect repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `.next`
4. Deploy

### Option C: Traditional Hosting
```powershell
# Build the site
npm run build

# Export static site (if using static export)
npm run export

# Upload .next or out folder to server
```

## ✅ Post-Deployment Verification

### Immediate Checks
- [ ] Site is accessible at production URL
- [ ] SSL certificate is active (HTTPS)
- [ ] All pages load correctly
- [ ] Images display properly
- [ ] Forms submit successfully
- [ ] External links work

### 24-Hour Monitoring
- [ ] Check for any error reports
- [ ] Monitor site performance
- [ ] Verify analytics tracking
- [ ] Check mobile experience

### Week 1 Tasks
- [ ] Collect user feedback
- [ ] Monitor contact form submissions
- [ ] Check donation links functionality
- [ ] Review analytics data

## 🆘 Troubleshooting

### Images not showing
1. Check file path (case-sensitive)
2. Verify file is in public/ folder
3. Clear browser cache
4. Restart dev server

### Build errors
1. Run `npm install` to ensure dependencies are current
2. Check for TypeScript errors
3. Verify all imports are correct
4. Check Next.js version compatibility

### Performance issues
1. Compress images
2. Enable caching
3. Use CDN for static assets
4. Optimize bundle size

## 📞 Support Contacts

- **Development**: [Your contact]
- **Content**: team@fjmcaana.org
- **Hosting**: [Hosting provider support]

## 📝 Notes

### Important Files to NOT Delete
- `.env` and `.env.local` (environment variables)
- `node_modules/` (dependencies - regenerate with `npm install`)
- `.next/` (build output - regenerate with `npm run build`)

### Regular Maintenance
- Update team photos annually
- Add new reports as published
- Update project statuses
- Refresh statistics

---

**Checklist Created**: August 24, 2026
**Next Review**: After initial deployment
**Status**: Ready for image placement and deployment
