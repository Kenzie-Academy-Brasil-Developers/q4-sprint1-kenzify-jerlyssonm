import { Request, Response } from "express";

import {USERS} from '../config';

const registerUserController = (req:Request, res:Response): Response => {
    const user = { ...req.validated, playlist: {} };
    if (USERS.find((u) => u.username === user.username)) {
      return res.status(422).json({ error: 'username already exists' });
    }
  
    USERS.push(user);

    return res.status(201).json({id:user.id, username: user.username, playlist: user.playlist});

}

export default registerUserController;