let mongoose =require('mongoose');
let Schema=mongoose.Schema;

let emailSchema = new Schema({
    email : {
        type : String,
        required : false
    },
    type : {
        type : String,
        required : false
    }
}, { _id : false });


let phoneSchema = new Schema({
    number : {
        type : String,
        required : true,
    },
    type : {
        type : String,
        required : false
    }
},{ _id : false });

let contactSchema = new Schema({
    id : {
        type: Number,
        required: true,
        unique : true
    },
    name : {
        type : String,
        required : String,
    },
    phones : [phoneSchema],
    emails : [emailSchema],
    attributes : Object
});

let contacts = mongoose.model('contacts', contactSchema);
module.exports = contacts;