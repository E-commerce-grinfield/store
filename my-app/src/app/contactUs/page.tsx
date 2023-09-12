"use client"

import React, { useState, useRef, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import emailjs from "@emailjs/browser";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css"

export default function ContactUs() {
 

  const formRef = useRef();

  useEffect(() => {
    emailjs.init("3simNovWCE8sqfYgx"); 
  }, []);

  const sendMail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("rbk_project", "template_tl8bsvn", formRef.current, "3simNovWCE8sqfYgx")
      .then(
        () => {
          toast.success("Message sent");
        },
        (error) => {
          toast.error(`Something went wrong: ${error.message}`);
        }
      );
  };

  return (
    <div>
    {/* home contact */}
    <form ref={formRef} onSubmit={sendMail}>
      <div style={{ marginTop: "150px", marginLeft: "100px" }}>
        <div className="w-32 h-5 justify-start items-center gap-3 inline-flex">
          <div className="opacity-50 text-black text-sm font-normal leading-tight">Home</div>
          <div className="w-3.5 h-px origin-top-left rotate-[117.05deg] border border-black border-opacity-50"></div>
          <div className="text-black text-sm font-normal leading-tight">Contact</div>
        </div>
      </div>
      {/* call to us write to us */}
      <div style={{ marginTop: "150px", marginLeft: "100px" }}>
        <div className="w-64 h-96 flex-col justify-start items-start gap-8 inline-flex">
          <div className="flex-col justify-start items-start gap-6 flex">
            <div className="justify-start items-center gap-4 inline-flex">
              <div className="w-10 h-10 relative bg-red-500 rounded-3xl"></div>
              <div className="text-black text-base font-medium leading-normal">Call To Us</div>
            </div>
            <div className="flex-col justify-start items-start gap-4 flex">
              <div className="w-64 text-black text-sm font-normal leading-tight">
                We are available 24/7, 7 days a week.
              </div>
              <div className="text-black text-sm font-normal leading-tight">Phone: +216 5590385069</div>
            </div>
          </div>
          <div className="w-64 h-px opacity-50 justify-center items-center inline-flex">
            <div className="w-64 h-px border border-black"></div>
          </div>
          <div className="flex-col justify-start items-start gap-6 flex">
            <div className="justify-start items-center gap-4 inline-flex">
              <div className="w-10 h-10 relative bg-red-500 rounded-3xl"></div>
              <div className="text-black text-base font-medium leading-normal">Write To Us</div>
            </div>
            <div className="flex-col justify-start items-start gap-4 flex">
              <div className="w-64 text-black text-sm font-normal leading-tight">
                Fill out our form and we will contact you within 24 hours.
              </div>
              <div className="text-black text-sm font-normal leading-tight">Emails: customer@exclusive.com</div>
              <div className="text-black text-sm font-normal leading-tight">Emails: oubaidbensaid@exclusive.com</div>
            </div>
          </div>
        </div>
      </div>
      {/* inputs */}
      <div style={{ marginLeft: "1000px", marginTop: "-550px" }}>
        <div  className=" w-9 h-96 px-8 py-10 bg-white  justify-center items-center inline-flex">
          <div className="self-stretch flex-col justify-start items-end gap-8 inline-flex">
            <div className="justify-start items-start gap-4 inline-flex">
              <div className="w-60 h-12 relative">
                <input
                  className="text-center w-60 h-12 left-0 top-0 absolute bg-neutral-100 rounded"
                  name="your name"
                  type="text"
                  placeholder="your name"
                />
                <div className="left-[16px] top-[13px] absolute opacity-10">
                  <span className="text-black text-base font-normal leading-normal"></span>
                  <span className="text-red-500 text-base font-normal leading-normal">*</span>
                </div>
              </div>
              <div className="w-60 h-12 relative">
                <input
                  className="text-center w-60 h-12 left-0 top-0 absolute bg-neutral-100 rounded"
                  name="your email"
                  type="text"
                  placeholder="Email"
                />
                <div className="left-[16px] top-[13px] absolute opacity-10">
                  <span className="text-black text-base font-normal leading-normal"></span>
                  <span className="text-red-500 text-base font-normal leading-normal">*</span>
                </div>
              </div>
              <div className="w-60 h-12 relative">
                <input
                  className="text-center w-60 h-12 left-0 top-0 absolute bg-neutral-100 rounded"
                  name="your phone"
                  type="text"
                  placeholder="your phone"
                />
                <div  className="left-[16px] top-[13px] absolute opacity-10">
                  <span  className="text-black text-base font-normal leading-normal"> </span>
                  <span  className="text-red-500 text-base font-normal leading-normal">*</span>
                </div>
              </div>
            </div>
            <div  className= " w-96 h-52 relative">
              <input
                 className="text-center w-96 h-56 left-0 top-0 absolute bg-neutral-100 rounded"
                name="your message"
                type="text"
                placeholder="your message"
              />
              <div  className="left-[16px] top-[13px] absolute opacity-50 text-black text-base font-normal leading-normal">
              </div>
            </div>
            <button type="submit">
              <div style={{ marginLeft: "0px", marginTop: "250px" }}>
                <div className="w-52 h-14 px-1 py-4 bg-red-500 rounded justify-center items-center gap-2.5 inline-flex">
                  <div className="text-neutral-50 text-base font-medium leading-normal">Send Massage</div>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </form>
    <ToastContainer position="top-center" hideProgressBar={true} theme="light" autoClose={2000} />
  </div>
  
  );
}


// "use client"

// import React, { useRef, useEffect } from "react";
// import emailjs from "@emailjs/browser";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css"; // Import toast styles

// export default function ContactUs() {
//   const formRef = useRef();

//   useEffect(() => {
//     emailjs.init("3simNovWCE8sqfYgx"); // Replace with your EmailJS user ID
//   }, []);

//   const sendMail = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm("rbk_project", "template_ln6g2l3", formRef.current, "3simNovWCE8sqfYgx")
//       .then(
//         () => {
//           toast.success("Message sent");
//         },
//         (error) => {
//           toast.error(`Something went wrong: ${error.message}`);
//         }
//       );
//   };

//   return (
//     <div>
//       <form ref={formRef} onSubmit={sendMail}>
//         <h1>Send us your queries</h1>
//         <div>
//           <input type="text" name="name" placeholder="Your name" />
//           <input type="text" name="email" placeholder="Your Email" />
//           <input type="text" name="phone" placeholder="Your Phone" />
//           <input type="text" name="message" placeholder="Your Message" />
//         </div>
//         <button type="submit">Send</button>
//       </form>
//       <ToastContainer position="top-center" hideProgressBar={true} theme="light" autoClose={2000} />
//     </div>
//   );
// }








