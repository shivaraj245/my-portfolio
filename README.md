# Shivaraj Portfolio

## Deployment: GitHub Pages

This project is ready to be deployed on GitHub Pages! Follow these steps:

1. **Set the base path in `vite.config.js`**
   - Edit `vite.config.js` and add the `base` option:
     ```js
     export default defineConfig({
       base: '/your-repo-name/', // Replace with your repo name
       plugins: [react()],
     })
     ```

2. **Install gh-pages**
   ```bash
   npm install --save-dev gh-pages
   # or
   pnpm add -D gh-pages
   ```

3. **Add deploy scripts to `package.json`**
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

4. **Deploy**
   ```bash
   npm run deploy
   # or
   pnpm deploy
   ```

5. **Access your site**
   - Go to your repo's Settings > Pages and make sure it's set to deploy from the `gh-pages` branch.
   - Your site will be live at: `https://your-username.github.io/your-repo-name/`

---

## Overview
This is a React-based portfolio website for Shivaraj Manikashetti, featuring a modern dark theme and responsive design, built using only plain CSS for styling.

## Features
- ✅ Responsive design for all devices
- ✅ Modern developer theme
- ✅ Smooth scrolling navigation
- ✅ Professional sections: Hero, About, Skills, Projects, Experience, Contact
- ✅ Built with React and plain CSS

## Prerequisites
- Node.js (version 18 or higher)
- pnpm (recommended) or npm

## Setup Instructions

1. **Clone the repo**
   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   # or
   npm install
   ```

3. **Start the development server**
   ```bash
   pnpm run dev
   # or
   npm run dev
   ```

4. **Open your browser** and go to the URL provided in your terminal (usually `http://localhost:5173`).

## Project Structure
```
shivaraj-portfolio-css/
├── src/
│   ├── assets/          # Images and static assets
│   ├── App.jsx         # Main application component
│   ├── App.css         # Custom styles and theme
│   └── main.jsx        # Application entry point
├── public/             # Public assets
├── package.json        # Dependencies and scripts
└── vite.config.js      # Vite configuration
```

## Customization

### Updating Content
- Edit `src/App.jsx` to modify the portfolio content
- Update personal information, projects, skills, and experience
- Replace your profile image in `src/assets/`

### Styling
- Modify `src/App.css` for all custom styles
- Theme colors are defined using CSS variables

### Adding New Sections
- Add new sections in `src/App.jsx`
- Follow the existing pattern for sections and cards
- Update navigation menu to include new sections

## Building for Production

1. **Build the project**
   ```bash
   pnpm run build
   # or
   npm run build
   ```

2. **Preview the production build**
   ```bash
   pnpm run preview
   # or
   npm run preview
   ```

The built files will be in the `dist/` directory, ready for deployment.

## Technologies Used
- React
- Vite (build tool)
- Plain CSS (styling)

## Support
If you encounter any issues:
1. Make sure you have the correct Node.js version
2. Try deleting `node_modules/` and lock files, then run install again
3. Check the browser console for any error messages

Enjoy your new portfolio website! 🚀

