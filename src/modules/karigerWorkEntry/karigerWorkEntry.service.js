import KarigerWorkEntry from "../models/karigerWorkEntry.model.js";

// CREATE
export const createEntry = async (data) => {
  return await KarigerWorkEntry.create(data);
};

// GET ALL
export const getAllEntries = async () => {
  return await KarigerWorkEntry.find()
    .populate("karigerId")
    .sort({ createdAt: -1 });
};

// GET BY ID
export const getEntryById = async (id) => {
  return await KarigerWorkEntry.findById(id).populate("karigerId");
};

// UPDATE
export const updateEntry = async (id, data) => {
  return await KarigerWorkEntry.findByIdAndUpdate(id, data, {
    new: true,
  });
};

// DELETE
export const deleteEntry = async (id) => {
  return await KarigerWorkEntry.findByIdAndDelete(id);
};