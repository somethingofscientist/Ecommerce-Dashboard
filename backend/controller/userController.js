const userModel = require('../schema/userSchema');

exports.createUser = async (req, res) => {
    try {
        const user = new userModel(req.body);
        const result = await user.save();
        res.status(201).json(result);
        console.log('user created', result)
    }
    catch (error) {
        console.log('user not created')
        res.status(400).send({
            error: error.message
        })
    }
}