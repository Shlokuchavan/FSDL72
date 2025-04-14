const express = require('express');
const app = express();

// Middleware to log requests
app.use((req, res, next) => {
  console.log(`📥 Received request: ${req.method} ${req.url}`);
  next();
});

// Homepage
app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Welcome Page</title>
        <style>
          body { font-family: Arial, sans-serif; text-align: center; padding: 50px; background: #f0f8ff; }
          h1 { color: #333; }
          a { display: inline-block; margin: 10px; color: #007acc; text-decoration: none; }
        </style>
      </head>
      <body>
        <h1>👋 Hello from Express, friend!</h1>
        <p>Welcome to our mini web server built with Node.js + Express.</p>
        <a href="/about">About</a>
        <a href="/greet/Shlok">Greet Me</a>
      </body>
    </html>
  `);
});

// About Page
app.get('/about', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>About</title>
      </head>
      <body style="font-family: sans-serif; text-align: center; padding: 50px;">
        <h2> About This App</h2>
        <p>This is a simple Node.js Express server made for learning and fun!</p>
        <a href="/">Go Back Home</a>
      </body>
    </html>
  `);
});

// Dynamic Greeting Page
app.get('/greet/:name', (req, res) => {
  const { name } = req.params;
  res.send(`
    <html>
      <head><title>Greeting</title></head>
      <body style="text-align: center; padding: 50px; font-family: sans-serif;">
        <h2> Hey ${name}!</h2>
        <p>We're happy you're here. This is your custom greeting page.</p>
        <a href="/">Back to Home</a>
      </body>
    </html>
  `);
});

// Server listen
const PORT = 3000;
app.listen(PORT, () => {
  console.log(` Server running at http://localhost:${PORT}`);
});
