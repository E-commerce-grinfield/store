"use client"
import axios from 'axios'
import { useRouter } from 'next/router';
import { useParams, useSearchParams } from 'next/navigation';

import React , { useState }from 'react'
 function ProductDetail({params}:{params :{id:String}}) {
 //const { dets } = useParams();
console.log(params.id,"id");




 return (
    <>
<div className=" h-80 flex-col justify-start items-start gap-4 inline-flex ml-45 ">
 
  <div className="w-screen h-[0px] left-0 top-[142px] absolute justify-center items-center inline-flex  ml-40">
    <div className="w-[1440px] h-[0px] opacity-30 border border-black"></div>
  </div>
  <div className=" left-10 top-[222px] absolute justify-start items-center gap-3 inline-flex  ">
    <div className="opacity-50 text-black text-sm font-normal leading-[21px]">Account</div>
    <div className="w-[13.19px] h-[0px] origin-top-left rotate-[117.05deg] opacity-50 border border-black"></div>
    <div className="opacity-50 text-black text-sm font-normal leading-[21px]">Gaming</div>
    <div className="w-[13.19px] h-[0px] origin-top-left rotate-[117.05deg] opacity-50 border border-black"></div>
    <div className="text-black text-sm font-normal leading-[21px]">Havic HV G-92 Gamepad</div>
  </div>
  <div>
  <div className="h-[600px] px-[27px] pt-[154px] pb-[131px] left-[335px] top-[323px] absolute bg-neutral-100 rounded flex-col justify-end items-center inline-flex">
    <img className="w-[446px] h-[315px]"  />
  </div>
  
  <div className="w-[170px] h-[138px] pl-6 pr-[25px] py-3 left-[135px] top-[323px] absolute bg-neutral-100 rounded justify-center items-center inline-flex">
    <img className="w-[121px] h-[114px] " src="https://via.placeholder.com/121x114" />
  </div>
  <div className="w-[170px] h-[138px] px-[29px] pt-5 pb-[21px] left-[135px] top-[477px] absolute bg-neutral-100 rounded justify-center items-center inline-flex">
    <img className="w-28 h-[97px] " src="https://via.placeholder.com/112x97" />
  </div>
  <div className="w-[170px] h-[138px] px-[18px] py-[22px] left-[135px] top-[631px] absolute bg-neutral-100 rounded justify-center items-center inline-flex">
    <img className="w-[134px] h-[94px]" src="https://via.placeholder.com/134x94" />
  </div>
  <div className="w-[170px] h-[138px] px-6 py-4 left-[135px] top-[785px] absolute bg-neutral-100 rounded justify-center items-center inline-flex">
    <img className="w-[122px] h-[106px]" src="https://via.placeholder.com/122x106" />
  </div>
  <div className="left-[903px] top-[323px] absolute text-black text-2xl font-semibold leading-normal tracking-wide">name</div>
  
  <div className="left-[903px] top-[400px] absolute text-black text-2xl font-normal leading-normal tracking-wide">price</div>
  <div className="left-[903px] top-[363px] absolute justify-start items-start gap-4 inline-flex">
    <div className="justify-start items-start gap-2 flex">
      <div className="justify-start items-start flex" />
      <div className="opacity-50 text-black text-sm font-normal leading-[21px]">(150 Reviews)</div>
    </div>
    <div className="justify-start items-center gap-4 flex">
      <div className="w-4 h-[0px] origin-top-left rotate-90 opacity-50 border border-black"></div>
      <div className="opacity-60 text-green-500 text-sm font-normal leading-[21px]">In Stock</div>
    </div>
  </div>
  <div className="w-[373px] left-[903px] top-[448px] absolute text-black text-sm font-normal leading-[21px]">PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.</div>
  <div className="left-[904px] top-[559px] absolute justify-start items-start gap-6 inline-flex">
    <div className="text-black text-xl font-normal leading-tight tracking-wide">Colours:</div>
    <div className="justify-start items-start gap-2 flex">
      <div className="w-5 h-5 relative">
        <div className="w-3 h-3 left-[4px] top-[4px] absolute bg-indigo-300 rounded-full" />
        <div className="w-5 h-5 left-0 top-0 absolute rounded-full border border-black" />
      </div>
      <div className="w-5 h-5 bg-red-400 rounded-full" />
    </div>
  </div>
  <div className="left-[904px] top-[603px] absolute justify-start items-center gap-6 inline-flex">
    <div className="text-black text-xl font-normal leading-tight tracking-wide">Size:</div>
    <div className="justify-start items-start gap-4 flex">
      <div className="w-8 h-8 px-[7px] py-1.5 rounded border border-black border-opacity-50 justify-center items-center flex">
        <div className="w-[18px] h-5 text-black text-sm font-medium leading-[21px]">XS</div>
      </div>
      <div className="w-8 h-8 py-1.5 rounded border border-black border-opacity-50 justify-center items-center flex">
        <div className="w-2 h-5 text-black text-sm font-medium leading-[21px]">S</div>
      </div>
      <div className="w-8 h-8 px-2.5 py-1.5 bg-red-500 rounded justify-center items-center flex">
        <div className="w-3 h-5 text-neutral-50 text-sm font-medium leading-[21px]">M</div>
      </div>
      <div className="w-8 h-8 py-1.5 rounded border border-black border-opacity-50 justify-center items-center flex">
        <div className="w-1.5 h-5 text-black text-sm font-medium leading-[21px]">L</div>
      </div>
      <div className="w-8 h-8 px-2 py-1.5 rounded border border-black border-opacity-50 justify-center items-center flex">
        <div className="w-4 h-5 text-black text-sm font-medium leading-[21px]">XL</div>
      </div>
    </div>
  </div>
  <div className="w-[400px] h-[0px] left-[903px] top-[535px] absolute opacity-50 justify-center items-center inline-flex">
    <div className="w-[400px] h-[0px] border border-black"></div>
  </div>
  <div className="w-[159px] h-11 left-[904px] top-[659px] absolute justify-start items-start inline-flex">
    <div className="w-10 h-11 px-2 py-2.5 rounded-tl rounded-bl border border-black border-opacity-50 flex-col justify-center items-center inline-flex">
      <div className="w-6 h-6 relative flex-col justify-start items-start flex" />
    </div>
    <div className="h-11 py-2 border-t border-b border-black border-opacity-50 justify-center items-center flex">
      <div className="text-black text-xl font-medium leading-7">2</div>
    </div>
    <div className="w-[41px] h-11 pl-[9px] pr-2 py-2.5 bg-red-500 rounded-tr rounded-br flex-col justify-center items-center inline-flex">
      <div className="w-6 h-6 relative flex-col justify-start items-start flex" />
    </div>
  </div>
  <div className="px-12 py-2.5 left-[1079px] top-[659px] absolute bg-red-500 rounded justify-center items-center gap-2.5 inline-flex">
  <button className="px-4 py-2 text-neutral-50 bg-red-500 rounded-md text-base font-medium leading-normal hover:bg-red-600 focus:outline-none focus:ring focus:ring-red-300">
    
  buy now</button> 
</div>

  <div className="w-10 h-10 p-1 left-[1262px] top-[661px] absolute rounded border border-black border-opacity-50 justify-center items-center inline-flex">
    <div className="w-8 h-8 relative flex-col justify-start items-start flex" />
  </div>
  <div className="w-[399px] h-[180px] left-[904px] top-[743px] absolute rounded border border-black border-opacity-50">
    <div className="w-[399px] h-[0px] left-0 top-[90px] absolute opacity-50 justify-center items-center inline-flex">
      <div className="w-[399px] h-[0px] border border-black"></div>
    </div>
    <div className="left-[16px] top-[24px] absolute justify-start items-center gap-4 inline-flex">
      <div className="w-10 h-10 relative" />
      <div className="flex-col justify-start items-start gap-2 inline-flex">
        <div className="text-black text-base font-medium leading-normal">Free Delivery</div>
        <div className="text-black text-xs font-medium underline leading-[18px]">Enter your postal code for Delivery Availability</div>
      </div>
      
    </div>
    <div className="left-[16px] top-[106px] absolute justify-start items-center gap-4 inline-flex">
      <div className="w-10 h-10 relative" />
      <div className="flex-col justify-start items-start gap-2 inline-flex">
        <div className="text-black text-base font-medium leading-normal">Return Delivery</div>
        <div><span className="text-black text-xs font-medium leading-[18px]">Free 30 Days Delivery Returns. </span><span className="text-black text-xs font-medium underline leading-[18px]">Details</span></div>
      </div>
    </div>
    </div>
  </div>
  <div className="left-[135px] top-[1063px] absolute flex-col justify-start items-start gap-[60px] inline-flex">
    <div className="justify-start items-center gap-4 inline-flex">
      <div className="w-5 h-10 relative">
        <div className="w-5 h-10 left-0 top-0 absolute bg-red-500 rounded" />
      </div>
      <div className="text-red-500 text-base font-semibold leading-tight">Related Item</div>
    </div>
    <div className="justify-start items-start gap-[30px] inline-flex">
      <div className="flex-col justify-start items-start gap-4 inline-flex">
        <div className="w-[270px] h-[250px] relative bg-neutral-100 rounded">
          <div className="px-3 py-1 left-[12px] top-[12px] absolute bg-red-500 rounded justify-center items-center gap-2.5 inline-flex">
            <div className="text-neutral-50 text-xs font-normal leading-[18px]">-40%</div>
          </div>
          <div className="left-[224px] top-[12px] absolute flex-col justify-start items-start gap-2 inline-flex">
            <div className="w-[34px] h-[34px] relative">
              <div className="w-[34px] h-[34px] left-0 top-0 absolute bg-white rounded-full" />
              <div className="w-6 h-6 left-[5px] top-[5px] absolute" />
            </div>
            <div className="w-[34px] h-[34px] relative">
              <div className="w-[34px] h-[34px] left-0 top-0 absolute bg-white rounded-full" />
              <div className="w-6 h-6 px-[2.39px] py-[5px] left-[5px] top-[5px] absolute justify-center items-center inline-flex">
                <div className="w-[19.23px] h-3.5 relative">
                </div>
              </div>
            </div>
          </div>
          <div className="w-[190px] h-[180px] px-[9px] py-3.5 left-[40px] top-[35px] absolute justify-center items-center inline-flex">
            <img className="w-[172px] h-[152px]" src="https://via.placeholder.com/172x152" />
          </div>
        </div>
        <div className="flex-col justify-start items-start gap-2 flex">
          <div className="text-black text-base font-medium leading-normal">HAVIT HV-G92 Gamepad</div>
          <div className="justify-start items-start gap-3 inline-flex">
            <div className="text-red-500 text-base font-medium leading-normal">$120</div>
            <div className="opacity-50 text-black text-base font-medium line-through leading-normal">$160</div>
          </div>
          <div className="justify-start items-start gap-2 inline-flex">
            <div className="justify-start items-start flex" />
            <div className="w-8 h-5 opacity-50 text-black text-sm font-semibold leading-[21px]">(88)</div>
          </div>
        </div>
      </div>
      <div className="flex-col justify-start items-start gap-4 inline-flex">
        <div className="w-[270px] h-[250px] relative bg-neutral-100 rounded">
          <div className="px-3 py-1 left-[12px] top-[12px] absolute bg-red-500 rounded justify-center items-center gap-2.5 inline-flex">
            <div className="text-neutral-50 text-xs font-normal leading-[18px]">-35%</div>
          </div>
          <div className="w-[270px] h-[41px] left-0 top-[209px] absolute bg-black rounded-bl rounded-br" />
          <div className="left-[87px] top-[217px] absolute text-white text-base font-medium leading-normal">Add To Cart</div>
          <div className="left-[224px] top-[12px] absolute flex-col justify-start items-start gap-2 inline-flex">
            <div className="w-[34px] h-[34px] relative">
              <div className="w-[34px] h-[34px] left-0 top-0 absolute bg-white rounded-full" />
              <div className="w-6 h-6 left-[5px] top-[5px] absolute" />
            </div>
            <div className="w-[34px] h-[34px] relative">
              <div className="w-[34px] h-[34px] left-0 top-0 absolute bg-white rounded-full" />
              <div className="w-6 h-6 px-[2.39px] py-[5px] left-[5px] top-[5px] absolute justify-center items-center inline-flex">
                <div className="w-[19.23px] h-3.5 relative">
                </div>
              </div>
            </div>
          </div>
          <div className="w-[190px] h-[180px] pt-10 pb-[39px] left-[40px] top-[15px] absolute justify-center items-center inline-flex">
            <img className="w-[191px] h-[101px]" src="https://via.placeholder.com/191x101" />
          </div>
        </div>
        <div className="flex-col justify-start items-start gap-2 flex">
          <div className="text-black text-base font-medium leading-normal">AK-900 Wired Keyboard</div>
          <div className="justify-start items-start gap-3 inline-flex">
            <div className="text-red-500 text-base font-medium leading-normal">$960</div>
            <div className="opacity-50 text-black text-base font-medium line-through leading-normal">$1160</div>
          </div>
          <div className="justify-start items-start gap-2 inline-flex">
            <div className="justify-start items-start flex" />
            <div className="w-8 h-5 opacity-50 text-black text-sm font-semibold leading-[21px]">(75)</div>
          </div>
        </div>
      </div>
      <div className="flex-col justify-start items-start gap-4 inline-flex">
        <div className="w-[270px] h-[250px] relative bg-neutral-100 rounded">
          <div className="px-3 py-1 left-[12px] top-[12px] absolute bg-red-500 rounded justify-center items-center gap-2.5 inline-flex">
            <div className="text-neutral-50 text-xs font-normal leading-[18px]">-30%</div>
          </div>
          <div className="left-[224px] top-[12px] absolute flex-col justify-start items-start gap-2 inline-flex">
            <div className="w-[34px] h-[34px] relative">
              <div className="w-[34px] h-[34px] left-0 top-0 absolute bg-white rounded-full" />
              <div className="w-6 h-6 left-[5px] top-[5px] absolute" />
            </div>
            <div className="w-[34px] h-[34px] relative">
              <div className="w-[34px] h-[34px] left-0 top-0 absolute bg-white rounded-full" />
              <div className="w-6 h-6 px-[2.39px] py-[5px] left-[5px] top-[5px] absolute justify-center items-center inline-flex">
                <div className="w-[19.23px] h-3.5 relative">
                </div>
              </div>
            </div>
          </div>
          <div className="w-[190px] h-[180px] px-2.5 pt-[26px] pb-[25px] left-[40px] top-[35px] absolute justify-center items-center inline-flex">
            <img className="w-[170px] h-[129px]" src="https://via.placeholder.com/170x129" />
          </div>
        </div>
        <div className="flex-col justify-start items-start gap-2 flex">
          <div className="text-black text-base font-medium leading-normal">IPS LCD Gaming Monitor</div>
          <div className="justify-start items-start gap-3 inline-flex">
            <div className="text-red-500 text-base font-medium leading-normal">$370</div>
            <div className="opacity-50 text-black text-base font-medium line-through leading-normal">$400</div>
          </div>
          <div className="justify-start items-start gap-2 inline-flex">
            <div className="justify-start items-start flex" />
            <div className="w-8 h-5 opacity-50 text-black text-sm font-semibold leading-[21px]">(99)</div>
          </div>
        </div>
      </div>
      <div className="flex-col justify-start items-start gap-4 inline-flex">
        <div className="w-[270px] h-[250px] relative bg-neutral-100 rounded">
          <div className="left-[224px] top-[12px] absolute flex-col justify-start items-start gap-2 inline-flex">
            <div className="w-[34px] h-[34px] relative">
              <div className="w-[34px] h-[34px] left-0 top-0 absolute bg-white rounded-full" />
              <div className="w-6 h-6 left-[5px] top-[5px] absolute" />
            </div>
            <div className="w-[34px] h-[34px] relative">
              <div className="w-[34px] h-[34px] left-0 top-0 absolute bg-white rounded-full" />
              <div className="w-6 h-6 px-[2.39px] py-[5px] left-[5px] top-[5px] absolute justify-center items-center inline-flex">
                <div className="w-[19.23px] h-3.5 relative">
                </div>
              </div>
            </div>
          </div>
          <div className="w-[190px] pt-[47px] pb-[38px] left-[40px] top-[35px] absolute justify-center items-center inline-flex">
            <img className="w-[191px] h-[95px]" src="https://via.placeholder.com/191x95" />
          </div>
        </div>
        <div className="flex-col justify-start items-start gap-2 flex">
          <div className="text-black text-base font-medium leading-normal">RGB liquid CPU Cooler</div>
          <div className="justify-start items-start gap-3 inline-flex">
            <div className="text-red-500 text-base font-medium leading-normal">$160</div>
            <div className="opacity-50 text-black text-base font-medium line-through leading-normal">$170</div>
          </div>
          <div className="justify-start items-start gap-2 inline-flex">
            <div className="justify-start items-start flex">
              <div className="w-5 h-5 relative" />
            </div>
            <div className="w-8 h-5 opacity-50 text-black text-sm font-semibold leading-[21px]">(65)</div>
          </div>
        </div>
      </div>
    </div>
  </div>

</div>
    </>

  )
}

export default ProductDetail