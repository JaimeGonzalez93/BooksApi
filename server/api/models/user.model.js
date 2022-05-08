import mongoose from "mongoose";
import bcrypt from "bcrypt";

const saltRounds = 10;

const Schema = mongoose.Schema;

const userSchema = new Schema ({
    name: {type:String, trim: true, required:true},
    email: {type:String, trim: true, required:true},
    password: {type: String, trim: true, required:true},

})

userSchema.pre("save", function (next) {
    this.password = bcrypt.hashSync(this.password,saltRounds);
    next();
})

const users  = mongoose.model("User", userSchema);

export {users};