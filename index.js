require("dotenv").config();

const express = require("express");
const { userRouter } = require("./routes/user");

const app = express();

app.use(express.json());
app.use("/api/v1/user",userRouter);

async function main(){
    await mongoose.connect(process.env.MONGO_URL)
    app.listen(3000)
    console.log("hiuegenjhhon")
}

app.listen(3000);