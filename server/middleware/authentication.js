const jwt = require('jsonwebtoken');
const { UserModel } = require('../model/userModel');
require('dotenv').config();

exports.authentication = async (req, res, next) => {
    try {
        const token = req.headers.authorization;
        if (token) {
            jwt.verify(token, process.env.Secret_Key, async (err, decode) => {
                if (decode) {
                    user = decode.userID
                    const userDetails = await UserModel.find({ _id: user });
                    role = userDetails[0].role;
                    next()
                } else {
                    res.status(401).send({
                        status: false,
                        msg: "Error in the token."
                    })
                }
            })
        } else {
            res.status(401).send({
                status: false,
                msg: "Token not found."
            })
        }
    } catch (error) {
        res.status(500).send({
            status: false,
            msg: "Internal server error",
            error: error.message
        })
    }
}