# Remal Mahmud - Professional Resume Website

A stunning, fully responsive multi-language resume website built with Next.js, React, and Tailwind CSS. Features premium design aesthetics, comprehensive SEO optimization, smooth animations, and optimized layouts for all device sizes.

## 👨‍💼 About This Project

This is a professional online resume for **Remal Mahmud**, Senior Backend Engineer, showcasing his 10+ years of experience in AWS cloud architecture, full-stack development, and team leadership.

**Live Site**: [https://www.mahmudremal.com](https://www.mahmudremal.com)

## ✨ Features

### 🎨 Design & User Experience

- **Premium Design**: Modern, professional design with gradients, shadows, and smooth animations
- **Fully Responsive**: Optimized layouts for desktop, tablet, and mobile devices
- **Print-Ready**: Optimized for printing professional resumes with print-specific styles
- **Accessible**: Semantic HTML and ARIA-compliant components
- **Smooth Animations**: Engaging micro-animations for enhanced user experience
- **Custom Typography**: Gilroy font family for a distinctive, professional look

### 🌍 Multi-language Support

Seamlessly switch between three languages:

- **English (EN)**: Default language
- **German (DE)**: Full German translation
- **French (FR)**: Full French translation

Language selector with floating UI in the top-right corner

### 🔍 SEO & Performance

- **Comprehensive SEO**: Multi-language meta tags, Open Graph, and Twitter Cards
- **Schema.org Markup**: Structured data (JSON-LD) for enhanced search engine understanding
- **Canonical URLs**: Proper canonical and alternate language URLs
- **Social Media Optimization**: Custom OG images and optimized sharing metadata
- **Fast Performance**: Built with Next.js for optimal loading speed and SSR
- **Developer Attribution**: Proper meta tags crediting the developer

### 📱 Technical Features

- **Server-Side Rendering**: Next.js SSR for better SEO and performance
- **Dynamic Routing**: Multi-language routing with Next.js i18n
- **Optimized Images**: Next.js Image optimization for faster loading
- **Modern CSS**: Tailwind CSS with custom design system
- **Component-Based**: Modular React components for maintainability

## 🚀 Getting Started

### Prerequisites

- Node.js 14.x or higher
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/mahmudremal/mahmudremal-online-resume.git resume
cd resume
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🏗️ Project Structure

```
resume/
├── pages/
│   ├── _app.js          # App wrapper with language configuration
│   ├── index.js         # Main resume page
│   └── SeoHead.js       # SEO component with multi-language support
├── styles/
│   └── globals.css      # Global styles and design system
├── locales/
│   ├── en.json          # English translations
│   ├── de.json          # German translations
│   └── fr.json          # French translations
├── images/              # Profile images and assets
├── public/              # Static assets and OG images
└── CRD Figma Templates/ # Design references
```

## 🎨 Design System

The application uses a comprehensive design system with:

- **Custom CSS Variables**: Consistent colors, spacing, and typography
- **Premium Fonts**: Gilroy for headings and body text
- **Color Palette**: Teal and emerald gradients with complementary accents
- **Animations**: Fade-in, slide-in, and scale effects with smooth transitions
- **Responsive Breakpoints**: Mobile-first approach with tablet and desktop optimizations
- **Print Styles**: Dedicated print media queries for professional resume printing

## 🔍 SEO Implementation

The `SeoHead.js` component provides comprehensive SEO optimization:

### Multi-language Support

- Language-specific meta tags for title, description, and keywords
- Proper `hreflang` tags for all supported languages
- Canonical URLs with language prefixes
- Open Graph locale and alternate locale tags

### Social Media Optimization

- **Open Graph**: Profile-specific OG tags with custom images
- **Twitter Cards**: Large image cards optimized for Twitter sharing
- **Custom Images**: Branded OG banner images (1200x630px)

### Structured Data

- **Schema.org Person**: Complete person schema with:
  - Job title and professional description
  - Contact information (phone, location)
  - Social media profiles (LinkedIn, GitHub, WhatsApp)
  - Skills and expertise (knowsAbout)
  - Professional certifications (alumniOf)

### Developer Attribution

```html
<link
  rel="me"
  type="text/html"
  href="https://mahmudremal.com"
  title="Developed by Remal Mahmud"
/>
<meta name="developer" content="Remal Mahmud" />
<meta name="developer-github" content="https://github.com/mahmudremal" />
```

## 📝 Customization

### Update Personal Information

Edit the translation files in the `locales/` directory:

```json
{
  "name": "YOUR NAME",
  "location": "Your City, Country",
  "phone": "+XX XXX XXX XXXX",
  "summaryText": "Your professional summary...",
  ...
}
```

### Update SEO Information

Edit `pages/SeoHead.js`:

```javascript
const authorName = "Your Name";
const authorWebsite = "https://yourwebsite.com";
const baseUrl = "https://yourwebsite.com";
```

### Change Profile Image

Replace images in the `images/` and `public/` directories with your own.

### Modify Design

Update CSS variables in `styles/globals.css`:

```css
:root {
  --color-primary: #0f766e;
  --color-primary-light: #14b8a6;
  --font-primary: "Gilroy", sans-serif;
  ...;
}
```

## 🖨️ Printing

The resume is optimized for printing:

1. Click the browser's print button (Ctrl/Cmd + P)
2. The language switcher will be automatically hidden
3. The layout will adjust for optimal printing
4. Print-specific styles ensure professional output

## 🚢 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the project in [Vercel](https://vercel.com)
3. Deploy with one click
4. Configure custom domain if needed

### Other Platforms

Build the production version:

```bash
npm run build
npm start
```

Or export as static site:

```bash
npm run build
npm run export
```

## 🛠️ Built With

- [Next.js](https://nextjs.org/) - React framework with SSR and SSG
- [React](https://reactjs.org/) - UI library
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Google Fonts](https://fonts.google.com/) - Gilroy font family
- [Schema.org](https://schema.org/) - Structured data markup

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px
- **Print**: Dedicated print media queries

## 🎯 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 License

This project is open source and available under the MIT License.

## 👤 Client

**Remal Mahmud**

- **Role**: Senior Backend Engineer | AWS Cloud Engineer & Full-Stack Developer
- **Location**: Lakshmipur, Bangladesh
- **Phone**: (+880) 1814 118-328
- **Website**: [https://www.mahmudremal.com](https://www.mahmudremal.com)
- **LinkedIn**: [linkedin.com/in/mahmud-remal](https://linkedin.com/in/mahmud-remal/)
- **GitHub**: [github.com/mahmudremal](https://github.com/mahmudremal)

## 👨‍💻 Developer

**Remal Mahmud**

- **Website**: [https://mahmudremal.com](https://mahmudremal.com)
- **GitHub**: [github.com/mahmudremal](https://github.com/mahmudremal)
- **Portfolio**: [mahmudremal.com](https://mahmudremal.com)

### Services Offered

- ✅ Custom Application Development
- ✅ Cross-Platform Mobile Application Development (iOS, Android)
- ✅ Cross-Platform Desktop Application Development (Windows, macOS, Linux)
- ✅ Web Application Development (React, Next.js, Node.js)
- ✅ WordPress Custom Plugin & Theme Development
- ✅ Shopify Custom Theme Development
- ✅ High-Performance Node.js Servers with Redis, Caching & File Processing
- ✅ SEO Optimization & Performance Tuning
- ✅ UI/UX Design & Implementation

### 🤝 Looking for Collaboration

I'm actively seeking new projects and collaborations! If you need:

- A professional online resume or portfolio
- Custom web applications with modern tech stack
- E-commerce solutions (Shopify, WooCommerce)
- Mobile or desktop applications
- Performance optimization and SEO
- Or any custom development work

**Let's connect!** Visit my [portfolio](https://mahmudremal.com) or reach out for project inquiries.

---

**Built with ❤️ by [Remal Mahmud](https://mahmudremal.com) using Next.js, React, and Tailwind CSS**
