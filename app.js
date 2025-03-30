import express from "express"
import dotenv from "dotenv"
import userRouter from "./routes/usersRoute.js"
import authorRouter from "./routes/authorsRoute.js"
import reviewsRouter from "./routes/reviewsRoute.js"
import booksRouter from "./routes/booksRoute.js"
import dbConnect from "./DB/dbConnect.js"



const app=express()
dotenv.config()
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/api/v1/authors',authorRouter)
app.use('/api/v1/users/',userRouter)
app.use('/api/v1/books',booksRouter)
app.use('/api/v1/reviews/',reviewsRouter)






const port = process.env.PORT ||3000

app.listen(port, () =>{console.log( `Server running on port ${port} 🔥`)
 dbConnect()
});