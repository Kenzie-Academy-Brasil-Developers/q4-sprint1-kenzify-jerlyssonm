import dotenv from 'dotenv';
import {userDB, JWTConfig} from './interfaces';

dotenv.config();

const USERS : Array<userDB> = [];

const config: JWTConfig = {
    secretKey: process.env.SECRET_KEY ?? 'S3cr3t', 
    expiresIn: process.env.EXPIRES_IN ?? '1h'
  };

export {USERS, config, userDB}