


//get all books controller

export const getAllBooks=async(req,res)=>{

    try {
        const allBooks=await Book?.find()
        res.status(200).json({
            success:true,
            count:Book.length,
            allBooks
        })

    } catch (error) {
        res.status(500).json({error:error.message})
    }
}

//get single book controller

export const getSingleBook=async(req,res)=>{

    try {
        const singleBook=await Book?.findById(req.params.id)

        if(!singleBook){
          return  res.status(404).json({
             success:flase,
             error:" not found"})
        }
        res.status(201).json({
            message:true,
            count:singleBook.length,
            singleBook
        })

    } catch (error) {
        res.status(500).json({error:error.message})
    }
}

// add new book
export const addNewBook=async(req,res)=>{

    try {

   const id=req.body
        const newBook=await Book?.create(id)
        res.status(201).json(newBook)

    } catch (error) {
        res.status(500).json({error:error.message})
    }
}

// update book
export const updateBook=async(req,res)=>{

    try {
        const id=(req.params.id)
        
        const existBook=await Book?.findById(id)
        if(!existBook){
            res.status(400).json({success:false,error:"not found"})
        }
    const UpdateBook= await Book.findByIdAndUpdate(
        id,
        req.body,
        {new:true,
        runValidators:true

    })
        
        res.status(201).json({
            success:true,
           message:" Updated successfully"
        })

    } catch (error) {
        res.status(500).json({error:error.message})
    }
}

// delete single book
export const deleteBook=async(req,res)=>{

    try {
        const id=req.params.id
        console.log("delete id:",id)
        const book=await Book?.findById(id)
      
        if(!book){
                res.status(404).json({
                success:false,
                error:" not found"
            })
        }
             await author.deleteOne()
        res.status(200).json({
            success:true,
            message:"deleted"

        })

    } catch (error) {
        res.status(500).json({error:error.message})
    }
}