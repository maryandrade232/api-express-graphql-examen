import mongoose from 'mongoose';
mongoose.connect("mongodb+srv://rafael:edu900fs@unibe-7ujmc.azure.mongodb.net/unibe?retryWrites=true&w=majority")
.then(db => console.log('database us connected'))
.catch(err => console.log(err));