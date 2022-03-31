import { Response, Request } from "express"

import { userDB, USERS } from "../config";
import { formatText } from "../services";

const deleteMusicController = (req:Request, res: Response): Response => {
    try {
        
        const { username } = req;
        let {artist, song} = req.query;
    song = song as string
    song = formatText(song)
    
    const user: userDB | undefined = USERS.find((u) => u.username === username)
    if(!user || !artist || !song) {
        return res.status(404).json({message: "user or song not found"});
    }
    
    artist = artist as string;
    
    const songDeleteIndex: number = user.playlist[artist].findIndex((_) => _.title === song )
    if(songDeleteIndex === -1) {
        return res.status(404).json({message: "user or song not found"});
    }
    
    user.playlist[artist].splice(songDeleteIndex, 1);
    if (user.playlist[artist].length === 0 ){
        delete user.playlist[artist];
    }
    return res.status(204).json();
} catch (error) {
    return res.status(400).json({error: 'Music not found.'})
}
}

export default deleteMusicController;