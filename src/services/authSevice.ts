import { SignInMessage, SignUpMessage} from "../ts/types";
import { Request, Response , NextFunction} from 'express';
import { userModel } from "../models/userModel";
import { isPasswordValid } from "../middlewares/hashString";
import { HttpError } from "../utils/httpError";
import { generateJWT } from "../middlewares/JWT";
import UserService from "./userService";
import ApiResponseHandler from "../api/http/apiResponseHandler";

export default class AuthService {

     static async signUp(_email:string, _username: string, _password: string) : Promise<SignUpMessage> {
        try {
            
            if( await userModel.findOne({email: _email})){
                throw new HttpError(
                    400, 'User with this email already exists'
                   );
            } else if(await userModel.findOne({username: _username})){
                throw new HttpError(
                    400, 'User with this email already exists'
                   );
            }
            UserService.createUser(_email, _username, _password)
            
            return {
                isSignUp: true,
                message: 'Registration complete!',
                date: new Date().toISOString()
            };

        } catch (e) {
             throw e
        }
    }
    static async signIn(email:string, password: string) : Promise<SignInMessage> {
        
        try {
            const User = await UserService.findUserByEmail(email)
            if(!User){
                throw new HttpError(400, 'User with this email not found')
            }
            if(!await isPasswordValid(password, User.password)){
                throw new HttpError(400, 'Incorrect password')
            }
            return {
                isSignIn: true,
                message: 'Authorization complete!',
                JWT: generateJWT(User.id),
                date: new Date().toISOString()
            }
            
        } catch (error) {
            throw error
        }
    }
    // static async AuthMe(req: Request, res: Response, next: NextFunction){
    //     try {
            
    //          return res.status(200).send({
    //             id: req.params.id,
    //             date: new Date().toISOString()
    //         })
    //     } catch (error) {
            
    //        next(error)
    //     }
    // }
    
}   