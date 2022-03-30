import dotenv from 'dotenv';

dotenv.config();

const KENZIFY_DB = [];

const config = {
    secret: process.env.SECRET_KEY,
    expiresIn: process.env.EXPIRE_TIME,
};

export {KENZIFY_DB, config};