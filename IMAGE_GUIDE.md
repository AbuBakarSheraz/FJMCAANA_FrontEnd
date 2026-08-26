# FJMCAANA Website - Image Handling Guide

## Overview
This guide provides complete information about image structure, paths, and where to place images for each section of the website.

## Public Folder Structure

```
public/
├── images/
│   ├── Logo.png                    # Main FJMCAANA logo (navbar, footer)
│   └── president.png               # Current president photo
│
├── team/                           # Team member photos
│   ├── Amnah_Andrabi.png
│   ├── Hina_Iqbal.png
│   ├── Sehrish_Mehmood.png
│   ├── Naghmna_Bajwa.png
│   ├── Fauzia_Anwar.png
│   ├── Azra_Khan.png
│   └── Sumra_Rathore.jpeg
│
├── Lifetime members/               # Lifetime member photos
│   ├── raffia.png
│   ├── aneela.png
│   ├── azra.png
│   ├── bushra.png
│   ├── fauzia.png
│   ├── fizza.png
│   ├── Ghazala.png
│   ├── hibba.png
│   ├── madiha.png
│   ├── naheed.png
│   ├── nighat.png
│   ├── noreen.png
│   ├── nosheen.png
│   ├── sadaf.png
│   ├── saima.png
│   ├── samina.png
│   ├── shagufta.png
│   ├── shaheen.png
│   ├── shaista.png
│   ├── sumayya.png
│   ├── shamim.png
│   ├── zaurez.png
│   ├── Fauzia_Anwar.png
│   ├── sadia.png
│   └── tabassum.png
│
├── past presidents/                # Alumni president photos
│   ├── anjum.png
│   ├── rubina.png
│   ├── shaheen.png
│   ├── sarwat.png
│   ├── nausheen.png
│   ├── farhat.png
│   ├── samina.png
│   ├── shagufta.png
│   ├── fizza.png
│   ├── nighat.png
│   ├── tabassum.png
│   ├── manzar.png
│   └── naheed.png
│
├── channel/                        # Health Channel speaker photos
│   ├── 3a73089f-5503-4aa4-823f-c378e9eed473.png
│   ├── Fauzia-Moyeen.webp
│   ├── jasmine-zain.webp
│   ├── nighat-mehdi.webp
│   ├── samina-taufeeq.webp
│   ├── shamsa-humayon.webp
│   └── zaurez.webp
│
├── projects/                       # Project images
│   ├── cornea-transplant.jpg
│   ├── scholarship.jpg
│   ├── qurbani.jpg
│   ├── flood-relief.jpg
│   ├── diabetic-care.jpg
│   ├── wellness.jpg
│   ├── autism-center.jpg
│   ├── e-library.jpg
│   ├── mother-child.jpg
│   └── takmil.jpg
│
├── reports/                        # Report PDFs
│   ├── fjmcaana-annual-report-2022.pdf
│   ├── president-report-2022.pdf
│   ├── cornea-transplant-report-2022.pdf
│   ├── flood-relief-kashani-basti.pdf
│   ├── scholarship-impact-report.pdf
│   ├── financial-statement-2022.pdf
│   └── donor-impact-2022.pdf
│
├── flyers/                         # Program flyers
│   ├── interest-free-loan-flyer.jpg
│   └── interest-free-loan-flyer.pdf
│
├── gallery/                        # Event and gallery images
│   ├── winter-meeting-2021/
│   ├── conference-2019/
│   ├── helping-babies-breathe/
│   ├── mother-child-fundraiser/
│   └── [other event folders]
│
├── videos/                         # Hero section video
│   ├── hero.mp4
│   └── hero-poster.jpg
│
└── file.svg                        # Default SVG icons
    └── globe.svg
```

## Image Specifications by Section

### 1. Hero Section
- **Path**: `/videos/hero.mp4` and `/videos/hero-poster.jpg`
- **Component**: `src/components/Hero.tsx`
- **Recommended size**: 1920x1080 (video), 1920x1080 (poster)
- **Format**: MP4 (video), JPG (poster)

### 2. Logo
- **Path**: `/images/Logo.png`
- **Component**: `src/components/Navbar.tsx`, `src/components/Footer.tsx`
- **Current size**: 64x64 pixels
- **Format**: PNG with transparency

### 3. Heritage Badge
- **Component**: `src/components/HeritageBadge.tsx`
- **Note**: No image needed - pure CSS/HTML component

### 4. Leaders Section

#### President Photo
- **Path**: `/images/president.png`
- **Component**: `src/components/LeadersSection.tsx`
- **Recommended size**: 600x800 pixels (portrait)
- **Format**: PNG or JPG

#### Executive Leaders
- **Path**: `/team/[member-name].png`
- **Component**: `src/components/LeadersSection.tsx`
- **Recommended size**: 600x800 pixels (portrait)
- **Format**: PNG or JPG
- **Current files**:
  - Naghmna_Bajwa.png
  - Sumra_Rathore.jpeg
  - Fauzia_Anwar.png
  - Azra_Khan.png

### 5. Team Slider
- **Path**: `/team/[member-name].png`
- **Component**: `src/components/TeamSlider.tsx`
- **Data source**: `lib/team.ts`
- **Recommended size**: 600x800 pixels (portrait)
- **Format**: PNG or JPG

### 6. Projects Page

#### Annual Projects
- **Paths**:
  - `/projects/cornea-transplant.jpg`
  - `/projects/scholarship.jpg`
  - `/projects/qurbani.jpg`
