const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('CSE341 Web Services API');
});

router.use('/contacts', require('./contacts'));

module.exports = router;