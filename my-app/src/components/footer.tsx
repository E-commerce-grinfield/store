import React from "react";

export function Footer() {
  return (
    <div className="w-full h-[440px] pt-20 pb-6 left-0   bg-black flex-col justify-end items-center gap-[60px] inline-flex ">
      <div className="justify-center items-start gap-[87px] inline-flex">
        <div className="flex-col justify-start items-start gap-4 inline-flex">
          <div className="flex-col justify-start items-start gap-6 flex">
            <div className="flex-col justify-start items-start gap-6 flex">
              <div className="w-[118px] h-6 justify-center items-center inline-flex">
                <div className="text-neutral-50 text-2xl font-bold leading-normal tracking-wide">
                  Exclusive
                </div>
              </div>
              <div className="text-neutral-50 text-xl font-medium leading-7">
                Subscribe
              </div>
            </div>
            <div className="text-neutral-50 text-base font-normal leading-normal">
              Get 10% off your first order
            </div>
          </div>
          <div className="w-[300px] pl-4 py-3 rounded border border-neutral-50 justify-start items-center gap-8 inline-flex">
            <div className="opacity-40 text-neutral-50 text-base font-normal leading-normal">
              Enter your email
            </div>
            <img
              className="w-[35px] h-[35px]  ml-auto"
              src="./assets/icons/footer-right-arrow-icon.svg"
            />
            <div className="w-6 h-6 relative" />
          </div>
        </div>
        <div className="flex-col justify-start items-start gap-6 inline-flex">
          <div className="text-neutral-50 text-xl font-medium leading-7">
            Support
          </div>
          <div className="flex-col justify-start items-start gap-4 flex">
            <div className="w-[175px] text-neutral-50 text-base font-normal leading-normal">
              111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
            </div>
            <div className="text-neutral-50 text-base font-normal leading-normal">
              exclusive@gmail.com
            </div>
            <div className="text-neutral-50 text-base font-normal leading-normal">
              +88015-88888-9999
            </div>
          </div>
        </div>
        <div className="flex-col justify-start items-start gap-6 inline-flex">
          <div className="text-neutral-50 text-xl font-medium leading-7">
            Account
          </div>
          <div className="flex-col justify-start items-start gap-4 flex">
            <div className="text-neutral-50 text-base font-normal leading-normal">
              My Account
            </div>
            <div className="text-neutral-50 text-base font-normal leading-normal">
              Login / Register
            </div>
            <div className="text-neutral-50 text-base font-normal leading-normal">
              Cart
            </div>
            <div className="text-neutral-50 text-base font-normal leading-normal">
              Wishlist
            </div>
            <div className="text-neutral-50 text-base font-normal leading-normal">
              Shop
            </div>
          </div>
        </div>
        <div className="flex-col justify-start items-start gap-6 inline-flex">
          <div className="text-neutral-50 text-xl font-medium leading-7">
            Quick Link
          </div>
          <div className="flex-col justify-start items-start gap-4 flex">
            <div className="text-neutral-50 text-base font-normal leading-normal">
              Privacy Policy
            </div>
            <div className="text-neutral-50 text-base font-normal leading-normal">
              Terms Of Use
            </div>
            <div className="text-neutral-50 text-base font-normal leading-normal">
              FAQ
            </div>
            <div className="text-neutral-50 text-base font-normal leading-normal">
              Contact
            </div>
          </div>
        </div>
        <div className="flex-col justify-start items-start gap-6 inline-flex">
          <div className="flex-col justify-start items-start gap-6 flex">
            <div className="text-neutral-50 text-xl font-medium leading-7">
              Download App
            </div>
            <div className="flex-col justify-start items-start gap-2 flex">
              <div className="opacity-70 text-neutral-50 text-xs font-medium leading-[18px]">
                Save $3 with App New User Only
              </div>
              <div className="justify-start items-center gap-2 inline-flex">
                <div className="w-20 h-20 p-0.5 bg-black justify-center items-center flex">
                  <img
                    className="w-[76px] h-[76px] border border-white"
                    src="./assets/icons/footer-qrcode-icon.svg"
                  />
                </div>
                <div className="flex-col justify-start items-start gap-1 inline-flex">
                  <div className="w-[110px] h-10 relative bg-black">
                    <img
                      className="w-[104px] h-[30px] left-[3px] top-[5px] absolute rounded border border-neutral-50"
                      src="./assets/icons/footer-playstore-icon.svg"
                    />
                  </div>
                  <div className="w-[110px] h-10 p-[3px] bg-black justify-center items-center inline-flex">
                    <img
                      className="w-[104px] h-[34px] rounded border border-white"
                      src="./assets/icons/footer-appstore-icon.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="justify-start items-start gap-6 inline-flex">
            <div className="w-6 h-6 relative" />
            <div className="w-6 h-6 pr-[1.94px] justify-start items-center flex">
              <div className="w-[27.06px] h-6 relative"></div>
            </div>
            <div className="w-6 h-6 p-[3px] justify-center items-center flex">
              <div className="w-[18px] h-[18px] relative"></div>
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
              <div className="w-[16.67px] h-[16.67px] relative"></div>
            </div>
            <div className="text-white text-base font-normal leading-normal">
              Copyright Rimel 2022. All right reserved
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
