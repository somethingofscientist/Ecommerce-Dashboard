const userModel = require('../schema/userSchema');

exports.createUser = async (req, res) => {
    // const { username, email, password } = req.body;
    // console.log(req.body);
    try {
        const user = new userModel(req.body);
        console.log(user);
        const result = await user.save();
        res.status(201).send({ result });
        console.log('user created')
    } catch (error) {
        console.log('user not created')
    }
}