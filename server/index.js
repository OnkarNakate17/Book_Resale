import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import bookRoute from "./route/bookroute.js";
import userRoute from "./route/userrounte.js";
import cors from 'cors'

const app = express()
dotenv.config();

app.use(cors())
app.use(express.json());
const port = process.env.PORT || 4000;


// defining routes
app.use("/book", bookRoute);
app.use("/user", userRoute);



// // multer
// import bodyParser from 'body-parser';
// import multer from 'multer';
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
// // app.use("/uploads", express.static("uploads"));
























// connect to mongoDB
try {
    mongoose.connect("mongodb://0.0.0.0:27017/resalebook", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log("Connected to mongoDB");
} catch (error) {
    console.log("Error: ", error);
}

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})