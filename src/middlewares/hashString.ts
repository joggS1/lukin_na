const bcrypt = require('bcryptjs');

export async function hashString (inputString:string):Promise<string>{
    return bcrypt.hash(inputString, 8)
} 
export async function isPasswordValid(inputPassword: string, userPassword: string): Promise<boolean>{
    
    return bcrypt.compareSync( inputPassword, userPassword)
}