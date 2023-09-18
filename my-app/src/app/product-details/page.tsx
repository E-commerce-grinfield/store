"use client";

import React, { useState } from "react";
import Link from "next/link";
import Rating from "react-rating";

const productInfo = {
  name: "Havic HV G-92 Gamepad",
  rating: 4,
  category: "Gaming",
  numberReviews: 150,
  isInStock: true,
  price: 192.0,
  reducedPercentage: 0,
  description:
    "PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.",
  colors: ["#A0BCE0", "#E07575"],
  sizes: ["XS", "S", "M", "L", "XL"],
  images: [
    "./assets/images/product-details-img1.svg",
    "./assets/images/product-details-img2.svg",
    "./assets/images/product-details-img3.svg",
    "./assets/images/product-details-img4.svg",
  ],
  isInWishlist: false,
  selectedColor: 0,
  selectedSize: 0,
  numberOfItems: 1,
  selectedImage: 0,
};
const productInfoDefault = {
  name: "No product",
  rating: 0,
  category: "No category",
  numberReviews: 0,
  isInStock: null,
  price: 0,
  reducedPercentage: 0,
  description: "No description.",
  colors: [],
  sizes: [],
  images: [
    "https://placehold.co/500x600",
    "https://placehold.co/500x600",
    "https://placehold.co/500x600",
    "https://placehold.co/500x600",
  ],
  isInWishlist: null,
  selectedColor: 0,
  selectedSize: 0,
  numberOfItems: 1,
  selectedImage: 0,
};
const relatedProducts = [
  {
    name: "HAVIT HV-G92 Gamepad",
    rating: 5,
    numberReviews: 88,
    isInStock: true,
    price: 160,
    reducedPercentage: 40,
    productImage: "./assets/images/product-details-img5.svg",
    isInWishlist: false,
    productISInCart: false,
  },
  {
    name: "AK-900 Wired Keyboard",
    rating: 4,
    numberReviews: 75,
    isInStock: true,
    price: 1160,
    reducedPercentage: 35,
    productImage: "./assets/images/product-details-img6.svg",
    isInWishlist: false,
    productISInCart: false,
  },
  {
    name: "IPS LCD Gaming Monitor",
    rating: 5,
    numberReviews: 99,
    isInStock: true,
    price: 400,
    reducedPercentage: 30,
    productImage: "./assets/images/product-details-img7.svg",
    isInWishlist: false,
    productISInCart: false,
  },
  {
    name: "RGB liquid CPU Cooler",
    rating: 4.5,
    numberReviews: 99,
    isInStock: true,
    price: 170,
    reducedPercentage: 0,
    productImage: "./assets/images/product-details-img8.svg",
    isInWishlist: false,
    productISInCart: false,
  },
];
function ProductDetail() {
  // const [prod, setProd] = useState(localStorage.getItem("product"));
  const [product, setProduct] = useState<any>({
    ...productInfoDefault,
    ...JSON.parse(localStorage.getItem("product") ?? "{}"),
  });
  const [related, setRelated] = useState<any>([...relatedProducts]);
  const isUserConnected = localStorage.getItem("userLogged") === "true";
  console.table(product);
  return (
    <div className="min-h-screen pt-[70px] flex px-[5px]">
      <div className=" max-w-[1160px] mx-auto">
        <Link href="#" className="text-gray-400 flex gap-[12px]">
          <span>Home</span>
          <span>/</span>
          <span>{product.category}</span>
          <span>/</span>
          <span className="text-black">{product.name}</span>
        </Link>
        <div className="mt-[80px] flex">
          <div className="flex flex-col min-w-[170px] gap-[16px] mr-[30px]">
            {product?.images?.map((image: any, index: number) => {
              return (
                <div
                  key={index}
                  className="bg-gray-400 min-w-[170px] h-[138px] rounded-lg overflow-hidden"
                  onClick={() => {
                    setProduct({
                      ...product,
                      selectedImage: index,
                    });
                  }}
                  style={{
                    boxShadow:
                      product?.selectedImage === index
                        ? "0px 0px 0px 2px #DB4444"
                        : "none",
                  }}
                >
                  <img
                    className="w-full h-full object-cover transition ease-in-out delay-150 bg-gray-100 hover:-translate-y-1 hover:scale-150 hover:bg-gray-300 duration-300 hover:rotate-12"
                    src={image}
                    alt={product?.name}
                  />
                </div>
              );
            })}
          </div>
          <div className="bg-gray-400 min-w-[500px] h-[600px] mr-[68px] rounded-lg overflow-hidden">
            <img
              className="w-full h-full  object-cover transition ease-in-out delay-150 bg-gray-50 hover:-translate-y-1 hover:scale-125 hover:bg-gray-300 duration-300 hover:rotate-12"
              src={product?.images[product?.selectedImage]}
              alt={product?.name}
            />
          </div>
          <div className="grow">
            <h1 className="text-black font-semibold text-[24px]">
              {product?.name}
            </h1>
            <div className="flex mt-[10px] text-gray-400 text-[14px] font-[regular] items-center gap-[4px]">
              {new Array(parseInt(product?.rating) ?? 0)
                .fill(2)
                .map((_, index) => {
                  return (
                    <svg
                      key={index}
                      width="16"
                      height="15"
                      viewBox="0 0 16 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14.673 7.17173C15.7437 6.36184 15.1709 4.65517 13.8284 4.65517H11.3992C10.7853 4.65517 10.243 4.25521 10.0617 3.66868L9.33754 1.32637C8.9309 0.0110567 7.0691 0.0110564 6.66246 1.32637L5.93832 3.66868C5.75699 4.25521 5.21469 4.65517 4.60078 4.65517H2.12961C0.791419 4.65517 0.215919 6.35274 1.27822 7.16654L3.39469 8.78792C3.85885 9.1435 4.05314 9.75008 3.88196 10.3092L3.11296 12.8207C2.71416 14.1232 4.22167 15.1704 5.30301 14.342L7.14861 12.9281C7.65097 12.5432 8.34903 12.5432 8.85139 12.9281L10.6807 14.3295C11.7636 15.159 13.2725 14.1079 12.8696 12.8046L12.09 10.2827C11.9159 9.71975 12.113 9.10809 12.5829 8.75263L14.673 7.17173Z"
                        fill="#FFAD33"
                      />
                    </svg>
                  );
                })}
              {new Array(Number(5 - parseInt(product?.rating) ?? 5))
                .fill(2)
                .map((_, index) => {
                  return (
                    <svg
                      key={index}
                      width="16"
                      height="15"
                      viewBox="0 0 16 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        opacity="0.25"
                        d="M14.673 7.17173C15.7437 6.36184 15.1709 4.65517 13.8284 4.65517H11.3992C10.7853 4.65517 10.243 4.25521 10.0617 3.66868L9.33754 1.32637C8.9309 0.0110567 7.0691 0.0110564 6.66246 1.32637L5.93832 3.66868C5.75699 4.25521 5.21469 4.65517 4.60078 4.65517H2.12961C0.791419 4.65517 0.215919 6.35274 1.27822 7.16654L3.39469 8.78792C3.85885 9.1435 4.05314 9.75008 3.88196 10.3092L3.11296 12.8207C2.71416 14.1232 4.22167 15.1704 5.30301 14.342L7.14861 12.9281C7.65097 12.5432 8.34903 12.5432 8.85139 12.9281L10.6807 14.3295C11.7636 15.159 13.2725 14.1079 12.8696 12.8046L12.09 10.2827C11.9159 9.71975 12.113 9.10809 12.5829 8.75263L14.673 7.17173Z"
                        fill="black"
                      />
                    </svg>
                  );
                })}
              <div className="ml-[10px]">
                ({product?.numberReviews} Reviews)
              </div>
              <div className="mx-[12px]">&nbsp; | &nbsp;</div>
              {product?.isInStock === true ? (
                <div className="text-[#00FF66]">In Stock</div>
              ) : product?.isInStock === false ? (
                <div className="text-[#FF0000]">Out Of Stock</div>
              ) : (
                <div className="text-black">Not Available</div>
              )}
            </div>
            <div className="text-2xl not-italic font-normal leading-6 mt-[17px]">
              {new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
              }).format(product?.price)}
            </div>
            <div className="text-black text-sm not-italic font-normal leading-5 py-[24px] border-b-[1px] border-gray-400">
              {product?.description}
            </div>
            {
              <div className="text-black text-xl not-italic font-normal leading-5 my-[24px] flex items-center">
                <span className="mr-[24px]">Colors :</span>
                <div className="flex items-center">
                  {product?.colors?.length ? (
                    product?.colors?.map((color: string, index: number) => {
                      return (
                        <div
                          onClick={() => {
                            setProduct({
                              ...product,
                              selectedColor: index,
                            });
                          }}
                          className="mr-[15px] rounded-[100px] inline-block cursor-pointer"
                          style={{
                            width:
                              product?.selectedColor === index
                                ? "12px"
                                : "20px",
                            height:
                              product?.selectedColor === index
                                ? "12px"
                                : "20px",
                            backgroundColor: color,
                            outline:
                              product?.selectedColor === index
                                ? "2px solid black"
                                : "none",

                            outlineOffset:
                              product?.selectedColor === index ? "2px" : "0px",
                          }}
                        ></div>
                      );
                    })
                  ) : (
                    <b>No choice</b>
                  )}
                </div>
              </div>
            }
            {
              <div className="text-black text-xl not-italic font-normal leading-5 my-[24px] flex items-center">
                <span className="mr-[24px]">Size :</span>
                <div className="flex items-center">
                  {product?.sizes?.length ? (
                    product?.sizes?.map((size: string, index: number) => {
                      return (
                        <div
                          onClick={() => {
                            setProduct({
                              ...product,
                              selectedSize: index,
                            });
                          }}
                          className="mr-[15px] cursor-pointer h-[32px] w-[32px] inline-flex items-center justify-end text-[14px]"
                          style={{
                            color:
                              product?.selectedSize === index
                                ? "white"
                                : "black",
                            border:
                              product?.selectedSize === index
                                ? "none"
                                : "1px solid gray",
                            borderRadius: "4px",
                            backgroundColor:
                              product?.selectedSize === index
                                ? "#DB4444"
                                : "white",
                          }}
                        >
                          <span className="mx-auto">{size}</span>
                        </div>
                      );
                    })
                  ) : (
                    <b>No choice</b>
                  )}
                </div>
              </div>
            }
            <div className="flex justify-between">
              <div
                className="flex text-black bg-white text-[20px] items-center"
                style={{
                  borderRadius: "4px",
                }}
              >
                <button
                  className="px-[7px] h-[44px]"
                  style={{
                    borderTopLeftRadius: "4px",
                    borderBottomLeftRadius: "4px",
                    border: "1px solid gray",
                    borderRight: "1px solid gray",
                  }}
                  onClick={() => {
                    if (product?.numberOfItems <= 1) return;
                    setProduct({
                      ...product,
                      numberOfItems: product?.numberOfItems - 1,
                    });
                  }}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20 12H4"
                      stroke="black"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                  </svg>
                </button>
                <span
                  className="w-[80px] text-center h-[44px] flex items-center justify-center"
                  style={{
                    borderBlock: "1px solid gray",
                  }}
                >
                  {product?.numberOfItems ?? 0}
                </span>
                <button
                  className="px-[7px] h-[44px] bg-[#DB4444]"
                  style={{
                    borderTopRightRadius: "4px",
                    borderBottomRightRadius: "4px",
                    border: "1px solid #DB4444",
                  }}
                  onClick={() => {
                    setProduct({
                      ...product,
                      numberOfItems: product?.numberOfItems + 1,
                    });
                  }}
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 17V9M9 9V1M9 9H17M9 9H1"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                  </svg>
                </button>
              </div>
              <button
                disabled={!isUserConnected}
                className="bg-[#DB4444] text-white px-[48px] text-[16px] disabled:opacity-60 disabled:cursor-not-allowed"
                style={{
                  borderRadius: "4px",
                }}
                onClick={() => {
                  localStorage.setItem(
                    "selectedProducts",
                    JSON.stringify([product])
                  );
                  window.location.href = "/cart";
                }}
              >
                Buy Now
              </button>
              <button
                disabled={!isUserConnected}
                className="px-[11px] h-[44px] bg-white hover:scale-105 transition-all duration-100 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
                style={{
                  borderRadius: "4px",
                  border: "1px solid gray",
                }}
                onClick={() => {
                  if (!isUserConnected) return;
                  setProduct({
                    ...product,
                    isInWishlist: !product?.isInWishlist,
                  });
                }}
              >
                {product?.isInWishlist ? (
                  <svg
                    width="22"
                    height="20"
                    viewBox="0 0 22 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 1C3.239 1 1 3.216 1 5.95C1 8.157 1.875 13.395 10.488 18.69C10.6423 18.7839 10.8194 18.8335 11 18.8335C11.1806 18.8335 11.3577 18.7839 11.512 18.69C20.125 13.395 21 8.157 21 5.95C21 3.216 18.761 1 16 1C13.239 1 11 4 11 4C11 4 8.761 1 6 1Z"
                      fill="#EA4335"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                ) : (
                  <svg
                    width="22"
                    height="20"
                    viewBox="0 0 22 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 1C3.239 1 1 3.216 1 5.95C1 8.157 1.875 13.395 10.488 18.69C10.6423 18.7839 10.8194 18.8335 11 18.8335C11.1806 18.8335 11.3577 18.7839 11.512 18.69C20.125 13.395 21 8.157 21 5.95C21 3.216 18.761 1 16 1C13.239 1 11 4 11 4C11 4 8.761 1 6 1Z"
                      stroke="black"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                )}
              </button>
            </div>
            <div
              className="border-[1px] border-gray-400 mt-[38px]"
              style={{
                borderRadius: "4px",
              }}
            >
              <div className="px-[16px] pt-[24px] pb-[16px] border-b-[1px] text-black border-gray-400 flex gap-[16px] font-medium items-center">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_261_4843)">
                    <path
                      d="M11.6673 31.6667C13.5083 31.6667 15.0007 30.1743 15.0007 28.3333C15.0007 26.4924 13.5083 25 11.6673 25C9.82637 25 8.33398 26.4924 8.33398 28.3333C8.33398 30.1743 9.82637 31.6667 11.6673 31.6667Z"
                      stroke="black"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M28.3333 31.6667C30.1743 31.6667 31.6667 30.1743 31.6667 28.3333C31.6667 26.4924 30.1743 25 28.3333 25C26.4924 25 25 26.4924 25 28.3333C25 30.1743 26.4924 31.6667 28.3333 31.6667Z"
                      stroke="black"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M8.33398 28.3335H7.00065C5.89608 28.3335 5.00065 27.4381 5.00065 26.3335V21.6668M3.33398 8.3335H19.6673C20.7719 8.3335 21.6673 9.22893 21.6673 10.3335V28.3335M15.0007 28.3335H25.0007M31.6673 28.3335H33.0007C34.1052 28.3335 35.0007 27.4381 35.0007 26.3335V18.3335M35.0007 18.3335H21.6673M35.0007 18.3335L30.5833 10.9712C30.2218 10.3688 29.5708 10.0002 28.8683 10.0002H21.6673"
                      stroke="black"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M8 28H6.66667C5.5621 28 4.66667 27.1046 4.66667 26V21.3333M3 8H19.3333C20.4379 8 21.3333 8.89543 21.3333 10V28M15 28H24.6667M32 28H32.6667C33.7712 28 34.6667 27.1046 34.6667 26V18M34.6667 18H21.3333M34.6667 18L30.2493 10.6377C29.8878 10.0353 29.2368 9.66667 28.5343 9.66667H21.3333"
                      stroke="black"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M5 11.8182H11.6667"
                      stroke="black"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M1.81836 15.4545H8.48503"
                      stroke="black"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M5 19.0909H11.6667"
                      stroke="black"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_261_4843">
                      <rect width="40" height="40" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <div className="text-[16px]">
                  <div>Free Delivery</div>
                  <Link href="#" className="underline text-[12px]">
                    Enter your postal code for Delivery Availability
                  </Link>
                </div>
              </div>
              <div className="px-[16px] pt-[24px] pb-[16px] border-b-[1px] text-black border-gray-400 flex gap-[16px] font-medium items-center">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_261_4865)">
                    <path
                      d="M33.3327 18.3334C32.9251 15.4004 31.5645 12.6828 29.4604 10.5992C27.3564 8.51557 24.6256 7.18155 21.6888 6.80261C18.752 6.42366 15.7721 7.02082 13.208 8.5021C10.644 9.98337 8.6381 12.2666 7.49935 15M6.66602 8.33335V15H13.3327"
                      stroke="black"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M6.66602 21.6667C7.07361 24.5997 8.43423 27.3173 10.5383 29.4009C12.6423 31.4845 15.3731 32.8185 18.3099 33.1974C21.2467 33.5764 24.2266 32.9792 26.7907 31.4979C29.3547 30.0167 31.3606 27.7335 32.4994 25M33.3327 31.6667V25H26.666"
                      stroke="black"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_261_4865">
                      <rect width="40" height="40" fill="white" />
                    </clipPath>
                  </defs>
                </svg>

                <div>
                  <div className="text-[16px]">Return Delivery </div>
                  <div className="text-[12px]">
                    Free 30 Days Delivery Returns.{" "}
                    <Link href="#" className="underline ">
                      Details
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-[140px]">
          <div className="flex h-[40px] items-center">
            <div
              className="h-full min-w-[20px] bg-[#DB4444]"
              style={{
                borderRadius: "4px",
              }}
            ></div>
            <div className="text-[#DB4444] text-[16px] font-semibold px-[10px] pl-[16px]">
              Related Item
            </div>
          </div>
          <div>
            {relatedProducts?.length ? (
              <div className="flex mb-[140px] mt-[60px] justify-between">
                {related.map((product: any, index: number) => {
                  return (
                    <div key={index}>
                      <div className="relative group">
                        <div
                          key={index}
                          className="bg-gray-400 min-w-[270px] h-[250px] rounded-lg overflow-hidden"
                        >
                          <img
                            className="w-full h-full object-cover transition ease-in-out delay-150 bg-gray-100 hover:-translate-y-1 hover:scale-150 hover:bg-gray-300 duration-300 hover:rotate-12"
                            src={product?.productImage}
                            alt={product?.name}
                          />
                        </div>
                        {product?.reducedPercentage ? (
                          <div
                            className="absolute bg-[#DB4444] text-white top-[12px] left-[12px] w-[55px] h-[26px] flex items-center justify-center text-[12px]"
                            style={{
                              borderRadius: "4px",
                            }}
                          >
                            -{product?.reducedPercentage}%
                          </div>
                        ) : null}
                        <div className="absolute  right-[12px] top-[12px] flex-col">
                          <button
                            disabled={!isUserConnected}
                            className="flex items-center justify-center h-[34px] w-[34px] bg-white hover:scale-105 transition-all duration-100 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
                            style={{
                              borderRadius: "100%",
                            }}
                            onClick={() => {
                              if (!isUserConnected) return;

                              const newRelated = related.map(
                                (product: any, index2: number) => {
                                  if (index2 !== index) return product;
                                  return {
                                    ...product,
                                    isInWishlist: !product?.isInWishlist,
                                  };
                                }
                              );

                              setRelated(newRelated);
                            }}
                          >
                            {(() => {
                              console.log(product?.name);
                              return "";
                            })()}
                            {product?.isInWishlist ? (
                              <svg
                                width="18"
                                height="16"
                                viewBox="0 0 18 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M5 1C2.7912 1 1 2.73964 1 4.88594C1 6.61852 1.7 10.7305 8.5904 14.8873C8.71383 14.961 8.85552 15 9 15C9.14448 15 9.28617 14.961 9.4096 14.8873C16.3 10.7305 17 6.61852 17 4.88594C17 2.73964 15.2088 1 13 1C10.7912 1 9 3.35511 9 3.35511C9 3.35511 7.2088 1 5 1Z"
                                  fill="#EA4335"
                                  stroke="#EA4335"
                                  stroke-width="1.5"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                              </svg>
                            ) : (
                              <svg
                                width="18"
                                height="16"
                                viewBox="0 0 18 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M5 1C2.7912 1 1 2.73964 1 4.88594C1 6.61852 1.7 10.7305 8.5904 14.8873C8.71383 14.961 8.85552 15 9 15C9.14448 15 9.28617 14.961 9.4096 14.8873C16.3 10.7305 17 6.61852 17 4.88594C17 2.73964 15.2088 1 13 1C10.7912 1 9 3.35511 9 3.35511C9 3.35511 7.2088 1 5 1Z"
                                  stroke="black"
                                  stroke-width="1.5"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                              </svg>
                            )}
                          </button>
                          <button
                            disabled={!isUserConnected}
                            className="mt-[8px] flex items-center justify-center h-[34px] w-[34px] bg-white hover:scale-105 transition-all duration-100 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
                            style={{
                              borderRadius: "100%",
                            }}
                          >
                            <Link href="#">
                              <svg
                                width="22"
                                height="16"
                                viewBox="0 0 22 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M20.2565 6.962C20.7305 7.582 20.7305 8.419 20.2565 9.038C18.7635 10.987 15.1815 15 10.9995 15C6.81752 15 3.23552 10.987 1.74252 9.038C1.51191 8.74113 1.38672 8.37592 1.38672 8C1.38672 7.62408 1.51191 7.25887 1.74252 6.962C3.23552 5.013 6.81752 1 10.9995 1C15.1815 1 18.7635 5.013 20.2565 6.962V6.962Z"
                                  stroke="black"
                                  stroke-width="1.5"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <path
                                  d="M11 11C12.6569 11 14 9.65685 14 8C14 6.34315 12.6569 5 11 5C9.34315 5 8 6.34315 8 8C8 9.65685 9.34315 11 11 11Z"
                                  stroke="black"
                                  stroke-width="1.5"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                              </svg>
                            </Link>
                          </button>
                        </div>
                        <button
                          className="absolute top-[207px] w-full bg-black text-white text-[16px] h-[42px] translate-y-[40px] opacity-0 group-hover:translate-y-[0px] group-hover:opacity-100 transition-all duration-500 ease-in-out pointer-events-none group-hover:pointer-events-auto"
                          style={{
                            borderBottomLeftRadius: "4px",
                            borderBottomRightRadius: "4px",
                          }}
                        >
                          Add To Cart
                        </button>
                      </div>
                      <div className="text-black font-medium text-[16px] mt-[16px]">
                        {product?.name}
                      </div>
                      <div className="text-[16px] font-medium mt-[8px]">
                        {product?.reducedPercentage ? (
                          <div className="flex gap-[16px]">
                            <div className="text-[#DB4444]">
                              {new Intl.NumberFormat("en-US", {
                                style: "currency",
                                currency: "USD",
                              }).format(product?.price)}
                            </div>
                            <del className="text-gray-400">
                              {new Intl.NumberFormat("en-US", {
                                style: "currency",
                                currency: "USD",
                              }).format(product?.price)}
                            </del>
                          </div>
                        ) : (
                          <div className="text-gray-400">
                            {new Intl.NumberFormat("en-US", {
                              style: "currency",
                              currency: "USD",
                            }).format(product?.price)}
                          </div>
                        )}
                      </div>
                      <div
                        className="mt-[9px] flex gap-[5px] text-gray-400 items-center "
                        aria-disabled={"true"}
                      >
                        {new Array(parseInt(product?.rating) ?? 0)
                          .fill(2)
                          .map((_, index) => {
                            return (
                              <svg
                                key={index}
                                width="16"
                                height="15"
                                viewBox="0 0 16 15"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M14.673 7.17173C15.7437 6.36184 15.1709 4.65517 13.8284 4.65517H11.3992C10.7853 4.65517 10.243 4.25521 10.0617 3.66868L9.33754 1.32637C8.9309 0.0110567 7.0691 0.0110564 6.66246 1.32637L5.93832 3.66868C5.75699 4.25521 5.21469 4.65517 4.60078 4.65517H2.12961C0.791419 4.65517 0.215919 6.35274 1.27822 7.16654L3.39469 8.78792C3.85885 9.1435 4.05314 9.75008 3.88196 10.3092L3.11296 12.8207C2.71416 14.1232 4.22167 15.1704 5.30301 14.342L7.14861 12.9281C7.65097 12.5432 8.34903 12.5432 8.85139 12.9281L10.6807 14.3295C11.7636 15.159 13.2725 14.1079 12.8696 12.8046L12.09 10.2827C11.9159 9.71975 12.113 9.10809 12.5829 8.75263L14.673 7.17173Z"
                                  fill="#FFAD33"
                                />
                              </svg>
                            );
                          })}
                        {new Array(Number(5 - parseInt(product?.rating) ?? 5))
                          .fill(2)
                          .map((_, index) => {
                            return (
                              <svg
                                key={index}
                                width="16"
                                height="15"
                                viewBox="0 0 16 15"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  opacity="0.25"
                                  d="M14.673 7.17173C15.7437 6.36184 15.1709 4.65517 13.8284 4.65517H11.3992C10.7853 4.65517 10.243 4.25521 10.0617 3.66868L9.33754 1.32637C8.9309 0.0110567 7.0691 0.0110564 6.66246 1.32637L5.93832 3.66868C5.75699 4.25521 5.21469 4.65517 4.60078 4.65517H2.12961C0.791419 4.65517 0.215919 6.35274 1.27822 7.16654L3.39469 8.78792C3.85885 9.1435 4.05314 9.75008 3.88196 10.3092L3.11296 12.8207C2.71416 14.1232 4.22167 15.1704 5.30301 14.342L7.14861 12.9281C7.65097 12.5432 8.34903 12.5432 8.85139 12.9281L10.6807 14.3295C11.7636 15.159 13.2725 14.1079 12.8696 12.8046L12.09 10.2827C11.9159 9.71975 12.113 9.10809 12.5829 8.75263L14.673 7.17173Z"
                                  fill="black"
                                />
                              </svg>
                            );
                          })}
                        <div>({product?.numberReviews})</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div>No items</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
