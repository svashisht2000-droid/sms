import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import {useState,useEffect} from "react";
import {Link} from "react-router-dom";
//import updateStudent from "./updateStudent";
const ManageStudents=()=>
{
    const [listofstudents,setlistofstudents]=useState([]);
    useEffect(()=>{
    axios.get("http://localhost:3001/manage")
    .then((response)=>{
        setlistofstudents(response.data.result);
    })
    .catch((err)=>{
        console.log(err);
    });
    },[]);
    let x=5;


    const deletestudent = (id) => 
        {
    axios.delete(`http://localhost:3001/delete/${id}`) // Send a DELETE request to the backend endpoint
      .then((response) => {
        //alert(response.data); // Show an alert with the response message
        setlistofstudents(
          listofstudents.filter((student) => {
            return student._id !== id; // Filter out the deleted student from the useState list
          })
        );
      }).catch((err) => console.log(err)); // Handle errors
  };

    return(<div>
        <h1>Student Data Management</h1>
        <table className="table " >
           <thead> 
            <tr>
              <th>Record Id</th>
            <th>Student ID</th>
            <th>Student Name</th>
            <th>Student Email</th>
            <th>Department</th>
            <th>Delete</th>
            <th>Update</th>
            </tr>
            </thead>
        {
          listofstudents.map((student)=>(
            <tbody>
            <tr>
              <td>{student._id}</td>
                <td>{student.studid}</td>
                <td>{student.studname}</td>
                <td>{student.email}</td>
                <td>{student.dept}</td>
                <td>
                    <button 
                    className="btn btn-warning"
                    onClick={()=>deletestudent(student._id)}
                    >
                    Del
                    </button>
                    </td>
                    <td>
                    <Link to={`/update/${student.studid}`} className="nav-link">
                     <button className="btn btn-info">Update</button>
                    </Link>
                    </td>
            </tr>
            </tbody>
          )) 

        }
        </table>
        
    </div>);
}
export default ManageStudents;