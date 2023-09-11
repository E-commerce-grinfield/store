import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config



/*<div style={{ marginTop: "10px", marginLeft: "40px" }}
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
</div>*/