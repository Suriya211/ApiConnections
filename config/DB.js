const mongoose=require('mongoose')
const DB=()=>{
    mongoose.connect(process.env.DB_URI).then((con)=>{
        console.log('DB connected :'+con.connection.host);
    })
}
module.exports= DB;