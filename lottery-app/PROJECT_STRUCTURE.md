# 82 Lottery Web Application

## Project Structure

```
lottery-app/
├── public/                      # Static assets
├── src/
│   ├── assets/                  # Images, fonts, etc.
│   ├── components/              # Reusable React components
│   │   ├── Header.jsx          # Top header with logo and icons
│   │   ├── Banner.jsx          # Promotional banner section
│   │   ├── GameGrid.jsx        # Grid of game categories
│   │   ├── WinGoSection.jsx    # Win Go game section
│   │   └── BottomNav.jsx       # Bottom navigation bar
│   ├── pages/                   # Page components
│   │   └── Home.jsx            # Home page (main page)
│   ├── App.jsx                  # Main App component
│   ├── main.jsx                 # Entry point
│   └── index.css                # Global styles with Tailwind
├── index.html                   # HTML template
├── package.json                 # Dependencies
├── tailwind.config.js           # Tailwind configuration
├── postcss.config.js            # PostCSS configuration
└── vite.config.js               # Vite configuration
```

## Components Overview

### 1. **Header.jsx**
- Red gradient header
- Logo (⭐82LOTTERY)
- Mail and download icons

### 2. **Banner.jsx**
- Promotional banner for AR Wallet
- Information about buying/selling
- Bonus information display

### 3. **GameGrid.jsx**
- 4x2 grid of game categories
- Categories: Lottery, Mini games, Popular, Slots, PVC, Fishing, Casino, Sports
- Colorful circular icons with labels

### 4. **WinGoSection.jsx**
- Win Go game promotional card
- Member information display
- Balance display (₹196.00)
- "Add to Desktop" button

### 5. **BottomNav.jsx**
- Fixed bottom navigation
- 5 tabs: Home, Activity, Promotion, Wallet, Account
- Promotion tab has elevated circular design
- Active state highlighting

### 6. **Home.jsx (Page)**
- Main page that combines all components
- Scrollable content area
- Alert banner for notifications

## Technologies Used

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **JavaScript (ES6+)** - Programming language

## Color Scheme

- Primary Red: `#DC2626` (red-600)
- Secondary Red: `#EF4444` (red-500)
- Background: `#F9FAFB` (gray-50)
- Text: `#374151` (gray-700)
- Game Icons: Various gradient colors

## Features

✅ Responsive design
✅ Modern UI with gradients and shadows
✅ Bottom navigation with active states
✅ Game category grid
✅ Promotional banners
✅ Member dashboard
✅ Alert notifications

## Running the Application

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Future Enhancements

- Add routing for Activity, Promotion, Wallet, and Account pages
- Implement game functionality
- Add authentication
- Connect to backend API
- Add animations and transitions
- Implement real-time updates
