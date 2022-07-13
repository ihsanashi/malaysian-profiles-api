require('dotenv').config();

const bodyParser = require('body-parser');
const cors = require('cors');

const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

const usersRoute = require('./src/routes/users');
const profilesRoute = require('./src/routes/profiles');

// Middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

// Routes
app.get('/', (req, res) => {
  res.json({ msg: 'Oops, nothing to see here... Move along.' });
});

app.use('/api/users', usersRoute);
app.use('/api/profiles', profilesRoute);

// Handle undefined routes
app.all('*', (req, res) =>
  res.json({
    msg: 'This route does not exist.',
  })
);

// Start server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
