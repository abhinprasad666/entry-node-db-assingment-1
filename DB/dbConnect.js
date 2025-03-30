import mongoose,{connect} from "mongoose";





const dbConnect=async()=>{

    try {
        await connect(process.env.DB_LOCAL_URL)
        .then(console.log('DB_connected...'))
    } catch (error) {
        console.error("DB Error",{error:error.message})
        process.exit(1)
    }
}






export default dbConnect;