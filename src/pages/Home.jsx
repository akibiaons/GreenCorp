import React, { useEffect, useState } from "react";

import { IoMdArrowDropright } from "react-icons/io";
import { FaArrowRightToBracket } from "react-icons/fa6";

// Card Imports:
import Card from "../components/Card";
import ProductSlider from "../components/ProductSlider";
// import AboutImages from "../components/AboutImages";

// Icon imports:

import { AiFillCustomerService } from "react-icons/ai";
import { GiWorld, GiCheckboxTree } from "react-icons/gi";
import { GrUserWorker } from "react-icons/gr";
import { GoLaw } from "react-icons/go";
import {
  FaRecycle,
  FaPeopleArrows,
  FaArrowAltCircleDown,
} from "react-icons/fa";
import { MdConnectWithoutContact } from "react-icons/md";

export default function Home() {
  // Below is state for the about us / services card section
  const [activeItem, setActiveItem] = useState("Roving Fabric");
  const [showTitle, setShowTitle] = useState(true);
  const [hoveredCard, setHoveredCard] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      setShowTitle(window.scrollY <= 1); // The title shows when scroll position is at or below 50px
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const products = [
    // HDPE Below
    {
      img: "https://polyfit.us/img/polyfit/HDPE_PCR_BLOW_MOLD_REPRO.png",
      title: "PCR BLOW MOLD REPRO",
      description: "HDPE",
    },
    // LDPE Below
    {
      img: "https://polyfit.us/img/polyfit/LDPE_CLEAR_PCR_REPRO.png",
      title: "CLEAR PCR REPRO",
      description: "LDPE",
    },
    // LLDPE
    {
      img: "https://polyfit.us/img/polyfit/LLDPE_CLEAR_PCR_REPRO.png",
      title: "CLEAR PCR REPRO",
      description: "LLDPE",
    },
    // PP
    {
      img: "https://polyfit.us/img/polyfit/PP_REPRO.png",
      title: "PP REPRO",
      description: "PP",
    },
    // PS
    {
      img: "https://polyfit.us/img/polyfit/PS_REPRO.png",
      title: "PS REPRO",
      description: "PS",
    },
  ];

  // Service images
  const serviceImages = [
    {
      img: "src/assets/KnjStockImg/1.png",
      id: 1,
    },
    {
      img: "src/assets/KnjStockImg/2.png",
      id: 2,
    },
    {
      img: "src/assets/KnjStockImg/3.png",
      id: 3,
    },
  ];

  const hoveredImage = serviceImages.find((image) => image.id === hoveredCard);
  const calculateTranslateX = (hoveredCard) => {
    // Assuming each card takes up 33.33% of the space (for 3 cards)
    return (hoveredCard - 1) * 100;
  };

  const renderItemContent = () => {
    switch (activeItem) {
      case "Roving Fabric":
        return (
          <div className="flex flex-col md:flex-row justify-start">
            <div className="flex flex-row justify-center gap-2 items-center">
              <div className="text-2xl text-white bg-purple-500 rounded-full p-2 pr-3">
                <FaArrowRightToBracket />
              </div>
              <p className="text-2xl  font-medium tracking-wide lowercase">
                ISO PFR
              </p>
            </div>
            <img
              className="max-w-full h-auto"
              src="https://kmsibir.ru/upload/iblock/a85/a85a874075cd91c71c1677d06466be53.jpg"
            />
          </div>
        );

      case "Fiberglass Products":
        return (
          <div className="flex flex-col md:flex-row">
            <div className="flex flex-col gap-8">
              <div className="flex flex-row justify-center gap-2 items-center">
                <div className="text-2xl text-white bg-purple-500 rounded-full p-2 pr-3">
                  <FaArrowRightToBracket />
                </div>
                <p className="text-2xl  font-medium tracking-wide lowercase">
                  ISO PFR
                </p>
              </div>
              <div className="flex flex-row justify-center gap-2 items-center">
                <div className="text-2xl text-white bg-purple-500 rounded-full p-2 pr-3">
                  <FaArrowRightToBracket />
                </div>
                <p className="text-2xl  font-medium tracking-wide lowercase">
                  FD PFR
                </p>
              </div>
              <div className="flex flex-row  justify-center gap-2 items-center">
                <div className="text-2xl text-white bg-purple-500 rounded-full p-2 pr-3">
                  <FaArrowRightToBracket />
                </div>
                <p className="text-2xl  font-medium tracking-wide lowercase">
                  ECO FR
                </p>
              </div>
            </div>
            <img
              className="max-w-full h-auto"
              src="https://kmsibir.ru/upload/iblock/49f/ghajzvo7zhr9mgajdqouamu7fgqq4k0j.png"
            />
          </div>
        );
      case "Composite Gratings":
        return (
          <div className="flex flex-col md:flex-row">
            <div className="text-2xl pt-8 font-medium tracking-wide lowercase flex flex-col">
              <div className="flex flex-col gap-8">
                <div className="flex flex-row justify-center gap-2 items-center">
                  <div className="text-2xl text-white bg-purple-500 rounded-full p-2 pr-3">
                    <FaArrowRightToBracket />
                  </div>
                  <p className="text-2xl  font-medium tracking-wide lowercase">
                    ISO PFR
                  </p>
                </div>
                <div className="flex flex-row justify-center gap-2 items-center">
                  <div className="text-2xl text-white bg-purple-500 rounded-full p-2 pr-3">
                    <FaArrowRightToBracket />
                  </div>
                  <p className="text-2xl  font-medium tracking-wide lowercase">
                    FD PFR
                  </p>
                </div>
                <div className="flex flex-row  justify-center gap-2 items-center">
                  <div className="text-2xl text-white bg-purple-500 rounded-full p-2 pr-3">
                    <FaArrowRightToBracket />
                  </div>
                  <p className="text-2xl  font-medium tracking-wide lowercase">
                    ECO FR
                  </p>
                </div>
                <div className="flex flex-row  justify-center gap-2 items-center">
                  <div className="text-2xl text-white bg-purple-500 rounded-full p-2 pr-3">
                    <FaArrowRightToBracket />
                  </div>
                  <p className="text-2xl  font-medium tracking-wide lowercase">
                    FRFR MUN
                  </p>
                </div>
                <div className="flex flex-row  justify-center gap-2 items-center">
                  <div className="text-2xl text-white bg-purple-500 rounded-full p-2 pr-3">
                    <FaArrowRightToBracket />
                  </div>
                  <p className="text-2xl  font-medium tracking-wide lowercase">
                    ECOECO
                  </p>
                </div>
              </div>
            </div>
            <img
              className="max-w-full h-auto"
              src="https://kmsibir.ru/upload/iblock/033/03332876d2300a8bc67e8b14a9b1f754.jpg"
            />
          </div>
        );
    }
  };

  return (
    <div className="">
      {/* Hero Section */}
      <div className=" flex items-center justify-center relative">
        <div className="hero-bg h-screen  w-full">
          <div className=" flex items-center flex-col md:pt-36 pt-20 max-w-3xl mx-auto text-white ">
            <h1
              className={`font-display md:text-6xl text-3xl text-center sm:text-nowrap transition-opacity duration-500 mb-8 md:mb-0 ${
                showTitle ? "opacity-100" : "opacity-0"
              }`}
            >
              KnJ GREEN PACK CORP.
            </h1>
            <div className="flex flex-col items-start justify-center mb-4 md:pt-10 md:mb-8">
              <h2 className="text-5xl tracking-tighter mb-1 md:mb-0 px-2 md:px-4 md:mt-8 font-bold">
                Making a Difference with Recycling
              </h2>
              <p className="text-lg px-3 tracking-wide">
                Southern California's premier PCR Recycling factory and
                manufacturer, we ensure high quality while reducing your
                environmental footprint
              </p>
            </div>
            <div>
              {/* contact stuff */}
              <div className="flex flex-col items-center mt-8">
                <h2 className="text-3xl font-semibold tracking-tighter mb-1">
                  Get a hold of us.
                </h2>

                <p className="font-thin text-4xl  tracking-wider">
                  <MdConnectWithoutContact />
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
            <h2 className="text-5xl tracking-tight font-semibold text-center my-6">
              Spotlight
            </h2>
          </div>
          <div>{/* Border splitter here */}</div>
          <div className="flex flex-col md:flex-row items-start gap-6 line-clamp-3 justify-center w-full md:gap-10 px-2 md:px-4 mx-auto  max-w-5xl">
            <div className="flex flex-col justify-center w-full text-center ">
              <div className=" bg-green-300 mx-auto rounded-full text-white text-3xl flex p-4 justify-center items-center">
                <FaRecycle className="" />
              </div>
              <h3 className="text-2xl font-semibold tracking-tighter">
                Recycling
              </h3>
              <p className="tracking-wide font-light">
                We pride ourselves in the hassle-free and cost effective
                recycling process for associates
              </p>
              <p className="tracking-wider font-normal hover:text-gray-500">
                Learn more {">"}
                {">"}
              </p>
            </div>
            <div className="flex flex-col   w-full justify-center text-center ">
              <div className=" bg-green-300  mx-auto rounded-full text-white text-3xl flex p-4 justify-center items-center">
                <FaPeopleArrows />
              </div>
              <h3 className="text-2xl font-semibold tracking-tighter">B2B</h3>
              <p className="tracking-wide font-light">
                Business to Business transactions are our specialty
              </p>
              <p className="tracking-wider font-normal hover:text-gray-500">
                Learn more {">"}
                {">"}
              </p>
            </div>
            <div className="flex flex-col  w-full justify-center text-center ">
              <div className=" bg-green-300  mx-auto rounded-full text-white text-3xl flex p-4 justify-center items-center">
                <GiWorld />
              </div>
              <h3 className="text-2xl font-semibold tracking-tighter">
                Shipping
              </h3>
              <p className="tracking-wide font-light">
                No matter what continent you require material, we will get it
                shipped to you.
              </p>
              <p className="tracking-wider font-normal hover:text-gray-500">
                Learn more {">"}
                {">"}
              </p>
            </div>
            <div className="flex flex-col  w-full justify-center text-center ">
              <div className=" bg-green-300  mx-auto rounded-full text-white text-3xl flex p-4 justify-center items-center">
                <GrUserWorker />
              </div>
              <h3 className="text-2xl font-semibold tracking-tighter">
                Environment
              </h3>
              <p className="tracking-wide font-light">
                Processing of materials is done by hand, by real people.
                Ensuring high-grade quality.
              </p>
              <p className="tracking-wider font-normal hover:text-gray-500">
                Learn more {">"}
                {">"}
              </p>
            </div>
            <div className="flex flex-col  w-full justify-center text-center ">
              <div className=" bg-green-300  mx-auto rounded-full text-white text-3xl flex p-4 justify-center items-center">
                <GiCheckboxTree />
              </div>
              <h3 className="text-2xl font-semibold tracking-tighter">
                Distribution
              </h3>
              <p className="tracking-wide font-light">
                Tackling distribution, ensuring quality and proper delivery, we
                make handling product a stress-free operation.
              </p>
              <p className="tracking-wider font-normal hover:text-gray-500">
                Learn more {">"}
                {">"}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Middle Support  */}
      <div className="w-full">
        <div className="flex flex-col md:flex-row">
          <div className="bg-violet-500 text-white pt-12 pb-24 px-4">
            <h2 className="text-3xl font-bold tracking-tight mb-1">
              45,000 Pounds
            </h2>
            <p className="text-lg font-light tracking-wide">
              Of monthly storage volume of roving fabric in warehouse
            </p>
          </div>

          <img
            className="object-cover w-full h-[300px]"
            src="https://kmsibir.ru/upload/iblock/572/lyz6j3z00d7d8jomqhpu4s452m9t1sah.jpg"
            alt=""
          />
        </div>
      </div>

      {/* Product section */}
      <div className="">
        <div className="lg:max-w-6xl mx-auto mlgd:h-[500px]">
          <h2 className="text-6xl font-semibold tracking-tight text-center mt-4">
            Products
          </h2>
          <div className="flex flex-col lg:flex-row justify-between py-8 md:px-16 md:text-nowrap">
            <div
              id="container__left"
              className="flex flex-col space-y-8 md:w-fit justify-start px-4 md:px-0 mb-8"
            >
              {[
                "Roving Fabric",
                "Fiberglass Products",
                "Composite Gratings",
              ].map((item) => (
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
                    className={`text-5xl tracking-tighter font-semibold hover:underline decoration-purple-500 overflow-hidden decoration-4 ${
                      activeItem === item ? "" : "hover:text-animation"
                    }`}
                  >
                    {item}
                  </h3>
                </div>
              ))}
            </div>
            <div id="container__right">{renderItemContent()}</div>
          </div>
        </div>

        {/* About & Services */}
        {/* <div className="grid grid-cols-12 grid-rows-1">
          <div className="col-start-1 col-end-7 row-start-0">
            {hoveredImage && (
              <div className="h-[100%] overflow-clip">
                <img
                  src={hoveredImage.img}
                  alt={`Service ${hoveredCard}`}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
          </div>
          <div className="col-start-7 col-end-13 justify-center">
            <div className="flex gap-2 hover:cursor-pointer mt-10 mx-2">
              <Card
                onMouseEnter={() => setHoveredCard(1)}
                onMouseLeave={() => setHoveredCard(1)}
                icon={<FaRecycle />}
                title="Recycling"
                description="Together we reduce carbon footprints by collecting your recycable materials"
              />
              <Card
                onMouseEnter={() => setHoveredCard(2)}
                onMouseLeave={() => setHoveredCard(1)}
                icon={<AiFillCustomerService />}
                title="Quality"
                description="Our team of 150 hand sorters ensure high quality products"
              />
              <Card
                onMouseEnter={() => setHoveredCard(3)}
                onMouseLeave={() => setHoveredCard(1)}
                icon={<GoLaw />}
                title="Mix"
                description="Increase ESG Scores with 80% Virgin & 20% Recycled Products"
              />
            </div>
          </div>
          <div className="sliding-bar-container col-start-7 col-end-13">
            <div
              className="sliding-bar pt-2"
              style={{
                transform: `translateX(${calculateTranslateX(hoveredCard)}%)`,
              }}
            ></div>
          </div>
        </div> */}
      </div>
    </div>
  );
}
