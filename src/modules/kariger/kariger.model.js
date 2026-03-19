import mongoose from "mongoose";

const karigerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    alternatePhoneNumber: {
      type: String,
    },
    address: {
      type: String,
    },
    city: {
      type: String,
    },
    state: {
      type: String,
    },
    aadharCardNo: {
      type: String,
    },
    panCardNo: {
      type: String,
    },
    bankDetails: {
      bankName: String,
      accountNumber: String,
      ifscCode: String,
    },
    upiId: {
      type: String,
    },
    experience: {
      type: Number, // in years
    },
    gender: {
      type: String,
      enum: ["Male", "Female", "Other"],
    },
    numberOfMachines: {
      type: Number,
      default: 0,
    },
    dob: {
      type: Date,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Kariger", karigerSchema);