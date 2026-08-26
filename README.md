# FJMCAANA Website

**Fatima Jinnah Medical College Alumnae Association of North America**

A modern, professional website for connecting women physicians and supporting healthcare initiatives in Pakistan. Built with Next.js 16, React 19, and TypeScript.

## 🌟 Features

- **Professional Branding**: Full organization name, 48-year heritage badge, and mission-driven content
- **Modern Design**: Clean, accessible interface with smooth animations
- **Comprehensive Pages**: Projects, Reports, Loan Program, Resources, and more
- **Responsive Layout**: Optimized for mobile, tablet, and desktop
- **Server-Side Rendering**: Fast page loads and SEO-friendly
- **Image Optimization**: Automatic responsive images with Next.js Image component

## 📚 Documentation

- **[REDESIGN_SUMMARY.md](./REDESIGN_SUMMARY.md)** - Complete overview of all changes and features
- **[IMAGE_GUIDE.md](./IMAGE_GUIDE.md)** - Detailed guide for adding and managing images
- **[DEPLOYMENT_CHECKLIST.md](./DEPLOYMENT_CHECKLIST.md)** - Step-by-step deployment instructions

## 🚀 Getting Started

### Prerequisites
- Node.js 20+ 
- npm or yarn

### Installation

```powershell
# Install dependencies
npm install

# Run development server
npm run dev

# Open browser to http://localhost:3000
```

### Build for Production

```powershell
# Create production build
npm run build

# Start production server
npm run start
```

## 📁 Project Structure

```
client/
├── src/
│   ├── app/                    # Next.js app router pages
│   │   ├── page.tsx           # Homepage
│   │   ├── projects/          # Projects page
│   │   ├── reports/           # Reports page
│   │   ├── loan/              # Loan program page
│   │   ├── help/              # Help & resources page
│   │   ├── team/              # Team page
│   │   ├── admin/             # Admin panel
│   │   └── [...slug]/         # Dynamic content pages
│   ├── components/            # React components
│   │   ├── HeritageBadge.tsx # 48 years badge
│   │   ├── LeadersSection.tsx# Executive leadership
│   │   ├── Hero.tsx          # Hero section
│   │   ├── Navbar.tsx        # Navigation
│   │   └── ...
│   └── lib/                   # Utilities and data
│       ├── siteContent.ts    # Content data
│       ├── team.ts           # Team member data
│       └── types.ts          # TypeScript types
├── public/                    # Static assets
│   ├── images/               # Logos, photos
│   ├── team/                 # Team member photos
│   ├── projects/             # Project images
│   ├── reports/              # PDF reports
│   ├── flyers/               # Program flyers
│   ├── gallery/              # Event photos
│   └── videos/               # Video assets
├── data/                     # JSON data files
└── legacy-source/            # Old website reference
```

## 🎨 Design System

### Colors
- **Pine** (`#0e3b2e`) - Primary brand color
- **Gold** (`#c99a44`) - Accent color
- **Cream** (`#faf6ef`) - Background
- **Sage** (`#e6ede7`) - Secondary background

### Typography
- **Display**: Fraunces (serif) - Headings
- **Body**: Public Sans (sans-serif) - Body text
- **Mono**: Space Grotesk - Labels, badges

## 🔧 Key Technologies

- **Framework**: Next.js 16.3.0
- **React**: 19.2.8
- **TypeScript**: 5.x
- **Styling**: Tailwind CSS 4.0
- **Email**: Resend API
- **Deployment**: Vercel-ready

## 📄 Main Pages

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Hero, stats, leaders, team, causes |
| About | `/about` | Mission, president message, committee |
| Projects | `/projects` | Annual and regular projects |
| Reports | `/reports` | Annual, project, and financial reports |
| Loan | `/loan` | Interest-free loan program |
| Help | `/help` | Student and professional resources |
| Get Involved | `/get-involved` | Membership, volunteer opportunities |
| Our Impact | `/impact` | Projects, success stories, gallery |
| Team | `/team` | Full team member profiles |
| Contact | `/contact` | Contact form |

