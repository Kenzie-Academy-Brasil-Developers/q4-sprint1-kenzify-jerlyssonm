import { KENZIFY_DB} from '../../configs';
import UserModel from '../../models/userModel';
import bcrypt from 'bcryptjs'

const createUser = async (req, res) => {
    const {username, password} = req.body;
    
    const hashPassword = await bcrypt.hash(password, 10);
    const user = new UserModel(username, hashPassword)
    KENZIFY_DB.push(user)
    return res.status(201).json(user) 

};

export default createUser;