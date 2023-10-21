import mongoose from "mongoose";

const userSchema = mongoose.Schema({

model:{type: String},
regNo:{type: String},
color:{type: String},
dealerName:{type: String},
dealerPincode:{type: Number},
});

export default mongoose.model("dataModel" , userSchema);