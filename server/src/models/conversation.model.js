import { model, Schema } from "mongoose";

const conversationSchema = new Schema({
  participants: [{ type: Schema.Types.ObjectId, ref: "User" }],
  messages: [
    {
      sender: { type: Schema.Types.ObjectId, ref: "User" },
      content: String,
      timestamp: Date,
    },
  ],
});

conversationSchema.index({ participants: 1 }, { unique: true });

const Conversation = model("Conversation", conversationSchema);

export default Conversation;
