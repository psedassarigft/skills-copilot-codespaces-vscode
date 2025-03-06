// Create web server and listen to port 3000
const express = require('express');
const app = express();
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
