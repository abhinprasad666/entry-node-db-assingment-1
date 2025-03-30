import express from "express"
import { addNewReview, deleteReview, getAllReviews, getSingleReviews, updateReview } from "../controllers/reviewsControllers.js"



const router =express.Router()




//get all reviews
router.get("/",getAllReviews)

//get single review
router.get("/:id",getSingleReviews)

//Add a new review
router.post("/",addNewReview)

//Update an existing review
router.put("/:id",updateReview)

//delete review
router.delete("/:id",deleteReview)




export default router