"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import todays from "../../todays.json";
import bestSelling from "../../bestSelling.json";
import ourProduct from "../../ourProduct.json";
import axios from "axios";
import { Product } from "@prisma/client";

console.log(bestSelling);
console.log(ourProduct);

export default function Products() {
  // const [products , setProducts] = useState([])
  const [todaysData, setTodaysData] = useState([]);
  const [bestSellingData, setbestSellingData] = useState([]);
  const [ourProductData, setOurProductData] = useState([]);
  const [displayAllProducts, setDisplayAllProducts] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [filttered, setfiltered] = useState(false);
  const [sliced, setsliced] = useState(false);

  const [newdata, setnewdata] = useState(ourProduct.slice(0, 2));
  console.log(newdata, "sliced");
  console.log(sliced, "test");

  var filteredProducts = ourProductData.filter(
    (product) => product.category === selectedCategory
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/products");
        // const productsData = response.data;
        // setProducts(productsData);
        setTodaysData(todays);
        setbestSellingData(bestSelling);
        setOurProductData(ourProduct);
        console.log("those product of todays ", todays);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [filttered, sliced]); // The empty dependency array means this effect runs once after the initial render

  return (
    <div>
      {/*categories*/}
      <div
        style={{ marginLeft: "80px" }}
        className="w-56 h-80 flex-col justify-start items-start gap-4 inline-flex"
      >
        <div
          style={{ marginTop: "180px" }}
          className="justify-start items-start gap-12 inline-flex"
        >
          <button
            className={`text-center text-black text-base font-normal leading-normal ${
              selectedCategory === "Womans Fashion" ? "text-red-500" : ""
            }`}
            onClick={() => {
              setSelectedCategory("Womans Fashion");
              setfiltered(true);
            }}
          >
            Woman’s Fashion
          </button>
        </div>
        <div className="justify-start items-start gap-20 inline-flex">
          <button className="text-center text-black text-base font-normal leading-normal">
            Men’s Fashion
          </button>
          <div className="w-6 h-6 relative origin-top-left -rotate-90"></div>
        </div>
        <button className="text-center text-black text-base font-normal leading-normal">
          Electronics
        </button>
        <button className="text-center text-black text-base font-normal leading-normal">
          Home & Lifestyle
        </button>
        <button className="text-center text-black text-base font-normal leading-normal">
          Medicine
        </button>
        <button className="text-center text-black text-base font-normal leading-normal">
          Sports & Outdoor
        </button>
        <button className="text-center text-black text-base font-normal leading-normal">
          Baby’s & Toys
        </button>
        <button className="text-center text-black text-base font-normal leading-normal">
          Groceries & Pets
        </button>
        <button className="text-center text-black text-base font-normal leading-normal">
          Health & Beauty
        </button>
      </div>

      <div>
        {/*picture in the top*/}

        <img
          style={{ marginLeft: "500px ", marginTop: "-260px" }}
          src="https://www.thetechedvocate.org/wp-content/uploads/2023/07/screen-shot-2022-09-07-at-2-11-25-pm-2-1-1-660x400@2x.webp"
        />
      </div>
      {/*flas sales*/}
      <div
        style={{ marginTop: "180px", marginLeft: "80px" }}
        className=" w-0 h-15 relative w-96 h-24 justify-start items-end gap-20 inline-flex"
      >
        <div className=" h-24 flex-col justify-start items-start gap-6 inline-flex ">
          <div className="justify-start items-center gap-4 inline-flex">
            <div className="w-5 h-10 relative">
              <div className="w-5 h-10 left-0 top-0 absolute bg-red-500 rounded "></div>
            </div>
            <div className=" text-red-500 text-base font-semibold leading-tight">
              Todays
            </div>
          </div>
          <div>
            <div>Flash Sales</div>
          </div>
        </div>
        <div className="w-72 h-12 relative">
          <div className="w-11 left-0 top-0 absolute flex-col justify-start items-start gap-1 inline-flex">
            <div className="w-8 text-black text-xs font-medium leading-none">
              Days
            </div>
            <div className="w-11 h-7 text-black text-3xl font-bold leading-loose tracking-wider">
              03
            </div>
          </div>
          <div className="w-10 h-12 left-[84px] top-0 absolute flex-col justify-start items-start gap-1 inline-flex">
            <div className="w-9 text-black text-xs font-medium leading-none">
              Hours
            </div>
            <div className="text-black text-3xl font-bold leading-loose tracking-wider">
              23
            </div>
          </div>
          <div className="w-12 h-12 left-[164px] top-0 absolute flex-col justify-start items-start gap-1 inline-flex">
            <div className="w-12 text-black text-xs font-medium leading-none">
              Minutes
            </div>
            <div className="w-10 h-7 text-black text-3xl font-bold leading-loose tracking-wider">
              19
            </div>
          </div>
          <div className="w-12 h-12 left-[251px] top-0 absolute flex-col justify-start items-start gap-1 inline-flex">
            <div className="w-12 text-black text-xs font-medium leading-none">
              Seconds
            </div>
            <div className="text-black text-3xl font-bold leading-loose tracking-wider">
              56
            </div>
          </div>
          <div className="left-[63px] top-[26px] absolute flex-col justify-start items-start gap-2 inline-flex">
            <div className="w-1 h-1 bg-red-400 rounded-full"></div>
            <div className="w-1 h-1 bg-red-400 rounded-full"></div>
          </div>
          <div className="left-[143px] top-[26px] absolute flex-col justify-start items-start gap-2 inline-flex">
            <div className="w-1 h-1 bg-red-400 rounded-full"></div>
            <div className="w-1 h-1 bg-red-400 rounded-full"></div>
          </div>
          <div className="left-[230px] top-[26px] absolute flex-col justify-start items-start gap-2 inline-flex">
            <div className="w-1 h-1 bg-red-400 rounded-full"></div>
            <div className="w-1 h-1 bg-red-400 rounded-full"></div>
          </div>
        </div>
      </div>

      {/*product of today's*/}
      {todaysData.map((product: Product) => (
        <div
          className="w-60 h-10 px-0 py-4  rounded justify-center items-center gap-2.5 inline-flex"
          style={{ marginLeft: "50px", marginTop: "50px" }}
        >
          <div className="w-64 h-80 flex-col justify-start items-start gap-4 inline-flex">
            <div className="w-64 h-64 relative bg-neutral-0 rounded">
              <div>
                <div>
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

              <div className="w-48 h-44 px-6 py-4 left-[40px] top-[35px] absolute justify-center items-center inline-flex">
                <img
                  onClick={() => {
                    localStorage.setItem("product", JSON.stringify(product));

                    window.location.href = "/product-details";
                  }}
                  style={{ marginLeft: "-300px", marginTop: "300px" }}
                  className="w-36 h-36 "
                  src={product.image}
                />
              </div>
            </div>
            <div
              style={{ marginTop: "400px" }}
              className="flex-col justify-start items-start gap-2 flex"
            >
              <div
                style={{ marginLeft: "-130px" }}
                className="w-60 h-90 px-0 py-4  rounded justify-center items-center gap-2.5 inline-flex"
              >
                {product.name}
              </div>

              <div className="justify-start items-start gap-3 inline-flex">
                <div
                  style={{ marginLeft: "-80px" }}
                  className="text-red-500 text-base font-medium leading-normal"
                >
                  {product.price}$
                </div>
                <div className="opacity-50 text-black text-base font-medium line-through leading-normal">
                  $360
                </div>
              </div>
              <div className="justify-start items-start gap-2 inline-flex">
                <div className="justify-start items-start flex"></div>
              </div>
              <button
                onClick={() => {
                  const selectedProducts = JSON.parse(
                    localStorage.getItem("selectedProducts") || "[]"
                  );
                  const alreadyExists = selectedProducts.find(
                    (product: any) => {
                      return product.name === product.name;
                    }
                  );
                  if (!alreadyExists) {
                    localStorage.setItem(
                      "selectedProducts",
                      JSON.stringify([
                        ...selectedProducts,
                        { ...product, quantity: 1 },
                      ])
                    );
                  }

                  window.location.href = "/cart";
                }}
                className="w-32 h-10 px-4 py-2 text-white bg-black hover:bg-gray-800 rounded-md shadow-md focus:outline-none"
                style={{ marginTop: "-150px", marginLeft: "-80px" }}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      ))}

      {/*view All products*/}
      <div style={{ marginTop: "450px", marginLeft: "800px" }}>
        <div className="w-60 h-14 px-12 py-4 bg-red-500 rounded justify-center items-center gap-2.5 inline-flex">
          <button className="text-neutral-50 text-base font-medium leading-normal">
            View All Products
          </button>
        </div>
      </div>

      {/*browser your category*/}
      <button>
        <div
          style={{ marginTop: "80px", marginLeft: "80px" }}
          className="w-96 h-80 flex-col justify-start items-start gap-14 inline-flex"
        >
          <div className="justify-start items-end gap-96 inline-flex">
            <div className="flex-col justify-start items-start gap-5 inline-flex">
              <div className="justify-start items-center gap-4 inline-flex">
                <div className="w-5 h-10 relative">
                  <div className="w-5 h-10 left-0 top-0 absolute bg-red-500 rounded"></div>
                </div>
                <div className="text-red-500 text-base font-semibold leading-tight">
                  Categories
                </div>
              </div>
              <div className="flex">
                <div className=" w-60 h-10 px-0 py-4  rounded justify-center items-center gap-2.5 inline-flex">
                  Browse By Category
                </div>
              </div>
            </div>
            <div className="justify-start items-start gap-2 flex">
              <div className="w-11 h-11 relative">
                <div className=""></div>
                <div className="w-6 h-6 left-[11px] top-[11px] absolute"></div>
              </div>
              <div className="w-11 h-11 relative">
                <div className=""></div>
                <div className="w-6 h-6 left-[11px] top-[11px] absolute"></div>
              </div>
            </div>
          </div>
          <div
            style={{ marginTop: "80px", marginLeft: "300px" }}
            className="justify-start items-start gap-7 inline-flex"
          >
            <div className="w-44 h-36 px-14 py-6 rounded border border-black border-opacity-30 flex-col justify-center items-end gap-4 inline-flex">
              <div className="w-14 h-14 relative flex-col justify-start items-start flex">
                <div></div>
              </div>
              <img src="https://static.vecteezy.com/system/resources/previews/006/329/501/original/icon-phone-call-isolated-white-background-free-vector.jpg" />
              <div className="text-black text-base font-normal leading-normal">
                Phones
              </div>
            </div>

            <div className="w-40 h-36 px-10 py-6  rounded border border-black border-opacity-30 flex-col justify-center items-center gap-4 inline-flex">
              <div className="w-14 h-14 relative flex-col justify-start items-start flex"></div>
              <img src="https://t3.ftcdn.net/jpg/02/65/17/46/360_F_265174698_QwmmvOlQmVrA9vMxwVyFf82wZLtSIkQY.jpg " />

              <div className="text-black text-base font-normal leading-normal">
                Computers
              </div>
            </div>
            <div className="w-40 h-36 pl-12 pr-11 py-6 rounded border border-black border-opacity-30 flex-col justify-center items-center gap-4 inline-flex">
              <div className="w-14 h-14 relative flex-col justify-start items-start flex">
                <div className="w-2.5 h-3 justify-start items-end gap-1 inline-flex">
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </div>
              <img src="https://static.vecteezy.com/system/resources/previews/006/659/379/original/smart-watch-outline-icon-illustration-on-isolated-white-background-suitable-for-fashion-accessories-wristwatch-icon-free-vector.jpg" />
              <div className="text-black text-base font-normal leading-normal">
                SmartWatch
              </div>
            </div>
            <div className="w-40 h-36 pl-12 pr-11 py-6  rounded shadow flex-col justify-center items-center gap-4 inline-flex">
              <div className="w-14 h-14 relative flex-col justify-start items-start flex"></div>
              <img src="https://img.myloview.com/canvas-prints/camera-icon-vector-camera-icon-isolated-on-white-background-camera-icon-simple-and-modern-for-app-web-and-design-700-245051969.jpg" />
              <div className="text-black-50 text-base font-normal leading-normal">
                Camera
              </div>
            </div>
            <div className="w-40 h-36 pl-12 pr-11 py-6 rounded border border-black border-opacity-30 flex-col justify-center items-center gap-4 inline-flex">
              <div className="w-14 h-14 relative flex-col justify-start items-start flex"></div>
              <img src="https://static.vecteezy.com/system/resources/previews/009/688/816/original/sign-of-the-headphones-symbol-is-isolated-on-a-white-background-headphones-icon-color-editable-vector.jpg" />
              <div className="text-black text-base font-normal leading-normal">
                HeadPhones
              </div>
            </div>
            <div className="w-44 h-36 pl-14 pr-12 py-6 rounded border border-black border-opacity-30 flex-col justify-center items-center gap-4 inline-flex">
              <div className="w-14 h-14 relative flex-col justify-start items-start flex"></div>
              <img src="https://static.vecteezy.com/system/resources/previews/001/991/686/original/game-controller-icon-game-controller-icon-design-on-white-background-free-vector.jpg" />
              <div className="text-black text-base font-normal leading-normal">
                Gaming
              </div>
            </div>
          </div>
        </div>
      </button>

      {/*best selling product*/}
      <div style={{ marginTop: "150px", marginLeft: "80px" }}>
        <div className="w-96 h-28 justify-start items-end gap-96 inline-flex">
          <div className="flex-col justify-start items-start gap-5 inline-flex">
            <div className="justify-start items-center gap-4 inline-flex">
              <div className="w-5 h-10 relative">
                <div className="w-5 h-10 left-0 top-0 absolute bg-red-500 rounded"></div>
              </div>
              <div className="text-red-500 text-base font-semibold leading-tight">
                This Month
              </div>
            </div>
            <div className="w-60 h-10 px-0 py-4  rounded justify-center items-center gap-2.5 inline-flex">
              Best Selling Products
            </div>
          </div>
          <div
            style={{ marginLeft: "750px" }}
            className="px-12 py-4 bg-red-500 rounded justify-center items-center gap-2.5 flex"
          >
            <Link
              href="/whishList"
              style={{ marginLeft: "0px" }}
              className=" text-black-500 w-60 h-10 px-0 py-4  rounded justify-center items-center gap-2.5 inline-flex"
            >
              View All
            </Link>
          </div>
        </div>
      </div>

      {/*best selling*/}
      {bestSellingData.map((product) => (
        <div
          className="w-60 h-10 px-0 py-4  rounded justify-center items-center gap-2.5 inline-flex"
          style={{ marginLeft: "50px", marginTop: "50px" }}
        >
          <div className="w-64 h-80 flex-col justify-start items-start gap-4 inline-flex">
            <div className="w-64 h-64 relative bg-neutral-0 rounded">
              <div>
                <div>
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
              <div className="w-48 h-44 px-6 py-4 left-[40px] top-[35px] absolute justify-center items-center inline-flex">
                <img
                  style={{ marginLeft: "600px", marginTop: "300px" }}
                  className=" w-36 h-36 "
                  src={product.image}
                />
              </div>
            </div>
            <div
              style={{ marginLeft: "450px", marginTop: "300px" }}
              className="flex-col justify-start items-start gap-2 flex"
            >
              <div
                style={{ marginLeft: "-130px" }}
                className="w-60 h-90 px-0 py-4  rounded justify-center items-center gap-2.5 inline-flex"
              >
                {product.name}
              </div>
              <div className="justify-start items-start gap-3 inline-flex">
                <div
                  style={{ marginLeft: "-80px" }}
                  className="text-red-500 text-base font-medium leading-normal"
                >
                  {product.price}$
                </div>
                <div className="opacity-50 text-black text-base font-medium line-through leading-normal">
                  $360
                </div>
              </div>
              <div className="justify-start items-start gap-2 inline-flex">
                <div className="justify-start items-start flex"></div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/*explore our product*/}

      <div style={{ marginTop: "600px", marginLeft: "80px" }}>
        <div className="w-96 h-28 flex-col justify-start items-start gap-5 inline-flex">
          <div className="justify-start items-center gap-4 inline-flex">
            <div className="w-4 h-10 relative">
              <div className="w-5 h-10 left-0 top-0 absolute bg-red-500 rounded"></div>
            </div>
            <div className="text-red-500 text-base font-semibold leading-tight">
              Our Products
            </div>
          </div>
          <div className="text-black text-0x6 font-semibold leading-10 tracking-wider">
            Explore Our Products
          </div>
        </div>
      </div>
      {/*our product*/}

      {filttered
        ? filteredProducts.map((product) => (
            <div
              className="w-60 h-10 px-0 py-4  rounded justify-center items-center gap-2.5 inline-flex"
              style={{ marginLeft: "50px", marginTop: "50px" }}
            >
              <div className="w-64 h-80 flex-col justify-start items-start gap-4 inline-flex">
                <div className="w-64 h-64 relative bg-neutral-0 rounded">
                  <div>
                    <div>
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
                  <div className="w-48 h-44 px-6 py-4 left-[40px] top-[35px] absolute justify-center items-center inline-flex">
                    <img
                      style={{ marginLeft: "650px", marginTop: "-0px" }}
                      className="w-36 h-36 "
                      src={product.image}
                    />
                  </div>
                </div>
                <div
                  style={{ marginLeft: "500px", marginTop: "150px" }}
                  className="flex-col justify-start items-start gap-2 flex"
                >
                  <div
                    style={{ marginLeft: "-130px" }}
                    className="w-60 h-90 px-0 py-4  rounded justify-center items-center gap-2.5 inline-flex"
                  >
                    {product.name}
                  </div>
                  <div className="justify-start items-start gap-3 inline-flex">
                    <div
                      style={{ marginLeft: "-80px" }}
                      className="text-red-500 text-base font-medium leading-normal"
                    >
                      {product.price}
                    </div>
                    <div className="opacity-50 text-black text-base font-medium line-through leading-normal">
                      $360
                    </div>
                  </div>
                  <div className="justify-start items-start gap-2 inline-flex">
                    <div className="justify-start items-start flex"></div>
                  </div>
                </div>
              </div>
            </div>
          ))
        : newdata.map((product) => (
            <div
              className="w-60 h-10 px-0 py-4  rounded justify-center items-center gap-2.5 inline-flex"
              style={{ marginLeft: "50px", marginTop: "50px" }}
            >
              <div className="w-64 h-80 flex-col justify-start items-start gap-4 inline-flex">
                <div className="w-64 h-64 relative bg-neutral-0 rounded">
                  <div>
                    <div>
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
                  <div className="w-48 h-44 px-6 py-4 left-[40px] top-[35px] absolute justify-center items-center inline-flex">
                    <img
                      style={{ marginLeft: "650px", marginTop: "-0px" }}
                      className="w-36 h-36 "
                      src={product.image}
                    />
                  </div>
                </div>
                <div
                  style={{ marginLeft: "500px", marginTop: "150px" }}
                  className="flex-col justify-start items-start gap-2 flex"
                >
                  <div
                    style={{ marginLeft: "-130px" }}
                    className="w-60 h-90 px-0 py-4  rounded justify-center items-center gap-2.5 inline-flex"
                  >
                    {product.name}
                  </div>
                  <div className="justify-start items-start gap-3 inline-flex">
                    <div
                      style={{ marginLeft: "-80px" }}
                      className="text-red-500 text-base font-medium leading-normal"
                    >
                      {product.price}
                    </div>
                    <div className="opacity-50 text-black text-base font-medium line-through leading-normal">
                      $360
                    </div>
                  </div>
                  <div className="justify-start items-start gap-2 inline-flex">
                    <div className="justify-start items-start flex"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}

      <div>
        <div
          style={{ marginTop: "400px", marginLeft: "800px" }}
          className="w-60 h-14 px-12 py-4 bg-red-500 rounded justify-center items-center gap-2.5 inline-flex"
        >
          <div className=" text-white text-neutral-50 text-base font-medium leading-normal"></div>
          <button
            className=" text-white text-neutral-50 text-base font-medium leading-normal"
            onClick={() => {
              setDisplayAllProducts(!displayAllProducts);
              setfiltered(false);
              setsliced(!sliced);
              sliced === true
                ? setnewdata(ourProduct.slice(0, 2))
                : setnewdata(ourProduct);
            }}
          >
            {displayAllProducts ? "Hide Products" : "View All "}
          </button>
        </div>
      </div>

      {/*featured*/}
      <div style={{ marginLeft: "80px", marginTop: "200px" }}>
        <div className="w-52 h-28 flex-col justify-start items-start gap-5 inline-flex">
          <div className="justify-start items-center gap-4 inline-flex">
            <div className="w-5 h-10 relative">
              <div className="w-5 h-10 left-0 top-0 absolute bg-red-500 rounded"></div>
            </div>
            <div className="text-red-500 text-base font-semibold leading-tight">
              Featured
            </div>
          </div>
          <div className="text-5x9  w-60 h-1 px-1 py-4  rounded justify-center items-center gap-2.5 inline-flex ">
            New Arrival
          </div>
        </div>
        <div>
          <img
            style={{ marginLeft: "400px", marginTop: "50px" }}
            className="w-90 h-auto"
            src="https://img.freepik.com/premium-photo/beautiful-young-woman-black-dress-hat-black-background_73107-1798.jpg"
          />
        </div>
      </div>

      {/*service*/}
      <div style={{ marginTop: "60px", marginLeft: "800px" }}>
        <div className="w-96 h-40 justify-center items-center gap-20 inline-flex">
          <div className="flex-col justify-start items-center gap-6 inline-flex">
            <div className="w-20 h-20 relative">
              <div className="w-20 h-20 left-0 top-0 absolute">
                <div className="w-20 h-20 left-0 top-0 absolute opacity-30 bg-zinc-800 rounded-full"></div>
                <div className="w-14 h-14 left-[11px] top-[11px] absolute bg-black rounded-full"></div>
              </div>
              <div className="w-10 h-10 left-[20px] top-[20px] absolute"></div>
            </div>
            <div className="flex-col justify-start items-center gap-2 flex">
              <img
                style={{ marginTop: "-104px" }}
                className=" w-20 h-20 relative"
                src="https://previews.123rf.com/images/dstarky/dstarky1707/dstarky170700097/81443502-thin-line-delivery-icon-vector-illustration-isolated-on-a-white-background-simple-outline.jpg"
              />
              <div className="w-60 h-10 px-0 py-4  rounded justify-center items-center gap-2.5 inline-flex">
                FREE AND FAST DELIVERY
              </div>
              <div className="text-center text-black text-sm font-normal leading-tight">
                Free delivery for all orders over $140
              </div>
            </div>
          </div>
          <div className="w-64 flex-col justify-start items-center gap-6 inline-flex">
            <div className="w-20 h-20 relative">
              <div className="w-20 h-20 left-0 top-0 absolute">
                <div className="w-20 h-20 left-0 top-0 absolute opacity-30 bg-zinc-800 rounded-full"></div>
                <div className="w-14 h-14 left-[11px] top-[11px] absolute bg-black rounded-full"></div>
              </div>
              <div className="w-10 h-10 left-[20px] top-[20px] absolute"></div>
            </div>
            <div className="flex-col justify-start items-center gap-2 flex">
              <img
                style={{ marginTop: "-104px" }}
                className="w-20 h-20 relative"
                src="https://img.myloview.com/stickers/customer-support-icon-outline-customer-support-vector-icon-for-web-design-isolated-on-white-background-700-240430232.jpg "
              />
              <div className="w-60 h-14 px-1 py-4  rounded justify-center items-center gap-2.5 inline-flex">
                24/7 CUSTOMER SERVICE
              </div>
              <div className="text-black text-sm font-normal leading-tight">
                Friendly 24/7 customer support
              </div>
            </div>
          </div>
          <div className="flex-col justify-start items-center gap-6 inline-flex">
            <div className="w-20 h-20 relative">
              <div className="w-20 h-20 left-0 top-0 absolute">
                <div className=""></div>
                <div className=""></div>
              </div>
              <div className="w-10 h-10 left-[20px] top-[20px] absolute justify-center items-center inline-flex">
                <div className="w-10 h-10 relative"></div>
              </div>
            </div>
            <div className="flex-col justify-start items-center gap-2 flex">
              <img
                style={{ marginTop: "-104px" }}
                className="w-20 h-20 relative"
                src="https://cdn-icons-png.flaticon.com/512/2424/2424670.png"
              />
              <div className="">MONEY BACK GUARANTEE</div>
              <div className="w-60 h-10 px-0 py-4  rounded justify-center items-center gap-2.5 inline-flex">
                We reurn money within 30 days
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
