import {Router} from 'express';
import {
    addPlaylist,
    createUser,
    loginUser,
    getUsers,
    deleteUser
} from '../controllers';
import {authenticateUser, validate, verifyUserExistence} from '../middlewares';
import {userShape } from '../shapes';

const router = Router();

router.post('/register', validate(userShape), verifyUserExistence, createUser);

router.post('/login', validate(userShape), loginUser)

router.put('/playlist', authenticateUser, addPlaylist)

router.get('', getUsers)

router.delete('/playlist',authenticateUser, verifyUserExistence, deleteUser)

export default router;