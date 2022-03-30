import {KENZIFY_DB} from '../../configs';

const verifyUserExistence = (req, res, next) => {
    const {username} = req.body
    const user = KENZIFY_DB.find(use => use.username === username)

    if(user){
        return res.status(422).json({message: "You can not use this username."})
    }else{
        return next()
    }
}

export default verifyUserExistence;