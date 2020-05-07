const express = require('express');
const router = express.Router();
const { getClient, createClient, updateClient, deleteClient, getClientbyId } = require('../controllers/controller.cliente')

router.route('/')
       .get(getClient)
       .post(createClient)

router.route('/:id')
      .get(getClientbyId)
      .put(updateClient)
      .delete(deleteClient)        

 module.exports = router;     
