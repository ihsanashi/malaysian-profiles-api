const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

const v1ProfileRouter = require('./v1/routes/profiles');

app.use('/api/v1/profiles', v1ProfileRouter);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
