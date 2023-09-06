import React from 'react'

export default function Header() {
  return (
   
    <div className="w-96 h-12 pl-96 pr-32 py-3 bg-black justify-end items-center inline-flex">
    <div className="justify-start items-start gap-56 inline-flex">
      <div className="justify-start items-center gap-2 flex">
        <div className="w-96 h-4 text-neutral-50 text-sm font-normal leading-tight">Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</div>
        <div className="text-center text-neutral-50 text-sm font-semibold underline leading-normal">ShopNow</div>
      </div>
      <div className="justify-center items-center gap-1 flex">
        <div className="text-neutral-50 text-sm font-normal leading-tight">English</div>
        <div className="w-6 h-6 relative" />
      </div>
    </div>
  </div>
  )
}
