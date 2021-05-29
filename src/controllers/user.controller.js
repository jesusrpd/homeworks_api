import jwt from 'jsonwebtoken';
import User from '../models/User';
import config from '../config';

//Create user
export const signup = async (req, res)=>{
    const {username, email, password, check} = req.body;
    const newUser = new User({
        username, email, password
    });
    //Encrypt password
    newUser.password = await newUser.encryptPassword(password);
    await newUser.save();
    //Generated token
    const sesion = check ? null: {expiresIn: 86400};
    const token = jwt.sign({id: newUser._id}, config.SECRET, sesion);

    res.status(200).json({token, auth: true, username: newUser.username});
};

//Login user
export const login = async (req, res)=>{
    const {username, password, check} = req.body;

    const user = await User.findOne({username});
    if(!user) return res.status(404).json({message: 'User not found'});

    const passwordIsValid = await user.matchPassword(password);
    if(!passwordIsValid) return res.status(502).json({message: 'Password is invalid'});
    //Generated token
    const sesion = check ? null: {expiresIn: 86400}
    const token = jwt.sign({id: user._id}, config.SECRET,sesion);
    res.status(200).json({token, auth: true, username: user.username});
};

//Change username
export const usernameChange = async (req, res)=>{
    const {username} = req.body;

    const userNew = await User.findOneAndUpdate(req.id, {username});
    userNew.save();
    res.status(200).json(userNew);
};