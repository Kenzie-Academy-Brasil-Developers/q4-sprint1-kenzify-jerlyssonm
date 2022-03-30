import jwt from 'jsonwebtoken';
import { config } from '../../configs';

const authenticateUser = (req, res, next) => {
    if(!req.headers.authorization) {
        return res.status(400).json({message: 'Missing header authorization'});
    }

    const token = req.headers.authorization.split(' ')[1];

    jwt.verify(token, config.secret, (error, decoded) => {
        if (error) {
            return res.status(401).json({message: 'Invalid token'});
        }
        req.username = decoded.username
        return next();
    })
}

export default authenticateUser;