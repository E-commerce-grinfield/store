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


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
          const user = {
            email:useremail,
            password:userpw
        };
        console.log(user,"user");
        const res = await axios.post('/api/login', user);
        console.log(res,"response");
        window.localStorage.setItem('User', JSON.stringify(res.data));
        }
       catch (err){
console.log(err,"error");

       }
        
       
        //window.location.href = '/';

    }
  return (
    <div className="w-full relative bg-white">
    <div className="w-full h-12 pl-[445px] pr-[136px] py-3 left-0 top-0 absolute bg-black justify-end items-center inline-flex">
      <div className="justify-start items-start gap-[231px] inline-flex">
        <div className="justify-start items-center gap-2 flex">
          <div className="w-[474px] h-[18px] text-neutral-50 text-sm font-normal leading-[21px]">Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</div>
          <div className="text-center text-neutral-50 text-sm font-semibold underline leading-normal">ShopNow</div>
        </div>
        <div className="justify-center items-center gap-[5px] flex">
          <div className="text-neutral-50 text-sm font-normal leading-[21px]">English</div>
          <div className="w-6 h-6 relative" />
        </div>
      </div>
    </div>
    <div className="left-[135px] top-[86px] absolute justify-start items-center gap-[210px] inline-flex">
      <div className="justify-start items-start gap-[232px] flex">
        <div className="w-[118px] h-6 justify-center items-center flex">
          <div className="text-black text-2xl font-bold leading-normal tracking-wide">Exclusive</div>
        </div>
        <div className="justify-start items-start gap-12 flex">
          <div className="w-12 h-6 justify-center items-center flex">
            <div className="text-center text-black text-base font-normal leading-normal">Home</div>
          </div>
          <div className="w-[66px] h-6 justify-center items-center flex">
            <div className="text-center text-black text-base font-normal leading-normal">Contact</div>
          </div>
          <div className="w-12 h-6 justify-center items-center flex">
            <div className="text-center text-black text-base font-normal leading-normal">About</div>
          </div>
          <div className="w-[61px] h-6 justify-center items-center flex">
            <div className="text-center text-black text-base font-normal leading-normal">Sign Up</div>
          </div>
        </div>
      </div>
      <div className="justify-start items-center gap-6 flex">
        <div className="pl-5 pr-3 py-[7px] bg-neutral-100 rounded flex-col justify-center items-center gap-2.5 inline-flex">
          <div className="justify-center items-center gap-[34px] inline-flex">
            <div className="opacity-50 text-black text-xs font-normal leading-[18px]">What are you looking for?</div>
            <div className="w-6 h-6 relative" />
          </div>
        </div>
      </div>
    </div>
    <div className="w-full h-[0px] left-0 top-[140px] absolute justify-center items-center inline-flex">
      <div className="w-full h-[0px] origin-top-left rotate-180 opacity-30 border border-black"></div>
    </div>
    <div className="left-0 top-[200px] absolute justify-start items-center gap-[129px] inline-flex">
      <div className="pt-[75px] bg-slate-300 rounded-tr rounded-br justify-end items-center flex">
        <img className="w-[300] h-[706px]" src="https://via.placeholder.com/500x500" />
      </div>
      <div className="flex-col justify-start items-start gap-10 inline-flex">
        <div className="flex-col justify-start items-start gap-12 flex">
          <div className="flex-col justify-start items-start gap-6 flex">
            <div className="text-black text-4xl font-medium leading-[30px] tracking-wider">Log in to Exclusive</div>
            <div className="text-black text-base font-normal leading-normal">Enter your details below</div>
          </div>
          <div className="flex-col justify-start items-start gap-10 flex">
            <div className="flex-col justify-start items-start gap-2 flex">
              <div className="opacity-40 text-black text-base font-normal leading-normal">
                <input type="text" className="border-none focus:ring-0 w-[370px] h-8  rounded-md px-2 mt-2 outline outline-transparent" placeholder="Email or Phone Number" value={useremail} onChange={(e) => setUserEmail(e.target.value)}/>
              </div>
    
              <div className="w-[370px] h-[0px] opacity-50 justify-center items-center inline-flex">
                <div className="w-[370px] h-[0px] border border-black"></div>
              </div>
    
            </div>
            <div className="flex-col justify-start items-start gap-2 flex">
              <div className="opacity-40 text-black text-base font-normal leading-normal">
                <input type="text" placeholder="Enter your password" className="border-none focus:ring-0 w-[370px] h-8  rounded-md px-2 mt-2 outline outline-transparent"
                value={userpw} onChange={(e) => setUserPassword(e.target.value)} />
              </div>
              <div className="w-[370px] h-[0px] opacity-50 justify-center items-center inline-flex">
                <div className="w-[370px] h-[0px] border border-black"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="justify-start items-center gap-[87px] inline-flex">
          <div className="flex-col justify-start items-start gap-4 inline-flex">
            <div className="px-12 py-4 bg-red-500 rounded justify-center items-center gap-2.5 inline-flex">
                <button
                    className="px-12 py-4 bg-red-500 rounded justify-center items-center gap-2.5 inline-flex"
                    onClick={
                       handleSubmit
                    }
                  >
                    <div className="text-neutral-50 text-base font-medium leading-normal">Log In</div>
                  </button>
            </div>
          </div>
          <div className="text-red-500 text-base font-normal leading-normal">Forget Password?</div>
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
                  <img className="w-[76px] h-[76px] border border-white" src="https://via.placeholder.com/76x76" />
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
    
  )
            } 


export default signin