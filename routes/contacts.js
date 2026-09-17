const express = require('express');
const router = express.Router();
const contactsController = require('../controllers/contacts');

// #swagger.path = '/contacts'
router.get('/', contactsController.getAll);

// #swagger.path = '/contacts/{id}'
router.get('/:id', contactsController.getSingle);

// #swagger.path = '/contacts'
router.post('/', contactsController.createContact);

// #swagger.path = '/contacts/{id}'
router.put('/:id', contactsController.updateContact);

// #swagger.path = '/contacts/{id}'
router.delete('/:id', contactsController.deleteContact);

module.exports = router;