import express from "express";
import mongoose from "mongoose";
import route from "./route/user.js";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use("/", route);

const PORT = 8000;

const url =
  "mongodb://user:hometechdev@cluster0-shard-00-00.nx0zt.mongodb.net:27017,cluster0-shard-00-01.nx0zt.mongodb.net:27017,cluster0-shard-00-02.nx0zt.mongodb.net:27017/CRUD?ssl=true&replicaSet=atlas-yw65ex-shard-0&authSource=admin&retryWrites=true&w=majority";

mongoose
  .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running successfully on port ${PORT}`);
    });
  })
  .catch((error) => {
    response.json({ message: error.message });
  });
