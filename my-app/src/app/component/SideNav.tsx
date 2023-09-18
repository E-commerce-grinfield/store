import React from 'react'

function SideNav() {
  return (
    <div className="w-48 h-72 relative">
  <div className="left-0 top-0 relative text-black text-base font-medium font-['Poppins'] leading-normal">Manage My Account</div>
  <div className="left-0 top-[152px] absolute text-black text-base font-medium font-['Poppins'] leading-normal">My Orders</div>
  <div className="w-24 h-6 left-0 top-[264px] absolute text-black text-base font-medium font-['Poppins'] leading-normal">My WishList</div>
  <div className="w-40 h-20 left-[35px] top-[40px] absolute flex-col justify-start items-start gap-2 inline-flex">
    <a className="text-red-500 text-base font-normal font-['Poppins'] leading-normal" href='"#'>My Profile</a>
    <div className="opacity-50 text-black text-base font-normal font-['Poppins'] leading-normal">Address Book</div>
    <div className="opacity-50 text-black text-base font-normal font-['Poppins'] leading-normal">My Payment Options</div>
  </div>
  <div className="w-36 h-14 left-[35px] top-[192px] absolute flex-col justify-start items-start gap-2 inline-flex">
    <div className="opacity-50 text-black text-base font-normal font-['Poppins'] leading-normal">My Returns</div>
    <div className="opacity-50 text-black text-base font-normal font-['Poppins'] leading-normal">My Cancellations</div>
  </div>
</div>
  )
}

export default SideNav