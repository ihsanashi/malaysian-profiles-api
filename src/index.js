const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const PORT = process.env.PORT || 3000;

const v1ProfileRouter = require('./v1/routes/profiles');
const v1UserRouter = require('./v1/routes/users');

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get('/', (req, res) => {
  res.json({ info: 'Node.js, Express and Postgres API' });
});

app.use('/api/v1/profiles', v1ProfileRouter);
app.use('/api/v1/users', v1UserRouter);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
