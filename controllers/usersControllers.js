


//get all users controller

export const getAllUsers=async(req,res)=>{

    try {
        const allUsers=await User?.find()
        res.status(200).json({
            success:true,
            count:User.length,
            allUsers
        })

    } catch (error) {
        res.status(500).json({error:error.message})
    }
}

//get single user controller

export const getSingleUser=async(req,res)=>{

    try {
        const singleUser=await User?.findById(req.params.id)

        if(!singleUser){
          return  res.status(404).json({
             success:flase,
             error:" not found"})
        }
        res.status(201).json({
            message:true,
            count:User.length,
            singleUser
        })

    } catch (error) {
        res.status(500).json({error:error.message})
    }
}

// add new user
export const addNewUser=async(req,res)=>{

    try {
        const id=req.body
        const user=await User?.create(id)
        res.status(201).json(user)

    } catch (error) {
        res.status(500).json({error:error.message})
    }
}

// update user
export const updateUser=async(req,res)=>{

    try {
        const id=(req.params.id)
        
        const existUser=await User?.findById(id)
        if(!existUser){
            res.status(400).json({success:false,error:"not found"})
        }
    const UpdateUser= await User.findByIdAndUpdate(
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
export const deleteUser=async(req,res)=>{

    try {
        const id=req.params.id
      
        const user=await User?.findById(id)
      
        if(!user){
                res.status(404).json({
                success:false,
                error:" not found"
            })
        }
             await user.deleteOne()
        res.status(200).json({
            success:true,
            message:"deleted"

        })

    } catch (error) {
        res.status(500).json({error:error.message})
    }
}