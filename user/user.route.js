
const express = require('express');
const router = express.Router();
const Usercontroler = require('./user.controller');

router.post('/createUser', Usercontroler.ceateUser);
router.get('/allUsers', Usercontroler.getUser);
router.patch('/editUser/:id', Usercontroler.updateUser);
router.delete('/removeUser', Usercontroler.deleteUser);


module.exports = router;