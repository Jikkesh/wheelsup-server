import dataModel from "../models/index.js";

export const addData = async (req,res)=>{

    const {model , regNo , color , dealerName , dealerPincode } = req.body;
    const oldregNo = await dataModel.findOne({regNo});
    const oldDealer = await dataModel.findOne({dealerName});

    if(oldDealer){ 
       return  res.status(408).json({message: "Dealer already found"});
      }
    if(oldregNo){
       return  res.status(409).json({message: "Car already found"});
    }

    const newData = await dataModel.create({model , regNo, color , dealerName , dealerPincode});

    res.status(200).json({newData})
    console.log("newData created for" + color +" "+ model);
}

export const getData = async(req, res)=>{

    try {
        const allData = await dataModel.find();
        res.status(200).json(allData);
    } catch (error) {
        console.log("Can't get AllData" + error);
        res.status(500).json({mesage:"Internal server error"});
    }
}


export const deleteCar = async (req,res)=>{
try {
    const {id:_id} = req.params;
    console.log(_id);
    const deletedCar = await dataModel.findByIdAndRemove(_id);
    
    if(!deletedCar){
        console.log("error in deleteing");
    }
    res.status(200);

} catch (error) {
    res.status(500).json({message:"Some error occured"});
}

}

export const getColor = async (req,res)=>{
    const data = req.query.data;
    console.log(data);

    try {
        const coloredCars = await dataModel.find(data)
        if(!coloredCars){
            console.log("404");
        }
        console.log(coloredCars);
        res.status(200).json(coloredCars);

    } catch (error) {
        console.log("Internal error");
    }
}