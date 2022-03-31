import { Request, Response } from "express";
import { USERS } from "../config";

const getUsersController =  (
    req: Request,
    res: Response
  ): Response => {

    const result = USERS.map((user) =>  {return {id: user.id, username: user.username, playlist: user.playlist}})

     return res.status(200).json(result);

    };
  
  export default getUsersController;