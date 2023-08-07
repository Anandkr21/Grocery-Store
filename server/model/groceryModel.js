const mongoose = require('mongoose');

const grocerySchema = mongoose.Schema({
  name: {
    type: String,
  },
  brand: {
    type: String,
  },
  category: {
    type: String,
  },
  price: {
    type: Number,
  },
  quantity: {
    type: Number,
  },
  description: {
    type: String,
  },
  imageUrl: {
    type: String,
  },
  rating: {
    type: Number
  },
  isAvailable: {
    type: Boolean,
    default: true
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users'
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
}, {
  versionKey: false
});

const Grocery = new mongoose.model('grocery', grocerySchema);

module.exports = { Grocery };

// {
//   "name":"Colgate",
//   "category": "toothpaste",
//   "price": 99,
//   "quantity": 10,
//   "description": "Toothpaste for regular use",
//   "imageUrl" : "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.jiomart.com%2Fimages%2Fproduct%2Foriginal%2F491180345%2Fcolgate-max-fresh-spicy-fresh-red-gel-toothpaste-44-g-product-images-o491180345-p590119941-0-202203170556.jpg%3Fim%3DResize%3D(420%2C420)&tbnid=zY2hqjeiuu_gaM&vet=12ahUKEwj5ubjy-ZCAAxX4u2MGHXgXAC8QMygAegUIARDvAQ..i&imgrefurl=https%3A%2F%2Fwww.jiomart.com%2Fp%2Fgroceries%2Fcolgate-max-fresh-spicy-fresh-red-gel-toothpaste-48-g%2F590119941&docid=N2YTlI6NJOmPlM&w=420&h=420&q=colgate&ved=2ahUKEwj5ubjy-ZCAAxX4u2MGHXgXAC8QMygAegUIARDvAQ",
//   "brand": "palmolive",
//   "isAvailable": "true"
// }