require('dotenv').config();

const bodyParser = require('body-parser');
const cors = require('cors');

const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

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
  res.json({ message: 'Oops, nothing to see here... Move along.' });
});

app.use('/api/profiles', profilesRoute);

// Handle undefined routes
app.all('*', (req, res) =>
  res.json({
    message: 'This route does not exist.',
  })
);

// Start server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
