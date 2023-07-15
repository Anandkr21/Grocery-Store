const { UserModel } = require('../model/userModel');
const fs = require('fs');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


exports.register = async (req, res) => {
    try {
        const { name, email, password, role } = req.body;
        // checking all credentials are entered or not
        if (!name || !email || !password) {
            return res.status(401).send({ "msg": "Enter all credentials!" })
        }

        // checking user is exist or not
        let user = await UserModel.findOne({ email })
        if (user) {
            return res.status(400).send({ "msg": "User Already Exist! Please Login first." })
        }

        // Check if the password meets the strong password requirements
        const passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[!@#$%^&*]).{8,}$/;
        if (!passwordRegex.test(password)) {
            return res.status(400).json({ error: 'Please enter a strong password.' });
        } else {
            // password bcryption here
            bcrypt.hash(password, 8, async (err, hash) => {

                if (hash) {
                    await UserModel.insertMany([{ name, email, password: hash, role }]);
                    return res.status(201).send({
                        "msg": "Registerd successfully"
                    })
                } else {
                    return res.status(400).send({
                        "msg": " Something error"
                    })
                }
            })
        }
    } catch (error) {
        res.status(400).send({
            "msg": "An error occurred while registering the user.",
            error: error.message
        });
    }
}


// user login
exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await UserModel.findOne({ email });
        if (!user) {
            res.status(401).send({
                msg: "Invalid email address or user not found!"
            });
        }

        bcrypt.compare(password, user.password, (err, result) => {
            if (result) {
                const token = jwt.sign({ userID: user.id }, process.env.Secret_Key, {
                    expiresIn: "1d"
                });
                const refreshToken = jwt.sign({ userID: user.id }, process.env.Refresh_Token, {
                    expiresIn: "7d"
                });
                res.status(200).send({
                    "msg": 'You are logged in!',
                    "Token": token,
                    "RefreshToken": refreshToken,
                    "Data": user
                });
            } else {
                res.status(404).send({
                    status: false,
                    msg: "Wrong Password"
                })
            }
        });
    } catch (error) {
        res.status(500).send({
            status: false,
            error: 'Internal server error.',
            msg: error.message
        });
    }
}


// password resetting
exports.resetPassword = async (req, res) => {
    try {
        const id = req.params.id;
        const { email, password } = req.body;
        const user = await UserModel.findOne({ email });
        if (user) {
            const hashPassword = bcrypt.hashSync(password, 6);
            await UserModel.updateOne({ email: email }, { $set: { password: hashPassword } });
            res.status(200).send({
                status: true,
                msg: 'Password has been updated'
            });

        } else {
            res.status(401).send({
                status: false,
                msg: "User not found!"
            })
        }
    } catch {
        res.status(404).send({
            status: false,
            msg: 'Error while updating the password.'
        })
    }
}

// logout here
exports.logout = (req, res) => {
    // getting token from header 
    const token = req.headers.authorization
    const blacklist_data = JSON.parse(fs.readFileSync('./blacklist.json', 'utf-8'))
    blacklist_data.push(token)
    // pushing token into blacklist file for logout
    fs.writeFileSync('./blacklist.json', JSON.stringify(blacklist_data))
    res.send("Logout Successfull")
}