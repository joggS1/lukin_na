const jwt = require('jsonwebtoken');
require('dotenv').config()
import { HttpError } from "../utils/httpError";

export function generateJWT(_id:string):string{
    return jwt.sign({id: _id}, process.env.AUTH_JWT_SECRET, {expiresIn: process.env.AUTH_JWT_EXPIRES_IN})
}
export function decodeJWT(token: string):string{

    try {
        const id = jwt.verify(token, process.env.AUTH_JWT_SECRET).id
        return id
    } catch (error) {
        throw new HttpError(401, 'Auth error')
    }
    
}