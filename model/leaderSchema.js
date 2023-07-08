//const mongoose = require('mongoose');
const {Schema,model,models}=require('mongoose')


const leaderSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    designation: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    }
});

Leaders = mongoose.models.leader || mongoose.model('leader', leaderSchema)
module.exports=Leaders

//module.exports = mongoose.model('leader', leaderSchema);