const express = require('express');

const routes = express.Router();

const { addUser, viewUser, deleteUser, updateUser } = require('../controller/userController');
const { verifyToken, onlyAdmin } = require('../middleware/Auth');

routes.post('/adduser', addUser);
routes.get('/viewuser',verifyToken,onlyAdmin, viewUser);
routes.delete('/deleteuser', deleteUser);
routes.put('/updateuser', updateUser);

module.exports = routes