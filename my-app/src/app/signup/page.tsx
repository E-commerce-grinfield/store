'use client'
import React, { useState } from 'react';
import Select from 'react-select';
import axios from 'axios';
import Link from 'next/link';

const Signup: React.FC = () => {
  const [useremail, setEmail] = useState('');
  const [userpw, setPassword] = useState('');
  const [username, setName] = useState('');
  const [error, setError] = useState('');
  
  const [selectedRole, setSelectedRole] = useState<any>(null); // Set the initial state type

  const roleOptions = [
    { value: 'user', label: 'User' },
    { value: 'admin', label: 'Admin' },
  ];
console.log(username);

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
      status:0
    };

    try {
      const res = await axios.post('http://localhost:3000/api/user', newUser);
      console.log(res.data)
      window.localStorage.setItem('User', JSON.stringify(res.data));
     
      window.location.href = '/';
    } catch (error) {
      error ? console.log(error) : console.log("done");
      
      
    }
  };

  return (
    <div>
      <div className="w-full">
        <div className="inline-flex gap-10">
          <div className="w-full h-96 pt-20 bg-slate-300 rounded-tr rounded-br justify-end items-center inline-flex">
            <img
              className="w-96 h-96"
              src="https://images.unsplash.com/photo-1592890288564-76628a30a657?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29uJTIwb24lMjBwaG9uZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
              alt="Placeholder"
            />
          </div>
          <div className="w-96 h-96 flex-col justify-start items-start gap-12 inline-flex">
            <div className="flex-col justify-start items-start gap-6 flex">
              <div className="text-black text-4xl font-medium leading-loose tracking-wider">Create an account</div>
              <div className="text-black text-base font-normal leading-normal">Enter your details below</div>
            </div>
            <div className="flex-col justify-start items-center gap-10 flex">
              <div className="flex-col justify-start items-start gap-10 flex">
                <div className="flex-col justify-start items-start gap-2 flex">
                  <div className="opacity-40 text-black text-base font-normal leading-normal">Name</div>
                  <div className="w-96 h-px opacity-50 justify-center items-center inline-flex">
                    <div className="w-96 h-px border border-black"></div>
                  </div>
                  <input
                    className="w-96 h-10 px-3 border border-black rounded-md"
                    type="text"
                    placeholder="Name"
                    value={username}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="flex-col justify-start items-start gap-2 flex">
                  <div className="opacity-40 text-black text-base font-normal leading-normal">
                    Email or Phone Number
                  </div>
                  <div className="w-96 h-px opacity-50 justify-center items-center inline-flex">
                    <div className="w-96 h-px border border-black"></div>
                  </div>
                  <input
                    className="w-96 h-10 px-3 border border-black rounded-md"
                    type="text"
                    placeholder="Email or Phone Number"
                    value={useremail}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="flex-col justify-start items-start gap-2 flex">
                  <div className="opacity-40 text-black text-base font-normal leading-normal">Password</div>
                  <div className="w-96 h-px opacity-50 justify-center items-center inline-flex">
                    <div className="w-96 h-px border border-black"></div>
                  </div>
                  <input
                    className="w-96 h-10 px-3 border border-black rounded-md"
                    type="password"
                    placeholder="Password"
                    value={userpw}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex-col justify-start items-start gap-4 flex">
                {/* Dropdown Select */}
                <Select
                  options={roleOptions}
                  value={selectedRole}
                  onChange={(selectedOption) => setSelectedRole(selectedOption)}
                  placeholder="Choose Admin or User"
                />
                <button
                  className="px-32 py-4 bg-red-500 rounded justify-center items-center gap-2.5 inline-flex" 
onClick={()=>{handleSubmit()}}                >
                  <div className="text-neutral-50 text-base font-medium leading-normal">Create Account</div>
                </button>
                <div className="justify-start items-center gap-4 inline-flex">
                  <div className="flex-col justify-start items-start gap-1 inline-flex">
                    <Link href="/signin" className="opacity-70 text-black text-base font-medium leading-normal">
                      Log in
                    </Link>
                    <div className="w-12 h-px relative opacity-50">
                      <div className="w-12 h-px left-0 top-0 absolute border border-black"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
