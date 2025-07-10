# ProTrack - Safety Solutions System

Advanced optical tracking system for airports preventing bird strikes, tracking unauthorized drones, and investing in safety - not in radar arrays.

## 🚀 Temporary Coming Soon Page

This repository currently displays a **Coming Soon page** as the main site while we finalize development. The coming soon page maintains the beautiful airport atmosphere and dynamic animations from the full site.

### How to Use the Temporary Cover Page

The current `index.html` shows a simplified coming soon version that includes:
- ✅ Airport background with parallax effects
- ✅ Animated plane and birds flying across the screen  
- ✅ Typing animation effects
- ✅ Navigation bar (links disabled)
- ✅ "Coming Soon" overlay message

### Switching Between Pages

**Currently Active:** Coming Soon Page (`index.html`)
**Full Site Backup:** Complete website (`index-backup.html`)

#### To Switch Back to Full Site:
```bash
# Save current coming soon page
mv index.html index-coming-soon.html

# Restore full website
mv index-backup.html index.html
```

#### To Switch Back to Coming Soon:
```bash
# Save full site
mv index.html index-backup.html

# Restore coming soon page  
mv index-coming-soon.html index.html
```

## 🛠️ Development Setup

1. **Clone the repository**
   ```bash
   git clone [your-repo-url]
   cd SS-WEBSITE
   ```

2. **Open locally**
   - Simply open `index.html` in your browser
   - Or use a local server for development

3. **Dependencies**
   - No build process required
   - Uses vanilla HTML, CSS, and JavaScript
   - Google Fonts loaded via CDN

## 📁 Project Structure

```
├── index.html              # Current coming soon page
├── index-backup.html       # Complete website backup
├── get-started.html        # Get started page
├── style.css              # All styles and animations
├── script.js              # JavaScript animations and interactions
└── assets/                # Images, icons, and media files
```

## 🎨 Features

### Current Coming Soon Page:
- Professional navigation header
- Hero section with airport background
- Animated plane and birds with parallax scrolling
- Typing text animation
- Responsive design
- Clean "Coming Soon" overlay

### Full Website (in backup):
- Complete ProTrack presentation
- Multiple animated sections
- Data visualizations and charts
- Alert systems demonstrations
- Contact and call-to-action sections

## 🔧 Customization

To modify the coming soon message, edit the overlay section in `index.html`:

```html
<!-- Coming Soon Overlay -->
<div class="coming-soon-overlay" style="...">
    <h2>COMING SOON</h2>
    <p>Your custom message here...</p>
</div>
```

## 📱 Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile responsive design
- Optimized animations and performance

---

**Note:** This is a temporary setup while the full ProTrack website is being finalized. The coming soon page provides a professional placeholder that maintains brand consistency and visual appeal. 