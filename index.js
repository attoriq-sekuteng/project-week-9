const express = require('express');
swaggerJsdoc = require('swagger-jsdoc'),
swaggerUi = require('swagger-ui-express');
const bodyParser = require('body-parser');
const { Pool } = require('pg');
const app = express();
const port = 3000;

app.use(bodyParser.json());

// Middleware untuk logging request
// app.use((req, res, next) => {
//   console.log(`Received request: ${req.method} ${req.url}`);
//   next();
// });

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'movies',
    password: 'password',
    port: 5432,
});

const movieRoutes = require('./routes/movie');

app.use('/movies', movieRoutes);
const options = {
    definition:{
        openapi: '3.0.0',
        info:{
            title: 'Users API',
            version: '0.1.0',
            description:
            'API for accessing Users and movie data',
        },
        servers: [
            {
              url: 'http://localhost:3000',
            },
          ],
    },
    apis: ['./routes/*js']
};

const specs = swaggerJsdoc(options);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

app.listen(3000);
