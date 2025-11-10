import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function ViewDetails() {
  const { studentid } = useParams();

  const [details, setDetails] = useState({});

  useEffect(() => {
    const studentData = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/studentDetails/${studentid}`
        );
        setDetails(res.data);
        console.log(res.data);
      } catch (err) {
        console.log(err.message);
      }
    };
    studentData();
  }, [studentid]);

  return (
    <div className=" mt-20">
      <h3 className="text-xl text-center font-bold">ViewDetails</h3>

      {details && (
        <div className="max-w-md  border mx-auto p-4">
          <p>
            <strong className="font-semibold">Id :</strong>
            {details.id}
          </p>
          <p>
            <strong className="font-semibold">Name :</strong>
            {details.name}
          </p>
          <p>
            <strong className="font-semibold">Place :</strong>
            {details.place}
          </p>
          <p>
            <strong className="font-semibold ">Phone :</strong>
            {details.phone}
          </p>
          <Link to="/" className="btn bg-blue-400 px-2 rounded  ">
            Back
          </Link>
        </div>
      )}
    </div>
  );
}

export default ViewDetails;
