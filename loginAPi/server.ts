// server.ts
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// Initialize Express app
const app = express();

// Use middlewares
app.use(cors());
app.use(bodyParser.json());

// API endpoint for user data
app.get('/api/message', (req, res) => {
    res.json({ message: 'Hello from Node.js!' });
  });
  

// Start server
app.listen(3000, () => console.log('Server started on port 3000'));