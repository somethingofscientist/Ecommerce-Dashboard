const express = require("express");
const router = express.Router();
const userController = require('../controller/userController');
const createProduct = require("../controller/productController");

router.post("/createUser", userController.createUser);
router.post("/loginUser", userController.loginUser);
router.post("/addProduct", createProduct)

module.exports = router;