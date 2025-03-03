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

const postSchema = new Schema({
    titel : String,
    description : String,
    imageUrl : String,
    creatorId : ObjetId
});

const userModel = mongoose.model("user",userSchema);
const postModel = mongoose.model("post",postSchema);

module.exports = {
    userModel,
    postModel
}