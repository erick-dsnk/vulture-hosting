import mongoose, { Schema } from "mongoose";

const ServerSchema = new Schema({
  name: { type: String, required: true, unique: true },
  port: { type: Number, required: true },
  nodeId: { type: Number, required: true },
  userId: { type: String, required: true },
  memory: { type: Number, required: true },
  running: { type: Boolean, required: true, default: false },
  version: { type: String, required: false, default: "LATEST" },
  type: { type: String, required: false },
});

const Server = mongoose.model("Server", ServerSchema);

export default Server;
