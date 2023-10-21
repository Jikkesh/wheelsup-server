import express from "express"
import mongoose from "mongoose"
import router from "./routes/myRouter.js";
import cors from "cors";
const app = express();

app.use(cors());
app.use(express.json());

app.get("/" , (req,res)=> {
    res.send("Hello, This server is running for CarDealers project");
});

app.use("/" ,router);


const mongoDB_URL = "mongodb+srv://JikkeshKumar:jikkeshwaR3031@cluster0.wmwfh0l.mongodb.net/?retryWrites=true&w=majority";
const PORT = 5000
try {
    mongoose.connect(mongoDB_URL , {useNewUrlParser: true , useUnifiedTopology:true})
    app.listen(PORT)
    console.log("DB Connected and Server listening at PORT:" + PORT)
} catch (error) {
    console.log("Error setting up server " + error)
}