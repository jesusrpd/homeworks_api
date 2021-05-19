import jwt from 'jsonwebtoken';
import User from '../models/User';
import config from '../config';

//Create user
export const signup = async (req, res)=>{
    const {username, email, password} = req.body;
    const newUser = new User({
        username, email, password
    });
    //Encrypt password
    newUser.password = await newUser.encryptPassword(password);
    await newUser.save();
    //Generated token
    const token = jwt.sign({id: newUser._id}, config.SECRET, {
        expiresIn: 86400
    });

    res.json({token, auth: true});
};