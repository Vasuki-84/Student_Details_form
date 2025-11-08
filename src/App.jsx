import React from "react";
import { Routes, Route } from "react-router-dom";
import StudentTable from "./Pages/StudentTable";
import Home from "./Components/Home";
import CreateStudent from "./Pages/CreateStudent";
import EditStudent from "./Pages/EditStudent";
import ViewDetails from "./Pages/ViewDetails";

function App() {
  return (
    <div>
     
      <Routes>
        <Route path="/" element={ <Home />}/>
        <Route path="/studentTable" element={<StudentTable />} />
        <Route path="/createStudent" element={<CreateStudent />} />
        <Route path="/editStudent/:studentid" element={<EditStudent />} />
        <Route path="/ViewDetails/:studentid" element={<ViewDetails />} />
      </Routes>
    </div>
  );
}

export default App;
