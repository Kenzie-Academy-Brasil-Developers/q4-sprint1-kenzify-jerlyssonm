import { Request } from 'express';

import { USERS, userDB } from '../config';
import {musicType} from '../config/interfaces';
import formatText from './tools';

const updateListenedByMeService = (req: Request): musicType | undefined => {
  const { username } = req;
  let {artist, song} = req.query;
  song = song as string
  song = formatText(song)
  
  const user: userDB | undefined = USERS.find((u) => u.username === username)
  if(!user || !artist || !song) {
    return undefined;
  }
  
  artist = artist as string;

  const songUpdate = user.playlist[artist].find((_) => _.title === song )
  if( !songUpdate) {
    return undefined;
  }

  songUpdate.listenedByMe += 1;

  return songUpdate;
};

export default updateListenedByMeService;