import mongoose from "mongoose";
const studentschema=mongoose.Schema({
    studid:{type:String,require:true},
    studname:{type:String,require:true},
    email:{type:String,require:true},
    password:{type:String,require:true},
    dept:{type:String,require:true}
});
const studentmodel=mongoose.model("studentinfos",studentschema);
export default studentmodel;
