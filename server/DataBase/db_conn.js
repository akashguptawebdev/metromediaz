const mongoUrl = "mongodb+srv://akashkashyapy:akashmetromedia@cluster0.6qsxxeh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

import mongoose from "mongoose";

export const dbConn = () => {
    mongoose
      .connect(mongoUrl)
      .then(() => {
        console.log("Connected to database");
      })
      .catch((err) => {
          console.log(
            `Some error occured while connecting to dataBase : Err: - ${err}`
          )
      });
  };
  