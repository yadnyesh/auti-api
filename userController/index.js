const res = require("express/lib/response");
const UserModel = require("../models/UserModel");
const bcrypt = require('bcrypt');

module.exports = {
    //TODO: validate req.body - Done
    //TODO: create MongoDB UserModel - Done
    //TODO: encrypt password - Done
    //TODO: save data to Mongo - Done
    //TODO: return data to client - Done


    registerUser: async (req, res) => {
        const userModel = new UserModel(req.body);
        userModel.password = await bcrypt.hash(req.body.password, 10);
        try {
            const response = await userModel.save();
            response.password = undefined;
            return res.status(201).json({message:'success', data: response});
        } catch(err) {
            return res.status(500).json({message:'error', err});
        }
    },

    loginUser: (req, res) => {
        res.send('Login Success')
    }
}