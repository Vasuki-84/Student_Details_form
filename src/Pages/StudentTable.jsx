import React from "react";
import { Link } from "react-router-dom";

function StudentTable() {
  return (
    <div className=" mt-10 border rounded-sm mx-3 py-3 shadow-lg bg-gray-100">
      <h2 className="font-bold text-center mb-5">Student Records</h2>
      <div className="">
        <Link to="/createStudent" className="btn bg-blue-300 py-2 px-2 rounded-lg mx-2 mb-5 mt-4">
          Add new student
        </Link>
        <table className="border-collapse mt-4 mx-10 border border-gray-400 mx-auto ...">
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
            <tr>
              <td className="border  px-5 py-2 border-gray-600 ...">1</td>
              <td className="border  px-5 py-2 border-gray-600 ...">vasu</td>
              <td className="border  px-5 py-2 border-gray-600 ...">
                begaluru
              </td>
              <td className="border  px-5 py-2 border-gray-600 ...">
                45457983344
              </td>
              <td className="border  px-5 py-2 border-gray-600 ...">
                <Link to="/ViewDetails/:studentid" className="btn bg-yellow-300 mx-3 px-2 py-1 rounded-sm">View</Link>
                <Link to="/editStudent/:studentid" className="btn bg-gray-500 mx-3 px-2 py-1 rounded-sm">Edit</Link>
                <Link className="btn bg-red-500 mx-3 px-2 py-1 rounded-sm"> Delete</Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default StudentTable;
