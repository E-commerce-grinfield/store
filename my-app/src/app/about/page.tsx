import type { NextPage } from "next";
import { useCallback } from "react";

function About () {
  

  return (
    <div className="relative bg-bg w-full h-[2905px] overflow-hidden text-left text-sm text-text2 font-title-12px-medium">
      <div className="absolute top-[0px] left-[0px] bg-text2 w-[1440px] h-12 overflow-hidden text-text">
        <div className="absolute top-[12px] right-[136px] flex flex-row items-start justify-start gap-[231px]">
         
          <div className="flex flex-row items-center justify-center gap-[5px]">
            <div className="relative leading-[21px]">English</div>
            <img
              className="relative w-6 h-6 overflow-hidden shrink-0"
              alt=""
              src="/dropdown.svg"
            />
          </div>
        </div>
      </div>
      
      <img
        className="absolute top-[142px] left-[0px] w-[1440px] h-[0.5px]"
        alt=""
        src="/line-3.svg"
      />
      <div className="absolute top-[222px] left-[135px] flex flex-row items-center justify-start gap-[12px]">
        <div className="relative leading-[21px] opacity-[0.5]">Home</div>
        <img
          className="relative w-[6.89px] h-[12.2px]"
          alt=""
          src="/line-13.svg"
        />
        <div className="relative leading-[21px]">About</div>
        <img
          className="relative w-[13.19px] h-0 hidden"
          alt=""
          src="/line-14.svg"
        />
        <div className="relative leading-[21px] hidden">Nothing</div>
        <img
          className="relative w-[13.19px] h-0 hidden"
          alt=""
          src="/line-15.svg"
        />
        <div className="relative leading-[21px] hidden">Nothing</div>
        <img
          className="relative w-[13.19px] h-0 hidden"
          alt=""
          src="/line-16.svg"
        />
        <div className="relative leading-[21px] hidden">Nothing</div>
      </div>
      <div className="absolute top-[422px] left-[135px] flex flex-col items-start justify-start gap-[40px] text-justify text-35xl font-heading-32px-medium">
        <div className="relative tracking-[0.06em] leading-[64px] font-semibold">
          Our Story
        </div>
        <div className="flex flex-col items-start justify-start gap-[24px] text-left text-base font-title-12px-medium">
          <div className="relative leading-[26px] inline-block w-[525px]">{`Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. `}</div>
          <div className="relative leading-[26px] inline-block w-[505px]">
            Exclusive has more than 1 Million products to offer, growing at a
            very fast. Exclusive offers a diverse assotment in categories
            ranging from consumer.
          </div>
        </div>
      </div>
      <div className="absolute top-[285px] left-[734px] rounded-tl rounded-tr-none rounded-br-none rounded-bl bg-palevioletred w-[705px] h-[609px] overflow-hidden">
        <img
          className="absolute top-[0px] left-[0px] w-[837px] h-[609px] object-cover"
          alt=""
          src="/portraittwoafricanfemalesholdingshoppingbagswhilereactingsomethingtheirsmartphone-1@2x.png"
        />
      </div>
      <div className="absolute top-[2164px] left-[248px] flex flex-row items-center justify-center gap-[88px] text-xl">
        <div className="flex flex-col items-center justify-start gap-[24px]">
          <img className="relative w-20 h-20" alt="" src="/services.svg" />
          <div className="flex flex-col items-center justify-start gap-[8px]">
            <div className="relative leading-[28px] font-semibold">
              FREE AND FAST DELIVERY
            </div>
            <div className="relative text-sm leading-[21px] text-center">
              Free delivery for all orders over $140
            </div>
          </div>
        </div>
        <div className="w-[262px] flex flex-col items-center justify-start gap-[24px]">
          <img className="relative w-20 h-20" alt="" src="/services1.svg" />
          <div className="flex flex-col items-center justify-start gap-[8px]">
            <div className="relative leading-[28px] font-semibold">
              24/7 CUSTOMER SERVICE
            </div>
            <div className="relative text-sm leading-[21px]">
              Friendly 24/7 customer support
            </div>
          </div>
        </div>
        <div className="hidden flex-col items-center justify-start gap-[24px]">
          <img className="relative w-20 h-20" alt="" src="/services2.svg" />
          <div className="flex flex-col items-center justify-start gap-[8px]">
            <div className="relative leading-[28px] font-semibold">
              MONEY BACK GUARANTEE
            </div>
            <div className="relative text-sm leading-[21px]">
              We reurn money within 30 days
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start gap-[24px]">
          <img className="relative w-20 h-20" alt="" src="/services3.svg" />
          <div className="flex flex-col items-center justify-start gap-[8px]">
            <div className="relative leading-[28px] font-semibold">
              MONEY BACK GUARANTEE
            </div>
            <div className="relative text-sm leading-[21px]">
              We reurn money within 30 days
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[1034px] left-[135px] flex flex-row items-start justify-start gap-[30px] text-13xl font-heading-32px-medium">
        <div className="relative rounded box-border w-[270px] h-[230px] overflow-hidden shrink-0 border-[1px] border-solid border-gray-200">
        <div className="w-44 h-44 mt-10 ml-10 flex-col justify-start items-center gap-6 inline-flex">
  <div className="w-20 h-20 relative">
    <div className="w-20 h-20 left-0 top-0 absolute">
      <div className="w-20 h-20 left-0 top-0 absolute opacity-30 bg-zinc-800 rounded-full" />
      <div className="w-14 h-14 left-[11px] top-[11px] absolute bg-black rounded-full" />
    </div>
    <div className="w-10 h-10 px-1 py-1 left-[20px] top-[20px] absolute justify-center items-center inline-flex">
      <div className="w-8 h-7 relative">
      </div>
    </div>
  </div>
  <div className="flex-col justify-start items-center gap-3 flex">
    <div className="text-black text-3xl font-bold leading-loose tracking-wider">10.5k </div>
    <div className="text-center text-black text-base font-normal leading-normal">Sallers active our site</div>
  </div>
</div>
        </div>
        <div className="relative rounded bg-secondary-2 shadow-[0px_2px_10px_2px_rgba(0,_0,_0,_0.2)] w-[270px] h-[230px] overflow-hidden shrink-0 text-bg">
          <div className="absolute top-[32px] left-[35px] flex flex-col items-center justify-start gap-[24px]">
            <img className="relative w-20 h-20" alt="" src="/services5.svg" />
            <div className="flex flex-col items-center justify-start gap-[8px]">
              <b className="relative tracking-[0.04em] leading-[30px]">33k</b>
              <div className="relative text-base leading-[24px] font-title-12px-medium">
                Mopnthly Produduct Sale
              </div>
            </div>
          </div>
        </div>
        <div className="relative rounded box-border w-[270px] h-[230px] overflow-hidden shrink-0 border-[1px] border-solid border-gray-200">
        <div className="w-64 h-44 flex-col mt-10 justify-start items-center gap-6 inline-flex">
  <div className="w-20 h-20 relative">
    <div className="w-20 h-20 left-0 top-0 absolute">
      <div className="w-20 h-20 left-0 top-0 absolute opacity-30 bg-zinc-800 rounded-full" />
      <div className="w-14 h-14 left-[11px] top-[11px] absolute bg-black rounded-full" />
    </div>
    <div className="w-10 h-10 left-[20px] top-[20px] absolute" />
  </div>
  <div className="flex-col justify-start items-center gap-3 flex">
    <div className="text-black text-3xl font-bold leading-loose tracking-wider">45.5k</div>
    <div className="text-black text-base font-normal leading-normal">Customer active in our site</div>
  </div>
</div>
        </div>
        <div className="relative rounded box-border w-[270px] h-[230px] overflow-hidden shrink-0 border-[1px] border-solid border-gray-200">
        <div className="w-52 h-44 flex-col mt-10 justify-start items-center gap-6 inline-flex">
  <div className="w-20 h-20 relative">
    <div className="w-20 h-20 left-0 top-0 absolute">
      <div className="w-20 h-20 left-0 top-0 absolute opacity-30 bg-zinc-800 rounded-full" />
      <div className="w-14 h-14 left-[11px] top-[11px] absolute bg-black rounded-full" />
    </div>
    <div className="w-10 h-10 px-1 py-1 left-[20px] top-[20px] absolute justify-center items-center inline-flex">
      <div className="w-8 h-8 relative">
      </div>
    </div>
  </div>
  <div className="flex-col justify-start items-center gap-3 flex">
    <div className="text-black text-3xl font-bold leading-loose tracking-wider">25k</div>
    <div className="text-black text-base font-normal leading-normal">Anual gross sale in our site</div>
  </div>
</div>
        </div>
      </div>
      <div className="absolute top-[1404px] left-[135px] flex flex-row items-start justify-start gap-[30px] text-13xl font-heading-32px-medium">
        <div className="flex flex-col items-start justify-start gap-[32px]">
          <div className="relative rounded bg-secondary w-[370px] h-[430px] overflow-hidden shrink-0">
            <img
              className="absolute top-[39px] left-[67px] w-[236px] h-[391px] object-cover"
              alt=""
              src="/image-46@2x.png"
            />
          </div>
          <div className="flex flex-col items-start justify-start gap-[16px]">
            <div className="flex flex-col items-start justify-start gap-[8px]">
              <div className="relative tracking-[0.04em] leading-[30px] font-medium">
                Tom Cruise
              </div>
              <div className="relative text-base leading-[24px] font-title-12px-medium">{`Founder & Chairman`}</div>
            </div>
            <div className="flex flex-row items-start justify-start gap-[16px]">
              <img
                className="relative w-6 h-6 overflow-hidden shrink-0"
                alt=""
                src="/icontwitter.svg"
              />
              <img
                className="relative w-6 h-6 overflow-hidden shrink-0"
                alt=""
                src="/iconinstagram.svg"
              />
              <img
                className="relative w-6 h-6 overflow-hidden shrink-0"
                alt=""
                src="/iconlinkedin.svg"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-[32px]">
          <div className="relative rounded bg-secondary w-[370px] h-[430px] overflow-hidden shrink-0">
            <img
              className="absolute top-[33px] left-[38px] w-[294px] h-[397px] object-cover"
              alt=""
              src="/image-51@2x.png"
            />
          </div>
          <div className="flex flex-col items-start justify-start gap-[16px]">
            <div className="flex flex-col items-start justify-start gap-[8px]">
              <div className="relative tracking-[0.04em] leading-[30px] font-medium">
                Emma Watson
              </div>
              <div className="relative text-base leading-[24px] font-title-12px-medium">
                Managing Director
              </div>
            </div>
            <div className="flex flex-row items-start justify-start gap-[16px]">
              <img
                className="relative w-6 h-6 overflow-hidden shrink-0"
                alt=""
                src="/icontwitter1.svg"
              />
              <img
                className="relative w-6 h-6 overflow-hidden shrink-0"
                alt=""
                src="/iconinstagram1.svg"
              />
              <img
                className="relative w-6 h-6 overflow-hidden shrink-0"
                alt=""
                src="/iconlinkedin1.svg"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-[32px]">
          <div className="relative rounded bg-secondary w-[370px] h-[430px] overflow-hidden shrink-0">
            <img
              className="absolute top-[38px] left-[22px] w-[326px] h-[392px] object-cover"
              alt=""
              src="/image-47@2x.png"
            />
          </div>
          <div className="flex flex-col items-start justify-start gap-[16px]">
            <div className="flex flex-col items-start justify-start gap-[8px]">
              <div className="relative tracking-[0.04em] leading-[30px] font-medium">
                Will Smith
              </div>
              <div className="relative text-base leading-[24px] font-title-12px-medium">
                Product Designer
              </div>
            </div>
            <div className="flex flex-row items-start justify-start gap-[16px]">
              <img
                className="relative w-6 h-6 overflow-hidden shrink-0"
                alt=""
                src="/icontwitter2.svg"
              />
              <img
                className="relative w-6 h-6 overflow-hidden shrink-0"
                alt=""
                src="/iconinstagram2.svg"
              />
              <img
                className="relative w-6 h-6 overflow-hidden shrink-0"
                alt=""
                src="/iconlinkedin2.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[2008px] left-[663px] flex flex-row items-center justify-start gap-[12px]">
        <div className="relative rounded-[50%] bg-text2 w-3 h-3 opacity-[0.3]" />
        <div className="relative rounded-[50%] bg-text2 w-3 h-3 opacity-[0.3]" />
        <img className="relative w-4 h-4" alt="" src="/group-1000005940.svg" />
        <div className="relative rounded-[50%] bg-text2 w-3 h-3 opacity-[0.3]" />
        <div className="relative rounded-[50%] bg-text2 w-3 h-3 opacity-[0.3]" />
      </div>
      <div className="absolute top-[2465px] left-[0px] bg-text2 w-[1440px] h-[440px] overflow-hidden text-base text-bg">
        <div className="absolute top-[376px] left-[0px] flex flex-col items-center justify-start gap-[16px] opacity-[0.4]">
          <img
            className="relative w-[1440px] h-px opacity-[0.5]"
            alt=""
            src="/underline1.svg"
          />
          <div className="flex flex-row items-center justify-start opacity-[0.6]">
            <div className="flex flex-row items-center justify-start gap-[6px]">
              <img
                className="relative w-5 h-5 overflow-hidden shrink-0"
                alt=""
                src="/iconcopyright.svg"
              />
              <div className="relative leading-[24px]">
                Copyright Rimel 2022. All right reserved
              </div>
            </div>
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default About;











