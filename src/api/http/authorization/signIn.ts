import ApiResponseHandler from '../apiResponseHandler';
import { Request, Response, NextFunction } from 'express';
import AuthService from '../../../services/authSevice';
import { SignInMessage } from '../../../ts/types';


export default async (req: Request<{}, {}, { email: string, password: string }>, res: Response<SignInMessage>, next: NextFunction) => {
    try {
        
        const message = await AuthService.signIn(req.body.email, req.body.password);
        await ApiResponseHandler.success(req, res, message);
        
    } catch (error) {
        await ApiResponseHandler.error(req, res, error);
    }
};