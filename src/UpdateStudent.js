import "bootstrap/dist/css/bootstrap.min.css";
import {useParams} from "react-router-dom";
import axios from "axios";
import {useState, useEffect} from "react";
const UpdateStudent=()=>
{
    const[studid,setstudid]=useState();
    const[studname,setstudname]=useState();
    const[email,setemail]=useState();
    const [password,setPassword]=useState();
    const [dept,setdept]=useState();
    let {sid}=useParams();

    useEffect(()=>{
        axios.get(`http://localhost:3001/getstudent/${sid}`)
        .then((response)=>{
            setstudid(response.data.result.studid);
            setstudname(response.data.result.studname);
            setemail(response.data.result.email);
            setPassword(response.data.result.password);
            setdept(response.data.result.dept);
           })
        .catch((err)=>{console.log("Error in getting data ",err)});
    },[sid]);

    return(<div>
        <h1>Update Your Profile....</h1>
        {studname}
    </div>);
}
export default UpdateStudent;