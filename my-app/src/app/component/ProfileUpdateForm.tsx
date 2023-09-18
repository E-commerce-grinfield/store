"use client";
require("dotenv").config();
const bcrypt = require("bcrypt");
import axios from "axios";
import { error } from "console";
import React, { ChangeEvent, useEffect, useState } from "react";

const GetUserId = async () => {
  const res = await axios("http://localhost:3000/api/auth/verify");
  return res.data.tokeninfo;
};

const GetUserById = async (userid: number) => {
  const user = await axios(`http://localhost:3000/api/user?ID=${userid}`);
  return user.data;
};

function ProfileUpdateForm() {
  const [newpass, setNewpass] = useState("");
  const [confirmpass, setConfirmpass] = useState("");
  const [curentpass, setCurentpass] = useState("");
  const [userUpdate, setUserUpdate] = useState({
    name: "",
    lastName: "",
    email: "",
    password: "",
    address: "",
  });

  const handelsubmit = async () => {
    if (curentpass.length > 2) {
      const passwordMatch = await bcrypt.compare(
        curentpass,
        userUpdate.password
      );
      if (passwordMatch) {
        if (newpass) {
          if (newpass === confirmpass) {
            const salt = await bcrypt.genSalt(10);
    var hashedpassowrd = await bcrypt.hash(newpass, salt)
            const res = await axios.put(
              `http://localhost:3000/api/user?ID=${userId}`,
              {name: userUpdate.name,
              lastName: userUpdate.lastName,
              email: userUpdate.email,
              password: hashedpassowrd ,
              address: userUpdate.address}
            );
          } else {
            alert("Passwords do not match!");
          }
        }
       } else {
        alert("wrong current passowrd");
      }
      
    }
    else{
      try{
        const res = await axios.put(`http://localhost:3000/api/user?ID=${userId}`,
        userUpdate)
      } catch(err){ throw  error(err)

      }


      
    }
    
  };

  const [userId, setUserId] = useState("");

  useEffect(() => {
    async function fetchData() {
      const id = await GetUserId();
      if (id !== null) {
        setUserId(id);
      }
      const User = await GetUserById(id);
      if (User !== null) {
        setUserUpdate({
          name: User.User.name,
          lastName: User.User.lastName,
          email: User.User.email,
          password: User.User.password,
          address: User.User.address,
        });
      }
    }

    fetchData();
  }, []);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserUpdate((prevUserUpdate) => ({
      ...prevUserUpdate,
      [name]: value,
    }));
  };

  return (
    <div className="w-[55rem] h-[40rem] relative bg-white rounded shadow">
      <label className="left-[80px] top-[40px] absolute text-red-500 text-xl font-medium font-['Poppins'] leading-7">
        Edit Your Profile
      </label>
      <div className="left-[80px] top-[84px] relative justify-start items-start gap-12 inline-flex">
        <div className="flex-col justify-start items-start gap-2 inline-flex">
          <label className="text-black text-base font-normal font-['Poppins'] leading-normal">
            First Name
          </label>
          <div className="w-80 h-12 relative">
            <input
              className="w-80 h-12 left-0 top-0 relative bg-neutral-100 rounded"
              placeholder="First Name"
              name="name"
              value={userUpdate.name}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="flex-col justify-start items-start gap-2 inline-flex">
          <label className="text-black text-base font-normal font-['Poppins'] leading-normal">
            Last Name
          </label>

          <input
            className="w-80 h-12 left-0 top-0 relative bg-neutral-100 rounded"
            placeholder="Last Name"
            name="lastName"
            value={userUpdate.lastName}
            onChange={(e) => {
              handleInputChange(e);
              console.log(userUpdate, "updated");
            }}
          />
        </div>
      </div>
      <div className="left-[80px] top-[190px] absolute justify-start items-start gap-12 inline-flex">
        <div className="flex-col justify-start items-start gap-2 inline-flex">
          <label className="text-black text-base font-normal font-['Poppins'] leading-normal">
            Email
          </label>

          <input
            className="w-80 h-12 left-0 top-0 relative bg-neutral-100 rounded"
            placeholder="Email"
            name="email"
            value={userUpdate.email}
            onChange={(e) => {
              handleInputChange(e);
            }}
          />
        </div>
        <div className="flex-col justify-start items-start gap-2 inline-flex">
          <label className="text-black text-base font-normal font-['Poppins'] leading-normal">
            Address
          </label>

          <input
            className="w-80 h-12 left-0 top-0 relative bg-neutral-100 rounded"
            placeholder="Address"
            name="address"
            value={userUpdate.address}
            onChange={(e) => {
              handleInputChange(e);
            }}
          />
        </div>
      </div>
      <div className="left-[80px] top-52 relative flex-col justify-start items-start gap-y-4 inline-flex">
        <label className="text-black text-base font-normal font-['Poppins'] leading-normal top-4">
          Password Changes
        </label>
        <div className="flex-col justify-start items-start gap-y-2 flex">
          <input
            className="w-96 h-12 left-0 top-5 relative bg-neutral-100 rounded opacity-50 text-black text-base font-normal font-['Poppins'] leading-normal"
            placeholder="Current Password"
            type="password"
            name="password"
            onChange={(e) => {
              setCurentpass(e.target.value);
            }}
          />
        </div>
        <input
          className="w-96 h-12 left-0 top-5 relative bg-neutral-100 rounded"
          placeholder="New Password"
          onChange={(e) => {
            setNewpass(e.target.value);
          }}
        />
        <input
          className="w-96 h-12 left-0 top-4  relative bg-neutral-100 rounded"
          placeholder="Confirm New Password"
          onChange={(e) => {
            setConfirmpass(e.target.value);
          }}
        />
      </div>
      <div className="left-[487px] top-[534px] absolute justify-start items-center gap-8 inline-flex">
        <a
          className="text-black text-base font-normal font-['Poppins'] leading-normal"
          href="#"
        >
          Cancel
        </a>
        <button className="px-12 py-4 bg-red-500 rounded justify-center items-center gap-2.5 flex text-neutral-50 text-base font-medium font-['Poppins'] leading-normal">
          Save Changes
        </button>
      </div>
    </div>
  );
}

export default ProfileUpdateForm;
