import express from "express";
import * as karigerController from "../controllers/kariger.controller.js";

const karigerRouter = express.Router();

karigerRouter.post("/", karigerController.createKariger);
karigerRouter.get("/", karigerController.getAllKarigers);
karigerRouter.get("/:id", karigerController.getKarigerById);
karigerRouter.put("/:id", karigerController.updateKariger);
karigerRouter.delete("/:id", karigerController.deleteKariger);

export default karigerRouter;