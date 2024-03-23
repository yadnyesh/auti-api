const express = require('express');
const routes = require('./routes');
const app = express();
require('dotenv').config();
require('./config/db');

const PORT = process.env.PORT || 8080

app.use('/api/v1', routes);

app.listen(PORT, () => (
    console.log(`Server is up and running on PORT: ${PORT}`)
));

