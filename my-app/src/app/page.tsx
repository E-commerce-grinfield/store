import Image from "next/image";
import Header from "@/app/component/header";
import data from "./../../data.json"



export default function Home() {
  return (
    <div>
      {/* <Header/> */}
    
      <div

      
        style={{ marginTop: "10px", marginLeft: "40px" }}
        className="w-[217px] h-[344px] flex-col justify-start items-start gap-4 inline-flex"
      >
        <div className="justify-start items-start gap-[51px] inline-flex">
          <div className="text-center text-black text-base font-normal leading-normal">
            Woman’s Fashion
          </div>
          <div className="w-6 h-6 pl-1.5 pr-[5.27px] pt-2 pb-[8.22px] origin-top-left -rotate-90 justify-center items-center flex"></div>
        </div>
        <div className="justify-start items-start gap-[81px] inline-flex">
          <div className="text-center text-black text-base font-normal leading-normal">
            Men’s Fashion
          </div>
          <div className="w-6 h-6 relative origin-top-left -rotate-90"></div>
        </div>
        <div className="text-center text-black text-base font-normal leading-normal">
          Electronics
        </div>
        <div className="text-center text-black text-base font-normal leading-normal">
          Home & Lifestyle
        </div>
        <div className="text-center text-black text-base font-normal leading-normal">
          Medicine
        </div>
        <div className="text-center text-black text-base font-normal leading-normal">
          Sports & Outdoor
        </div>
        <div className="text-center text-black text-base font-normal leading-normal">
          Baby’s & Toys
        </div>
        <div className="text-center text-black text-base font-normal leading-normal">
          Groceries & Pets
        </div>
        <div className="text-center text-black text-base font-normal leading-normal">
          Health & Beauty
        </div>
        
      </div>
      <div
        style={{ marginLeft: "40px", marginTop: "90px" }}
        className=" w-5 h-10 relative"
      >
        <div className=" w-5 h-10 left-0 top-0 absolute bg-red-500 rounded"></div>
      </div>
      <div
        style={{ marginLeft: "80px", marginTop: "-30px" }}
        className="text-red-500 text-base font-semibold leading-tight"
      >
        Today’s
      </div>
      <div
        style={{ marginLeft: "40px", marginTop: "40px" }}
        className="text-black text-4xl font-semibold leading-10 tracking-wider"
      >
        Flash Sales
      </div>

      <div className="">
        <div className="px-3 py-1 left-[12px] top-[12px] absolute bg-red-500 rounded justify-center items-center gap-2.5 inline-flex">
          <div className="text-neutral-50 text-xs font-normal leading-none">
            -40%
          </div>
        </div>
        <div className="left-[224px] top-[12px] absolute flex-col justify-start items-start gap-2 inline-flex">
          <div className="w-8 h-8 relative">
            <div className="w-8 h-8 left-0 top-0 absolute bg-white rounded-full"></div>
            <div className="w-6 h-6 left-[5px] top-[5px] absolute"></div>
          </div>
          <div className="w-8 h-8 relative">
            <div className="w-8 h-8 left-0 top-0 absolute bg-white rounded-full"></div>
            <div className="w-6 h-6 px-0.5 py-1 left-[5px] top-[5px] absolute justify-center items-center inline-flex">
              <div className="w-5 h-3.5 relative"></div>
            </div>
          </div>
        </div>
        <div className="w-48 h-44 px-2 py-3.5 left-[40px] top-[35px] absolute justify-center items-center inline-flex">
          <img
            style={{ marginLeft: "400px", marginTop: "1500px" }}
            className="w-44 h-36 "
            src="https://static-01.daraz.com.np/p/ca889918e9e503797cc5863a09b58eae.jpg"
          />
        </div>
      </div>
      <div
        style={{ marginLeft: "245px", marginTop: "250px" }}
        className="text-black text-base font-medium leading-normal"
      >
        HAVIT HV-G92 Gamepad
      </div>
      <div
        style={{ marginLeft: "250px" }}
        className="text-red-500 text-base font-medium leading-normal"
      >
        $120
      </div>
      <div
        style={{ marginLeft: "370px", marginTop: "-22px" }}
        className="opacity-50 text-black text-base font-medium line-through leading-normal"
      >
        $160
      </div>

      <div
        style={{ marginLeft: " 850px", marginTop: "90px" }}
        className="w-60 h-14 px-12 py-4 bg-red-500 rounded justify-center items-center gap-2.5 inline-flex"
      >
        <div className="text-neutral-50 text-base font-medium leading-normal">
          View All Products
        </div>
      </div>
      <div className="w-96 h-px origin-top-left rotate-180 opacity-30 border border-black"></div>

      <div
        style={{ marginLeft: " 40px", marginTop: "90px" }}
        className="w-5 h-10 relative"
      >
        <div className="w-5 h-10 left-0 top-0 absolute bg-red-500 rounded"></div>
      </div>
      <div
        style={{ marginLeft: " 80px", marginTop: "-30px" }}
        className="text-red-500 text-base font-semibold leading-tight"
      >
        Categories
      </div>
      <div
        style={{ marginLeft: " 40px", marginTop: "50px" }}
        className="text-black text-4xl font-semibold leading-10 tracking-wider"
      >
        Browse By Category
      </div>

      <br />
      <br />
      <br />
      <br />
      <div style={{ marginLeft: " 500px", marginTop: "-60px" }} >
      <div className="w-44 h-36 px-14 py-6 rounded border border-black border-opacity-30 flex-col justify-center items-end gap-4 inline-flex">
        <div className="w-14 h-14 relative flex-col justify-start items-start flex"></div>
        <div className="text-black text-base font-normal leading-normal">
          Phones
        </div>
      </div>

      <div className="w-44 h-36 px-10 py-6 rounded border border-black border-opacity-30 flex-col justify-center items-center gap-4 inline-flex">
        <div className="w-14 h-14 relative flex-col justify-start items-start flex"></div>
        <div className="text-black text-base font-normal leading-normal">
          Computers
        </div>
      </div>
      <div className="w-44 h-36 pl-8 pr-9 py-6 rounded border border-black border-opacity-30 flex-col justify-center items-center gap-4 inline-flex">
  <div className="w-14 h-14 relative flex-col justify-start items-start flex">
    <div className="w-2.5 h-3 justify-start items-end gap-1 inline-flex">
      <div className="w-3 h-px origin-top-left rotate-90 border border-black"></div>
      <div className="w-2 h-px origin-top-left rotate-90 border border-black"></div>
      <div className="w-2.5 h-px origin-top-left rotate-90 border border-black"></div>
    </div>
  </div>
  <div  className="text-black text-base font-normal leading-normal">SmartWatch</div>
</div>
<div className="w-44 h-36 pl-8 pr-9 py-6 rounded border border-black border-opacity-30 flex-col justify-center items-center gap-4 inline-flex">
  <div className="w-14 h-14 relative flex-col justify-start items-start flex"></div>
  <div className="text-black text-base font-normal leading-normal">HeadPhones</div>
</div>
<div className="w-44 h-36 pl-14 pr-12 py-6 rounded border border-black border-opacity-30 flex-col justify-center items-center gap-4 inline-flex">
  <div className="w-14 h-14 relative flex-col justify-start items-start flex"></div>
  <div className="text-black text-base font-normal leading-normal">Gaming</div>
</div>
</div>
<br/>
<br/>
<br/>
<br/>

<div  className="w-5 h-10 relative">
  <div   style={{ marginLeft: " 40px", marginTop: "90px" }} className="w-5 h-10 left-0 top-0 absolute bg-red-500 rounded"></div>
</div>
<div   style={{ marginLeft: " 80px", marginTop: "60px" }} className="text-red-500 text-base font-semibold leading-tight">This Month</div>
   
<div  style={{ marginLeft: " 40px", marginTop: "60px" }} className="text-black text-4xl font-semibold leading-10 tracking-wider">Best Selling Products</div>
  
  <img
            style={{ marginLeft: "230px", marginTop: "150px" }}
            className="w-44 h-36"
            src="https://cdni.llbean.net/is/image/wim/260347_2772_41?hei=1095&wid=950&resMode=sharp2&defaultImage=llbprod/A0211793_2"
          />
  <div  style={{ marginLeft: "260px", marginTop: "0px" }} className="text-black text-base font-medium leading-normal">The north coat</div>

  <div style={{ marginLeft: "230px"}} className="text-red-500 text-base font-medium leading-normal">$260</div>

  <div style={{ marginLeft: "360px" , marginTop:"-25px"}} className="opacity-50 text-black text-base font-medium line-through leading-normal">$360</div>

  <img style={{ marginLeft: "360px" , marginTop:"-25px"}} src=""/>
  
    <div   style={{ marginLeft: " 40px", marginTop: "2500px" }} className="w-5 h-10 left-0 top-0 absolute bg-red-500 rounded"></div>
    <div style={{ marginLeft: " 80px", marginTop: "280px" }} className="text-black text-4xl font-semibold leading-10 tracking-wider">Explore Our Products</div>
    <img  style={{ marginLeft: "230px", marginTop: "150px" }} className="w-35 h-44" src="https://www.hillspet.com/content/dam/pim/hills/en_us/sd/dry/sd-canine-adult-large-breed-dry-productShot_zoom.jpg" />
    <div  style={{ marginLeft: "240px", marginTop: "0px" }} className="text-black text-base font-medium leading-normal">Bread Dry dog Food</div>
    <div style={{ marginLeft: "300px"}} className="text-red-500 text-base font-medium leading-normal">$260</div>

    <div style={{ marginLeft: "500px" , marginTop:"900px"}} className="w-20 h-20 relative">
  <div className="w-20 h-20 left-0 top-0 absolute opacity-30 bg-zinc-800 rounded-full"></div>
  <div className="w-14 h-14 left-[11px] top-[11px] absolute bg-black rounded-full"></div>
<br/>
<br/>

</div>

<div style={{ marginLeft: "1000px" , marginTop:"-80px"}} className="w-20 h-20 relative">
  <div className="w-20 h-20 left-0 top-0 absolute opacity-30 bg-zinc-800 rounded-full"></div>
  <div className="w-14 h-14 left-[11px] top-[11px] absolute bg-black rounded-full"></div>
</div>

<div style={{ marginLeft: "1500px" , marginTop:"-70px"}} className="w-20 h-20 relative">
  <div className="w-20 h-20 left-0 top-0 absolute opacity-30 bg-zinc-800 rounded-full"></div>
  <div className="w-14 h-14 left-[11px] top-[11px] absolute bg-black rounded-full"></div>
</div>
  </div>





  );
}
