import ApiResponseHandler from '../apiResponseHandler';
import { Request, Response, NextFunction } from 'express';
import AuthService from '../../../services/authSevice';
import { AuthMeMessage } from '../../../ts/types';


export default async (req: Request, res: Response<AuthMeMessage>, next: NextFunction) => {
    try {
        

        const message = await AuthService.AuthMe(req.headers.authorization);
         await ApiResponseHandler.success(req, res, message);
        
    } catch (error) {
        await ApiResponseHandler.error(req, res, error);
    }
};