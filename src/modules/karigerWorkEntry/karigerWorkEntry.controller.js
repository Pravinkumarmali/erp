import * as service from "../services/karigerWorkEntry.service.js";

// CREATE
export const createEntry = async (req, res) => {
  try {
    const entry = await service.createEntry(req.body);
    res.status(201).json({
      success: true,
      data: entry,
      message: "Work entry created",
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// GET ALL
export const getAllEntries = async (req, res) => {
  try {
    const data = await service.getAllEntries();
    res.json({ success: true, data });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// GET ONE
export const getEntry = async (req, res) => {
  try {
    const data = await service.getEntryById(req.params.id);
    res.json({ success: true, data });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// UPDATE
export const updateEntry = async (req, res) => {
  try {
    const data = await service.updateEntry(req.params.id, req.body);
    res.json({ success: true, data, message: "Updated" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// DELETE
export const deleteEntry = async (req, res) => {
  try {
    await service.deleteEntry(req.params.id);
    res.json({ success: true, message: "Deleted" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};