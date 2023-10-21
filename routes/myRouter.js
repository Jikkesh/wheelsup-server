import  express  from "express";
import { addData,  getColor } from "../controllers/index.js";
import { getData } from "../controllers/index.js";

const router = express.Router();

router.post("/add" , addData);

router.get("/alldata", getData);

router.get("/select", getColor);

 export default router;
 