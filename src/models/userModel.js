import {v4} from 'uuid';
import formatText from '../services/tools';

class UserModel {
    constructor (username, hashPassword) {
        this.id = v4()
        this.username = username
        this.password = hashPassword
        this.playlist = {}
    }

    setPlaylist(artist, songs){
        this.playlist[artist] = [songs]
    }

    getMusic(artist, song){
        const musicList = this.playlist[artist]
        const music = musicList.find(mzk => mzk.title === formatText(song))
        music.setListener()
        return music
    }

    deleteSong(artist, song){
        const musicList = this.playlist[artist]
        if(musicList.length > 1){
            const filteredList = musicList.filter(mzk => mzk.title !== formatText(song))
            this.playlist[artist] = filteredList            
        }else{
            this.playlist = {}
        }
    }
}

export default UserModel