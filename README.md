# Ali Raza Memon - Portfolio Website (React Version)

This is a modern React.js version of Ali Raza Memon's portfolio website, converted from the original HTML/CSS/JS version.

## Features

- **Modern React Architecture**: Built with React 18 and Vite for optimal performance
- **Responsive Design**: Fully responsive layout that works on all devices
- **Component-Based**: Modular components for easy maintenance and scalability
- **Clean UI**: Professional design with smooth animations and transitions
- **Fast Loading**: Optimized with Vite for lightning-fast development and build times

## Tech Stack

- **React 18**: Latest version of React for building user interfaces
- **Vite**: Modern build tool for faster development
- **CSS3**: Custom CSS with CSS variables for theming
- **Font Awesome**: Icons for navigation and UI elements
- **Google Fonts**: Poppins and Clicker Script fonts

## Getting Started

### Prerequisites

Make sure you have Node.js installed on your machine.

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd portfolio-react
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit `http://localhost:5173`

### Build for Production

```bash
npm run build
```

## Project Structure

```
portfolio-react/
├── public/
│   ├── assets/
│   │   └── img/           # Portfolio images
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Sidebar.jsx    # Navigation sidebar
│   │   ├── Home.jsx       # Home section
│   │   └── About.jsx      # About section
│   ├── styles/
│   │   ├── index.css      # Global styles
│   │   └── App.css        # Component styles
│   ├── App.jsx            # Main app component
│   └── main.jsx           # App entry point
├── package.json
└── vite.config.js
```

## Components

- **App**: Main application component with state management
- **Sidebar**: Navigation component with active section highlighting
- **Home**: Hero section with introduction and profile image
- **About**: About section with personal information

## Available Scripts

- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run preview`: Preview production build
- `npm run lint`: Run ESLint

## Future Enhancements

- Add Services, Portfolio, and Contact sections
- Implement React Router for better navigation
- Add form validation for contact form
- Include animations and transitions
- Add dark/light theme toggle

## Original Version

This React version is converted from the original HTML/CSS/JS portfolio website while maintaining the same design and functionality.

## Author

**Ali Raza Memon**
- Front-end Developer
- Email: info@gmail.com
- Location: Karachi, Pakistan

## License

This project is open source and available under the MIT License.