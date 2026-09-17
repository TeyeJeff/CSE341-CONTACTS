const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  // #swagger.ignore = true
  res.send('CSE341 Web Services API');
});

// Explicitly route contacts without trailing slash
router.use('/contacts', require('./contacts'));

module.exports = router;