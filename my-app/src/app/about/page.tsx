"use client";

import React, { useState } from "react";
import Link from "next/link";

const numericValues = [
  {
    icon: "./assets/icons/about-icon1.svg",
    value: "10.5k",
    title: "Sallers active our site",
  },
  {
    icon: "./assets/icons/about-icon2.svg",
    value: "33k",
    title: "Mopnthly Produduct Sale",
  },
  {
    icon: "./assets/icons/about-icon3.svg",
    value: "45.5k",
    title: "Customer active in our site",
  },
  {
    icon: "./assets/icons/about-icon4.svg",
    value: "25k",
    title: "Anual gross sale in our site",
  },
];
const people = [
  {
    name: "Tom Cruise",
    position: "Founder & Chairman",
    image: "./assets/images/about-persons-will.svg",
  },
  {
    name: "Emma Watson",
    position: "Managing Director",
    image: "./assets/images/about-persons-emma.svg",
  },
  {
    name: "Will Smith",
    position: "Product Designer",
    image: "./assets/images/about-persons-tom.svg",
  },
];
const valuableDetails = [
  {
    icon: "./assets/icons/about-icon5.svg",
    value: "FREE AND FAST DELIVERY",
    title: "Free delivery for all orders over $140",
  },
  {
    icon: "./assets/icons/about-icon6.svg",
    value: "24/7 CUSTOMER SERVICE",
    title: "Friendly 24/7 customer support",
  },
  {
    icon: "./assets/icons/about-icon7.svg",
    value: "MONEY BACK GUARANTEE",
    title: "We reurn money within 30 days",
  },
];

