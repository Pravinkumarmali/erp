import mongoose from "mongoose";

const sareeItemSchema = new mongoose.Schema({
  saree: {
    type: String,
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

const karigerWorkEntrySchema = new mongoose.Schema(
  {
    karigerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Kariger",
      required: true,
    },
    karigerName: {
      type: String, // optional (for quick access)
    },
    month: {
      type: Number, // 1-12
      required: true,
    },
    year: {
      type: Number,
      required: true,
    },
    sarees: [sareeItemSchema],
    totalAmount: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

// Auto calculate totalAmount
karigerWorkEntrySchema.pre("save", function (next) {
  this.totalAmount = this.sarees.reduce(
    (sum, item) => sum + item.amount,
    0
  );
  next();
});

export default mongoose.model("KarigerWorkEntry", karigerWorkEntrySchema);