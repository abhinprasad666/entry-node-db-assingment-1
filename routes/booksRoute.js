import express from "express"
import { addNewBook, deleteBook, getAllBooks, getSingleBook, updateBook } from "../controllers/booksControllers.js"



const router =express.Router()




//get all books
router.get("/",getAllBooks)

//get single book
router.get("/:id",getSingleBook)

//Add a new book
router.post("/",addNewBook)

//Update an existing book
router.put("/:id",updateBook)

//delete book
router.delete("/:id",deleteBook)




export default router