import express from "express";
import * as controller from "../controllers/karigerWorkEntry.controller.js";

const karigerWorkEntry = express.Router();

karigerWorkEntry.post("/", controller.createEntry);
karigerWorkEntry.get("/", controller.getAllEntries);
karigerWorkEntry.get("/:id", controller.getEntry);
karigerWorkEntry.put("/:id", controller.updateEntry);
karigerWorkEntry.delete("/:id", controller.deleteEntry);

export default karigerWorkEntry;