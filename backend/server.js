const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

// Routes
app.get('/', (req, res) => {
  res.send('Backend is running.');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
