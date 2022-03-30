import { KENZIFY_DB } from "../../configs";

const getUsers = (_, res) =>{
    return res.json(KENZIFY_DB)
}

export default getUsers;