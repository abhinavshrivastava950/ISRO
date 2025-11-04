# ISRO Website Project

A modern, responsive website showcasing India's space achievements through the Indian Space Research Organisation (ISRO). This project features interactive animations, dynamic counters, and comprehensive information about ISRO's missions and visionaries.

## 🚀 Features

- **Responsive Design**: Fully responsive across all devices (desktop, tablet, mobile)
- **Interactive Animations**: Smooth scroll animations and fade effects
- **Dynamic Counters**: Animated statistics that count up on scroll
- **Mobile Navigation**: Hamburger menu for seamless mobile experience
- **Video Backgrounds**: Engaging video backgrounds on select pages
- **Hide-on-Scroll Header**: Smart header that hides/shows based on scroll direction

## 📁 Project Structure

```
isro-website/
│
├── index.html                    # Main landing page
├── pslv.html                     # PSLV mission page
├── chandrayaan.html              # Chandrayaan missions page
├── mangalyaan.html               # Mars Orbiter Mission page
├── gaganyaan.html                # Human spaceflight program page
├── astrosat.html                 # AstroSat astronomy satellite page
├── risat-series.html             # RISAT radar imaging satellites page
├── gsat-series.html              # GSAT communication satellites page
├── visionaries_of_isro.html      # ISRO pioneers and leaders page
│
├── css/
│   └── style.css                 # Main stylesheet with responsive design
│
├── js/
│   └── script.js                 # Interactive features and animations
│
├── img/                          # Image assets
│   ├── ISRO-logo.png
│   ├── aditya l1.png
│   ├── astrosat.png
│   ├── chandrayaan - 1.png
│   ├── chandrayaan - 2.png
│   ├── chandrayaan 3.png
│   ├── dhawan.png
│   ├── gaganyaan.webp
│   ├── gsat.png
│   ├── insat.webp
│   ├── kalam.png
│   ├── kastur.jpeg
│   ├── mangalyaan.png
│   ├── nair.jpeg
│   ├── NISAR.jpg
│   ├── oceansat.jpg
│   ├── pslv-launch.png
│   ├── rao.jpeg
│   ├── risat.png
│   ├── sarabhai.png
│   ├── slv-3.png
│   ├── sslv.jpg
│   └── visionaries.png
│
└── vid/                          # Video assets
    ├── main.mov
    ├── main2.mov
    ├── moon.mp4
    └── moon2.mp4
```

## 🛠️ Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with animations and transitions
- **JavaScript (Vanilla)**: Interactive features without dependencies
- **Google Fonts**: Familjen Grotesk font family

## ✨ Key Features Breakdown

### 1. Animated Counters
Statistics automatically count up when scrolled into view:
- Mission durations
- Success rates
- Satellite counts
- Coverage areas

### 2. Responsive Navigation
- Desktop: Horizontal menu bar
- Mobile: Hamburger menu with slide-in panel
- Auto-hide header on scroll down, show on scroll up

### 3. Scroll Animations
- Fade-in effects for content
- Bounce animations for scroll indicators
- Smooth transitions between sections

### 4. Mission Pages
Each mission has dedicated pages with:
- Background imagery/video
- Mission overview
- Key statistics
- Call-to-action buttons

### 5. Visionaries Section
Tribute to ISRO pioneers featuring:
- Biographical information
- Portrait images
- Timeline of contributions
- Profile cards for additional scientists

## 🎨 Design Highlights

- **Color Scheme**: Space-themed dark backgrounds with vibrant accents
- **Typography**: Clean, modern Familjen Grotesk font
- **Layout**: Full-screen sections with centered content
- **Visual Effects**: Text shadows, blur effects, and gradient overlays

## 📱 Responsive Breakpoints

- **Desktop**: 960px and above
- **Tablet**: 600px - 960px
- **Mobile**: Below 600px
- **Small Mobile**: 400px and below
- **Very Small**: 320px and below
- **Height-based**: Responsive adjustments for screens below 600px height

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- A local web server (optional, for video playback)

### Installation

1. Clone or download the repository
```bash
git clone https://github.com/abhinavshrivastava950/ISRO)
cd isro-website
```

2. Open with a local server (recommended):
```bash
# Using Python 3
python -m http.server 8000

# Using Node.js http-server
npx http-server
```

3. Or simply open `index.html` in your browser

### Usage

Navigate through the website using:
- Header navigation menu
- Hamburger menu (mobile)
- Scroll arrows on each section
- Call-to-action buttons

## 🔧 Customization

### Adding New Mission Pages

1. Create a new HTML file based on existing templates
2. Add background image/video to the `img/` or `vid/` folders
3. Update CSS with new background class
4. Add navigation links in all HTML files
5. Update statistics in the counter sections

### Modifying Styles

Edit `css/style.css`:
- Colors: Search for color hex codes
- Fonts: Modify the Google Fonts import
- Animations: Adjust keyframe definitions
- Breakpoints: Update media queries

### Updating Content

All content can be edited directly in HTML files:
- Mission descriptions in `<h6>` tags
- Statistics in `data-target` attributes
- Images via `src` attributes

## 🌐 Browser Compatibility

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Opera (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 License

This project is created for educational purposes. ISRO logo and mission information belong to the Indian Space Research Organisation.

## 🙏 Acknowledgments

- ISRO for inspiring space exploration
- All the visionaries who built India's space program
- The open-source community for resources and inspiration

## 📞 Contact

For questions or contributions, please reach out through the project repository.

---

**Made with ❤️ for India's Space Program**

*Last Updated: 2025*
