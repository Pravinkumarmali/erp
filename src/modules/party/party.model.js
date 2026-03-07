import mongoose from "mongoose";

const partySchema = new mongoose.Schema(
  {
    partyCode: {
      type: String,
      unique: true
    },

    name: {
      type: String,
      required: true,
      trim: true
    },

    address: {
      type: String
    },

    city: {
      type: String
    },

    state: {
      type: String
    },

    country: {
      type: String,
      default: "India"
    },

    pincode: {
      type: String
    },

    phoneNo: {
      type: String
    },

    telephoneNo: {
      type: String
    },

    gstNumber: {
      type: String
    },

    email: {
      type: String
    },

    notes: {
      type: String
    },

    isActive: {
      type: Boolean,
      default: true
    }
  },
  { timestamps: true }
);

export default mongoose.model("Party", partySchema);