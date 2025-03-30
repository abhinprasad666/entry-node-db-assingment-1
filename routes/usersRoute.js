import express from "express"
import { addNewUser, deleteUser, getAllUsers, getSingleUser, updateUser } from "../controllers/usersControllers.js"



const router =express.Router()




//get all users
router.get("/",getAllUsers)

//get single user
router.get("/:id",getSingleUser)

//Add a new user
router.post("/",addNewUser)

//Update an existing user
router.put("/:id",updateUser)

//delete user
router.delete("/:id",deleteUser)




export default router