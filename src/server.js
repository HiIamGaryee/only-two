const express = require('express');
const cors = require('cors');
const app = express();

const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true, // considering you're sending credentials
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions)); // Apply CORS to all responses

// Define real routes
app.get('/login', (req, res) => {
  res.json({ message: "Login endpoint hit" });
});

// Catch non-existing routes and apply a 404 status
app.use((req, res) => {
  res.status(404).send({ error: "Not found" });
});

app.listen(8000, () => {
  console.log('Server running on http://localhost:8000');
});
