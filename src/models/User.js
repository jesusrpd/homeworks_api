import {Schema, model} from 'mongoose';

//Schema from user
const userSchema = new Schema({
    username: String,
    password: String,
    email: String,
    homeworks: [{
        type: Schema.Types.ObjectId,
        ref: "Homework"
    }] 
});

//Method from encrypt password
userSchema.methods.encryptPassword = async (password)=>{
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
};

//Method from check if password is correct
userSchema.methods.matchPassword = async function(password){
    return await bcrypt.compare(password, this.password);
};