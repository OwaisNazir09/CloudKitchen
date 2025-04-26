const mongoose = require('mongoose');

const kitchenSchema = new mongoose.Schema({
    kitchenName: {
        type: String,
        required: true,
        unique: true,
    },
    description: {
        type: String,
        required: true,
    },
    address: {
        street: { type: String, required: true },     
        city: { type: String, required: true },       
        state: { type: String, required: true },       
        country: { type: String, default: "India" },   
        pincode: { type: String, required: true },    
      },
    ownerName: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
        default: 0,
    },
    imageUrl: {
        type: String, 
    }
});

module.exports = mongoose.model('Kitchen', kitchenSchema);
