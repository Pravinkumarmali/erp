import * as karigerService from "../services/kariger.service.js";

// CREATE
export const createKariger = async (req, res) => {
  try {
    const kariger = await karigerService.createKariger(req.body);
    res.status(201).json({
      success: true,
      data: kariger,
      message: "Kariger created successfully",
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// GET ALL
export const getAllKarigers = async (req, res) => {
  try {
    const karigers = await karigerService.getAllKarigers();
    res.json({ success: true, data: karigers });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// GET BY ID
export const getKarigerById = async (req, res) => {
  try {
    const kariger = await karigerService.getKarigerById(req.params.id);

    if (!kariger) {
      return res.status(404).json({ message: "Kariger not found" });
    }

    res.json({ success: true, data: kariger });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// UPDATE
export const updateKariger = async (req, res) => {
  try {
    const updated = await karigerService.updateKariger(
      req.params.id,
      req.body
    );

    res.json({
      success: true,
      data: updated,
      message: "Kariger updated successfully",
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// DELETE
export const deleteKariger = async (req, res) => {
  try {
    await karigerService.deleteKariger(req.params.id);
    res.json({
      success: true,
      message: "Kariger deleted successfully",
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};