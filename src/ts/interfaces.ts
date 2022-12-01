import {Types} from 'mongoose'

//------------------------------------------------------------|
//                     Some Interfaces                        |
//------------------------------------------------------------/

export interface IUser{
   
        email: string,
        username: string,
        password: string,
        diskSpace: number,
        usedSpace: number,
        files: Types.ObjectId 
    
}

export interface IJWTData{
        
}