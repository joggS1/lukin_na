import { Request, Response, NextFunction } from 'express';
import { decodeJWT } from './JWT';
import { HttpError } from '../utils/httpError';
import ApiResponseHandler from '../api/http/apiResponseHandler';

export async function authMiddleWare(req: Request, res: Response, next: NextFunction) {
    try {
       
        if(!req.headers.authorization) {throw new HttpError(401, 'Auth Error')}
        req.params.id = decodeJWT(req.headers.authorization.split(' ')[1])

        return next();
    } catch (error) {
        await ApiResponseHandler.error(req, res, error)
    }
}