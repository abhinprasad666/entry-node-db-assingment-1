


//get all reviews controller

export const getAllReviews=async(req,res)=>{

    try {
        const allReviews=await Reviews?.find()
        res.status(200).json({
            success:true,
            count:Reviews.length,
            allReviews
        })

    } catch (error) {
        res.status(500).json({error:error.message})
    }
}

//get single review controller

export const getSingleReviews=async(req,res)=>{

    try {
        const singleReview=await Review?.findById(req.params.id)

        if(!singleReview){
          return  res.status(404).json({
             success:flase,
             error:" not found"})
        }
        res.status(201).json({
            message:true,
            count:Reviews.length,
            singleReview
        })

    } catch (error) {
        res.status(500).json({error:error.message})
    }
}

// add new review
export const addNewReview=async(req,res)=>{

    try {
        const id=req.body
        const review=await Review?.create(id)
        res.status(201).json(review)

    } catch (error) {
        res.status(500).json({error:error.messag})
    }
}

// update review
export const updateReview=async(req,res)=>{

    try {
        const id=(req.params.id)
        
        const existReview=await Review?.findById(id)
        if(!existReview){
            res.status(400).json({success:false,error:"not found"})
        }
    const UpdateReview= await Book.findByIdAndUpdate(
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
        res.status(500).json({error:error.messag})
    }
}

// delete single review
export const deleteReview=async(req,res)=>{

    try {
        const id=req.params.id

        const review=await Review?.findById(id)
      
        if(!review){
                res.status(404).json({
                success:false,
                error:" not found"
            })
        }
             await review.deleteOne()
        res.status(200).json({
            success:true,
            message:"deleted"

        })

    } catch (error) {
        res.status(500).json({error:error.messag})
    }
}