exports.authorise = (permittedRole) => {
    try {
        return (req, res, next) => {
            if (permittedRole.includes(role)) {
                next();
            } else {
                res.status(404).send({
                    status: true,
                    msg: 'You are not Authorized person!'
                })
            }
        }
    } catch (error) {
        res.status(500).send({
            status: false,
            msg: "Internal server error.",
            error: error.message
        })
    }
}