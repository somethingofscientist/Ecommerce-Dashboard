const productModel = require('../schema/productSchema')

const createProduct = (req, res) => {
    // const { name, price, description } = req.body;
    res.status(201).json({
        success: true,
        message: "Product API"
    })
}

module.exports = createProduct;