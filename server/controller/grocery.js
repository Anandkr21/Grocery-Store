const { Grocery } = require("../model/groceryModel")

// GET Route
// Get all grocery from this route
exports.grocery = async (req, res) => {
    try {
        const allgrocery = await Grocery.find();
        res.status(200).send({
            status: true,
            msg: "List of all Grocery are here.",
            data: allgrocery
        });
    } catch (error) {
        res.status(500).send({
            status: true,
            msg: "Internal server error!",
            error: error.message
        });
    }
}

// POST ROute
// add grocery into database
exports.addgrocery = async (req, res) => {
    try {
        const { name, category, price, quantity, description, imageUrl, brand, isAvailable } = req.body;
        const item = await Grocery.insertMany([{ name, category, price, quantity, description, imageUrl, brand, isAvailable }]);
        res.status(200).send({
            status: true,
            msg: "Grocery added successfully!",
            data: item
        });
    } catch (error) {
        res.status(500).send({
            status: false,
            msg: "Internal server error!",
            error: error.message
        });
    }
}

// Update route
exports.updateItem = async (req, res) => {
    try {
        const id = req.params.id;
        const data = req.body;
        const updateItem = await Grocery.findByIdAndUpdate({ _id: id }, data)
        res.status(200).send({
            status: true,
            msg: `Item updated with ID: ${id}`,
            data: updateItem
        });
    } catch (error) {
        res.status(500).send({
            status: false,
            msg: "Internal server error!",
            error: error.message
        });
    }
}

// Delete Route
exports.deleteItem = async (req, res) => {
    try {
        const id = req.params.id;
        await Grocery.findByIdAndDelete({ _id: id });
        res.status(200).send({
            status: true,
            msg: `Item has been deleted with ID: ${id}`
        });
    } catch (error) {
        res.status(500).send({
            status: false,
            msg: ' Internal server error',
            error: error.message
        });
    }
}