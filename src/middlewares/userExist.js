import User from '../models/User';

const userExist = async(req, res, next)=>{
    const {username} = req.body;

    const exist = await User.findOne({username});
    if(exist) return res.status(500).json({message: 'User exist'});

    next();
};

export default userExist;