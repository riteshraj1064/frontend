import axios from "axios";
import React, { useEffect, useState } from "react";
import {  useNavigate } from "react-router-dom";

const Verify = () => {
  const navigate = useNavigate();
  const [otp, setOTP] = useState();
  const [userId, setUserId] = useState();

  const getdata = () => {
    const saved = localStorage.getItem("user");
    const data = JSON.parse(saved);
    setUserId(data.id);
  };
  useEffect(()=>{
   getdata()
  },[])

  const handaleSubmit = async (e) => {
    e.preventDefault();
    const data = await axios.post( `${process.env.REACT_APP_URL}user/verify-email`,
      {
        otp,
        userId,
      }
    );

    localStorage.setItem("user", JSON.stringify(data.data.user));
    console.log(data);
    if (data.data.success) {
      navigate("/", { replace: true });
    } else {
      console.log("error");
    }
  };
  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-purple-700 underline">
          Verify OTP
        </h1>
        <form className="mt-6" onSubmit={handaleSubmit}>
          <div className="mb-2">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-800"
            >
              OTP
            </label>
            <input
              type="text"
              value={otp}
              onChange={(e) => setOTP(e.target.value)}
              className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>

          <div className="mt-6">
            <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
              Verify OTP
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Verify;
