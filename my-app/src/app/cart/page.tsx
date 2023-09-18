"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function Cart() {
  const [selectedProducts, setSelectedProd] = useState(
    JSON.parse(localStorage.getItem("selectedProducts") ?? "[]")
  );
  const [couponCode, setCouponCode] = useState("");
  const [couponApplied, setCouponApplied] = useState(false);

  const subtotal = selectedProducts.reduce(
    (accumulator: number, currentValue: any) =>
      accumulator + currentValue.price * currentValue.quantity,
    0
  );

  return (
    <div>
      <div
        style={{ marginLeft: "-130px" }}
        className="w-60 h-90 px-0 py-4  rounded justify-center items-center gap-2.5 inline-flex"
      >
        {/* {name} */}
      </div>
      {/*    <div style={{ marginLeft:"-80px"  }} className="text-red-500 text-base font-medium leading-normal">{price}$</div>*/}

      <div
        style={{ marginLeft: "130px", marginTop: "0px" }}
        className="opacity-50 text-black text-sm font-normal font-['Poppins'] leading-tight"
      >
        Cart
      </div>
      <Link href="/">
        <button
          style={{ marginLeft: "70px", marginTop: "-18px" }}
          className="text-black text-sm font-normal font-['Poppins'] leading-tight"
        >
          Home
        </button>
      </Link>
      {/*bar of cart */}

      <div style={{ marginLeft: "400px", marginTop: "100px" }}>
        <div className="w-99 h-16 px-10 py-6 bg-white rounded shadow justify-center items-center inline-flex">
          <div className="justify-start items-center gap-72 inline-flex">
            <div className="text-black text-base font-normal font-['Poppins'] leading-normal">
              Product
            </div>
            <div className="text-black text-base font-normal font-['Poppins'] leading-normal">
              Price
            </div>
            <div className="text-black text-base font-normal font-['Poppins'] leading-normal">
              Quantity
            </div>
            <div className="text-black text-base font-normal font-['Poppins'] leading-normal">
              Subtotal
            </div>
          </div>
        </div>
      </div>

      {/*bare of product */}

      {selectedProducts.map((product: any, index: number) => {
        return (
          <div style={{ marginLeft: "400px", marginTop: "80px" }}>
            <div className="text-black text-base font-normal font-['Poppins'] leading-normal">
              {product.name}
            </div>
            <div className="w-100 h-24 relative bg-white rounded shadow">
              <div className="left-[387px] top-[39px] absolute text-black text-base font-normal font-['Poppins'] leading-normal">
                {product.price}$
              </div>
              <div className="left-[1063px] top-[39px] absolute text-black text-base font-normal font-['Poppins'] leading-normal">
                {Number(product.price) * Number(product.quantity)}$
              </div>
              <div className="w-16 h-11 px-3 py-1.5 left-[710px] top-[29px] absolute rounded border border-black border-opacity-40 justify-center items-center inline-flex">
                <div className="h-8 justify-start items-center gap-4 inline-flex">
                  <input
                    type="text"
                    className="w-10 h-10 px-2  bg-white text-black  focus:outline-none"
                    style={{ marginTop: "0px", marginLeft: "30px" }}
                    value={product.quantity}
                    onChange={(e) => {
                      const newProducts = selectedProducts.map(
                        (product: any, index: number) => {
                          if (product.name === product.name) {
                            product.quantity = e.target.value;
                          }
                          return product;
                        }
                      );
                      localStorage.setItem(
                        "selectedProducts",
                        JSON.stringify(newProducts)
                      );
                      setSelectedProd(newProducts);
                    }}
                  />
                  <div className="flex-col justify-start items-start inline-flex">
                    <div className="w-4 h-4 relative origin-top-left -rotate-180"></div>
                    <div className="w-4 h-4 relative"></div>
                  </div>
                </div>
              </div>
              <div className="w-14 h-14 px-0.5 pt-2 pb-1.5 left-[40px] top-[24px] absolute justify-center items-center inline-flex">
                <img className="w-12 h-10" src={product.image} />
              </div>
              <div className="left-[114px] top-[39px] absolute text-black text-base font-normal font-['Poppins'] leading-normal"></div>
              <div className="w-6 h-6 left-[30px] top-[20px] absolute">
                <div className="w-4 h-4 left-[3px] top-[3px] absolute bg-red-500 rounded-full"></div>
              </div>
            </div>
          </div>
        );
      })}
      {/*return to shop */}
      <div style={{ marginTop: "20px", marginLeft: "400px" }}>
        <div className="w-56 h-14 px-12 py-4 rounded border border-black border-opacity-50 justify-center items-center gap-2.5 inline-flex">
          <Link href="/">
            <button className="text-black text-base font-medium font-['Poppins'] leading-normal">
              Return To Shop
            </button>
          </Link>
        </div>
      </div>

      <div>
        {/*coupon code*/}

        <input
          style={{ marginLeft: "400px", marginTop: "70px" }}
          className="w-70 h-14 pl-6 pr-40 py-4 rounded border border-black justify-start items-center inline-flex"
          name="Coupon Code"
          type="text"
          defaultValue={"Coupon code"}
        />

        <div></div>

        <div style={{ marginLeft: "850px", marginTop: "-55px" }}>
          <div className="w-52 h-14 px-12 py-4 bg-red-500 rounded justify-center items-center gap-2.5 inline-flex">
            <div className="text-neutral-50 text-base font-medium font-['Poppins'] leading-normal">
              Apply Coupon
            </div>
          </div>
        </div>
      </div>

      {/*cart total */}
      <div style={{ marginTop: "-150px", marginLeft: "1160px" }}>
        <div className=" relative rounded ">
          <div className="left-[24px] top-[32px] absolute text-black text-xl font-medium font-['Poppins'] leading-7">
            Cart Total
          </div>
          <div className="left-[24px] top-[84px] absolute justify-start items-start gap-80 inline-flex">
            <div className="text-black text-base font-normal font-['Poppins'] leading-normal">
              Subtotal:
            </div>
            <div className="text-black text-base font-normal font-['Poppins'] leading-normal">
              {subtotal}$
            </div>
          </div>
          <div className="left-[24px] top-[140px] absolute justify-start items-start gap-80 inline-flex">
            <div className="text-black text-base font-normal font-['Poppins'] leading-normal">
              Shipping:
            </div>
            <div className="text-black text-base font-normal font-['Poppins'] leading-normal">
              Free
            </div>
          </div>
          <div className="left-[24px] top-[196px] absolute justify-start items-start gap-80 inline-flex">
            <div className="text-black text-base font-normal font-['Poppins'] leading-normal">
              Total:
            </div>
            <div className="text-black text-base font-normal font-['Poppins'] leading-normal">
              {subtotal}$
            </div>
          </div>
          <div className="px-12 py-4 left-[89px] top-[236px] absolute bg-red-500 rounded justify-center items-center gap-2.5 inline-flex">
            <button className="text-neutral-50 text-base font-medium font-['Poppins'] leading-normal">
              Procees to checkout
            </button>
          </div>
          <div className="w-150 h-px left-[24px] top-[124px] absolute opacity-4 justify-center items-center inline-flex">
            <div className="w-96 h-px border border-black"></div>
          </div>
          <div className="w-200 h-px left-[24px] top-[180px] absolute opacity-4 justify-center items-center inline-flex">
            <div className="w-96 h-px border border-black"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
