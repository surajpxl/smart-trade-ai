import mongoose, { Schema, Document } from "mongoose";

export interface IOrder extends Document {
  retailer: mongoose.Types.ObjectId;
  supplier: mongoose.Types.ObjectId;
  product: mongoose.Types.ObjectId;

  quantity: number;

  totalPrice: number;

  status: "pending" | "confirmed" | "shipped" | "delivered" | "cancelled";
}

const OrderSchema = new Schema(
  {
    retailer: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    supplier: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    product: {
      type: Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },

    quantity: {
      type: Number,
      required: true,
      min: 1,
    },

    totalPrice: {
      type: Number,
      required: true,
    },

    status: {
      type: String,
      enum: ["pending", "confirmed", "shipped", "delivered", "cancelled"],
      default: "pending",
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model<IOrder>("Order", OrderSchema);
