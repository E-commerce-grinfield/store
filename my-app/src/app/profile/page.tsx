import React from "react";
import ProfileUpdateForm from "../component/ProfileUpdateForm";
import SideNav from "../component/SideNav";

function page() {
  return (
    <div className=" flex-wrap ">
      <div className="  inline-flex  mt-20 ml-32 gap-[55rem]"   >
         <div className="w-40 h-5 justify-start items-center gap-3 inline-flex  ">
              <a
            className="opacity-50 text-black text-sm font-normal font-['Poppins'] leading-tight flex"
            href=""
            >
            Home
             </a>

          <a
            className="text-black text-sm font-normal font-['Poppins'] leading-tight"
            href=""
          >
            My Account
          </a>
         </div>

          <div className=" inline-flex">
          <div className="inline-flex gap-3 " ><span className="text-black text-sm font-normal font-['Poppins'] leading-tight">Welcome! </span><span className="text-red-500 text-sm font-normal font-['Poppins'] leading-tight">  Md Rimel</span></div>
          </div>
       </div>

      <div className=" mt-20  inline-flex  gap-28  ml-32 ">
          <SideNav />
           <ProfileUpdateForm />
      </div>
    </div>
  );
}

export default page;
