# Let's Listen - About Page

A React application showcasing the "Let's Listen" organization's about page with modern UI/UX design.

## Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Modern React**: Built with React 18, TypeScript, and Vite
- **Smooth Animations**: Scroll-triggered animations and transitions
- **Accessibility**: ARIA labels, keyboard navigation, and semantic HTML
- **Interactive Components**: Expandable board member cards and mobile navigation

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd lets-listen-about-page
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:3000`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── components/          # Reusable React components
│   ├── AboutInfo.tsx   # Mission and philosophy sections
│   ├── BoardMembers.tsx # Board member cards
│   └── Navbar.tsx      # Navigation component
├── pages/              # Page components
│   └── About.tsx       # Main about page
├── App.tsx             # Main app component with routing
├── main.tsx            # Application entry point
└── index.css           # Global styles and Tailwind imports
```

## Components

### Navbar
- Responsive navigation with mobile menu
- Active link highlighting
- Keyboard accessibility

### AboutInfo
- Mission and philosophy sections
- Scroll-triggered animations
- Call-to-action buttons

### BoardMembers
- Interactive member cards
- Expandable descriptions
- Smooth animations

## Styling

The project uses Tailwind CSS for styling with custom configurations:
- Custom breakpoint for navigation (`navxl: 1125px`)
- Inter font family
- Custom color scheme matching the brand

## Accessibility

- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Focus management
- Screen reader compatibility

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is private and proprietary.
