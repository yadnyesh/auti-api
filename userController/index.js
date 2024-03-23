const res = require("express/lib/response");

module.exports = {
    registerUser: (req, res) => {
        res.send('User Registered Successully')
    },

    loginUser: (req, res) => {
        res.send('Login Success')
    }
}