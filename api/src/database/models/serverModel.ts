import mongoose, { Schema } from "mongoose";

const ServerSchema = new Schema({
  name: { type: String, required: true, unique: true },
  status: { type: String, required: true, enum: ["stopped", "running", "crashed"] },
  owner: { type: String, required: true },
});

const Server = mongoose.model("Server", ServerSchema);

export default Server;
