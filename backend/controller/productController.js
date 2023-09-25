const productModel = require('../schema/productSchema')

exports.createProduct = async (req, res) => {
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

exports.allProducts = async (req, res) => {
    try {
        const products = await productModel.find();
        if (products.length > 0) {
            res.status(200).json({
                success: true,
                count: products.length,
                products
            })
        }
        else {
            res.status(200).json({
                message: "No prdoduct Found"
            })
        }
    } catch (error) {
        res.status(400).json({
            message: "Error in fetching products",
            error: error.message
        })
    }
}

// module.exports = createProduct;