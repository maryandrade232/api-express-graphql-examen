import Message from '../../models/message';
const Mutation = {
    createMessage: async (_, { id, name, email, age, address, phone }) => {
        const newMessage = new Message({ id, name, email, age, address, phone  });
        return await newMessage.save();
    },
    updateMessage: async (_, {id, name, email, age, address, phone}) => {
        return await Message.findByIdAndUpdate(id, { name, email, age, address, phone });
    },
    deleteMessage: async (_, { id }) => {
        return await Message.findByIdAndDelete(id);
    }

}
export default Mutation;

