import Kariger from "../models/kariger.model.js";

// CREATE
export const createKariger = async (data) => {
  return await Kariger.create(data);
};

// GET ALL
export const getAllKarigers = async () => {
  return await Kariger.find().sort({ createdAt: -1 });
};

// GET BY ID
export const getKarigerById = async (id) => {
  return await Kariger.findById(id);
};

// UPDATE
export const updateKariger = async (id, data) => {
  return await Kariger.findByIdAndUpdate(id, data, {
    new: true,
  });
};

// DELETE
export const deleteKariger = async (id) => {
  return await Kariger.findByIdAndDelete(id);
};