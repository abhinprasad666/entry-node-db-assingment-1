


//get all authors controller

export const getAllAuthors=(req,res)=>{

    try {
        res.status(200).json({
            success:true,
            message:"Get all authors controller"
        })

    } catch (error) {
        res.status(500).json({error:error.messag})
    }
}

//get single author controller

export const getSingleAuthor=(req,res)=>{

    try {
        res.status(200).json({
            success:true,
            message:"Get single author "
        })

    } catch (error) {
        res.status(500).json({error:error.messag})
    }
}

// add new user
export const addNewAuthor=(req,res)=>{

    try {
        res.status(200).json({
            success:true,
            message:"Add new author "
        })

    } catch (error) {
        res.status(500).json({error:error.messag})
    }
}

// update author
export const updateAuthor=(req,res)=>{

    try {
        res.status(200).json({
            success:true,
            message:"Update author"
        })

    } catch (error) {
        res.status(500).json({error:error.messag})
    }
}

// delete single user
export const deleteAuthor=(req,res)=>{

    try {
        res.status(200).json({
            success:true,
            message:"delete author "
        })

    } catch (error) {
        res.status(500).json({error:error.messag})
    }
}