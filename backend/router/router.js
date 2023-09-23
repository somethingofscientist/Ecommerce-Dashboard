const express = require("express");
const router = express.Router();
const userController = require('../controller/userController');

router.post("/createUser", userController.createUser);
// router.post('/createProduct', productController);

module.exports = router;