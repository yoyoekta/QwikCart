const Item = require('../models/Item');
const User = require('../models/User');

// Creates new Item
const createItem = async(req, res) => {
    try{
        console.log(req.user);
        const user = await User.findOne({_id:req.user});
        if(!user){
            return res.status(404).send({
                "success":false,
                "message": "User not found"
            })
        }

        const newItem = new Item(req.body);
        newItem.user = req.user;

        const savedItem = await newItem.save();
        return res.status(200).send({
            "success":true,
            "message": "Item created successfully",
            newItem
        })
    }
    catch(err){
        console.log(err);
        return res.status(500).send({
            "success":false,
            "message": "Error occurred while creating item",
            err
        })
    }
}

// Deletes an Item
const deleteItem = async(req, res) => {
    try{
        const user = await Item.findOne({user:req.user});

        if(!user){
            return res.status(404).send({
                "success":false,
                "message": "User not found"
            })
        }

        const itemToDelete = await Item.findById({_id:req.params.id});
        if(itemToDelete.user == req.user){
            const deletedItem = await Item.findByIdAndDelete({_id:req.params.id});
            return res.status(200).send({
                "success":true,
                "message": "Item deleted successfully"
            })
        }
        else{
            return res.status(404).send({
                "success":false,
                "message": "User doesn't have permission to delete this item"
            })
        }
    }
    catch(err){
        console.log(err);
        return res.status(500).send({
            "success":false,
            "message": "Error occurred while deleting item",
            err
        })
    }
}


// Edit an Item  
const editItem = async(req, res) => {
    try{
        const user = await User.findOne({_id:req.user});
        if(!user){
            return res.status(404).send({
                "success":false,
                "message": "User not found"
            }) 
        }
        
        const itemToEdit = await Item.findById({_id:req.params.id});
        if(itemToEdit.user == req.user){
            const editableItem = await Item.updateOne({_id:req.params.id}, req.body);
            const editedItem = await Item.findById({_id:req.params.id});
            return res.status(200).send({
                "success":true,
                "message": "Item edited successfully",
                editableItem,
                editedItem
            })
        }
        else{
            return res.status(404).send({
                "success":false,
                "message": "User doesn't have permission to edit this item"
            })
        }
    }
    catch(err){
        console.log(err);
        return res.status(500).send({
            "success":false,
            "message": "Error occurred while editing item",
            err
        })
    }
}

// Get all the items of a user
const getItems = async(req, res) => {
    try{
        const user = await User.findOne({_id:req.user});
        if(!user){
            return res.status(404).send({
                "success":false,
                "message": "User not found"
            })
        }

        const items = await Item.find({user:req.user});
        return res.status(200).send({
            "success":true,
            "message": "Items fetched successfully",
            items
        })
    }
    catch(err){
        console.log(err);
        return res.status(500).send({
            "success":false,
            "message": "Error occurred while fetching items",
            err
        })
    }
}

module.exports = { createItem, deleteItem, editItem, getItems }