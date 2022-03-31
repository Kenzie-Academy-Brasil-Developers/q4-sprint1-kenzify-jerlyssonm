import { Request, Response } from 'express';

import { updateListenedByMeService, updatePlaylistService } from '../services';

const updatePlaylistController = (req: Request, res: Response): Response => {
  const { username } = req;
  const addPlaylist = req.body;
  const {artist, song} = req.query;
  
  if (artist && song) {
    const songUpdated = updateListenedByMeService(req);
    if (!songUpdated){
      return res.status(404).json({message: "user or song not found"});
    }
    return res.status(200).json(songUpdated);

  }
  
  const user = updatePlaylistService(username, addPlaylist);

  if (!user){
    return res.status(404).json({message: "user not found"});
  }
  
  return res.status(200).json({id: user.id, username: user.username, playlist: user.playlist });
};

export default updatePlaylistController;