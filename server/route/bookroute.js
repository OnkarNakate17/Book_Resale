import express from 'express';

import { createBook, getBook } from '../controller/bookcontroller.js';


const router = express.Router();

router.get("/", getBook);
router.post("/addbook", createBook);

console.log(getBook);

export  default router;