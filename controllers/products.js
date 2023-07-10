const Item = require('../models/Item');

const getAllProducts = async(req, res) => {
    try{
        const allProducts = await Item.find({});
        return res.status(200).send({
            "success":true,
            "message": "All products fetched successfully",
            allProducts
        })
    }
    catch(err){
        console.log(err);
        return res.status(500).send({
            "success":false,
            "message": "Error occurred while fetching all products",
            err
        })
    }
}

const getProductById = async(req, res) => {
    try{
        const product = await Item.findById({_id:req.params.id});
        return res.status(200).send({
            "success":true,
            "message": "Product fetched successfully",
            product
        })
    }
    catch(err){
        console.log(err);
        return res.status(500).send({
            "success":false,
            "message": "Error occurred while fetching product",
            err
        })
    }
}

const getProductsByCategory = async(req, res) => {
    try{
        const catprods = await Item.find({category:req.params.category});
        return res.status(200).send({
            "success":true,
            "message": "All the category products fetched successfully",
            catprods
        })
    }
    catch(err){
        console.log(err);
        return res.status(500).send({
            "success":false,
            "message": "Error occurred while fetching products",
            err
        })
    }
}

module.exports = {getAllProducts, getProductById, getProductsByCategory}