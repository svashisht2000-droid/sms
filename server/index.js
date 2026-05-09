import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import studentmodel from "./student.js";
const app=express();
app.use(cors());
app.use(express.json());
const connectiontring="mongodb+srv://admin:Muscat123@cluster3101.dwany82.mongodb.net/databasecsse3101?appName=Cluster3101";
mongoose.connect(connectiontring)
.then(()=>console.log("Database ready"))
.catch((err)=>console.log("Could not connect to database "))
app.listen(3001,()=>console.log("Web Server is ready at port 3001."));
/*API for receiving the student data and inserting in the collection studentifos */
app.post("/addstudent", async (req, res) => {
  //const { studid, studname, email, password, dept } = req.body; // Extract data from the request body
  const studid=req.body.studid;
  const email=req.body.email;
  const studname=req.body.studname;
  const password=req.body.password;
  const dept=req.body.dept;
  // Create a new student instance using the model
  const student = new studentmodel({studid,studname,email,password, dept,  });

  await student.save(); // Save the student document to the database
  res.send("Data has been inserted in the collection studentinfos."); // Send a response
});

// API to get all records/documents from collection studentinfos
app.get("/manage", async(req,res)=>{
  studentmodel
  .find()
  .then((result)=>res.send({result}))
  .catch((error)=>{
    res.status(500).send(" Error in getting data")
  })
})

/*delete API which receives the _id of the record to be deleted */
app.delete("/delete/:id",async (req,res)=>{
  const id=req.params.id;
  await studentmodel.findByIdAndDelete(id);
  res.send("Record Deleted !")
});

/*API to get the record of a specific student */
app.get("/getstudent/:id", async(req,res)=>{
  try{
  const id=req.params.id;
  /*select * from studentinfos where studid=id */
  const result=await studentmodel.findOne({studid:id}); // result: student object
  res.send({result}); // result is a studnet object 
  }catch(err){
    res.status(500).send(err);
  }

});