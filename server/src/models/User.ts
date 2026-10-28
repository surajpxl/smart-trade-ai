import mongoose, { Document, Schema } from "mongoose";

export interface IUser extends Document {
    name:string;
    email:string;
    password:string;
    role:"supplier" | "retailer" | "admin";
    createdAt: Date;
    updatedAt:Date;
}

const userSchema = new Schema<IUser>(
    {
        name:{
            type:String,
            required:[true, "Name is required"],
            trim: true,
        },
        email:{
            type:String,
            required:[true, "Email is required"],
            unique:true,
            lowercase:true,
            trim:true,
        },

        password:{
            type:String,
            required:[true, "Password is required"],

        },

        role: {
            type: String,
            enum:["supplier", "retailer", "admin"],
            default: "retailer",
        },

    },
    {timestamps:true},
)

const User = mongoose.model<IUser>("User", userSchema)

export default User;