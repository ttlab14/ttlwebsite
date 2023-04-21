const mongoose = require("mongoose");

const propertyShema = new mongoose.Schema({
    user: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'user'
    },
    catagery: {
        type: String
    },
    realStateType: {
        type: String
    },
    title: {
        type: String
    },
    description: {
        type: String
    },
    //    specification:{
    //     bedroom:{
    //         type:String
    //     },
    //     washroom:{
    //         type:String
    //     },
    //     carparking:{
    //         type:String
    //     },
    //     kitchen:{
    //         type:String
    //     },
    //     floorArea:{
    //         type:String
    //     },
    //     tapAvailable:{
    //         type:String
    //     },
    //     aircondition:{
    //         type:String
    //     },
    //     quarterAvailble:{
    //         type:String
    //     }
    //    },



    bedroom: {
        type: String
    },
    washroom: {
        type: String
    },
    carparking: {
        type: String
    },
    kitchen: {
        type: String
    },
    floorArea: {
        type: String
    },
    tapAvailable: {
        type: String
    },
    aircondition: {
        type: String
    },
    quarterAvailble: {
        type: String
    },

    price: {
        type: String
    },
    fullAddress: {
        type: String
    },
    houseno: {
        type: String
    },
    streetno: {
        type: String
    },
    coverimage: {
        type: String
    },
    propertyUpload: {
        type: [String]
    },
    document: {
        type: String
    },
    video: {
        type: String
    }
})

module.exports = mongoose.model('propert', propertyShema)