


//get all authors controller

export const getAllAuthors=async(req,res)=>{

    try {
        const allAuthors=await Author?.find()
        res.status(200).json({
            success:true,
            count:Author.length,
            allAuthors
        })

    } catch (error) {
        res.status(500).json({error:error.message})
    }
}

//get single author controller

export const getSingleAuthor=async(req,res)=>{

    try {
        const author=await Author?.findById(req.params.id)

        if(!author){
          return  res.status(404).json({
             success:flase,
             error:" not found"})
        }
        res.status(201).json({
            message:true,
            count:Author.length,
            message:author
        })
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}

// add new author
export const addNewAuthor=async(req,res)=>{

    try {
        const id=req.body
        const newAthor=await Author?.create(id)
        
           if(id){
            return res.status(201).json()
           }
       

    } catch (error) {
        res.status(500).json({error:error.message})
    }
}

// update author
export const updateAuthor=async(req,res)=>{

    try {
        const id=(req.params.id)
        
        const existAuthor=await Author?.findById(id)
        if(!existAuthor){
            res.status(400).json({success:false,error:"not found"})
        }
    const UpdateAuthor= await Author?.findByIdAndUpdate(
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

// delete single user
export const deleteAuthor=async(req,res)=>{

    try {
        const id=req.params.id
        
        const author=await Author?.findById(id)
      
        if(!author){
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