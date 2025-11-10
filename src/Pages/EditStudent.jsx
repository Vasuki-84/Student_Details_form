import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function EditStudent() {
  const { studentid } = useParams();
  // const [details, setDetails] = useState({});

  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [place, setPlace] = useState("");
  const [phone, setPhone] = useState("");
  const [validation, setValidation] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const studentData = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/studentDetails/${studentid}`
        );
        // setDetails(res.data);
        setId(res.data.id);
        setName(res.data.name);
        setPlace(res.data.place);
        setPhone(res.data.phone);
      } catch (err) {
        console.log(err.message);
      }
    };
    studentData();
  }, [studentid]);

  const handleSubmit =async (e) => {
    e.preventDefault();
     const studentData = { id, name, place, phone };

    try {
      await axios.put(`http://localhost:5000/studentDetails/${studentid}`, studentData);
      alert("Student data saved successfully..");
      navigate("/");
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="mx-auto border shadow-lg mx-auto max-w-md p-4  mt-10">
      <h2 className="text-center  ">Edit student details</h2>
      <div>
        <form onSubmit={handleSubmit} className="mt-5 mx-auto  max-w-md">
          <label className="">Student ID: </label>
          <input
            type="text"
            name="id"
            value={id}
            onChange={(e) => setId(e.target.value)}
            onMouseDown={() => setValidation(true)}
            className="border w-full "
          />
          {id.length === 0 && validation && (
            <span className=" text-sm text-red-500 errorMsg block">
              please enter the id
            </span>
          )}

          <label className="">Student name: </label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onMouseDown={() => setValidation(true)}
            className="border w-full "
          />
          {name.length === 0 && validation && (
            <span className=" text-sm text-red-500 errorMsg block">
              please enter the id
            </span>
          )}

          <label className="">Student place: </label>
          <input
            type="text"
            name="place"
            value={place}
            onChange={(e) => setPlace(e.target.value)}
            onMouseDown={() => setValidation(true)}
            className="border w-full "
          />
          {place.length === 0 && validation && (
            <span className=" text-sm text-red-500 errorMsg block">
              please enter the id
            </span>
          )}

          <label className="">phone: </label>
          <input
            type="text"
            name="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            onMouseDown={() => setValidation(true)}
            className="border w-full "
          />
          {phone.length === 0 && validation && (
            <span className="text-sm text-red-500 errorMsg block">
              please enter the id
            </span>
          )}

          <div className="flex justify-around gap-3">
            <button className="btn bg-blue-500 w-full mt-3 rounded-sm py-2">
              Update
            </button>

            <Link
              to={`/`}
              className=" text-center btn bg-red-500 w-full mt-3 rounded-sm py-2"
            >
              Back
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditStudent;
