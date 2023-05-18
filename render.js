const express = require('express');
const exphbs = require('express-handlebars');

const app = express();

// Set up the Handlebars engine
app.engine('handlebars', exphbs({
  defaultLayout: 'main',
  layoutsDir: __dirname + '/views/layouts'
}));
app.set('view engine', 'handlebars');

// Define routes and render templates

//MAIN.HANDLEBARS
app.get('/', (req, res) => {
  const data = {
    name: 'John Doe',
    age: 30,
    // Add more data properties as needed
  };

  res.render('main', data);
});

//LOGIN.HANDLEBARS
app.get('/login', (req, res) => {
  // No specific data needed for login template
  res.render('login');
});

//PROFILE.HANDLEBARS
app.get('/profile', (req, res) => {
  const data = {
    name: 'John Doe',
    occupation: 'Developer',
    // Add more data properties as needed
  };

  res.render('profile', data);
});

// Start the server
app.listen(3000, () => {
  console.log('Server started on http://localhost:3000');
});
