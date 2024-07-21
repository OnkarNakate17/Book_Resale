import mongoose from "mongoose";

const bookscheme = mongoose.Schema({
    name : String,
    titlle : String,
    price : Number,
    category1 : String,
    image : String
});

const Book = mongoose.model("Book" , bookscheme);

export  default Book;