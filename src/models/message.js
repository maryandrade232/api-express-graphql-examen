import { Schema, model } from 'mongoose';

const messageSchema = new Schema({
    id: {
        type: String,
        required: true

    },
    name: {
        type: String,
        required: true

    },
    email: {
        type: String,
        required: true
    },
    age: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    phone:{
        type: String,
        required: true
    }
})

export default model('Message', messageSchema);
