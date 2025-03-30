import express from "express"
import { addNewAuthor, deleteAuthor, getAllAuthors, getSingleAuthor, updateAuthor } from "../controllers/authorsControllers.js"




const router =express.Router()




//get all authors
router.get("/",getAllAuthors)

//get single author
router.get("/:id",getSingleAuthor)

//Add a new author
router.post("/",addNewAuthor)

//Update an existing author
router.put("/:id",updateAuthor)

//delete author
router.delete("/:id",deleteAuthor)




export default router