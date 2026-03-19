import express from "express";
import * as partyController from "./party.controller.js";

const partyRoutes = express.Router();

partyRoutes.post("/", partyController.createParty);

partyRoutes.get("/", partyController.getAllParties);

partyRoutes.get("/:id", partyController.getPartyById);

partyRoutes.put("/:id", partyController.updateParty);

partyRoutes.delete("/:id", partyController.deleteParty);

export default partyRoutes;