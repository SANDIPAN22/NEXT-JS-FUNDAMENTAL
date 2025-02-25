import mongoose from "mongoose";
import { defaultConfig } from "next/dist/server/config-shared";

const UserSchema = new mongoose.Schema({
  eid: {
    required: true,
    type: Number,
    unique: true,
  },
  name: {
    type: String,
  },
  status: {
    type: String,
    enum: ["active", "away", "busy"],
    default: "active",
  },
  team: {
    type: String,
    enum: ["dev", "QA", "ops"],
    default: "QA",
  },
  email: {
    type: String,
  },
});

export default mongoose.models.User || mongoose.model("User", UserSchema);
