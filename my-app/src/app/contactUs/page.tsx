// "use client"

// import {useState } from "react"
// import axios from "axios"
// import { Button } from "@chakra-ui/react"

// export default function ContactUs() {
//   const [name , setName]=useState("")
//   const [email , setEmail]=useState("")
//   const [number , setNumber]=useState("")
//   const [message , setMessage]=useState("")
//   console.log(name , email , number , message)

//   const sendMail = async (e) =>{
//     e.preventDefault();
//     const response =  await fetch("http://localhost:3000/api/sendEmail",{
//       method:"post",
//       headers: {
//           "content-type" : "application/json"
//       } , 
//       body:JSON.stringify({
//         name,
//         email,
//         number,
//         message

//       })

//     })
//     console.log( await response.json())

//   }

//   return (
//     <div>
//       {/*home contact */}
// <div  style={{marginTop:"150px" , marginLeft:"100px"}} >
//   <form onSubmit={sendMail} />
// <div className="w-32 h-5 justify-start items-center gap-3 inline-flex">
//   <div className="opacity-50 text-black text-sm font-normal leading-tight">Home</div>
//   <div className="w-3.5 h-px origin-top-left rotate-[117.05deg] border border-black border-opacity-50"></div>
//   <div className="text-black text-sm font-normal leading-tight">Cantact</div>
// </div>
//     </div>
// {/*call to us write to us*/}

// <div style={{marginTop:"150px" , marginLeft:"100px"}}>


// <div className="w-64 h-96 flex-col justify-start items-start gap-8 inline-flex">
//   <div className="flex-col justify-start items-start gap-6 flex">
//     <div className="justify-start items-center gap-4 inline-flex">
//       <div className="w-10 h-10 relative bg-red-500 rounded-3xl"></div>
//       <div className="text-black text-base font-medium leading-normal">Call To Us</div>
//     </div>
//     <div className="flex-col justify-start items-start gap-4 flex">
//       <div className="w-64 text-black text-sm font-normal leading-tight">We are available 24/7, 7 days a week.</div>
//       <div className="text-black text-sm font-normal leading-tight">Phone: +216 5590385069</div>
//     </div>
//   </div>
//   <div className="w-64 h-px opacity-50 justify-center items-center inline-flex">
//     <div className="w-64 h-px border border-black"></div>
//   </div>
//   <div className="flex-col justify-start items-start gap-6 flex">
//     <div className="justify-start items-center gap-4 inline-flex">
//       <div className="w-10 h-10 relative bg-red-500 rounded-3xl"></div>
//       <div className="text-black text-base font-medium leading-normal">Write To US</div>
//     </div>
//     <div className="flex-col justify-start items-start gap-4 flex">
//       <div className="w-64 text-black text-sm font-normal leading-tight">Fill out our form and we will contact you within 24 hours.</div>
//       <div className="text-black text-sm font-normal leading-tight">Emails: customer@exclusive.com</div>
//       <div className="text-black text-sm font-normal leading-tight">Emails: oubaidbensaid@exclusive.com</div>
//     </div>
//   </div>
// </div>
// </div>

// {/*inputs */}
// <div style={{marginLeft:"1000px" , marginTop:"-550px"}}>

// <div className="w-96 h-96 px-8 py-10 bg-white rounded shadow justify-center items-center inline-flex">
//   <div className="self-stretch flex-col justify-start items-end gap-8 inline-flex">
//     <div className="justify-start items-start gap-4 inline-flex">
//       <div className="w-60 h-12 relative">
//         <input  className="w-60 h-12 left-0 top-0 absolute bg-neutral-100 rounded"
//         name = " your name"
//         type="text"
//         required
//         value={name}
//         onChange={(e)=>{
//           setName(e.target.value)

//         }}  
//         />
//         <div  className="left-[16px] top-[13px] absolute opacity-10"><span className="text-black text-base font-normal leading-normal">Your Name </span><span className="text-red-500 text-base font-normal leading-normal">*</span></div>
//       </div>
//       <div className="w-60 h-12 relative">


//         <input className="w-60 h-12 left-0 top-0 absolute bg-neutral-100 rounded"
//         name = "your email"
//         type="text"
//         required
//         value={email}
//         onChange={(e)=>{
//           setEmail(e.target.value)
//         }}

//         />
//         <div className="left-[16px] top-[13px] absolute opacity-10"><span className="text-black text-base font-normal leading-normal">Your Email </span><span className="text-red-500 text-base font-normal leading-normal">*</span></div>
//       </div>
//       <div className="w-60 h-12 relative">

//         <input className="w-60 h-12 left-0 top-0 absolute bg-neutral-100 rounded"
//         name="your phone"
//         type="text"
//         required
//         value={number}
//         onChange={(e)=>{
//           setNumber(e.target.value)
//         }}

//         />
//         <div className="left-[16px] top-[13px] absolute opacity-10"><span className="text-black text-base font-normal leading-normal">Your Number </span><span className="text-red-500 text-base font-normal leading-normal">*</span></div>
//       </div>
//     </div>
//     <div className="w-96 h-52 relative">
//       <input className="w-96 h-52 left-0 top-0 absolute bg-neutral-100 rounded"
//       name=" your message"
//       type="text"
//       required
//       value={message}
//       onChange={(e)=>{
//         setMessage(e.target.value)
//       }}
      
      
//       />
//       <div className="left-[16px] top-[13px] absolute opacity-50 text-black text-base font-normal leading-normal">Your Massage</div>
//     </div>
    
//     </div>
//   </div>
// </div>


// {/*send a message*/}
// <button type="submit">
// <div style={{marginLeft:"1350px" , marginTop:"0px"}} >
// <div className="w-52 h-14 px-1 py-4 bg-red-500 rounded justify-center items-center gap-2.5 inline-flex">
//   <div className="text-neutral-50 text-base font-medium leading-normal">Send Massage</div>
// </div>
// </div>
// </button>
// </div>


//   )
// }

