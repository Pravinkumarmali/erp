import Party from "./party.model.js";

export const createParty = async (data) => {

  const party = new Party(data);

  return await party.save();
};


export const getAllParties = async () => {

  return await Party.find({ isActive: true });
};


export const getPartyById = async (id) => {

  return await Party.findById(id);
};


export const updateParty = async (id, data) => {

  return await Party.findByIdAndUpdate(
    id,
    data,
    { new: true }
  );
};


export const deleteParty = async (id) => {

  return await Party.findByIdAndUpdate(
    id,
    { isActive: false },
    { new: true }
  );
};