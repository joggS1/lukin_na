import { SignUpMessage} from "../ts/types";
import { userModel } from "../models/userModel";
import { hashString } from "../middlewares/hashString";

export default class UserService {

     static async createUser(_email:string, _username: string, _password: string): Promise<SignUpMessage> {
        try {
            
            if( await userModel.findOne({email: _email})){
                return {
                    isSignUp: true,
                    message: 'User with this email already exists',
                    date: new Date().toISOString()
                };
            } else if(await userModel.findOne({username: _username})){
                return {
                    isSignUp: true,
                    message: 'User with this username already exists',
                    date: new Date().toISOString()
                };
            }
            
            const hashPassword = await hashString(_password)
            console.log(hashPassword)
            console.log(_email)     
            console.log(_username)     

            const user = new userModel({email: _email, username: _username, password: hashPassword})
            await user.save()
            return {
                isSignUp: true,
                message: 'Registration complete!',
                date: new Date().toISOString()
            };
        } catch (e) {
            console.log(e);
            return{
                isSignUp: true,
                message: "Something went wrong on the server",
                date: new Date().toISOString()
            }
        }
        

    }

    // static echo(message: string): EchoMessage {
    //     return {
    //         message,
    //         date: new Date().toISOString(),
    //         isEcho: true
    //     };
    // }
    
}   