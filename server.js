const express = require('express');
const app = express();
const db = require('./db.json'); // Load the db.json file
const port = process.env.PORT || 4000; // Use environment port or 4000 for local

// Middleware to enable CORS (optional, if your frontend is hosted elsewhere)
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// Serve the entire db.json file at the root endpoint
app.get('/', (req, res) => {
  res.json(db);
});

// Optional: Create endpoints for specific categories
app.get('/ac', (req, res) => {
  res.json(db.ac);
});

app.get('/books', (req, res) => {
  res.json(db.books);
});

app.get('/computers', (req, res) => {
  res.json(db.computers);
});

app.get('/fridges', (req, res) => {
  res.json(db.fridges);
});

app.get('/furniture', (req, res) => {
  res.json(db.furniture);
});

app.get('/kitchen', (req, res) => {
  res.json(db.kitchen);
});

app.get('/men', (req, res) => {
  res.json(db.men);
});

app.get('/mobiles', (req, res) => {
  res.json(db.mobiles);
});

app.get('/speakers', (req, res) => {
  res.json(db.speakers);
});

app.get('/tvs', (req, res) => {
  res.json(db.tvs);
});

app.get('/watches', (req, res) => {
  res.json(db.watches);
});

app.get('/women', (req, res) => {
  res.json(db.women);
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});