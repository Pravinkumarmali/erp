import express from "express";
import * as challanController from "./partyChallan.controller.js";

const challanRoutes = express.Router();

challanRoutes.post("/", challanController.createChallan);
challanRoutes.get("/", challanController.getAllChallans);
challanRoutes.get("/:id", challanController.getChallanById);
challanRoutes.put("/:id", challanController.updateChallan);
challanRoutes.delete("/:id", challanController.deleteChallan);

export default challanRoutes;