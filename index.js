const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
require('dotenv').config();

// console.log(process.env)
app.listen(port, () => {
  console.log(`Starting server at ${port}`);
});
app.use(express.static('public'));
app.use(express.json({ limit: '1mb' }));
