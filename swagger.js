const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Contacts API',
    description: 'Contacts REST API Documentation'
  },
  host: process.env.HOST || 'localhost:8080',
  schemes: ['http', 'https']
};

const outputFile = './swagger.json';
const routesFiles = ['./routes/index.js']; // Point this to your main router file (e.g., ./routes/index.js or ./routes/contacts.js)

swaggerAutogen(outputFile, routesFiles, doc).then(() => {
  require('./server.js'); // Automatically launches server after generation completes
});
