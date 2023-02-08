import mongoose from "mongoose";

const mongoConnection = async () => {
    try {
        await mongoose.connect("mongodb+srv://xx:xx@nodejs.rcw0hi6.mongodb.net/manufacture");
        console.log('Mongo Connected Successfull...!');
    } catch (error) {
        console.log('Mongo Error', error);
        return error;
    }
};

export default mongoConnection;