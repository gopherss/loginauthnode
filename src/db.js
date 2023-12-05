import { connect } from "mongoose";

export const connectDB = async () => {
  try {
    const respone = await connect("mongodb://127.0.0.1:27017/merndb");
    console.log(`DB Connected: ${respone.connection.name}`);
  } catch (error) {
    console.log(error);
  }
};


