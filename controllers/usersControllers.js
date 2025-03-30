


//get all users controller

export const getAllUsers=(req,res)=>{

    try {
        res.status(200).json({
            success:true,
            message:"Get all user controller"
        })

    } catch (error) {
        res.status(500).json({error:error.messag})
    }
}

//get single user controller

export const getSingleUser=(req,res)=>{

    try {
        res.status(200).json({
            success:true,
            message:"Get single user "
        })

    } catch (error) {
        res.status(500).json({error:error.messag})
    }
}

// add new user
export const addNewUser=(req,res)=>{

    try {
        res.status(200).json({
            success:true,
            message:"Add new user "
        })

    } catch (error) {
        res.status(500).json({error:error.messag})
    }
}

// update user
export const updateUser=(req,res)=>{

    try {
        res.status(200).json({
            success:true,
            message:"Update user"
        })

    } catch (error) {
        res.status(500).json({error:error.messag})
    }
}

// delete single user
export const deleteUser=(req,res)=>{

    try {
        res.status(200).json({
            success:true,
            message:"delete user "
        })

    } catch (error) {
        res.status(500).json({error:error.messag})
    }
}