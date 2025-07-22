const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', authRoutes);

console.log('[APP] Middleware setup done ✅');

module.exports = app;
