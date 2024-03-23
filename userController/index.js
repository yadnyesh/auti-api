const res = require("express/lib/response");
const UserModel = require("../models/UserModel");

module.exports = {
    //TODO: validate req.body - Done
    //TODO: create MongoDB UserModel - Done
    //TODO: encrypt password
    //TODO: save data to Mongo
    //TODO: return data to client


    registerUser: async (req, res) => {
        const userModel = new UserModel(req.body);
    },

    loginUser: (req, res) => {
        res.send('Login Success')
    }
}