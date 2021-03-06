import jsonwebtoken from 'jsonwebtoken';
import bcrypt from 'bcrypt';

import { USERS, config, userDB } from '../config';

const loginUserService = async (
    password: string,
    { username }: userDB
  ): Promise<string | undefined> => {
    const user: userDB | undefined = USERS.find((_) => _.username === username);
  
    if (!user) {
      return undefined;
    }
  
    const hasedPassword: boolean = await bcrypt.compare(password, user.password);
  
    if (!hasedPassword) {
      return undefined;
    }
  
    const token = jsonwebtoken.sign({ username }, config.secretKey, {
      expiresIn: config.expiresIn,
    });
  
    return token;
  };

  export default loginUserService;