# Natnael Yohannes Portfolio

A modern, responsive portfolio website built with Node.js/Express backend and HTML/CSS/JavaScript frontend.

## Features

- **Modern Design**: Clean, professional design with smooth animations
- **Responsive Layout**: Works perfectly on desktop, tablet, and mobile devices
- **Interactive Elements**: Smooth scrolling, hover effects, and form validation
- **API Integration**: Backend serves profile data through REST API
- **Contact Form**: Functional contact form with validation
- **Timeline Experience**: Beautiful timeline layout for work experience
- **Skills Showcase**: Interactive skills section with hover effects
- **Mobile Navigation**: Hamburger menu for mobile devices

## Technologies Used

### Backend
- **Node.js**: JavaScript runtime
- **Express.js**: Web application framework
- **CORS**: Cross-origin resource sharing
- **Helmet**: Security middleware
- **Compression**: Response compression

### Frontend
- **HTML5**: Semantic markup
- **CSS3**: Modern styling with Flexbox and Grid
- **JavaScript (ES6+)**: Interactive functionality
- **Font Awesome**: Icons
- **Google Fonts**: Typography

## Project Structure

```
portfolio/
├── server.js              # Express server
├── package.json           # Dependencies and scripts
├── public/               # Static files
│   ├── index.html        # Main HTML file
│   ├── styles.css        # CSS styles
│   └── script.js         # JavaScript functionality
└── README.md            # This file
```

## Installation

1. **Clone or download the project**
   ```bash
   git clone <repository-url>
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## Available Scripts

- `npm start`: Start the production server
- `npm run dev`: Start the development server with nodemon (auto-restart on changes)

## API Endpoints

### GET /api/profile
Returns the complete profile data including:
- Personal information
- Contact details
- Skills
- Work experience
- Education

**Response Example:**
```json
{
  "name": "NATNAEL YOHANNES",
  "title": "Backend Developer",
  "profile": "Dedicated backend developer...",
  "contact": {
    "phone": "+251940830384",
    "email": "Natiyohannes.2017@gmail.com",
    "portfolio": "https://portfolio-rxoi.onrender.com"
  },
  "skills": ["Time management", "Java, C++ and Database", ...],
  "experience": [...],
  "education": {...}
}
```

## Customization

### Updating Profile Information
Edit the `/api/profile` endpoint in `server.js` to update your information:

```javascript
app.get('/api/profile', (req, res) => {
    res.json({
        name: "YOUR NAME",
        title: "YOUR TITLE",
        profile: "YOUR PROFILE DESCRIPTION",
        // ... other fields
    });
});
```

### Styling
- Modify `public/styles.css` to change colors, fonts, and layout
- The main color scheme uses `#007bff` (blue) as the primary color
- Font: Poppins from Google Fonts

### Adding Sections
1. Add HTML structure in `public/index.html`
2. Add CSS styles in `public/styles.css`
3. Add JavaScript functionality in `public/script.js`

## Deployment

### Local Development
```bash
npm run dev
```

### Production Deployment
1. Install dependencies: `npm install`
2. Start server: `npm start`
3. Set environment variable `PORT` if needed

### Deployment Platforms
- **Heroku**: Add `"start": "node server.js"` to package.json
- **Render**: Connect your GitHub repository
- **Vercel**: Deploy as Node.js application
- **Railway**: Connect and deploy directly

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Features

- **Compression**: Response compression for faster loading
- **Security**: Helmet middleware for security headers
- **CORS**: Cross-origin resource sharing enabled
- **Static Files**: Efficient static file serving
- **Error Handling**: Comprehensive error handling

## Contact

For questions or support, contact:
- **Email**: Natiyohannes.2017@gmail.com
- **Phone**: +251940830384
- **Portfolio**: https://portfolio-rxoi.onrender.com

## License

This project is open source and available under the MIT License. 