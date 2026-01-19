const express = require('express');
const greetingRoutes = require('./routes/greeting.routes');

const app = express();

// 🔥 REQUIRED to read JSON body
app.use(express.json());

app.use('/api/greetings', greetingRoutes);

module.exports = app;

