const express = require('express');

// api
const API = require('./api');

// controllers
const indexCtrl   =  require('../controller/index');
const userCtrl    =  require('../controller/user/user');


// module
const router = express.Router();


// routers

// empty
router.get(API.index, indexCtrl.index);

// user
router.get(API.login, userCtrl.login);


module.exports = router;