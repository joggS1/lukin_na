const jwt = require('jsonwebtoken');
require('dotenv').config()
import { HttpError } from "../utils/httpError";

export function generateJWT(_id:string, _username:string, _email:string):string{
    return jwt.sign({id: _id, username: _username, email: _email}, process.env.AUTH_JWT_SECRET, {expiresIn: process.env.AUTH_JWT_EXPIRES_IN})
}
export function decodeJWT(token: string):object{

    try {
        return jwt.verify(token, process.env.AUTH_JWT_SECRET)
    } catch (error) {
        throw new HttpError(401, 'Auth error')
    }
    
}