import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Forget = () => {
 
    const [email , setEmail] = useState()
    const[mass , setMess] = useState()
    const handaleSubmit = async (e) => {
        e.preventDefault();
        const data = await axios.post(
          `${process.env.REACT_APP_URL}user/forget-password`,
          {
            email
          }
        );
        setMess(data.data.meassage);
      };
  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
            <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
                <h1 className="text-3xl font-semibold text-center text-purple-700 underline">
                Forget Password
                </h1>
                <p>{mass}</p>
                <form className="mt-6" onSubmit={handaleSubmit}>
                    <div className="mb-2">
                        <label
                            htmlFor="email"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            required
                            value={email}
                            onChange={(e)=>setEmail(e.target.value)}
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                  
                    <div className="mt-6">
                        <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                            Forget Password
                        </button>
                    </div>
                </form>

                <p className="mt-8 text-xs font-light text-center text-gray-700">
                    {" "}
                    Don't have an account?{" "}
                    <Link to="/login"
                        className="font-medium text-purple-600 hover:underline"
                    >
                        Login
                    </Link>
                </p>
            </div>
        </div>
  )
}

export default Forget
