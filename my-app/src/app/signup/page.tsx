"use client";
import React, { useState } from "react";
import Select from "react-select";
import axios from "axios";
import Link from "next/link";

const Signup: React.FC = () => {
  const [useremail, setEmail] = useState("");
  const [userpw, setPassword] = useState("");
  const [username, setName] = useState("");
  const [error, setError] = useState("");

  const [selectedRole, setSelectedRole] = useState<any>(null); // Set the initial state type
  const roleOptions = [
    { value: "user", label: "User" },
    { value: "admin", label: "Admin" },
  ];
  console.log(username);
  const customStyles = {
    marginTop: "100px",
    marginBottom: "80px",
  };

  const handleSubmit = async (e?: React.FormEvent<HTMLFormElement>) => {
    console.log("hi");
    if (e) {
      e.preventDefault();
    }
    const newUser = {
      name: username,
      lastname:"",
      email:useremail,
      password:userpw,
      role: selectedRole?.value ?? '',
      status:0 ,
      address : ""
    };

    try {
      const res = await axios.post("http://localhost:3000/api/user", newUser);
      console.log(res.data);
      window.localStorage.setItem("User", JSON.stringify(res.data));

      window.location.href = "/signin";
    } catch (error) {
      error ? console.log(error) : console.log("done");
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
            Create an account
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
                  placeholder="Name"
                  value={username}
                  onChange={(e) => setName(e.target.value)}
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
            <Select
              options={roleOptions}
              value={selectedRole}
              onChange={(selectedOption: string) =>
                setSelectedRole(selectedOption)
              }
              placeholder="Choose Admin or User"
            />
            <div className="px-32 py-4 bg-red-500 rounded justify-center items-center gap-2.5 inline-flex">
              <div className="flex-col justify-start items-start gap-4 inline-flex">
                <div className="px-12 py-4 bg-red-500 rounded justify-center items-center gap-2.5 inline-flex">
                  <button
                    className="bg-red-500 rounded justify-center items-center gap-2.5 inline-flex"
                    style={{ width: "32px", height: "0px" }}
                    onClick={() => {
                      handleSubmit();
                    }}
                  >
                    <div className="text-neutral-50 text-base font-medium leading-normal whitespace-nowrap">
                      Create Account
                    </div>
                  </button>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center justify-start gap-[32px] text-text2">
              <div className="rounded flex flex-col py-4 px-[86px] items-start justify-start border-[1px] border-solid border-gray-200">
                <div className="flex flex-row items-start justify-start gap-[16px]">
                  <img
                    className="relative w-6 h-6 overflow-hidden shrink-0"
                    alt=""
                    src="./assets/icons/gmail-icon.svg"
                  />
                  <div className="relative leading-[24px]">
                    Sign up with Google
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-center justify-start gap-[16px]">
                <div className="relative leading-[24px] opacity-[0.7]">
                  Already have account?
                </div>
                <div className="flex flex-col items-start justify-start gap-[4px]">
                  <div
                    className="relative leading-[24px] font-medium opacity-[0.7] cursor-pointer"
                    onClick={() => {
                      handleSubmit();
                    }}
                  >
                    Log in
                  </div>
                  <img
                    className="relative w-[47px] h-px opacity-[0.5]"
                    alt=""
                    src="/underline4.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;