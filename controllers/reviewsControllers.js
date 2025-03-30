


//get all reviews controller

export const getAllReviews=(req,res)=>{

    try {
        res.status(200).json({
            success:true,
            message:"Get all reviews controller"
        })

    } catch (error) {
        res.status(500).json({error:error.messag})
    }
}

//get single review controller

export const getSingleReviews=(req,res)=>{

    try {
        res.status(200).json({
            success:true,
            message:"Get single review "
        })

    } catch (error) {
        res.status(500).json({error:error.messag})
    }
}

// add new review
export const addNewReview=(req,res)=>{

    try {
        res.status(200).json({
            success:true,
            message:"Add new reviews "
        })

    } catch (error) {
        res.status(500).json({error:error.messag})
    }
}

// update review
export const updateReview=(req,res)=>{

    try {
        res.status(200).json({
            success:true,
            message:"Update review"
        })

    } catch (error) {
        res.status(500).json({error:error.messag})
    }
}

// delete single review
export const deleteReview=(req,res)=>{

    try {
        res.status(200).json({
            success:true,
            message:"delete review "
        })

    } catch (error) {
        res.status(500).json({error:error.messag})
    }
}