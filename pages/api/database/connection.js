import mongoose from "mongoose";

const mongoConnection = async () => {
  try {
    // return await mongoose.connect("mongodb://localhost:27017/manufacture");
    return await mongoose.connect(
      "mongodb+srv://jeyaragu:ragudhoni@nodejs.rcw0hi6.mongodb.net/manufacture?retryWrites=true&w=majority"
    );
  } catch (error) {
    console.log("Mongo Error", error);
    return error;
  }
};

export default mongoConnection;
