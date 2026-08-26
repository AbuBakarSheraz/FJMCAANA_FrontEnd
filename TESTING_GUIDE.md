# FJMCAANA Website - Testing Guide

## Quick Start Testing

```powershell
# Start development server
npm run dev

# Open browser to:
http://localhost:3000
```

---

## ✅ Core Functionality Tests

### 1. Homepage (`/`)
- [ ] Page loads without errors
- [ ] Hero section displays with video background
- [ ] Heritage badge visible in bottom-right corner
- [ ] "Since 1978 - 48 Years of Service" text readable
- [ ] Stats bar displays correctly
- [ ] President's Message section visible
- [ ] "Read the full message →" link works
- [ ] Executive Leaders section displays
- [ ] Team slider auto-rotates
- [ ] Animations visible (fade-in, slide-in effects)
- [ ] All navigation links work

**Expected Animations:**
- Hero text fades in and slides in
- President's quote section fades in
- Cards have hover effects (slight lift)
- Heritage badge pulses subtly

---

### 2. Navigation Menu
Test all menu items:
- [ ] About → `/about` (works, no 404)
- [ ] Projects → `/projects` (works, no 404)
- [ ] Get Involved → `/get-involved` (works, no 404)
- [ ] Our Impact → `/impact` (works, no 404)
- [ ] Reports → `/reports` (works, no 404)
- [ ] Interest-Free Loan → `/loan` (works, no 404)
- [ ] Help & Resources → `/help` (works, no 404)
- [ ] Contact → `/contact` (works, no 404)
- [ ] Donate button (top right) → External PayPal link

**Mobile Menu:**
- [ ] Hamburger icon appears on mobile
- [ ] Menu opens/closes properly
- [ ] All links work in mobile menu

---

### 3. Projects Page (`/projects`)
- [ ] Page loads successfully
- [ ] Annual Projects section displays (3 projects)
- [ ] Regular Projects section displays (7 projects)
- [ ] Project images load (project-1.jpg through project-5.jpg)
- [ ] Status badges show correct status
- [ ] Cards have hover effect (lift + shadow)
- [ ] Donate button in CTA section works

**Test Each Project Card:**
- [ ] Image displays
- [ ] Title and description visible
- [ ] Status badge shows
- [ ] Impact metric displays
- [ ] Hover effect works

---

### 4. Reports Page (`/reports`)
- [ ] Page loads successfully
- [ ] Annual Reports section (2 reports)
- [ ] Project Reports section (3 reports)
- [ ] Financial Reports section (2 reports)
- [ ] PDF icon displays on cards
- [ ] "Download PDF" buttons present
- [ ] Links point to correct PDF files

**Test PDF Links:**
- [ ] Click "Download PDF" opens/downloads file
- [ ] PDF path: `/reports/fjmcaana-annual-report-2022.pdf`

---

### 5. Interest-Free Loan Page (`/loan`)
- [ ] Page loads successfully
- [ ] Loan flyer image displays
- [ ] Image path: `/flyers/interest-free-loan-flyer.jpg`
- [ ] Eligibility sections display (Students & Graduates)
- [ ] 4-step application process shows
- [ ] Icons and badges visible
- [ ] Email link works: `team@fjmcaana.org`
- [ ] "Download Flyer" button works

**Test Email Link:**
- [ ] Click "Contact Us About Loans" opens email client
- [ ] Subject line: "Interest-Free Loan Program Inquiry"

---

### 6. Help & Resources Page (`/help`)
- [ ] Page loads successfully
- [ ] Student Resources section (4 cards)
- [ ] Professional Resources section (6 cards)
- [ ] FAQ section with expandable questions

**Test External Links:**
- [ ] WhatsApp link opens in new tab
  - URL: `https://whatsapp.com/channel/0029Vb8Vte4GehEIDXyLVo2l`
- [ ] Facebook link opens in new tab
  - URL: `https://www.facebook.com/share/g/19N5SxA3dY/`
