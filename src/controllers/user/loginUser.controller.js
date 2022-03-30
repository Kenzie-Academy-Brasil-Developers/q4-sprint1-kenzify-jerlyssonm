import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import{KENZIFY_DB, config} from '../../configs';

const loginUser = async (req, res) => {
    const {username, password} = req.body;

    const user = KENZIFY_DB.find(current => current.username === username);
    if(!user) {
        return res.status(401).json({message: 'Username not found'})
    };
    const match = await bcrypt.compare(password, user.password );
    if(!match) {
        return res.status(401).json({message: 'Username and password missmatch'})
    };

    const token = jwt.sign({username}, config.secret,{
        expiresIn: config.expiresIn,
    });

    res.status(200).json({AccessToken: token});
};

export default loginUser;