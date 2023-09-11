"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { sign } from 'crypto';
 //interface Signin {
   // onSubmit: (useremail: string, userpw: string) => void;
  //}
  
 const signin =()=> {

    const [useremail, setUserEmail] = useState('');
    const [userpw, setUserPassword] = useState('');
    const [Error,setError]=useState('');
    const [username,setName]=useState('LOG IN')
console.log("hello");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const user = {
          useremail,
          userpw,
        };
        const res = await axios.post('http://localhost:5000/api/user/login', user, {
          headers: {
            'Content-Type': 'application/json',
          },
        });
        window.localStorage.setItem('User', JSON.stringify(res.data));
        setError('Authentication successful')
        window.location.href = '/';

    }
  return (
    <div>
    <div style={{ marginTop: "40px", marginLeft: "100px" }} className="item-center">
      <div className="inline-flex gap-10">
        <div className="w-96 h-96 pt-20 bg-slate-300 rounded-tr rounded-br justify-end items-center inline-flex">
          <img
            className="w-96 h-96"
            src="https://images.unsplash.com/photo-1592890288564-76628a30a657?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29uJTIwb24lMjBwaG9uZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
            alt="Placeholder"
          />
        </div>
        <div className="w-96 h-80 flex-col justify-start items-start gap-10 inline-flex">
          <div className="flex-col justify-start items-start gap-12 flex">
            <div className="flex-col justify-start items-start gap-6 flex">
              <div className="text-black text-4xl font-medium leading-loose tracking-wider">Log in to Exclusive</div>
              <div className="text-black text-base font-normal leading-normal">Enter your details below</div>
            </div>
            <div className="flex-col justify-start items-start gap-10 flex">
              <div className="flex-col justify-start items-start gap-2 flex">
                <div className="opacity-40 text-black text-base font-normal leading-normal">Email or Phone Number</div>
                <div className="w-96 h-px opacity-50 justify-center items-center inline-flex">
                  <div className="w-96 h-px border border-black"></div>
                </div>
                {/* Email input */}
                <input
                  className="w-96 h-10 px-3 border border-black rounded-md"
                  type="text"
                  placeholder="Email or Phone Number"
                  value={useremail} onChange={(e) => setUserEmail(e.target.value)}
                />
              </div>
              <div className="flex-col justify-start items-start gap-2 flex">
                <div className="opacity-40 text-black text-base font-normal leading-normal">Password</div>
                <div className="w-96 h-px opacity-50 justify-center items-center inline-flex">
                  <div className="w-96 h-px border border-black"></div>
                </div>
                {/* Password input */}
                <input
                  className="w-96 h-10 px-3 border border-black rounded-md"
                  type="password"
                  placeholder="Password"
                  value={userpw} onChange={(e) => setUserPassword(e.target.value)}
                  
                />
              </div>
            </div>
          </div>
          <div className="justify-start items-center gap-20 inline-flex">
            <div className="flex-col justify-start items-start gap-4 inline-flex">
              {/* Log In button */}
              <button
                className="px-12 py-4 bg-red-500 rounded justify-center items-center gap-2.5 inline-flex"
                onClick={() => {
                   {handleSubmit}
                }}
              >
                <div className="text-neutral-50 text-base font-medium leading-normal">Log In</div>
              </button>
            </div>
            <div className="text-red-500 text-base font-normal leading-normal">Forget Password?</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
            } 


export default signin