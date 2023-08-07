exports.authorise = (permitedRoles) => {
    return (req, res, next) => {
        const user_role = req.user.role;
        if (permitedRoles.includes(user_role)) {
            next()
        } else {
            res.status(401).send({
                status: false,
                msg: 'You are not a authorized person.'
            })
        }
    }
}