- **Component**: `src/app/projects/page.tsx`
- **Recommended size**: 800x600 pixels (landscape)
- **Format**: JPG

#### Regular Projects
- **Paths**:
  - `/projects/flood-relief.jpg`
  - `/projects/diabetic-care.jpg`
  - `/projects/wellness.jpg`
  - `/projects/autism-center.jpg`
  - `/projects/e-library.jpg`
  - `/projects/mother-child.jpg`
  - `/projects/takmil.jpg`
- **Component**: `src/app/projects/page.tsx`
- **Recommended size**: 800x600 pixels (landscape)
- **Format**: JPG

### 7. Reports Page
- **Paths**: `/reports/[report-name].pdf`
- **Component**: `src/app/reports/page.tsx`
- **Format**: PDF documents

### 8. Loan Page
- **Paths**:
  - `/flyers/interest-free-loan-flyer.jpg` (display)
  - `/flyers/interest-free-loan-flyer.pdf` (download)
- **Component**: `src/app/loan/page.tsx`
- **Recommended size**: 800x1000 pixels (for JPG)
- **Format**: JPG and PDF

### 9. Lifetime Members
- **Path**: `/Lifetime members/[name].png`
- **Component**: Uses data from `lib/siteContent.ts` → `LIFETIME_MEMBERS`
- **Recommended size**: 400x500 pixels (portrait)
- **Format**: PNG

### 10. Alumni Presidents
- **Path**: `/past presidents/[name].png`
- **Component**: Uses data from `lib/siteContent.ts` → `ALUMNI_PRESIDENTS`
- **Recommended size**: 400x500 pixels (portrait)
- **Format**: PNG

### 11. Health Channel
- **Path**: `/channel/[name].webp` or `.png`
- **Component**: `src/components/HealthChannelPage.tsx`
- **Recommended size**: 400x400 pixels (square)
- **Format**: WEBP or PNG

### 12. Gallery/Events
- **Path**: `/gallery/[event-name]/[image].jpg`
- **Component**: Various gallery components
- **Recommended size**: Variable (1200x800 for featured, 800x600 for thumbnails)
- **Format**: JPG

## How to Add New Images

### Step 1: Prepare Your Image
1. Resize to recommended dimensions
2. Optimize for web (compress without losing quality)
3. Use appropriate format (PNG for logos/transparency, JPG for photos)
4. Name file descriptively (lowercase, hyphens for spaces)

### Step 2: Place in Correct Folder
1. Navigate to `public/` folder
2. Find appropriate subfolder (team, projects, reports, etc.)
3. Copy your image file

### Step 3: Update Code (if needed)
Most images are automatically picked up if named correctly. For new content:

#### Adding a new team member:
Edit `lib/team.ts`:
```typescript
{
  slug: "new-member",
  name: "Dr. New Member",
  role: "Councilor",
  image: "/team/New_Member.png",  // ← Add this path
  highlight: "Brief description...",
  message: "Full bio..."
}
```

#### Adding a new project:
Edit `src/app/projects/page.tsx` in the `ANNUAL_PROJECTS` or `REGULAR_PROJECTS` array:
```typescript
{
  slug: "new-project",
  title: "New Project Name",
  description: "Project description...",
  image: "/projects/new-project.jpg",  // ← Add this path
  status: "Ongoing",
  impact: "Impact description"
}
```

## Image Optimization Tips

1. **Compress images**: Use tools like TinyPNG, ImageOptim, or Squoosh
2. **Use correct formats**:
   - PNG: Logos, graphics with transparency
   - JPG: Photos, complex images
   - WEBP: Modern format for photos (smaller file size)
3. **Responsive images**: Next.js Image component automatically handles this
4. **Alt text**: Always included in components for accessibility

## Fallback Handling

The website includes graceful fallback handling:
- If an image is missing, Next.js will show a placeholder
- Team photos fall back to background color
- Project images have background gradients

## Testing Your Images

After adding images:
1. Run `npm run dev`
2. Navigate to the page with your new image
3. Check browser console for any 404 errors
4. Verify image loads correctly on different screen sizes

## Common Issues & Solutions

### Image not showing
- ✅ Check file path is correct (case-sensitive!)
- ✅ Verify file is in `public/` folder
- ✅ Restart dev server after adding new files

### Image looks blurry
- ✅ Increase image resolution
- ✅ Use at least 2x the display size for retina screens

### Large file sizes
- ✅ Compress images before uploading
- ✅ Convert to WEBP format for photos
- ✅ Use appropriate resolution (don't upload 4K images for thumbnails)

## Quick Reference: Where to Put Images

| Content Type | Folder | Example |
|-------------|--------|---------|
| Logo | `images/` | `Logo.png` |
| President | `images/` | `president.png` |
| Team members | `team/` | `Member_Name.png` |
| Lifetime members | `Lifetime members/` | `name.png` |
| Past presidents | `past presidents/` | `name.png` |
| Health Channel | `channel/` | `name.webp` |
| Projects | `projects/` | `project-name.jpg` |
| Reports (PDFs) | `reports/` | `report-name.pdf` |
| Flyers | `flyers/` | `flyer-name.jpg` |
| Gallery | `gallery/event-name/` | `photo.jpg` |
| Hero video | `videos/` | `hero.mp4` |

---

**Last Updated**: August 24, 2026

For questions or issues, contact the development team.