## 🖼️ Adding Images

See **[IMAGE_GUIDE.md](./IMAGE_GUIDE.md)** for complete instructions.

Quick reference:
- Team photos → `/public/team/`
- Project images → `/public/projects/`
- Reports (PDFs) → `/public/reports/`
- Flyers → `/public/flyers/`

Each folder has a README.md with specific requirements.

## 🌐 Deployment

### Vercel (Recommended)
```powershell
npm i -g vercel
vercel
vercel --prod
```

### Other Platforms
See **[DEPLOYMENT_CHECKLIST.md](./DEPLOYMENT_CHECKLIST.md)** for detailed instructions.

## 📝 Content Updates

### Updating Team Members
Edit `lib/team.ts`:
```typescript
{
  slug: "member-name",
  name: "Dr. Name",
  role: "Position",
  image: "/team/Photo.png",
  highlight: "Brief bio...",
  message: "Full bio..."
}
```

### Updating Projects
Edit `src/app/projects/page.tsx`:
```typescript
const ANNUAL_PROJECTS = [
  {
    slug: "project-name",
    title: "Project Title",
    description: "Description...",
    image: "/projects/image.jpg",
    status: "Ongoing",
    impact: "Impact statement"
  }
];
```

### Updating Site Content
Edit `lib/siteContent.ts` for:
- Lifetime members
- Alumni presidents
- Health channel videos
- Content pages

## 🧪 Testing

```powershell
# Run development server with hot reload
npm run dev

# Build and test production version locally
npm run build
npm run start
```

Test checklist:
- [ ] All pages load without errors
- [ ] Images display correctly
- [ ] Navigation works on mobile and desktop
- [ ] Forms submit successfully
- [ ] Links are functional

## 🔒 Environment Variables

Create `.env.local` for local development:
```
ADMIN_PASSWORD=your_admin_password
RESEND_API_KEY=your_resend_api_key
```

## 📈 Analytics & Monitoring

Configure analytics in `src/app/layout.tsx` or add tracking scripts as needed.

## 🤝 Contributing

1. Create a feature branch
2. Make your changes
3. Test thoroughly
4. Submit a pull request

## 📞 Support

- **Email**: team@fjmcaana.org
- **Issues**: Check documentation first, then contact development team

## 📜 License

© 2026 FJMCAANA. All rights reserved.

---

## Quick Commands Reference

```powershell
# Development
npm run dev              # Start dev server
npm run build            # Build for production
npm run start            # Start production server
npm run lint             # Run linter

# Image Organization
# Place images in appropriate public/ subfolders
# See IMAGE_GUIDE.md for details

# Deployment
vercel                   # Deploy to Vercel
vercel --prod            # Deploy to production
```

## 🎯 Recent Updates

**August 24, 2026** - Complete redesign
- ✅ Professional hero section with full organization name
- ✅ 48-year heritage badge component
- ✅ Separate Leaders section (President + Executive team)
- ✅ New Projects page (Annual vs Regular)
- ✅ Comprehensive Reports page
- ✅ Interest-Free Loan program page
- ✅ Help & Resources page for students/professionals
- ✅ Modern animations and visual enhancements
- ✅ Reorganized navigation structure
- ✅ Complete image handling documentation

## ✨ What Makes This Special

- **48 Years of Legacy**: Prominent display of organization's history
- **Professional Identity**: Full name and mission-driven messaging
- **Comprehensive Resources**: Dedicated pages for every program
- **Modern UX**: Smooth animations, responsive design, intuitive navigation
- **Easy Maintenance**: Well-documented, organized structure
- **Accessibility First**: WCAG compliant, keyboard navigable
- **Performance Optimized**: Server-side rendering, image optimization

---

**Built with ❤️ for women physicians making a difference**
