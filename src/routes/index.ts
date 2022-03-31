import {Router} from 'express';

import { registerUserController, loginUserController, updatePlaylistController, deleteMusicController, getUsersController } from '../controllers';
import { createUserModel, loginUserModel } from '../models';
import { validateAuth, validateShape } from '../middlewares';

const router = Router();

router.post('/register', validateShape(createUserModel), registerUserController);
router.get('', validateAuth, getUsersController);
router.post('/login', validateShape(loginUserModel), loginUserController);
router.put('/playlist', validateAuth, updatePlaylistController);
router.delete('/playlist', validateAuth, deleteMusicController);

export default router;