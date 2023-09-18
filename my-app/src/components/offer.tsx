import React from "react";

export function Offer() {
  return (
    <div className="w-full h-12   py-3 bg-black justify-center items-center inline-flex mx-auto">
      <div className="justify-start items-start gap-[531px] inline-flex">
        <div className="items-center gap-2 flex">
          <div className="w-[474px] h-[18px] text-neutral-50 text-sm font-normal leading-[21px]">
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          </div>
          <div className="text-center cursor-pointer text-neutral-50 text-sm font-semibold underline leading-normal">
            ShopNow
          </div>
        </div>
        <div className="justify-center items-center gap-[5px] flex">
          <div className="text-neutral-50 text-sm font-normal leading-[21px] cursor-pointer mr-[5px]">
            English
          </div>
          <img src="./assets/icons/offer-bottom-arrow.svg" alt="Arrow Icon" />
        </div>
      </div>
    </div>
  );
}
