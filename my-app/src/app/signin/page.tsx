"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";

import { sign } from "crypto";
import { Header } from "../../components";
//interface Signin {
// onSubmit: (useremail: string, userpw: string) => void;
//}

const signin = () => {
  const [useremail, setEmail] = useState("");
  const [userpw, setPassword] = useState("");
  const [Error, setError] = useState("");
  const [username, setName] = useState("LOG IN");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const user = {
      email: useremail,
      password: userpw,
    };
    const res = await axios.post("/api/auth/login", user, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log("********************res",res);

    if (res.data.message === "Successfully logged in") {
      window.location.href = "/";
      localStorage.setItem("userLogged","true");
      
    }
  };


  return (
    <div className="top-[200px] left-[0px] flex flex-row items-center justify-start  text-17xl font-heading-36px-medium pt-[60px] pb-[140px] border-red-600 max-w-[1160px] mx-auto">
      <div className="relative rounded-tl-none rounded-tr rounded-br rounded-bl-none bg-powderblue w-[805px] h-[781px]  shrink-0">
        <img
          className="w-[919px] relative h-[781px] object-cover left-[-160px]"
          alt=""
          src="./assets/images/sign-in-left-image.svg"
        />
      </div>
      <div className="flex-col justify-start items-start gap-12 inline-flex ">
        <div className="flex-col justify-start items-start gap-6 flex">
          <div className="text-black text-4xl font-medium leading-loose tracking-wider">
            Log in to Exclusive
          </div>
          <div className="text-black text-base font-normal leading-normal">
            Enter your details below
          </div>
        </div>
        <div className="flex-col justify-start items-center gap-10 flex">
          <div className="flex-col justify-start items-start gap-10 flex">
       

            <div className="flex-col justify-start items-start gap-2 flex">
              <div className="opacity-40 text-black text-base font-normal leading-normal">
                <input
                  type="text"
                  className="border-none focus:ring-0 w-[370px] h-8  rounded-md px-2 mt-2 outline outline-transparent"
                  placeholder="Email or Phone Number"
                  value={useremail}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="w-[370px] h-[0px] opacity-50 justify-center items-center inline-flex">
                <div className="w-[370px] h-[0px] border border-black"></div>
              </div>
            </div>

            <div className="flex-col justify-start items-start gap-2 flex">
              <div className="opacity-40 text-black text-base font-normal leading-normal">
                <input
                  type="text"
                  placeholder="Enter your password"
                  className="border-none focus:ring-0 w-[370px] h-8  rounded-md px-2 mt-2 outline outline-transparent"
                  value={userpw}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="w-[370px] h-[0px] opacity-50 justify-center items-center inline-flex">
                <div className="w-[370px] h-[0px] border border-black"></div>
              </div>
            </div>
          </div>
          <div className="flex-col justify-start items-start gap-4 flex">

            <div className="px-32 py-4 bg-red-500 rounded justify-center items-center gap-2.5 inline-flex">
              <div className="flex-col justify-start items-start gap-4 inline-flex">
                <div className="px-12 py-4 bg-red-500 rounded justify-center items-center gap-2.5 inline-flex">
                  <button
                    className="bg-red-500 rounded justify-center items-center gap-2.5 inline-flex"
                    style={{ width: "32px", height: "0px" }}
                    onClick={(event) => {
                      handleSubmit(event);
                    }}
                  >
                    <div className="text-neutral-50 text-base font-medium leading-normal whitespace-nowrap">
                     Login
                    </div>
                  </button>
                </div>
              </div>
            </div>

           
          </div>
        </div>
      </div>
    </div>
  );
 
};

export default signin;
