import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import {useState} from "react";
const StudentRegister=()=>
{
    const [studid,setstudid]=useState("t46");
    const [studname,setstudname]=useState("Somesh");
    const [email,setemail]=useState("somesh@utas.edu.om");
    const [password,setpassword]=useState("12345");
    const [dept,setdept]=useState("IT");
    /*create a function that collects all the form data stored in usestate variable  and send to the addStudnt API in index.js on the server*/
    const addstudent=(event)=>
    {
        event.preventDefault();
        axios.post("http://localhost:3001/addstudent",{
            studid:studid,
            studname:studname,
            email:email,
            password:password,
            dept:dept,
        })
        .then((res)=>{alert("Data Submitted ")})
        .catch((err)=>{alert("form could not be submitted")});
    }
    return(<div>
        <h1>Student Register Form</h1>
        <form className="form-control" >
            {studid} ,{studname}, {email},{password}
        Dept :{dept}
        
        <br/>Student ID<br/>
        <input
        type="text"
        className="form-control"
        value={studid}
        onChange={(e)=>setstudid(e.target.value)}
        />
        <br/>Student Name<br/>
        <input
        type="text"
        className="form-control"
        value={studname}
        onChange={(e)=>setstudname(e.target.value)}
        />
        <br/>Student Email<br/>
        <input
        type="text"
        className="form-control"
        value={email}
        onChange={(e)=>setemail(e.target.value)}
        />
        <br/>Password<br/>
        <input
        type="password"
        className="form-control"
        value={password}
        onChange={(e)=>setpassword(e.target.value)}
        />
<br/>Choose Department<br/>
<select 
className="form-control"
value={dept}
onChange={(e)=>setdept(e.target.value)}
>
    <option value="IT">Information Technology</option>
     <option value="Business">Business</option>
      <option value="Engineering">Engineering</option>

</select>
<br/>
<button className="btn btn-info" onClick={addstudent}>Submit Form</button>
        </form>
    </div>)
}
export default StudentRegister;