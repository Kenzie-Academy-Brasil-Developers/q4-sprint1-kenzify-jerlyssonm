import {userDB, USERS } from '../config';
import { musicType } from '../config/interfaces'; 
import formatText from './tools';

const updatePlaylistService = (username : string, addPlaylist: any ): undefined | userDB => {
  const user: userDB | undefined = USERS.find((u) => u.username === username)
  const addPlaylistKeys: Array<string> = Object.keys(addPlaylist)
  addPlaylist[addPlaylistKeys[0]].map((item:any) => item['title'] = formatText(item.title))
  
  if(!user) {
    return undefined;
  }

  for(let index = 0; index < addPlaylistKeys.length; index++ ){
    addPlaylist[addPlaylistKeys[index]].forEach((element : musicType)=> {
      element.listenedByMe = 0
    });
    if (!user.playlist[addPlaylistKeys[index]]) { 
      user.playlist[addPlaylistKeys[index]] = [ ...addPlaylist[addPlaylistKeys[index]]]
    } else {
      user.playlist[addPlaylistKeys[index]] = [ ...user.playlist[addPlaylistKeys[index]], ...addPlaylist[addPlaylistKeys[index]]]
    }
  }
    return user;
}

export default updatePlaylistService;