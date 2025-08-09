# Dimension Landing Page

A modern, animated landing page inspired by [Dimension.dev](https://www.dimension.dev/) built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- 🎨 Modern dark theme design
- ✨ Smooth animations with Framer Motion
- 📱 Fully responsive layout
- ⌨️ Interactive keyboard section with real-time key press detection
- 🔄 Scroll-triggered animations
- 🎯 TypeScript for type safety
- 🎪 Glass morphism UI elements
- 🚀 Built with Next.js 15 and Tailwind CSS

## Components

### Navbar
- Fixed navigation bar with backdrop blur
- Smooth hover animations
- Responsive design

### Hero Section
- Large typography with gradient text effects
- Floating background particles
- Email signup form with validation
- Parallax scrolling effects

### Features Section
- Grid layout showcasing platform capabilities
- Staggered animations on scroll
- Interactive hover effects
- Integration showcase with icons

### Keyboard Section
- Interactive keyboard replica
- Real-time key press detection
- Visual feedback animations
- Keyboard shortcuts reference

## Technologies Used

- **Framework:** Next.js 15
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Utilities:** Class Variance Authority, clsx, tailwind-merge

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── Features.tsx
│   └── KeyboardSection.tsx
```

## Customization

### Colors
The project uses a dark theme with blue-to-purple gradients. You can customize colors in:
- Individual components for specific color overrides
- `globals.css` for CSS custom properties

### Animations
All animations are built with Framer Motion. Key animation features:
- Page load animations with staggered delays
- Scroll-triggered animations using `useInView`
- Hover and tap interactions
- Parallax effects

### Content
Update the content in each component:
- Hero section headlines and descriptions
- Features grid with your platform capabilities
- Keyboard shortcuts in the KeyboardSection

## Performance

- Uses Next.js optimization features
- Implements proper TypeScript types
- Lazy loading for components with scroll-triggered animations
- Optimized bundle size with tree-shaking

## Acknowledgments

- Design inspiration from [Dimension.dev](https://www.dimension.dev/)
- Built with modern web technologies
- Icons from Lucide React
- Animations powered by Framer Motion
