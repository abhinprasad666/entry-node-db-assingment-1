


//get all books controller

export const getAllBooks=(req,res)=>{

    try {
        res.status(200).json({
            success:true,
            message:"Get all books controller"
        })

    } catch (error) {
        res.status(500).json({error:error.messag})
    }
}

//get single book controller

export const getSingleBook=(req,res)=>{

    try {
        res.status(200).json({
            success:true,
            message:"Get single book "
        })

    } catch (error) {
        res.status(500).json({error:error.messag})
    }
}

// add new book
export const addNewBook=(req,res)=>{

    try {
        res.status(200).json({
            success:true,
            message:"Add new book "
        })

    } catch (error) {
        res.status(500).json({error:error.messag})
    }
}

// update book
export const updateBook=(req,res)=>{

    try {
        res.status(200).json({
            success:true,
            message:"Update Book"
        })

    } catch (error) {
        res.status(500).json({error:error.messag})
    }
}

// delete single book
export const deleteBook=(req,res)=>{

    try {
        res.status(200).json({
            success:true,
            message:"delete book"
        })

    } catch (error) {
        res.status(500).json({error:error.messag})
    }
}