const express = require('express');
const app = express();
app.use(express.json());
app.set("PORT", 7777);

module.exports = app;