const jwt = require('jsonwebtoken');
const { UserModel } = require('../model/userModel');
require('dotenv').config();

exports.authentication = async (req, res, next) => {
    try {
        const token = req.headers.authorization;
        if (!token) {
            return res.status(401).json({
                Message: "Please login first."
            });
        }

        jwt.verify(token, process.env.Secret_Key, async (err, decoded) => {
            if (err) {
                return res.json({
                    Message: err.message,
                    status: "error"
                });
            }

            userId = decoded.userID;
            console.log(userId);
            const userDetail = await UserModel.findById(userId);
            if (!userDetail) {
                return res.status(401).json({
                    Message: "User not found."
                });
            }

            role = userDetail.role;
            console.log(role);
            next();
        });
    } catch (error) {
        res.status(500).json({
            Message: "Internal server error.",
            error: error.message
        });
    }
};
