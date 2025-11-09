import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function StudentTable() {
  // useState() - mount, update , unmount  values
  const [studentDetails, setStudentDetails] = useState([]);

  //useEffect() is a hook that allows us to run code after the component has rendered.
  useEffect(() => {
     const fetchData = async () => {
    try {
      const res = await axios.get("http://localhost:5000/studentDetails");
      setStudentDetails(res.data);   // ✅ res.data contains the response data
    } catch (err) {
      console.log(err.message);
    }
  };

  fetchData();  // ✅ call the async function
  }, []);

  // useEffect(() => {
  //   fetch("http://localhost:5000/studentDetails")
  //     .then((res) => res.json())
  //     .then((data) => setStudentDetails(data))
  //     .catch((err) => console.log(err.message));
  // }, []);

  const DisplayDetails = (id) => {
    console.log(id);
  };

  return (
    <div className=" mt-10 border rounded-sm mx-3 py-3 shadow-lg bg-gray-100 mx-auto">
      <h2 className="font-bold text-center mb-5">Student Records</h2>
      <div className="">
        <Link
          to={`/createStudent`}
          className="btn bg-blue-300 py-2 px-2 rounded-lg mx-2 mb-5 mt-4"
        >
          Add new student
        </Link>
        <table className="border-collapse mt-4 mx-10 border border-gray-400 mx-auto">
          <thead className=" ">
            <tr className="">
              <th className="border px-5 py-2  border-gray-600 ...">Id</th>
              <th className="border  px-5 py-2 border-gray-600 ...">Name</th>
              <th className="border  px-5 py-2 border-gray-600 ...">Place</th>
              <th className="border  px-5 py-2  border-gray-600 ...">Phone</th>
              <th className="border  px-5 py-2 border-gray-600 ...">Actions</th>
            </tr>
          </thead>
          <tbody>
            {studentDetails &&
              studentDetails.map((item) => (
                <tr key={item.id}>
                  <td className="border  px-5 py-2 border-gray-600 ">
                    {item.id}
                  </td>
                  <td className="border  px-5 py-2 border-gray-600 ">
                    {item.name}
                  </td>
                  <td className="border  px-5 py-2 border-gray-600 ">
                    {item.place}
                  </td>
                  <td className="border  px-5 py-2 border-gray-600 ">
                    {item.phone}
                  </td>
                  <td className="border  px-5 py-2 border-gray-600 ">
                    <Link
                      to={`/ViewDetails/${item.id}`}
                      onClick={() => DisplayDetails(item.id)}
                      className="btn bg-yellow-300 mx-3 px-2 py-1 rounded-sm"
                    >
                      View
                    </Link>
                    <Link
                      to={`/editStudent/${item.id}`}
                      className="btn bg-gray-500 mx-3 px-2 py-1 rounded-sm"
                    >
                      Edit
                    </Link>
                    <Link className="btn bg-red-500 mx-3 px-2 py-1 rounded-sm">
                      Delete
                    </Link>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default StudentTable;
