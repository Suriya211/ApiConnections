const express =require('express');
const app=express();
const dotenv=require('dotenv');
const path=require('path');
const DB=require('./config/DB');
dotenv.config({path :path.join(__dirname,'config','config.env')})
const products=require('./routes/product');
const orders=require('./routes/order');
DB();
app.use('/api/v1/',products);
app.use('/api/v1/',orders);
app.listen(process.env.PORT,()=>{
    console.log(`server is listenting to port ${process.env.PORT} in ${process.env.NODE_ENV} mode`)
})