import ApiResponseHandler from '../apiResponseHandler';
import { Request, Response, NextFunction } from 'express';
import UserService from '../../../services/userService';
import { SignUpMessage } from '../../../ts/types';


export default async (req: Request<{}, {}, { email: string, username: string, password: string }>, res: Response<SignUpMessage>, next: NextFunction) => {
    try {
        
        const message =  await UserService.createUser(req.body.email, req.body.username, req.body.email);

        await ApiResponseHandler.success(req, res, message);
    } catch (error) {
        await ApiResponseHandler.error(req, res, error);
    }
};