function About() {
  return (
    <div className="min-h-screen pt-[70px] flex px-[5px] overflow-x-hidden">
      <div className=" max-w-[1160px] mx-auto">
        <Link href="#" className="text-gray-400 flex gap-[12px]">
          <span>Home</span>
          <span>/</span>
          <span className="text-black">About</span>
        </Link>

        <div className="mt-[42px] flex items-center">
          <div className="min-w-[525px] max-w-[525px]">
            <div className="font-semibold text-[54px] mb-[40px]">Our Story</div>
            <div className="text-[16px] font-light mb-[24px]">
              Launced in 2015, Exclusive is South Asia’s premier online shopping
              makterplace with an active presense in Bangladesh. Supported by
              wide range of tailored marketing, data and service solutions,
              Exclusive has 10,500 sallers and 300 brands and serves 3 millioons
              customers across the region.{" "}
            </div>
            <div className="text-[16px] font-light">
              Exclusive has more than 1 Million products to offer, growing at a
              very fast. Exclusive offers a diverse assotment in categories
              ranging from consumer.
            </div>
          </div>
          <div className="relative right-[-180px]">
            <img
              src="./assets/images/about-img1.svg"
              alt="about"
              className="min-w-[837px]"
            />
          </div>
        </div>
        <div className="mt-[140px] flex gap-[30px] justify-between">
          {numericValues.map((item, index) => {
            return (
              <div
                key={index}
                className="cursor-pointer min-w-[270px] min-h-[230px] text-center  gap-[24px] border-[1px] border-[#E5E5E5] rounded-[4px] group hover:bg-[#DB4444] hover:text-white hover:border-[#DB4444] py-[24px] hover:shadow-[gray] hover:shadow-md"
              >
                <div className="bg-black w-fit p-[12px] rounded-full mx-auto border-[11px]   group-hover:bg-white group-hover:border-[#e67c7c]">
                  <img
                    src={item.icon}
                    alt="icon"
                    className="group-hover:invert-[1]"
                  />
                </div>
                <div className="text-[32px] font-semibold mt-[24px]">
                  {item.value}
                </div>
                <div className="text-[16px] font-normal mt-[8px]">
                  {item.title}
                </div>
              </div>
            );
          })}
        </div>
        <div className="mt-[140px] flex gap-[30px] justify-between">
          {people.map((item, index) => {
            return (
              <div className="group">
                <div className="relative " key={index}>
                  <img
                    src={item.image}
                    alt="person"
                    className="group-hover:scale-110 duration-100"
                  />
                </div>
                <div className="text-[24px] font-semibold mt-[32px]">
                  {item.name}
                </div>
                <div className="text-[16px] font-normal">{item.position}</div>
                <div className="flex mt-[19px] gap-[16px]">
                  <Link href="#">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_246_4760)">
                        <path
                          d="M12.905 8.84651L12.905 8.84646C12.9194 8.06035 13.2418 7.3113 13.8028 6.76049C14.3639 6.20969 15.1188 5.90116 15.905 5.90129L12.905 8.84651ZM12.905 8.84651L12.877 10.4213M12.905 8.84651L12.877 10.4213M4.75811 7.80857L4.89001 7.91846C6.76679 9.48211 8.71781 10.4182 10.7495 10.6952C10.7495 10.6952 10.7495 10.6952 10.7495 10.6952L12.3104 10.9072L4.75811 7.80857ZM4.75811 7.80857L4.72759 7.97751M4.75811 7.80857L4.72759 7.97751M4.72759 7.97751C4.42576 9.64819 4.5683 11.0709 5.1479 12.3018C5.72718 13.532 6.73827 14.5605 8.15577 15.4519L8.15579 15.452M4.72759 7.97751L8.15579 15.452M8.15579 15.452L9.90279 16.55L9.954 16.4685M8.15579 15.452L9.954 16.4685M9.954 16.4685L9.90279 16.55C9.97196 16.5934 10.0294 16.6532 10.0702 16.724C10.1109 16.7948 10.1337 16.8745 10.1365 16.9562C10.1392 17.0378 10.122 17.1189 10.0862 17.1924C10.0504 17.2658 9.99716 17.3294 9.93112 17.3775L9.93101 17.3775M9.954 16.4685L9.93101 17.3775M9.93101 17.3775L8.33901 18.5405L8.11542 18.7039M9.93101 17.3775L8.11542 18.7039M8.11542 18.7039L8.39178 18.7211M8.11542 18.7039L8.39178 18.7211M8.39178 18.7211C9.3449 18.7805 10.2529 18.7385 11.0095 18.5884L11.0096 18.5884M8.39178 18.7211L11.0096 18.5884M11.0096 18.5884C13.3886 18.1134 15.3745 16.9794 16.7652 15.2211M11.0096 18.5884L16.7652 15.2211M12.877 10.4213C12.8757 10.4918 12.8594 10.5612 12.8293 10.625C12.7993 10.6887 12.7561 10.7454 12.7026 10.7912C12.649 10.8371 12.5864 10.8712 12.5188 10.8911C12.4513 10.9111 12.3803 10.9166 12.3105 10.9072L12.877 10.4213ZM16.7652 15.2211C18.1557 13.463 18.945 11.0883 18.945 8.14229M16.7652 15.2211L18.945 8.14229M18.945 8.14229C18.945 7.99668 18.8714 7.78474 18.744 7.55722M18.945 8.14229L18.744 7.55722M18.744 7.55722C18.6142 7.32559 18.4215 7.06508 18.1673 6.82049M18.744 7.55722L18.1673 6.82049M18.1673 6.82049C17.6587 6.33088 16.8999 5.90129 15.905 5.90129L18.1673 6.82049ZM20.4978 5.53842C20.8818 5.48388 21.3285 5.34345 21.916 5.01105C21.6101 6.49526 21.4321 7.16764 20.7642 8.08336L20.745 8.10969V8.14229C20.745 11.9415 19.578 14.7567 17.8258 16.7397C16.0726 18.7238 13.7277 19.8813 11.3624 20.3532C9.74529 20.6759 7.7544 20.5728 5.99643 20.2106C5.11813 20.0296 4.30077 19.7846 3.61983 19.4974C3.03727 19.2517 2.56009 18.9775 2.22956 18.6904C2.66065 18.6482 3.4114 18.5535 4.24366 18.3598C5.24355 18.1272 6.37173 17.7494 7.20306 17.141L7.31918 17.056L7.19904 16.9768C7.15724 16.9492 7.11178 16.9196 7.06301 16.8879C6.30477 16.3938 4.74648 15.3786 3.73155 13.5166C2.66714 11.5637 2.19257 8.66295 3.91362 4.42592C5.57889 6.34347 7.2726 7.66001 8.99504 8.3668L8.99505 8.36681C9.57662 8.60536 9.94255 8.72373 10.2318 8.79141C10.4509 8.84265 10.6261 8.86463 10.8117 8.88794C10.8703 8.89529 10.93 8.90278 10.9924 8.91135L11.2872 8.95189L11.1059 8.77077C11.131 7.8414 11.4254 6.93895 11.9539 6.17331C12.4904 5.39606 13.2442 4.79434 14.1211 4.4435C14.9979 4.09265 15.9588 4.00828 16.8833 4.20093C17.8079 4.39359 18.6551 4.85471 19.3189 5.52657L19.3485 5.55658L19.3907 5.55628C19.4934 5.55556 19.5972 5.55908 19.7036 5.56269C19.9483 5.57098 20.2068 5.57974 20.4978 5.53842Z"
                          fill="black"
                          stroke="white"
                          stroke-width="0.2"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_246_4760">
                          <rect width="24" height="24" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </Link>
                  <Link href="#">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17 3H7C5.93913 3 4.92172 3.42143 4.17157 4.17157C3.42143 4.92172 3 5.93913 3 7V17C3 18.0609 3.42143 19.0783 4.17157 19.8284C4.92172 20.5786 5.93913 21 7 21H17C18.0609 21 19.0783 20.5786 19.8284 19.8284C20.5786 19.0783 21 18.0609 21 17V7C21 5.93913 20.5786 4.92172 19.8284 4.17157C19.0783 3.42143 18.0609 3 17 3Z"
                        stroke="black"
                        stroke-width="1.5"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M12 16C13.0609 16 14.0783 15.5786 14.8284 14.8284C15.5786 14.0783 16 13.0609 16 12C16 10.9391 15.5786 9.92172 14.8284 9.17157C14.0783 8.42143 13.0609 8 12 8C10.9391 8 9.92172 8.42143 9.17157 9.17157C8.42143 9.92172 8 10.9391 8 12C8 13.0609 8.42143 14.0783 9.17157 14.8284C9.92172 15.5786 10.9391 16 12 16V16Z"
                        stroke="black"
                        stroke-width="1.5"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M17.5 7.5C17.7652 7.5 18.0196 7.39464 18.2071 7.20711C18.3946 7.01957 18.5 6.76522 18.5 6.5C18.5 6.23478 18.3946 5.98043 18.2071 5.79289C18.0196 5.60536 17.7652 5.5 17.5 5.5C17.2348 5.5 16.9804 5.60536 16.7929 5.79289C16.6054 5.98043 16.5 6.23478 16.5 6.5C16.5 6.76522 16.6054 7.01957 16.7929 7.20711C16.9804 7.39464 17.2348 7.5 17.5 7.5Z"
                        fill="black"
                      />
                    </svg>
                  </Link>
                  <Link href="#">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.5 6.05C9.417 5.113 10.611 4.5 12 4.5C13.4587 4.5 14.8576 5.07946 15.8891 6.11091C16.9205 7.14236 17.5 8.54131 17.5 10V17.5H15.5V10C15.5 9.07174 15.1313 8.1815 14.4749 7.52513C13.8185 6.86875 12.9283 6.5 12 6.5C11.0717 6.5 10.1815 6.86875 9.52513 7.52513C8.86875 8.1815 8.5 9.07174 8.5 10V17.5H6.5V5H8.5V6.05ZM1.5 3C1.10218 3 0.720644 2.84196 0.43934 2.56066C0.158035 2.27936 0 1.89782 0 1.5C0 1.10218 0.158035 0.720644 0.43934 0.43934C0.720644 0.158035 1.10218 0 1.5 0C1.89782 0 2.27936 0.158035 2.56066 0.43934C2.84196 0.720644 3 1.10218 3 1.5C3 1.89782 2.84196 2.27936 2.56066 2.56066C2.27936 2.84196 1.89782 3 1.5 3ZM0.5 5H2.5V17.5H0.5V5Z"
                        fill="black"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
        <div className="mx-auto w-fit mt-[40px]">
          <svg
            width="112"
            height="16"
            viewBox="0 0 112 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle opacity="0.3" cx="6" cy="8" r="6" fill="black" />
            <circle opacity="0.3" cx="30" cy="8" r="6" fill="black" />
            <circle cx="56" cy="8" r="5" fill="#DB4444" />
            <circle
              opacity="0.3"
              cx="56"
              cy="8"
              r="7"
              stroke="black"
              stroke-width="2"
            />
            <circle opacity="0.3" cx="82" cy="8" r="6" fill="black" />
            <circle opacity="0.3" cx="106" cy="8" r="6" fill="black" />
          </svg>
        </div>
        <div className="mt-[140px] flex gap-[30px] justify-evenly mb-[140px]">
          {valuableDetails.map((item, index) => {
            return (
              <div
                key={index}
                className="p-2 cursor-pointer min-w-[270px] min-h-[230px] text-center  gap-[24px]  group hover:bg-[#DB4444] hover:text-white hover:border-[#DB4444] py-[24px] hover:shadow-[gray] hover:shadow-[0px 4px 40px 10px rgba(0, 0, 0, 0.25)]"
              >
                <div className="bg-black w-fit p-[12px] rounded-full mx-auto border-[11px]   group-hover:bg-white group-hover:border-[#e67c7c]">
                  <img
                    src={item.icon}
                    alt="icon"
                    className="group-hover:invert-[1]"
                  />
                </div>
                <div className="text-[20px] font-semibold mt-[24px]">
                  {item.value}
                </div>
                <div className="text-[14px] font-normal mt-[8px]">
                  {item.title}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default About;
