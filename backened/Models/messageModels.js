const mongoose =require('mongoose');
const chatModel=mongoose.schema(
    {
    sender:{type:mongoose.Schema.Types.ObjectId,ref:"User"},
    content:{type:String,trim:true},
    chat :{type:mongoose.Schema.Types.ObjectId,ref :"Chat"},
    },
    {
        timestamps:true,
    }
);
const message=mongoose.model("Message",message.Model);
module.exports=Message;