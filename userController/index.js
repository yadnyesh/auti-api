const res = require("express/lib/response");
const UserModel = require("../models/UserModel");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

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

    loginUser: async (req, res) => {
        //TODO: Validate user email
        //TODO: compare password
        //TODO: create jwt
        //TODO: send response to client
        
        try {
            const user = await UserModel.findOne({email: req.body.email});
            if(!user) {
                return res.status(401).json({ message:'Authentical Failed', err});
            }

            const isPasswordEqual = await bcrypt.compare(req.body.password, user.password);

            if(!isPasswordEqual){
                return res.status(401).json({ message:'Authentical Failed', err});
            }

            const tokenObject = {
                _id: user._id,
                fullName: user.fullName,
                email: user.email
            }

            const jwtToken = jwt.sign(tokenObject, process.env.SECRET, {expiresIn: '4h'});

            return res.status(200)
                    .json({jwtToken, tokenObject});

        } catch(err) {
            return res.status(500).json({message:'error', err});
        }
        
        res.send('Login Success')
    },

    getUsers : async(req, res) => {
        try {
            const users = await UserModel.find();
            return res.status(400)
            .json({data: users});
        }catch(err) {
            return res.status(500).json({message:'error', err});
        }
    }
}