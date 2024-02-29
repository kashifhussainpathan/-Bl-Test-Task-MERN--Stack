import Conversation from "../models/conversation.model.js";

export const getConversation = async (conversationData) => {
  try {
    const { senderId, receiverId, content } = conversationData;

    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] },
    });

    if (!conversation) {
      conversation = new Conversation({
        participants: [senderId, receiverId],
        messages: [],
      });
    }

    if (content) {
      conversation.messages.push({
        sender: senderId,
        content: content,
        timestamp: new Date(),
      });
    }

    await conversation.save();

    return conversation;
  } catch (error) {
    console.error("Error sending message:", error);
  }
};
