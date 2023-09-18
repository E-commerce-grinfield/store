import React from 'react'

function NavBar() {
  return (
    <div className="w-screen h-9 justify-start items-center gap-32 inline-flex">
  <div className="justify-start items-start gap-40 flex">
    <div className="w-28 h-6 justify-center items-center flex">
      <div className="text-black text-2xl font-bold font-['Inter'] leading-normal tracking-wide">Exclusive</div>
    </div>
    <div className="justify-start items-start gap-12 flex">
      <div className="w-12 h-6 justify-center items-center flex">
        <div className="text-center text-black text-base font-normal font-['Poppins'] leading-normal">Home</div>
      </div>
      <div className="w-16 h-6 justify-center items-center flex">
        <div className="text-center text-black text-base font-normal font-['Poppins'] leading-normal">Contact</div>
      </div>
      <div className="w-12 h-6 justify-center items-center flex">
        <div className="text-center text-black text-base font-normal font-['Poppins'] leading-normal">About</div>
      </div>
      <div className="w-16 h-6 justify-center items-center flex">
        <div className="text-center text-black text-base font-normal font-['Poppins'] leading-normal">Sign Up</div>
      </div>
    </div>
  </div>
  <div className="justify-start items-center gap-6 flex">
    <div className="pl-5 pr-3 py-1.5 bg-neutral-100 rounded flex-col justify-center items-center gap-2.5 inline-flex">
      <div className="justify-center items-center gap-8 inline-flex">
        <div className="opacity-50 text-black text-xs font-normal font-['Poppins'] leading-none">What are you looking for?</div>
        <div className="w-6 h-6 relative" />
      </div>
    </div>
    <div className="justify-center items-center gap-4 flex">
      <div className="w-8 h-8 relative" />
      <div className="w-8 h-8 justify-center items-center flex">
        <div className="w-8 h-8 relative flex-col justify-start items-start flex" />
      </div>
      <div className="w-8 h-8 relative bg-red-500 rounded-3xl" />
    </div>
  </div>
</div>
  )
}

export default NavBar