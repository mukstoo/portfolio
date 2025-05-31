# Web Developer Portfolio

A modern, responsive portfolio website built with Next.js 15, TypeScript, Tailwind CSS, and shadcn/ui components. Features smooth animations, dark mode support, and a clean, professional design.

## 🚀 Features

- **Modern Tech Stack**: Next.js 15 with App Router, TypeScript, Tailwind CSS v4
- **Beautiful UI**: shadcn/ui components with consistent design system
- **Responsive Design**: Mobile-first approach with responsive layouts
- **Dark Mode**: System preference detection with manual toggle
- **Smooth Animations**: Framer Motion for engaging user interactions
- **Performance Optimized**: Built with Next.js best practices
- **SEO Ready**: Proper meta tags and semantic HTML structure
- **Accessibility**: ARIA labels and keyboard navigation support

## 🛠️ Tech Stack

- **Framework**: Next.js 15.3.2
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Theme**: next-themes for dark mode

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎨 Customization

### Personal Information

Update the following files with your personal information:

1. **Hero Section** (`src/components/hero-section.tsx`)
   - Change "Your Name" to your actual name
   - Update the description text
   - Replace social media links

2. **About Section** (`src/components/about-section.tsx`)
   - Update your story and background
   - Modify the highlights and quick facts
   - Adjust experience years and location

3. **Skills Section** (`src/components/skills-section.tsx`)
   - Update skill levels and categories
   - Add or remove technologies
   - Modify the technology badges

4. **Projects Section** (`src/components/projects-section.tsx`)
   - Replace with your actual projects
   - Update project descriptions, technologies, and links
   - Add real project images

5. **Contact Section** (`src/components/contact-section.tsx`)
   - Update contact information
   - Replace email, phone, and location
   - Modify social media links

### Styling and Colors

The project uses Tailwind CSS with a custom color scheme. To modify colors:

1. **Update CSS variables** in `src/app/globals.css`
2. **Modify shadcn/ui theme** in `components.json`
3. **Customize gradient colors** in component files

### Adding New Sections

To add new sections:

1. Create a new component in `src/components/`
2. Import and add it to `src/app/page.tsx`
3. Update navigation links in `src/components/navigation.tsx`

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── ui/              # shadcn/ui components
│   │   ├── about-section.tsx
│   │   ├── contact-section.tsx
│   │   ├── footer.tsx
│   │   ├── hero-section.tsx
│   │   ├── navigation.tsx
│   │   ├── projects-section.tsx
│   │   ├── skills-section.tsx
│   │   ├── theme-provider.tsx
│   │   └── theme-toggle.tsx
│   └── lib/
│       └── utils.ts
├── public/
├── components.json
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy with one click

### Other Platforms

The project can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing framework
- [shadcn/ui](https://ui.shadcn.com/) for the beautiful components
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS
- [Framer Motion](https://www.framer.com/motion/) for smooth animations
- [Lucide](https://lucide.dev/) for the icon set

---

Built with ❤️ using Next.js and TypeScript
