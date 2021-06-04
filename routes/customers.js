const express = require('express');

const customersRouter = express.Router();
const customerController = require('../controllers/customersController')

customersRouter.route('/')
    .get(customerController.customerHome)
    .post((req, res) => {
        res.send(`Request: POST /customers/${req.params['id']}`);
    });

customersRouter.route('/newCustomer')
    .get(customerController.customerNew)

   

customersRouter.route('/:id')
    .get((req, res) => {
        res.send(`Request: GET /customers/${req.params['id']}`);
    })  
    .delete((req, res) => {
        res.send(`Request: DELETE /customers/${req.params['id']}`); 
    }) 
    .put((req, res) => {
        res.send(`Request: PUT /customers/${req.params['id']}`);
    });


module.exports = customersRouter;