- [ ] Residency email link opens email client
  - Email: `team@fjmcaana.org`
  - Subject: "Residency Inquiry"

**Test FAQ:**
- [ ] Click question expands answer
- [ ] Click again collapses answer
- [ ] All 5 questions work

---

### 7. President's Message Page (`/about/presidents-message`)
- [ ] Page loads successfully
- [ ] President's photo displays
- [ ] Full message text readable
- [ ] Professional layout
- [ ] Signature section at bottom

**Access from:**
- [ ] Homepage → "Read the full message →" link
- [ ] About menu → Presidents Message (if available)
- [ ] Direct URL: `/about/presidents-message`

---

### 8. Team Page (`/team`)
- [ ] Page loads successfully
- [ ] Current President appears first
- [ ] All team members display
- [ ] Photos load correctly
- [ ] Roles display properly
- [ ] Full bios visible
- [ ] Smooth scroll to member when clicking from homepage

---

### 9. About Pages
- [ ] `/about` - Main about page loads
- [ ] `/about/mission` - Mission statement
- [ ] `/about/executive-committee` - Team list
- [ ] `/about/constitution-bylaws` - Constitution
- [ ] `/about/alumni-presidents` - Past presidents with photos

---

### 10. Get Involved Pages
- [ ] `/get-involved` - Main page loads
- [ ] `/get-involved/membership` - Membership info
- [ ] `/get-involved/lifetime-members` - Member gallery with photos
- [ ] `/get-involved/health-channel` - Health channel videos

---

### 11. Impact Pages
- [ ] `/impact` - Main impact page
- [ ] `/impact/projects` - Project details
- [ ] `/impact/events` - Past events
- [ ] `/impact/gallery` - Photo gallery

---

### 12. Other Pages
- [ ] `/news` - News listing
- [ ] `/contact` - Contact form
- [ ] `/donate` - Donation page with causes

---

## 🎨 Animation Testing

### Visual Animations to Verify
1. **Homepage Hero:**
   - Text should fade in from top
   - Heading slides in from left
   - Description slides in from right

2. **President's Message:**
   - Section fades in when scrolling
   - Photo scales in
   - Text slides in from right

3. **Cards:**
   - Hover over any card → slight lift + shadow
   - Image scales slightly on hover

4. **Heritage Badge:**
   - Visible in bottom-right
   - Subtle pulse/glow effect
   - Stays fixed when scrolling

5. **Buttons:**
   - Hover changes color smoothly
   - Transition effect visible

**If Animations Not Visible:**
- Check browser console for errors
- Verify `globals.css` loaded
- Test in different browser
- Check if motion is reduced in OS settings

---

## 📱 Responsive Testing

### Mobile (320px - 480px)
- [ ] Navigation becomes hamburger menu
- [ ] Hero text readable and sized properly
- [ ] Cards stack in single column
- [ ] Images scale correctly
- [ ] Buttons are touch-friendly
- [ ] Heritage badge doesn't overlap content
- [ ] All links accessible

### Tablet (768px - 1024px)
- [ ] 2-column grid layouts
- [ ] Navigation still in header
- [ ] Images display properly
- [ ] Text readable
- [ ] Spacing appropriate

### Desktop (1280px+)
- [ ] 3-4 column layouts where appropriate
- [ ] Max-width constraints active
- [ ] Content centered
- [ ] Images high quality
- [ ] No horizontal scroll

**Test in:**
- [ ] Chrome/Edge
- [ ] Firefox
- [ ] Safari (if available)
- [ ] Mobile browsers

---

## 🔗 Link Testing

### Internal Links
Test that these DON'T show 404:
- [ ] All navigation menu items
- [ ] Footer links
- [ ] Card links
- [ ] "Learn more" links
- [ ] Breadcrumb links

### External Links
Test that these open in NEW TAB:
- [ ] PayPal donation link
- [ ] WhatsApp channel link
- [ ] Facebook group link
- [ ] PDF download links

