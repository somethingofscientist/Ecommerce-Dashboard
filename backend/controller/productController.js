const productModel = require('../schema/productSchema')

const createProduct = async (req, res) => {
    try {
        let product = new productModel(req.body);
        let result = await product.save();

        res.status(201).json({
            success: true,
            message: "Product API",
            result
        })
    } catch (error) {
        console.log(error.message)
        res.status(400).json({
            success: false,
            message: "No able to add product",
            error: error.message
        })
    }
}

module.exports = createProduct;