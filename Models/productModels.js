const mongoose=require('mongoose');
const productSchemea=new mongoose.Schema({
    name:String,
    price:String,
    description:String,
    ratings:String,
    images:[{
        image:String,
    }],
    category:String,
    seller:String,
    stock:String,
    numberOfReviews:String,
    createdAt:Date
});
const productModel=mongoose.model('Product',productSchemea);
module.exports=productModel;