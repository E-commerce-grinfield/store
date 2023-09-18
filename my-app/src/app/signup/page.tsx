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
    if (e) {e.preventDefault();}
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
      const res = await axios.post('http://localhost:3000/api/user', newUser);
      console.log(res.data)
      window.localStorage.setItem('User', JSON.stringify(res.data));
     
      window.location.href = '/';
    } catch (error) {
      error ? console.log(error) : console.log("done");
      
      
    }
  };

  return (
    <div className="w-full relative bg-white">
   
   
    <div className="w-full h-[0px] left-0 top-[140px] absolute justify-center items-center inline-flex">
      <div className="w-full h-[0px] origin-top-left rotate-180 opacity-30 border border-black"></div>
    </div>
    <div className="left-0 top-[200px] absolute justify-start items-center gap-32 inline-flex">
    <div className="pt-20 bg-slate-300 rounded-tr rounded-br justify-end items-center flex">
      <img className="w-96 h-96" src="https://via.placeholder.com/919x706" />
    </div>
    <div className="flex-col justify-start items-start gap-12 inline-flex">
      <div className="flex-col justify-start items-start gap-6 flex">
        <div className="text-black text-4xl font-medium leading-loose tracking-wider">Create an account</div>
        <div className="text-black text-base font-normal leading-normal">Enter your details below</div>
      </div>
      <div className="flex-col justify-start items-center gap-10 flex">
        <div className="flex-col justify-start items-start gap-10 flex">
        
        <div className="flex-col justify-start items-start gap-2 flex">
              <div className="opacity-40 text-black text-base font-normal leading-normal">
                <input type="text" className="border-none focus:ring-0 w-[370px] h-8  rounded-md px-2 mt-2 outline outline-transparent" placeholder="Name" value={username} onChange={(e) => setName(e.target.value)}/>
              </div>
    
              <div className="w-[370px] h-[0px] opacity-50 justify-center items-center inline-flex">
                <div className="w-[370px] h-[0px] border border-black"></div>
              </div>
    
        </div>

        <div className="flex-col justify-start items-start gap-2 flex">
              <div className="opacity-40 text-black text-base font-normal leading-normal">
                <input type="text" className="border-none focus:ring-0 w-[370px] h-8  rounded-md px-2 mt-2 outline outline-transparent" placeholder="Email or Phone Number" value={useremail} onChange={(e) => setEmail(e.target.value)}/>
              </div>
    
              <div className="w-[370px] h-[0px] opacity-50 justify-center items-center inline-flex">
                <div className="w-[370px] h-[0px] border border-black"></div>
              </div>
    
        </div>

        <div className="flex-col justify-start items-start gap-2 flex">
              <div className="opacity-40 text-black text-base font-normal leading-normal">
                <input type="text" placeholder="Enter your password" className="border-none focus:ring-0 w-[370px] h-8  rounded-md px-2 mt-2 outline outline-transparent"
                value={userpw} onChange={(e) => setPassword(e.target.value)} />
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
                  onChange={(selectedOption:string) => setSelectedRole(selectedOption)}
                  placeholder="Choose Admin or User"
                />
          <div className="px-32 py-4 bg-red-500 rounded justify-center items-center gap-2.5 inline-flex">
          <div className="flex-col justify-start items-start gap-4 inline-flex">
            
            <div className="px-12 py-4 bg-red-500 rounded justify-center items-center gap-2.5 inline-flex">
                <button
                  className="bg-red-500 rounded justify-center items-center gap-2.5 inline-flex" style={{width:"32px",height:"0px"}}
                  onClick={()=>{handleSubmit()}}                >
                  <div className="text-neutral-50 text-base font-medium leading-normal">Create Account</div>
                </button>
            </div>
          </div>
          </div>
          <div className="flex-col justify-start items-center gap-8 flex">
            <div className="px-20 py-4 rounded border border-black border-opacity-40 flex-col justify-start items-start gap-2.5 flex">
              <div className="justify-start items-start gap-4 inline-flex">
                <div className="w-6 h-6 relative" />
                <div className="text-black text-base font-normal leading-normal">Sign up with Google</div>
              </div>
            </div>
            <div className="justify-start items-center gap-4 inline-flex">
              <div className="opacity-70 text-black text-base font-normal leading-normal">Already have account?</div>
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
    <div className="w-full h-[440px] pt-20 pb-6 left-0 top-[900px] absolute bg-black flex-col justify-end items-center gap-[60px] inline-flex">
      <div className="justify-center items-start gap-[87px] inline-flex">
        <div className="flex-col justify-start items-start gap-4 inline-flex">
          <div className="flex-col justify-start items-start gap-6 flex">
            <div className="flex-col justify-start items-start gap-6 flex">
              <div className="w-[118px] h-6 justify-center items-center inline-flex">
                <div className="text-neutral-50 text-2xl font-bold leading-normal tracking-wide">Exclusive</div>
              </div>
              <div className="text-neutral-50 text-xl font-medium leading-7">Subscribe</div>
            </div>
            <div className="text-neutral-50 text-base font-normal leading-normal">Get 10% off your first order</div>
          </div>
          <div className="w-[217px] pl-4 py-3 rounded border border-neutral-50 justify-start items-center gap-8 inline-flex">
            <div className="opacity-40 text-neutral-50 text-base font-normal leading-normal">Enter your email</div>
            <div className="w-6 h-6 relative" />
          </div>
        </div>
        <div className="flex-col justify-start items-start gap-6 inline-flex">
          <div className="text-neutral-50 text-xl font-medium leading-7">Support</div>
          <div className="flex-col justify-start items-start gap-4 flex">
            <div className="w-[175px] text-neutral-50 text-base font-normal leading-normal">111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</div>
            <div className="text-neutral-50 text-base font-normal leading-normal">exclusive@gmail.com</div>
            <div className="text-neutral-50 text-base font-normal leading-normal">+88015-88888-9999</div>
          </div>
        </div>
        <div className="flex-col justify-start items-start gap-6 inline-flex">
          <div className="text-neutral-50 text-xl font-medium leading-7">Account</div>
          <div className="flex-col justify-start items-start gap-4 flex">
            <div className="text-neutral-50 text-base font-normal leading-normal">My Account</div>
            <div className="text-neutral-50 text-base font-normal leading-normal">Login / Register</div>
            <div className="text-neutral-50 text-base font-normal leading-normal">Cart</div>
            <div className="text-neutral-50 text-base font-normal leading-normal">Wishlist</div>
            <div className="text-neutral-50 text-base font-normal leading-normal">Shop</div>
          </div>
        </div>
        <div className="flex-col justify-start items-start gap-6 inline-flex">
          <div className="text-neutral-50 text-xl font-medium leading-7">Quick Link</div>
          <div className="flex-col justify-start items-start gap-4 flex">
            <div className="text-neutral-50 text-base font-normal leading-normal">Privacy Policy</div>
            <div className="text-neutral-50 text-base font-normal leading-normal">Terms Of Use</div>
            <div className="text-neutral-50 text-base font-normal leading-normal">FAQ</div>
            <div className="text-neutral-50 text-base font-normal leading-normal">Contact</div>
          </div>
        </div>
        <div className="flex-col justify-start items-start gap-6 inline-flex">
          <div className="flex-col justify-start items-start gap-6 flex">
            <div className="text-neutral-50 text-xl font-medium leading-7">Download App</div>
            <div className="flex-col justify-start items-start gap-2 flex">
              <div className="opacity-70 text-neutral-50 text-xs font-medium leading-[18px]">Save $3 with App New User Only</div>
              <div className="justify-start items-center gap-2 inline-flex">
                <div className="w-20 h-20 p-0.5 bg-black justify-center items-center flex">
                  <img className="w-[76px] h-[76px] border border-white" src="https://s3-alpha-sig.figma.com/img/75f3/94c0/a1c7dc5b68a42239311e510f54d8cd59?Expires=1695600000&Signat" />
                </div>
                <div className="flex-col justify-start items-start gap-1 inline-flex">
                  <div className="w-[110px] h-10 relative bg-black">
                    <img className="w-[104px] h-[30px] left-[3px] top-[5px] absolute rounded border border-neutral-50" src="https://via.placeholder.com/104x30" />
                  </div>
                  <div className="w-[110px] h-10 p-[3px] bg-black justify-center items-center inline-flex">
                    <img className="w-[104px] h-[34px] rounded border border-white" src="https://via.placeholder.com/104x34" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="justify-start items-start gap-6 inline-flex">
            <div className="w-6 h-6 relative" />
            <div className="w-6 h-6 pr-[1.94px] justify-start items-center flex">
              <div className="w-[27.06px] h-6 relative">
              </div>
            </div>
            <div className="w-6 h-6 p-[3px] justify-center items-center flex">
              <div className="w-[18px] h-[18px] relative">
              </div>
            </div>
            <div className="w-6 h-6 relative" />
          </div>
        </div>
      </div>
      <div className="opacity-40 flex-col justify-start items-center gap-4 inline-flex">
        <div className="w-full h-[0px] opacity-50 justify-center items-center inline-flex">
          <div className="w-full h-[0px] opacity-40 border border-white"></div>
        </div>
        <div className="opacity-60 justify-start items-center gap-3 inline-flex">
          <div className="justify-start items-center gap-1.5 flex">
            <div className="w-5 h-5 p-[1.67px] justify-center items-center flex">
              <div className="w-[16.67px] h-[16.67px] relative">
              </div>
            </div>
            <div className="text-white text-base font-normal leading-normal">Copyright Rimel 2022. All right reserved</div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Signup;
