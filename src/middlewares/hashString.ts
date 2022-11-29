const bcrypt = require('bcryptjs');

export async function hashString (inputString:string):Promise<string>{
    return bcrypt.hash(inputString, 8)
} 