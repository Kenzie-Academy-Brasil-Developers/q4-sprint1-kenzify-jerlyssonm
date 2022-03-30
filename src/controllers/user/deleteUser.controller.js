import {KENZIFY_DB} from '../../configs'

const deleteUser = (req, res) => {
    const { artist, song} = req.query
    const user =  KENZIFY_DB.find(current => current.username === req.username)
    user.deleteSong(artist, song)
    return res.status(204).json('')
}

export default deleteUser;