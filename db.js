const mongoose = require ("mongoose");
mongoose.connect(process.env.MONGO_URL);

const Schema = mongoose.Schema;
const ObjetId = mongoose.Types.ObjectId;

const userSchema = new Schema({
    email : {type : String , unique : true},
    password : String,
    firstName : String,
    lastName : String
});

const userModel = mongoose.model("user",userSchema);

module.exports = {
    userModel
}