import { SignUpMessage} from "../ts/types";
import { userModel } from "../models/userModel";
import { hashString } from "../middlewares/hashString";
import { HttpError } from "../utils/httpError";
import ApiResponseHandler from "../api/http/apiResponseHandler";
import { convertToObject } from "typescript";

export default class UserService {

     static async createUser(_email:string, _username: string, _password: string) {
        try {
           
            const hashPassword = await hashString(_password)
            const user = new userModel({email: _email, username: _username, password: hashPassword})
            await user.save()
        } catch (error) {
             console.error(error)
             throw error
        }
        

    }
    static async findUserByEmail(email: string) { 
       try { 
        const user = await userModel.findOne({email})
        if(user) { return user }
        return false
       } catch (error) {
            console.error(error);
            throw error
       }
    }
}   