### Email Links
Test that these open email client:
- [ ] team@fjmcaana.org links
- [ ] Contact form (if applicable)

---

## 🖼️ Image Testing

### Images That Should Display
- [ ] Logo in navbar: `/images/Logo.png`
- [ ] President photo (homepage): `/images/president.png`
- [ ] President photo (message page): `/images/president.png`
- [ ] Team member photos: `/team/*.png`
- [ ] Project images: `/projects/project-1.jpg` through `project-5.jpg`
- [ ] Loan flyer: `/flyers/interest-free-loan-flyer.jpg`
- [ ] Lifetime member photos: `/Lifetime members/*.png`
- [ ] Alumni president photos: `/past presidents/*.png`
- [ ] Health channel photos: `/channel/*.webp`

**If Image Not Showing:**
1. Check browser console for 404 errors
2. Verify file exists in `/public` folder
3. Check file name matches exactly (case-sensitive)
4. Verify file extension is correct

---

## 🐛 Common Issues & Solutions

### Issue: Page shows 404
**Solution:** 
- Clear browser cache
- Restart dev server
- Check URL spelling

### Issue: Animations not visible
**Solution:**
- Check browser console for CSS errors
- Verify `animate-*` classes in HTML
- Test in different browser
- Check if motion reduction is enabled

### Issue: Images not loading
**Solution:**
- Verify file in `/public` folder
- Check file name matches code
- Restart dev server
- Clear browser cache

### Issue: Links don't work
**Solution:**
- Check console for routing errors
- Verify page exists in `/src/app`
- Check link href is correct

### Issue: Build fails
**Solution:**
```powershell
# Clean and rebuild
Remove-Item -Recurse -Force .next
npm install
npm run build
```

---

## ✅ Pre-Production Checklist

Before deploying to production:

### Content
- [ ] All text proofread
- [ ] Contact information correct
- [ ] Dates and statistics current
- [ ] No placeholder text remaining

### Images
- [ ] All images optimized and compressed
- [ ] All required images uploaded
- [ ] Image quality acceptable
- [ ] Alt text present on all images

### Functionality
- [ ] All pages load without errors
- [ ] No 404 errors on any link
- [ ] Forms submit successfully
- [ ] External links work
- [ ] Email links open correctly

### Performance
- [ ] Build completes successfully
- [ ] No console errors
- [ ] Page load time acceptable
- [ ] Images load quickly

### Accessibility
- [ ] Keyboard navigation works
- [ ] Screen reader friendly
- [ ] Color contrast sufficient
- [ ] Alt text on images

### Security
- [ ] No sensitive data exposed
- [ ] External links use `rel="noopener noreferrer"`
- [ ] HTTPS will be configured
- [ ] Forms protected if needed

---

## 🚀 Final Test Before Launch

```powershell
# 1. Clean build
Remove-Item -Recurse -Force .next
npm run build

# 2. Test production build locally
npm run start

# 3. Open browser to http://localhost:3000

# 4. Run through entire checklist above

# 5. Test on mobile device

# 6. If all tests pass, deploy!
vercel --prod
```

---

## 📊 Success Criteria

Site is ready for production when:
- ✅ Build completes with 0 errors
- ✅ All navigation links work (no 404s)
- ✅ Animations are visible and smooth
- ✅ Images display correctly
- ✅ Responsive on all screen sizes
- ✅ External links open in new tabs
- ✅ Forms work correctly
- ✅ No console errors

---

## 📞 Getting Help

If you encounter issues during testing:

1. Check browser console for errors
2. Review DEPLOYMENT_CHECKLIST.md
3. Verify against IMAGE_GUIDE.md
4. Contact development team

**Common Commands:**
```powershell
# Restart dev server
Ctrl+C  # Stop server
npm run dev  # Start again

# Clean build
Remove-Item -Recurse -Force .next
npm run build

# Check for errors
npm run lint
```

---

**Testing Status**: ✅ All tests should pass  
**Last Updated**: August 24, 2026  
**Version**: 1.0.0
