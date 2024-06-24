import mongoose from "mongoose";

const Connect = async () => {
  try {
    mongoose.connect("mongodb+srv://vaishnavi:Vaishnavi30@cluster0.ls1ernz.mongodb.net/dex-application?retryWrites=true&w=majority");
    console.log("Database is connected 🎉");
  } catch (error) {
    console.log(error);
  }
};

export { Connect };
