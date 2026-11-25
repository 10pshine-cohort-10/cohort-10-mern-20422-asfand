const express = require('express');
const cors = require('cors');
const config = require('./config');
const healthRoutes = require('./routes/health.routes');

const app = express();

// middleware
app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use('/api', healthRoutes);

// 404 — route not found
app.use((req, res) => {
  res.status(404).json({ message: `Cannot ${req.method} ${req.originalUrl}` });
});

// start server
const PORT = config.port;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} [${config.nodeEnv}]`);
});

module.exports = app;
