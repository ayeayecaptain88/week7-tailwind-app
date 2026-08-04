const express = require('express');
const app = express();
const PORT = 3000;

function logger(req, res, next) {
  console.log(`${req.method} ${req.url} — ${new Date().toLocaleTimeString()}`);
  next();
}

app.use(logger);

app.get('/', (req, res) => {
  res.send('Hello from Express!');
});

app.get('/about', (req, res) => {
  res.send('About this server');
});

app.get('/users/:id', (req, res) => {
  res.send(`User ID: ${req.params.id}`);
});

app.get('/contact', (req, res) => {
  res.send('Contact us at support@example.com');
});

app.post('/api/users', (req, res) => {
  res.status(201).json({
    message: 'User created'
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});