const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const personnel= require('./personnel');
const app = express();
// Handlebars Middleware

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Homepage Route
var user= personnel[3];
app.get('/', (req, res) =>
  res.render('index', {
    title: 'SCP Foundata',
    user,
    personnel
  })
);
//About
app.get('/about', (req, res) =>
  res.render('misc/about', {
    title: 'SCP Foundata',
  })
);
//Log In
app.get('/auth', (req, res) =>
  res.render('misc/auth', {
    title: 'SCP Foundata-Authenticate',
    personnel,
    user
  })
);
// Set static folder
app.use(express.static(path.join(__dirname, '/views/public')));
//Use test api scripts
app.use('/api/midtest', require('./api/midtest'));
const PORT = process.env.PORT || 6707;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));