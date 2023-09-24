const userModel = require('../schema/userSchema');

exports.createUser = async (req, res) => {
    try {
        const user = new userModel(req.body);

        if (user.password.length < 6) {
            return res.status(400).json({ error: "Password must be 6 character long" })
        }
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

exports.loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await userModel.findOne({ email });
        if (!user) {
            return res.status(401).json({ error: "Wrong password or email" })
        }
        if (password !== user.password) {
            return res.status(401).json({ error: "Wrong password or email 2" });
        }
        else {
            res.status(200).json({ success: "true", user })
        }
    }
    catch (error) {
        console.log('user not found')
        res.status(400).send({
            error: error.message
        })
    }
}