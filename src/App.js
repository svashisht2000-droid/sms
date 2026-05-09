import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router,Routes,Route,Link } from "react-router-dom";
import Home from "./Home.js";
import StudentRegister from "./StudentRegister.js";
import ManageStudents from "./ManageStudents.js";
import UpdateStudent from "./UpdateStudent.js";

const App=()=>
{
  return (
    <div className="container">
      <h1>Student Management System</h1>
      <Router>
        <nav className="bg-light">
          <ul className="nav">
            <li className="nav-item">
              <Link to="/home" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/StudentRegister" className="nav-link">
                Student Register
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/manage" className="nav-link">
                Manage Student
              </Link>
            </li>
       
          </ul>
        </nav>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/StudentRegister" element={<StudentRegister />} />
          <Route path="/manage" element={<ManageStudents />} />
          <Route path="/update/:sid" element={<UpdateStudent />} />
       
        </Routes>
      </Router>
    </div>
  );
}
export default App;
