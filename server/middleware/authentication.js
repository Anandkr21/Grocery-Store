const jwt = require('jsonwebtoken');
const {UserModel} = require('../model/userModel');
require('dotenv').config()

exports.authentication = async (req, res, next) => {
    try {
        const token = req.headers.authorization;
        if (!token) {
            return res.status(401).json({
                Message: "Please login first."
            });
        }

        // Verify the JWT token using the Secret_Key from the environment variables.
        jwt.verify(token, process.env.Secret_Key, async (err, decoded) => {
            if (err) {
                return res.json({
                    Message: err.message,
                    status: "error"
                });
            }

            // Extract the user ID from the decoded token.
            userId = decoded.userID;

            // Fetch user details from the database using the user ID.
            const userDetail = await UserModel.findById(userId);
            if (!userDetail) {
                return res.status(401).json({
                    Message: "User not found."
                });
            }

            // Attach the user's role to the request object for further processing in the route handlers.
            req.user = userDetail;

            // Proceed to the next middleware or route handler.
            next();
        });
    } catch (error) {
        // If an error occurs during the authentication process, send a 500 status with an error message.
        res.status(500).json({
            Message: "Internal server error..",
            error: error.message
        });
    }
};
