const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Contacts API',
    description: 'Contacts REST API for W02 Project',
  },
  host: 'cse341-contacts-b1gb.onrender.com',
  schemes: ['https', 'http'],
};

const outputFile = './swagger.json';
const routesFiles = ['./routes/index.js'];

swaggerAutogen(outputFile, routesFiles, doc);