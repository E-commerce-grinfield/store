import Link from 'next/link'
import React from 'react'


function header() {
  return (
    

    
	<div>

<div>

  
</div>

    
<div className="w-full w-[1440px] h-12 pl-[445px] pr-[136px] py-3 bg-black justify-end items-center inline-flex">
  <div className="justify-start items-start gap-[531px] inline-flex">
    <div className="justify-start items-center gap-2 flex">
      <div className="w-[474px] h-[18px] text-neutral-50 text-sm font-normal leading-[21px]">Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</div>
      <div className="text-center text-neutral-50 text-sm font-semibold underline leading-normal">ShopNow</div>
    </div>
    <div className="justify-center items-center gap-[5px] flex">
      <div className="text-neutral-50 text-sm font-normal leading-[21px]">English</div>
      <div className="w-6 h-6 relative"></div>
    </div>
  </div>
</div>



<div>
{/*search bar */}
<div style={{ marginTop: "40px", marginLeft: "700px" }} className="text-black text-2xl font-bold leading-normal tracking-wide">
  <div className="flex items-center space-x-20 w-4/5">
    <div className="w-12 h-6 justify-center items-center inline-flex">
      <div className="text-center text-black text-base font-normal leading-normal">
        <Link href="/">Home</Link>
      </div> 
    </div>
    <div className="w-16 h-6 justify-center items-center inline-flex">
  <Link href="/contactUs">
    <div className="text-center text-black text-base font-normal leading-normal">Contact</div>
  </Link>
</div>
<div className="w-12 h-6 justify-center items-center inline-flex">
  <a href="/about">
    <div className="text-center text-black text-base font-normal leading-normal">About</div>
  </a>
</div>
<div className="w-16 h-6 justify-center items-center inline-flex">
  <a href="/signup"> 
    <div className="text-center text-black text-base font-normal leading-normal">signUp</div>
  </a>
</div>

<div  >

  <div  className="justify-center items-center gap-1 inline-flex">
  <div  className="w-0 h-15 relative"></div>
    
    <input style={{marginLeft:"200px"}} className= "opacity-100 text-black text-xs font-normal leading-none w-60 h-9 pl-5 pr-3 py-1.5 bg-neutral-100 rounded flex-col justify-center items-center gap-2.5 inline-flex"></input>
  
    <Link href="/cart">
  <img style={{ marginLeft: "20px" }} className='w-6 h-15 relative' src='https://www.freeiconspng.com/thumbs/buy-icon-png/buy-icon-32.png'/>
</Link>

<Link href="/profile">
<img style={{marginLeft:"40px"}} className='w-8 h-15 relative' src='https://thumbs.dreamstime.com/b/user-profile-avatar-black-line-icon-vector-illustration-isolated-white-background-121102129.jpg'/>    
</Link>

<Link href="/favorite">

<img style={{marginLeft:"-70px"}} className=' w-20 h-19 relative' src='https://media.istockphoto.com/id/914933448/vector/heart-flat-style-icon-vector-love-symbol-valentines-day-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=z7ioIZ1rcp4ojHn-6J-WBPAGU3ruGMapeutIwlAXT7U='/>    
</Link>
  </div>
  
</div>

  </div>
</div>

{/*footer*/}
<div >


</div>
</div>

	 
	</div>
  

  
  )
  
}

export default header
