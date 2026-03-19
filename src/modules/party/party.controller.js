import * as partyService from "./party.service.js";

export const createParty = async (req, res) => {
  try {

    const party = await partyService.createParty(req.body);

    res.status(201).json({
      success: true,
      message: "Party created successfully",
      data: party
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};


export const getAllParties = async (req, res) => {
  try {

    const parties = await partyService.getAllParties();

    res.status(200).json({
      success: true,
      data: parties
    });

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};


export const getPartyById = async (req, res) => {
  try {

    const party = await partyService.getPartyById(req.params.id);

    if (!party) {
      return res.status(404).json({ message: "Party not found" });
    }

    res.json(party);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


export const updateParty = async (req, res) => {
  try {

    const party = await partyService.updateParty(req.params.id, req.body);

    res.json({
      success: true,
      data: party
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


export const deleteParty = async (req, res) => {
  try {

    await partyService.deleteParty(req.params.id);

    res.json({
      success: true,
      message: "Party deleted"
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};