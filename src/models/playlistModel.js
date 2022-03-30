import formatText from "../services/tools"

class SongModel {
    constructor(title, duration, releasedDate , genres){
        this.title = formatText(title)
        this.duration = duration
        this.releasedDate = releasedDate
        this.genres = genres
        this.listenerByMe = 0
    }
    setListener(){
        this.listenerByMe++
    }
}

export default SongModel;