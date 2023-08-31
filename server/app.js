const express = require('express');
const { routeLogger } = require('./middleware/loggerMiddleware');
const { userRoute } = require('./route/userRoute');
const { groceryRoute } = require('./route/groceryRoute');
const { cartRoute } = require('./route/cartRoute');
const { orderRoute } = require('./route/orderRoute');

// Create an Express application
const app = express();

// Parse incoming JSON data
app.use(express.json());

// ---------------Google OAuth----------------------------------------------------------

// const passport = require('passport');
// const session = require('express-session');
// require('../server/utils/Oauth');

// function isLoggedIn(req, res, next) {
//     req.user ? next() : res.sendStatus(401)
// }

// app.get('/auth', (req, res) => {
//     res.send('<a href="/auth/google">Authentication with google</a>')
// })
// app.use(session({
//     secret: 'keyboard',
//     resave: false,
//     saveUninitialized: true,
//     cookie: { secure: false }
// }))

// app.use(passport.initialize())
// app.use(passport.session())


// app.get('/auth/google',
//     passport.authenticate('google', { scope: ['email', 'profile'] }))

// app.get('/auth/google/callback',
//     passport.authenticate('google', {
//         successRedirect: '/protected',
//         failureRedirect: '/auth/failure'
//     })
// );

// app.get('/protected', isLoggedIn, (req, res) => {
//     let name = req.user.displayName;
//     res.send(`Hello ${name}`)
// })

// app.get('/auth/failure', (req, res) => {
//     res.send('somethng went wrong.')
// })

// app.use('/logout', (req, res) => {
//     req.session.destroy()
//     res.send('bye')
// })

// ----------------------Google OAuth------------------------------------------------------------


// Route for the root URL
app.get('/', (req, res) => {
    res.status(200).send({
        status: true,
        msg: 'Welcome to Grocery Store !'
    });
});

// Route Logger Middleware
app.use(routeLogger);

// Use the defined routes for different parts of the application
app.use('/user', userRoute); // User-related routes
app.use('/grocery', groceryRoute); // Grocery-related routes
app.use('/cart', cartRoute); // Cart-related routes
app.use('/order', orderRoute); // Order-related routes

module.exports = { app };
