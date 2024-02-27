import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

// Swiper carousel for products section
import { Swiper, SwiperSlide } from "swiper/react"; // Import Swiper components
import "swiper/css"; // Import Swiper styles

// Import fetch products API
import fetchProducts from "../api/api"; // Ensure correct import path

// Icon imports:
import { GiWorld, GiCheckboxTree } from "react-icons/gi";
import { GrUserWorker } from "react-icons/gr";

import {
  FaRecycle,
  FaPeopleArrows,
  FaArrowAltCircleDown,
} from "react-icons/fa";
import { MdConnectWithoutContact } from "react-icons/md";
import { TiWorld } from "react-icons/ti";
import { IoMdPaperPlane } from "react-icons/io";
import { LiaFileContractSolid } from "react-icons/lia";
import { GiMoneyStack } from "react-icons/gi";
import { CiCalculator1 } from "react-icons/ci";
import { PiTruckDuotone } from "react-icons/pi";
import { GrWorkshop } from "react-icons/gr";
import { IoMdArrowDropright } from "react-icons/io";
import { FaArrowRightToBracket } from "react-icons/fa6";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

export default function Home() {
  // Navigate below
  const navigate = useNavigate();
  // Below is state for the about us / services card section
  const [activeItem, setActiveItem] = useState("LDPE");
  const [showTitle, setShowTitle] = useState(true);
  const [currentSection, setCurrentSection] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(1);

  // Fetch products hooks and state
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setShowTitle(window.scrollY <= 1); // The title shows when scroll position is at or below 50px
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // useEffect, hook for calling and formatting the imported product data.
  useEffect(() => {
    const getProducts = async () => {
      const result = await fetchProducts();
      if (result.data && !result.error) {
        const formattedProducts = result.data.map((item) => {
          const { id, attributes } = item;
          const { product_title, product_desc, product_Img } = attributes;

          const imageUrl =
            product_Img.data.length > 0
              ? product_Img.data[0].attributes.url
              : "";

          return {
            id,
            title: product_title,
            desc: product_desc,
            img: imageUrl,
          };
        });
        setProducts(formattedProducts);
      } else {
        setError(result.error || "An unkown error occured!");
      }
    };
    getProducts();
  }, []);

  // Below is array that shows in section support...
  const sections = [
    {
      title: "45,000 Lorem",
      description: "Lorem ipsum dipsum alipsum elrit ",
    },
    {
      title: "Lorem ipsum dolor sit!",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    },
    {
      title: "Lorem ipsum dolor",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
    },
  ];

  const nextSection = () => {
    setCurrentSection((currentSection + 1) % sections.length);
  };

  const prevSection = () => {
    setCurrentSection((currentSection - 1 + sections.length) % sections.length);
  };

  // Below are the items that render the content in the products "accordian"
  const renderItemContent = () => {
    switch (activeItem) {
      /* HDPE Listings */
      // case "HDPE":
      //   return (
      //     <div className="flex flex-col md:flex-row justify-start">
      //       <div className="flex flex-row justify-center gap-2 items-center">
      //         {/* <div className="text-2xl text-white bg-[#59c9a5] rounded-full p-2 pr-3">
      //           {/* <FaArrowRightToBracket />
      //         </div> */}
      //         <p className="text-2xl  font-medium tracking-wide lowercase">
      //           Coming soon...
      //         </p>
      //       </div>
      //       <img
      //         className="max-w-full h-64"
      //         src="src/assets/placeholderItem.png"
      //       />
      //     </div>
      //   );
      /* LDPE Product Listings */
      case "LDPE":
        return (
          <div className="flex flex-col md:flex-row">
            <div className="flex flex-col gap-8">
              <div className="flex flex-col justify-center gap-2 items-center">
                {/* <div className="text-2xl text-white bg-[#59c9a5]  rounded-full p-2 pr-3">
                  <FaArrowRightToBracket />
                </div> */}
                <p className="text-2xl  font-medium tracking-wide lowercase">
                  Products
                </p>
                <Swiper
                  // Swiper parameters such as slidesPerView, loop, etc.
                  spaceBetween={50}
                  slidesPerView={1}
                  onSlideChange={() => console.log("slide change")}
                  onSwiper={(swiper) => console.log(swiper)}
                >
                  {products &&
                    products.map((product) => (
                      <div key={product.id} className="">
                        <img
                          src={product.img}
                          alt={product.title}
                          onError={(e) => (e.target.src = "an error occurred.")}
                          className="w-[50%] mx-auto h-auto object-cover rounded"
                        />
                        {/* <h2 className="text-xl font-bold mt-2">{product.title}</h2>
                    <p className="text-gray-600">{product.desc}</p> */}
                        {/* Add more product details here */}
                      </div>
                    ))}
                </Swiper>
              </div>
              {/* <div className="flex flex-row justify-center gap-2 items-center">
                <div className="text-2xl text-white bg-[#59c9a5]  rounded-full p-2 pr-3">
                  <FaArrowRightToBracket />
                </div>
                <p className="text-2xl  font-medium tracking-wide lowercase">
                  FD PFR
                </p>
              </div>
              <div className="flex flex-row  justify-center gap-2 items-center">
                <div className="text-2xl text-white bg-[#59c9a5]  rounded-full p-2 pr-3">
                  <FaArrowRightToBracket />
                </div>
                <p className="text-2xl  font-medium tracking-wide lowercase">
                  ECO FR
                </p>
              </div> */}
            </div>
          </div>
        );
      /* LLDPE Product Listings */
      // case "LLDPE":
      //   return (
      //     <div className="flex flex-col md:flex-row">
      //       <div className="text-2xl pt-8 font-medium tracking-wide lowercase flex flex-col">
      //         <div className="flex flex-col gap-8">
      //           <div className="flex flex-row justify-center gap-2 items-center">
      //             <div className="text-2xl text-white bg-[#59c9a5]  rounded-full p-2 pr-3">
      //               <FaArrowRightToBracket />
      //             </div>
      //             <p className="text-2xl  font-medium tracking-wide lowercase">
      //               ISO PFR
      //             </p>
      //           </div>
      //           <div className="flex flex-row justify-center gap-2 items-center">
      //             <div className="text-2xl text-white bg-[#59c9a5]  rounded-full p-2 pr-3">
      //               <FaArrowRightToBracket />
      //             </div>
      //             <p className="text-2xl  font-medium tracking-wide lowercase">
      //               FD PFR
      //             </p>
      //           </div>
      //           <div className="flex flex-row  justify-center gap-2 items-center">
      //             <div className="text-2xl text-white bg-[#59c9a5]  rounded-full p-2 pr-3">
      //               <FaArrowRightToBracket />
      //             </div>
      //             <p className="text-2xl  font-medium tracking-wide lowercase">
      //               ECO FR
      //             </p>
      //           </div>
      //           <div className="flex flex-row  justify-center gap-2 items-center">
      //             <div className="text-2xl text-white bg-[#59c9a5]  rounded-full p-2 pr-3">
      //               <FaArrowRightToBracket />
      //             </div>
      //             <p className="text-2xl  font-medium tracking-wide lowercase">
      //               FRFR MUN
      //             </p>
      //           </div>
      //           <div className="flex flex-row  justify-center gap-2 items-center">
      //             <div className="text-2xl text-white bg-[#59c9a5]  rounded-full p-2 pr-3">
      //               <FaArrowRightToBracket />
      //             </div>
      //             <p className="text-2xl  font-medium tracking-wide lowercase">
      //               ECOECO
      //             </p>
      //           </div>
      //         </div>
      //       </div>
      //       <img
      //         className="max-w-full h-64"
      //         src="src/assets/placeholderItem.png"
      //       />
      //     </div>
      //   );
      /* PP Product Listings */
      // case "PP":
      //   return (
      //     <div className="flex flex-col md:flex-row justify-start">
      //       <div className="flex flex-row justify-center gap-2 items-center">
      //         <div className="text-2xl text-white bg-[#59c9a5]  rounded-full p-2 pr-3">
      //           <FaArrowRightToBracket />
      //         </div>
      //         <p className="text-2xl  font-medium tracking-wide lowercase">
      //           ISO PFR
      //         </p>
      //       </div>
      //       <img
      //         className="max-w-full h-64"
      //         src="src/assets/placeholderItem.png"
      //       />
      //     </div>
      //   );

      /* PS Product Listings */
      // case "PS":
      //   return (
      //     <div className="flex flex-col md:flex-row justify-start">
      //       <div className="flex flex-row justify-center gap-2 items-center">
      //         <div className="text-2xl text-white bg-[#59c9a5]  rounded-full p-2 pr-3">
      //           <FaArrowRightToBracket />
      //         </div>
      //         <p className="text-2xl  font-medium tracking-wide lowercase">
      //           ISO PFR
      //         </p>
      //       </div>
      //       <img
      //         className="max-w-full h-64"
      //         src="src/assets/placeholderItem.png"
      //       />
      //     </div>
      //   );
    }
  };

  return (
    <div className="">
      {/* Hero Section */}

      <div className=" flex items-center justify-center relative">
        <div className="hero-bg h-screen  w-full">
          <div className="max-w-xl mx-auto pt-8">
            {/* <div>
              <IoMdArrowDroprightCircle />
            </div> */}
            <div
              className={`text-white/50 text-center flex flex-row justify-around text-xl font-semibold tracking-wider  items-center transition-opacity duration-500    ${
                showTitle ? "opacity-100" : "opacity-0"
              }`}
            >
              <p
                className="hover:text-green-400 hover:cursor-pointer transition duration-300 ease-in-out "
                onClick={() => navigate("/about")}
              >
                About
              </p>
              <p
                className="hover:text-green-400 hover:cursor-pointer transition duration-300 ease-in-out "
                onClick={() => navigate("/products")}
              >
                Products
              </p>
              <p
                className="hover:text-green-400 hover:cursor-pointer transition duration-300 ease-in-out "
                onClick={() => navigate("/contact")}
              >
                Contact
              </p>
            </div>
          </div>
          <div className=" flex items-center flex-col md:pt-36 pt-32 max-w-3xl mx-auto text-white ">
            <h1
              className={`font-display md:text-6xl text-3xl text-center sm:text-nowrap transition-opacity duration-500 mb-8 md:mb-0 ${
                showTitle ? "opacity-100" : "opacity-0"
              }`}
            >
              KnJ GREEN PACK CORP.
            </h1>
            <div className="flex flex-col items-start justify-center mb-4 md:pt-10 md:mb-8">
              <h2 className="text-5xl tracking-tighter mb-1 md:mb-0 px-2 md:px-4 md:mt-8 font-light">
                Making a Difference with Recycling
              </h2>
              {/* <p className="text-lg px-3 tracking-wide">
                Southern California's premier PCR Recycling factory and
                manufacturer, we ensure high quality while reducing your
                environmental footprint
              </p> */}
            </div>
            <div>
              {/* contact stuff */}
              <div className="flex flex-col items-center mt-8">
                <h2 className="text-3xl font-light tracking-tighter mb-1">
                  Get a hold of us.
                </h2>

                <p className="font-thin text-4xl  tracking-wider">
                  <MdConnectWithoutContact className="hover:underline" />
                </p>
              </div>
            </div>
            <div className="arrow-bounce text-center text-6xl">
              <FaArrowAltCircleDown color="white" />
            </div>
          </div>
        </div>
      </div>

      {/* About */}
      <div>
        <div className="flex flex-col mb-12">
          <div>
            <h2 className="text-5xl tracking-tight font-semibold text-center mt-6 mb-3">
              Spotlight
            </h2>
          </div>
          {/* <div class="flex justify-center items-center mb-3">
            <div class="border-t border-gray-300 w-16"></div>
            <span class="px-2 text-gray-400 text-xl">
              <TiWorld />
            </span>
            <div class="border-t border-gray-300 w-16"></div>
          </div> */}

          <div className="flex flex-col md:flex-row items-start gap-6 line-clamp-3 justify-center w-full md:gap-10 px-2 md:px-4 mx-auto  max-w-5xl">
            <div className="flex flex-col justify-center w-full text-center ">
              <div className=" bg-green-300 mx-auto rounded-full text-white text-3xl flex p-4 justify-center items-center">
                <FaRecycle className="" />
              </div>
              <h3 className="text-2xl font-semibold tracking-tighter">
                Recycling
              </h3>
              <p className="tracking-wide font-light text-gray-950">
                We pride ourselves in the hassle-free and cost effective
                recycling process for associates
              </p>
              {/* <p className="tracking-wider font-normal hover:text-gray-500">
                Learn more {">"}
                {">"}
              </p> */}
            </div>
            <div className="flex flex-col   w-full justify-center text-center ">
              <div className=" bg-green-300  mx-auto rounded-full text-white text-3xl flex p-4 justify-center items-center">
                <FaPeopleArrows />
              </div>
              <h3 className="text-2xl font-semibold tracking-tighter">B2B</h3>
              <p className="tracking-wide font-light text-gray-950">
                Business to Business transactions are our specialty
              </p>
              {/* <p className="tracking-wider font-normal hover:text-gray-950">
                Learn more {">"}
                {">"}
              </p> */}
            </div>
            <div className="flex flex-col  w-full justify-center text-center ">
              <div className=" bg-green-300  mx-auto rounded-full text-white text-3xl flex p-4 justify-center items-center">
                <GiWorld />
              </div>
              <h3 className="text-2xl font-semibold tracking-tighter">
                Shipping
              </h3>
              <p className="tracking-wide font-light text-gray-950">
                No matter what continent you require material, we will get it
                shipped to you.
              </p>
              {/* <p className="tracking-wider font-normal hover:text-gray-950">
                Learn more {">"}
                {">"}
              </p> */}
            </div>
            <div className="flex flex-col  w-full justify-center text-center ">
              <div className=" bg-green-300  mx-auto rounded-full text-white text-3xl flex p-4 justify-center items-center">
                <GrUserWorker />
              </div>
              <h3 className="text-2xl font-semibold tracking-tighter">
                Environment
              </h3>
              <p className="tracking-wide font-light text-gray-950">
                Processing of materials is done by hand, by real people.
                Ensuring high-grade quality.
              </p>
              {/* <p className="tracking-wider font-normal hover:text-gray-950">
                Learn more {">"}
                {">"}
              </p> */}
            </div>
            <div className="flex flex-col  w-full justify-center text-center ">
              <div className=" bg-green-300  mx-auto rounded-full text-white text-3xl flex p-4 justify-center items-center">
                <GiCheckboxTree />
              </div>
              <h3 className="text-2xl font-semibold tracking-tighter">
                Distribution
              </h3>
              <p className="tracking-wide font-light text-gray-950">
                Tackling distribution, ensuring quality and proper delivery, we
                make handling product a stress-free operation.
              </p>
              {/* <p className="tracking-wider font-normal hover:text-gray-500">
                Learn more {">"}
                {">"}
              </p> */}
            </div>
          </div>
        </div>
      </div>

      {/* Middle Support  */}
      <div className="w-full">
        <div className="flex flex-col md:flex-row md:grid md:grid-cols-8">
          <div className="col-start-1 col-end-4 bg-[#59c9a5] text-white pt-12 pb-24 px-10 md:px-20 flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-1">
                {sections[currentSection].title}
              </h2>
              <p className="text-lg font-light tracking-wide">
                {sections[currentSection].description}
              </p>
            </div>
            <div className="flex justify-around mt-4">
              <p className="cursor-pointer text-5xl" onClick={prevSection}>
                <FaArrowAltCircleLeft />
              </p>
              <p className="cursor-pointer text-5xl" onClick={nextSection}>
                <FaArrowAltCircleRight />
              </p>
            </div>
          </div>

          <img
            className="object-cover w-full col-start-4 col-end-9 h-[500px]"
            src="https://kmsibir.ru/upload/iblock/572/lyz6j3z00d7d8jomqhpu4s452m9t1sah.jpg"
            alt=""
          />
        </div>
      </div>

      {/* Product section */}
      <div className="">
        <div className="lg:max-w-6xl mx-auto lg:h-[500px]">
          <h2 className="text-6xl font-semibold tracking-tight text-center mt-4">
            Products
          </h2>
          <div className="flex flex-col lg:flex-row justify-between py-8 md:px-16 md:text-nowrap">
            <div
              id="container__left"
              className="flex flex-col space-y-8 md:w-fit justify-start px-4 md:px-0 mb-8"
            >
              {["", "LDPE", "", "", ""].map(
                (
                  item // "" will go HDPE, LLDPE, PP, and PS respectively
                ) => (
                  <div
                    key={item}
                    onClick={() => setActiveItem(item)}
                    className={`flex items-center cursor-pointer w-full ${
                      activeItem === item ? "slide-text" : "text-gray-400"
                    }`}
                  >
                    {activeItem === item && (
                      <IoMdArrowDropright className="mr-2 arrow-spin" />
                    )}
                    <h3
                      className={`text-5xl tracking-tighter font-semibold hover:underline decoration-[#baf2bb] overflow-hidden decoration-4 ${
                        activeItem === item ? "" : "hover:text-animation"
                      }`}
                    >
                      {item}
                    </h3>
                  </div>
                )
              )}
            </div>
            <div id="container__right">{renderItemContent()}</div>
          </div>
        </div>

        <div>
          <div className="max-w-6xl mx-auto md:px-8 my-36">
            <div className="flex flex-col items-start px-3 lg:px-0">
              <h2 className="font-bold tracking-tighter text-5xl mb-1">
                Deal Stages
              </h2>
              <h5 className="text-gray-400 text-lg">
                During a deal, we keep evrerything transparent and
                understandable. We always focus on long-term cooperation .
              </h5>
            </div>
            <div>
              <div className="flex flex-col gap-8 px-4  sm:grid sm:grid-cols-2 md:grid-cols-3">
                <div className="flex flex-col items-start relative ">
                  <p className="text-9xl font-bold text-gray-200/60 absolute top-5 left-20  z-10">
                    01
                  </p>
                  <IoMdPaperPlane className="huge-icon z-20 text-[#59c9a5]" />
                  <p className="text-2xl font-light tracking-wider z-20">
                    Application
                  </p>
                </div>

                <div className="flex flex-col items-start relative ">
                  <p className="text-9xl font-bold text-gray-200/60 absolute top-5 left-20  z-10">
                    02
                  </p>
                  <CiCalculator1 className="huge-icon z-20 text-[#59c9a5]" />
                  <p className="text-2xl font-light tracking-wider">
                    Calculation of the order cost and production time
                  </p>
                </div>

                <div className="flex flex-col items-start relative ">
                  <p className="text-9xl font-bold text-gray-200/60 absolute top-5 left-20  z-10">
                    03
                  </p>

                  <LiaFileContractSolid className="huge-icon z-20 text-[#59c9a5]" />
                  <p className="text-2xl font-light tracking-wider">
                    Conclusion of an agreement
                  </p>
                </div>
                <div className="flex flex-col items-start relative ">
                  <GiMoneyStack className="huge-icon z-20 text-[#59c9a5]" />
                  <p className="text-9xl font-bold text-gray-200/60 absolute top-5 left-20  z-10">
                    04
                  </p>
                  <p className="text-2xl font-light tracking-wider">Payment</p>
                </div>
                <div className="flex flex-col items-start relative ">
                  <GrWorkshop className="smaller-big-icon z-20 text-[#59c9a5]" />
                  <p className="text-9xl font-bold text-gray-200/60 absolute top-5 left-20  z-10">
                    05
                  </p>
                  <p className="text-2xl font-light tracking-wider">
                    Processing
                  </p>
                </div>
                <div className="flex flex-col items-start relative ">
                  <p className="text-9xl font-bold text-gray-200/60 absolute top-5 left-20  z-10">
                    06
                  </p>

                  <PiTruckDuotone className="small-big-icon z-20 text-[#59c9a5]" />
                  <p className="text-2xl font-light tracking-wider">
                    Distributing
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Commented out code:
// -- Took out the duplicate support to avoid repetitiveness

{
  /* Middle Support  */
}
{
  /* <div className="w-full">
          <div className="flex flex-col sm:flex-row md:grid md:grid-cols-8 md:grid-rows-1">
            <img
              className="object-cover w-full col-start-1 col-end-4  h-[500px]"
              src="https://kmsibir.ru/upload/iblock/572/lyz6j3z00d7d8jomqhpu4s452m9t1sah.jpg"
              alt=""
            />

            <div className=" bg-[#59c9a5]  text-white pt-12 pb-24 px-10  flex flex-col justify-between col-start-4 col-end-9 row-span-1">
              {/* <div>
                <h2 className="text-3xl font-bold tracking-tight mb-1">
                  {sections[currentSection].title}
                </h2>
                <p className="text-lg font-light tracking-wide">
                  {sections[currentSection].description}
                </p>
              </div>
              {/* <div className="flex justify-around mt-4">
                <p className="cursor-pointer text-5xl" onClick={prevSection}>
                  <FaArrowAltCircleLeft />
                </p>
                <p className="cursor-pointer text-5xl" onClick={nextSection}>
                  <FaArrowAltCircleRight />
                </p>
              </div>
            </div>
          </div>
        </div> */
}
