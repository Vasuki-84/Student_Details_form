import React from "react";
import { Routes, Route } from "react-router-dom";
import StudentTable from "./Pages/StudentTable";
import Home from "./Components/Home";
import CreateStudent from "./Pages/CreateStudent";

function App() {
  return (
    <div>
      <Home />
      <Routes>
        <Route path="/studentTable" element={<StudentTable />} />
        <Route path="/createStudent" element={<CreateStudent />} />
      </Routes>
    </div>
  );
}

export default App;
