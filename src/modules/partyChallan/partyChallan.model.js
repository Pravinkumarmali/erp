import mongoose from "mongoose";

const partyChallanItemSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
  },
  sareeQty: {
    type: Number,
    required: true,
  },
  sampleQty: {
    type: Number,
    default: 0,
  },
  totalSarees: {
    type: Number,
    required: true,
  },
  rate: {
    type: Number,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
});

const partyChallanSchema = new mongoose.Schema(
  {
    partyId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Party",
      required: true,
      index: true,
    },

    partyCode: {
      type: String,
      required: true,
    },

    partyName: {
      type: String,
      required: true,
    },

    challanNo: {
      type: String,
      required: true,
      unique: true,
    },

    challanDate: {
      type: Date,
      required: true,
    },

    items: [partyChallanItemSchema],

    totalAmount: {
      type: Number,
      required: true,
    },

    signature: {
      type: String,
    },

    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true },
);

export default mongoose.model("PartyChallan", partyChallanSchema);
