import ApiResponseHandler from '../apiResponseHandler';
import { Request, Response, NextFunction } from 'express';
import { AuthMeMessage } from '../../../ts/types';


export default async (req: Request, res: Response<AuthMeMessage>, next: NextFunction) => {
    try {
        
        
        const message = {
            id: req.params.id,
            date: new Date().toISOString()
        }
        await ApiResponseHandler.success(req, res, message);
        
    } catch (error) {
        await ApiResponseHandler.error(req, res, error);
    }
};