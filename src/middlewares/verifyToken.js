import jwt from 'jsonwebtoken';
import config from '../config';

const verifyToken = (req, res, next)=>{
    const bearerHeader = req.headers.authorization;

    if (typeof bearerHeader !== 'undefined') {
        const bearerToken = bearerHeader.split(' ')[1];
        const decoded = jwt.verify(bearerToken, config.SECRET);
        req.id = decoded.id;
        next();
    }else{
        res.status(403).json({error: 'Token invalido'});
    }
};

export default verifyToken;