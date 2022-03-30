import {KENZIFY_DB} from '../../configs';
import SongModel from '../../models/playlistModel';

const addPlaylist = (req, res) => {
    try{
        const { artist, song} = req.query
        const newArtist = Object.keys(req.body)[0]
        const user = KENZIFY_DB.find(current => current.username === req.username)
        
        if(artist && song){
            const songOut = user.getMusic(artist, song)
            return res.json(songOut)
        }else{
            const {title, duration, releasedDate, genres} = req.body[newArtist][0]
            const newSong = new SongModel(title, duration, releasedDate, genres)
            user.setPlaylist(newArtist,newSong)
            return res.json(user) 
        }
    }catch(err){
        return res.status(400).json({error: "No use Conected."})
    }
};

export default addPlaylist;