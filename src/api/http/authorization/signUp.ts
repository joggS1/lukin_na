import ApiResponseHandler from '../apiResponseHandler';
import { Request, Response, NextFunction } from 'express';
import AuthService from '../../../services/authSevice';
import { SignUpMessage } from '../../../ts/types';


export default async (req: Request<{}, {}, { email: string, username: string, password: string }>, res: Response<SignUpMessage>, next: NextFunction) => {
    try {
        
        const message = await AuthService.signUp(req.body.email, req.body.username, req.body.password);  
        await ApiResponseHandler.success(req, res, message);
        
    } catch (error) {
        await ApiResponseHandler.error(req, res, error);
    }
};