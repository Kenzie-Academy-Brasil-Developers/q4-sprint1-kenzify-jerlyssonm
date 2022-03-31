interface musicType {
    title: string,
    "duration": string,
    "releasedDate": string,
    "listenedByMe": number,
    "genres": Array<string>
};

interface playlistType {
    [key: string]: Array<musicType>
};

interface userDB {
    id: string,
    username: string,
    password: string,
    playlist: playlistType
};

type ExpireInType = number | string;

interface JWTConfig {
    secretKey: string,
    expiresIn: ExpireInType
}

export {userDB, JWTConfig, musicType};