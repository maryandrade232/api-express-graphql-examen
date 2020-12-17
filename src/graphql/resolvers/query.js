import Message from '../../models/message';
const Query = {
    ping() {
        return "pong !"
    },
    getMessages: async () => {
        return await Message.find();
    },
    getMessage: async (_, { id }) => {
        return await Message.findById(id);
    }
}


export default Query;