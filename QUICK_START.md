# 🚀 Quick Start Guide

## Getting Started in 2 Minutes

### Step 1: Download & Extract
1. Extract the `campus-marg-website` folder to your computer
2. You should have 4 files:
   - `index.html`
   - `styles.css`
   - `script.js`
   - `README.md`

### Step 2: Open the Website
**Method 1 (Easiest):**
- Double-click `index.html`
- Website opens in your default browser

**Method 2 (Using a Server - Better):**
- Install Python (or use local server)
- Open terminal in the folder
- Run: `python -m http.server 8000`
- Open: `http://localhost:8000`

### Step 3: Test Everything
- ✓ Check all sections load
- ✓ Test mobile menu (resize browser)
- ✓ Try job filtering
- ✓ Click apply buttons
- ✓ Test carousel arrows
- ✓ Try contact form

---

## 📱 How to Customize

### 1. Change Company Name
Open `index.html` and search for "Campus Marg":
```html
<span class="logo-text">Campus Marg</span>
```
Replace with your company name.

### 2. Update Contact Email
Find this line and replace email:
```html
<p>dillesh@campusmarg.com</p>
```

### 3. Add Your Phone Number
Search for "Call Us" section and add:
```html
<p>+91 XXXX-XXX-XXXX</p>
```

### 4. Change Colors (Optional)
Open `styles.css` and find:
```css
:root {
    --primary: #667eea;      /* Main color */
    --secondary: #764ba2;    /* Secondary color */
    --accent: #f5576c;       /* Accent color */
}
```
Replace with your brand colors.

### 5. Update Team Members
Find the team section and update:
```html
<div class="team-member">
    <div class="member-image">AB</div>
    <h3>Abhishek Bhardwaj</h3>
    <p class="member-role">Your Title</p>
    <p class="member-bio">Your description</p>
</div>
```

### 6. Add/Edit Job Listings
Find job cards and update:
```html
<div class="job-card" data-category="IT">
    <h3>Senior Software Engineer</h3>
    <p class="job-company">Wipro</p>
    <p class="job-location">📍 Bangalore, India</p>
    <p class="job-salary">₹12-18 LPA</p>
```

---

## 🎨 Visual Customization

### Change Hero Title
Search for "Building Better Businesses":
```html
<h1 class="hero-title">
    Building <span class="highlight">Better Businesses</span> Through Talent
</h1>
```

### Change Hero Subtitle
Search for "Trusted by Fortune 500":
```html
<p class="hero-subtitle">
    Trusted by Fortune 500 companies. We connect exceptional talent...
</p>
```

### Update Client Logos
Find the clients section:
```html
<div class="client-logo">Wipro</div>
<div class="client-logo">Tech Mahindra</div>
```

### Modify Service Cards
Each service has this structure:
```html
<div class="service-card">
    <div class="service-icon">👥</div>
    <h3>Temporary Staffing</h3>
    <p>Description of service...</p>
</div>
```

---

## 🔧 Advanced Customization

### Change Font
In `styles.css`:
```css
body {
    font-family: 'Your Font Name', sans-serif;
}
```

### Add More Sections
Copy a section and paste it before `</body>`:
```html
<section class="new-section section-padding">
    <div class="container">
        <!-- Your content here -->
    </div>
</section>
```

### Change Animation Speed
In `styles.css`, modify transition values:
```css
transition: all 0.3s ease;  /* Change 0.3s to faster/slower */
```

---

## 📧 Connect Forms to Email

### Option 1: Using Formspree (FREE & EASY)
1. Go to https://formspree.io
2. Sign up and create a form
3. Get your form ID
4. Update form in `index.html`:
```html
<form action="https://formspree.io/f/YOUR_ID_HERE" method="POST">
```

### Option 2: Using Email Service
Contact a developer for backend integration.

---

## 📊 Website Sections

1. **Navigation** - Fixed header with menu
2. **Hero** - Main banner with CTAs
3. **About** - Company info and stats
4. **Services** - 8 service offerings
5. **Industries** - 12 industry tags
6. **Jobs** - Job listings with filter
7. **Team** - Team member profiles
8. **Clients** - Client logos
9. **Testimonials** - Auto-rotating reviews
10. **CTA** - Call-to-action section
11. **Contact** - Contact form + info
12. **Footer** - Links + newsletter

---

## 🎯 Interactive Features

✓ **Mobile Menu** - Hamburger menu for mobile
✓ **Job Search** - Search and filter jobs
✓ **Job Categories** - Filter by category
✓ **Apply Buttons** - Opens application modal
✓ **Contact Forms** - Multiple form types
✓ **Testimonial Carousel** - Auto-rotating carousel
✓ **Scroll Animations** - Fade-in effects
✓ **Smooth Scrolling** - Navigation scrolls smoothly
✓ **Keyboard Support** - Arrow keys for carousel
✓ **Escape Key** - Close modals with ESC

---

## 🌐 Deploy to Web (Free)

### Using Netlify (Easiest)
1. Go to https://netlify.com
2. Drag & drop folder
3. Site goes live in seconds
4. Get free `.netlify.app` domain

### Using GitHub Pages
1. Create GitHub account
2. Create new repository
3. Upload files
4. Enable GitHub Pages in settings
5. Site goes live on `username.github.io`

### Using Vercel
1. Go to https://vercel.com
2. Import or upload project
3. Auto-deployed to `vercel.app`

---

## ✅ Before Going Live Checklist

- [ ] Update company name
- [ ] Update all contact information
- [ ] Add real phone number
- [ ] Update job listings
- [ ] Update team members
- [ ] Update client logos if needed
- [ ] Change colors to match brand
- [ ] Test all buttons and links
- [ ] Test on mobile phone
- [ ] Connect forms to email service
- [ ] Update social media links
- [ ] Add analytics (Google Analytics)

---

## 🐛 Common Issues & Fixes

### Website won't load
→ Make sure all 3 files are in same folder

### Styling looks broken
→ Check if `styles.css` is in same directory as `index.html`

### Mobile menu not working
→ Refresh page, clear browser cache

### Forms not submitting
→ Check browser console for errors (F12 key)

### Images not showing
→ Check file paths in img tags

---

## 📱 Test on Mobile

### Using Browser DevTools
1. Open website in Chrome/Firefox
2. Press `F12` to open Developer Tools
3. Click device icon (top left)
4. Test on different screen sizes

### Using Your Phone
1. Save website to a web server
2. Visit URL on your phone
3. Test all features and navigation

---

## 🎨 Color Palette

```
Primary Blue:     #667eea
Dark Purple:      #764ba2
Pink/Accent:      #f5576c
Light Gray:       #f8f9fc
Dark Gray:        #1a202c
Text Color:       #2d3748
Success Green:    #48bb78
```

Use these in `styles.css` to maintain consistency.

---

## 📞 Need Help?

1. Check `README.md` for detailed documentation
2. Review code comments in files
3. Test in browser developer tools (F12)
4. Look for error messages in console

---

## 🚀 You're All Set!

The website is ready to customize and deploy. 
Good luck with Campus Marg! 🎉
