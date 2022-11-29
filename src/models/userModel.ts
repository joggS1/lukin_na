import { Types, model, Schema } from "mongoose"
import { IUser } from "../ts/interfaces"


const UserSchema = new Schema({
    email: {type: String, required: true, unique: true },
    username: {type: String, required: true, unique: true },
    password: { type: String, required: true},
    diskSpace: {type: Number, default: 1024**3}, 
    usedSpace: {type: Number, default: 0}, 
    files: [{ type: Types.ObjectId, ref: 'File'}]
})
export const userModel = model<IUser>('User', UserSchema)
