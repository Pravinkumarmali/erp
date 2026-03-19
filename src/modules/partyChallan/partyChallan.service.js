import PartyChallan from "./partyChallan.model.js";

// CREATE CHALLAN
export const createChallan = async (data) => {

  // Calculate totals
  let totalAmount = 0;

  const items = data.items.map((item) => {
    const totalSarees = item.sareeQty + (item.sampleQty || 0);
    const amount = item.sareeQty * item.rate;

    totalAmount += amount;

    return {
      ...item,
      totalSarees,
      amount,
    };
  });

  const challan = await PartyChallan.create({
    ...data,
    items,
    totalAmount,
  });

  return challan;
};


// GET ALL
export const getAllChallans = async () => {
  return await PartyChallan.find()
    .populate("partyId", "name partyCode")
    .sort({ createdAt: -1 });
};


// GET SINGLE
export const getChallanById = async (id) => {
  return await PartyChallan.findById(id)
    .populate("partyId", "name partyCode");
};


// UPDATE
export const updateChallan = async (id, data) => {

  let totalAmount = 0;

  const items = data.items.map((item) => {
    const totalSarees = item.sareeQty + (item.sampleQty || 0);
    const amount = item.sareeQty * item.rate;

    totalAmount += amount;

    return {
      ...item,
      totalSarees,
      amount,
    };
  });

  return await PartyChallan.findByIdAndUpdate(
    id,
    {
      ...data,
      items,
      totalAmount,
    },
    { new: true }
  );
};


// DELETE
export const deleteChallan = async (id) => {
  return await PartyChallan.findByIdAndDelete(id);
};