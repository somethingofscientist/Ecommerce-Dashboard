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
                message: "No product Found"
            })
        }
    } catch (error) {
        res.status(400).json({
            message: "Error in fetching products",
            error: error.message
        })
    }
}

exports.singleProduct = async (req, res) => {
    try {
        const productId = req.params.id;
        const result = await productModel.findById(productId);
        if (!result) {
            res.status(200).json({
                success: true,
                message: "No Product Found With This Id and Name"
            })
        }
        else {
            res.status(200).json({
                success: true,
                message: "Product Found With This Id and Name",
                result,
            })
        }
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}


/**
 * ! Endpoint to up
 * @param {*} req 
 * @param {*} res 
 */

exports.updateProduct = async (req, res) => {
    try {
        const updated = await productModel.findByIdAndUpdate(
            { _id: req.params.id },
            { $set: req.body },
            { new: true },
        )
        if (!updated) {
            res.status(400).json({
                sucess: false,
                message: "Product not found"
            })
        }
        res.send(updated);
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        })
    }
}

exports.deleteProduct = async (req, res) => {
    try {
        const productId = req.params.id;
        const deleteItem = await productModel.findByIdAndDelete(productId);
        if (!deleteItem) {
            return res.status(404).json({
                message: "Product not found",
            });
        }
        res.status(200).json({
            message: "Delete Product",
            deleteItem
        })
    } catch (error) {
        res.status(400).json({
            message: "Error in delete product",
            error: error.message
        })
    }
}