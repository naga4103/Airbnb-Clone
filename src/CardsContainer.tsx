import React, { useRef, useState } from "react";

import "./index.css";

type Props = {};

const CardsContainer = (props: Props) => {
  // const buttonEl = useRef(null);

  const [contentList, setContentList] = useState([
    {
      imageUrl: [
        "https://a0.muscache.com/im/pictures/c4b7a8bb-b0e0-4b47-ac64-c3df904b68c3.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/0459662e-4989-461b-bf7d-143e17a4f8d3.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/44a57bfd-bc20-448e-a872-167fd6e381df.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/896449a8-e84b-4ed4-afc1-696942f42614.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/2cc611a2-bc98-4c41-89b9-7c533b2d455b.jpg?im_w=720",
      ],
      position: 0,
      place: "Korumdu, Kyrgyzstan",
      rating: 4.2,
      subPlace: "Issyk-kul/Issyk-kul",
      date: "1-6 Apr",
      price: "1,414",
      id: "1",
      isButtonVisible: false,
    },
    {
      imageUrl: [
        "https://a0.muscache.com/im/pictures/miso/Hosting-50612764/original/ba8ebe18-1a26-4463-a7e5-33345d4e7e77.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/0459662e-4989-461b-bf7d-143e17a4f8d3.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/44a57bfd-bc20-448e-a872-167fd6e381df.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/896449a8-e84b-4ed4-afc1-696942f42614.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/2cc611a2-bc98-4c41-89b9-7c533b2d455b.jpg?im_w=720",
      ],
      position: 0,
      place: "Zyy, Poland",
      rating: 4.8,
      subPlace: "Lively",
      date: "1-6 Apr",
      price: "16,432",
      id: "2",
      isButtonVisible: false,
    },
    {
      imageUrl: [
        "https://a0.muscache.com/im/pictures/96cbd45e-a50d-44b8-973f-a78b2f39af85.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/0459662e-4989-461b-bf7d-143e17a4f8d3.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/44a57bfd-bc20-448e-a872-167fd6e381df.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/896449a8-e84b-4ed4-afc1-696942f42614.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/2cc611a2-bc98-4c41-89b9-7c533b2d455b.jpg?im_w=720",
      ],
      position: 0,
      place: "Saonlinna,Finland",
      rating: 4.89,
      subPlace: "Saimaa",
      date: "1-6 Apr",
      price: "10,259",
      id: "3",
      isButtonVisible: false,
    },
    {
      imageUrl: [
        "https://a0.muscache.com/im/pictures/2c280583-28eb-4601-8837-3d3ae59bd1a5.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/0459662e-4989-461b-bf7d-143e17a4f8d3.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/44a57bfd-bc20-448e-a872-167fd6e381df.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/896449a8-e84b-4ed4-afc1-696942f42614.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/2cc611a2-bc98-4c41-89b9-7c533b2d455b.jpg?im_w=720",
      ],
      position: 0,
      place: "Chnia,Greece",
      rating: 4.2,
      subPlace: "Ajuvn Koupva",
      date: "15-22 Apr",
      price: "23,269",
      id: "4",
      isButtonVisible: false,
    },
    {
      imageUrl: [
        "https://a0.muscache.com/im/pictures/7c83e7e3-657c-44ec-9319-f32e5fff368b.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/0459662e-4989-461b-bf7d-143e17a4f8d3.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/44a57bfd-bc20-448e-a872-167fd6e381df.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/896449a8-e84b-4ed4-afc1-696942f42614.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/2cc611a2-bc98-4c41-89b9-7c533b2d455b.jpg?im_w=720",
      ],
      position: 0,
      place: "Mikeil, Finland",
      rating: 4.79,
      subPlace: "Saimaa",
      date: "1-6 Apr",
      price: "17,590",
      id: "5",
      isButtonVisible: false,
    },
    {
      imageUrl: [
        "https://a0.muscache.com/im/pictures/miso/Hosting-42953710/original/e0ebe96c-338e-4e49-879f-4ac5cb62e784.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/0459662e-4989-461b-bf7d-143e17a4f8d3.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/44a57bfd-bc20-448e-a872-167fd6e381df.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/896449a8-e84b-4ed4-afc1-696942f42614.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/2cc611a2-bc98-4c41-89b9-7c533b2d455b.jpg?im_w=720",
      ],
      position: 0,
      place: "Bualnita, Romania",
      rating: 4.86,
      subPlace: "Lacul Munteli",
      date: "3-8 Apr",
      price: "11,377",
      id: "6",
      isButtonVisible: false,
    },
    {
      imageUrl: [
        "https://a0.muscache.com/im/pictures/3a242bee-9953-4eeb-8fa1-94e7c53a3043.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/0459662e-4989-461b-bf7d-143e17a4f8d3.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/44a57bfd-bc20-448e-a872-167fd6e381df.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/896449a8-e84b-4ed4-afc1-696942f42614.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/2cc611a2-bc98-4c41-89b9-7c533b2d455b.jpg?im_w=720",
      ],
      position: 0,
      place: "Rukolahti, Finland",
      rating: 4.95,
      subPlace: "Saimaa",
      date: "1-6 Apr",
      price: "16,113",
      id: "7",
      isButtonVisible: false,
    },
    {
      imageUrl: [
        "https://a0.muscache.com/im/pictures/79da1553-b5b4-4b22-8354-2f48bc7d2b62.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/0459662e-4989-461b-bf7d-143e17a4f8d3.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/44a57bfd-bc20-448e-a872-167fd6e381df.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/896449a8-e84b-4ed4-afc1-696942f42614.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/2cc611a2-bc98-4c41-89b9-7c533b2d455b.jpg?im_w=720",
      ],
      position: 0,
      place: "Amta Parish, Latvia",
      rating: 4.2,
      subPlace: "Veku ezers",
      date: "1-6 Apr",
      price: "29,431",
      id: "8",
      isButtonVisible: false,
    },
    {
      imageUrl: [
        "https://a0.muscache.com/im/pictures/miso/Hosting-52688499/original/0a173632-5af8-40b0-97ac-039088a50368.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/0459662e-4989-461b-bf7d-143e17a4f8d3.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/44a57bfd-bc20-448e-a872-167fd6e381df.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/896449a8-e84b-4ed4-afc1-696942f42614.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/2cc611a2-bc98-4c41-89b9-7c533b2d455b.jpg?im_w=720",
      ],
      position: 0,
      place: "Zulijai, Lithuania",
      rating: 4.5,
      subPlace: "Lake Wolfdog",
      date: "28 Aug- 4 Sep",
      price: "87,500",
      id: "9",
      isButtonVisible: false,
    },
    {
      imageUrl: [
        "https://a0.muscache.com/im/pictures/miso/Hosting-22768899/original/cbdd3c7c-156e-4cc1-a21d-b6250f332628.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/0459662e-4989-461b-bf7d-143e17a4f8d3.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/44a57bfd-bc20-448e-a872-167fd6e381df.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/896449a8-e84b-4ed4-afc1-696942f42614.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/2cc611a2-bc98-4c41-89b9-7c533b2d455b.jpg?im_w=720",
      ],
      position: 0,
      place: "Saanca, Turkey",
      rating: 4.1,
      subPlace: "Sapanca Goru",
      date: "3-9 Apr",
      price: "13,206",
      id: "10",
      isButtonVisible: false,
    },
    {
      imageUrl: [
        "https://a0.muscache.com/im/pictures/miso/Hosting-794906703514448120/original/25e8cfd8-701f-47bf-9ce4-84c7d4a6bd8a.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/0459662e-4989-461b-bf7d-143e17a4f8d3.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/44a57bfd-bc20-448e-a872-167fd6e381df.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/896449a8-e84b-4ed4-afc1-696942f42614.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/2cc611a2-bc98-4c41-89b9-7c533b2d455b.jpg?im_w=720",
      ],
      position: 0,

      place: "Tsovagyugh,Armenia",
      rating: 4.2,
      subPlace: "Cocibita",
      date: "1-6 Apr",
      price: "14,067",
      id: "11",
      isButtonVisible: false,
    },

    {
      imageUrl: [
        "https://a0.muscache.com/im/pictures/miso/Hosting-637328952667942196/original/e34a0fa0-84f7-44dd-b706-86be7ce955e3.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/0459662e-4989-461b-bf7d-143e17a4f8d3.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/44a57bfd-bc20-448e-a872-167fd6e381df.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/896449a8-e84b-4ed4-afc1-696942f42614.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/2cc611a2-bc98-4c41-89b9-7c533b2d455b.jpg?im_w=720",
      ],
      position: 0,
      place: "Andhra,India",
      rating: 4.7,
      subPlace: "Chirala",
      date: "1-9 Apr",
      price: "16,234",
      id: "12",
      isButtonVisible: false,
    },
  ]);

  const onPrevClicked = (cardData: any, index: number) => {
    const newCardData = contentList;
    if (newCardData[index].position !== 0) {
      newCardData[index].position -= 1;

      // setContentList([
      //   ...contentList,
      //   { ...cardData, position: newCardData[index].position - 1 },
      // ]);

      setContentList([...newCardData]);
    }
  };

  const onNextClicked = (cardData: any, index: number) => {
    console.log("card", cardData, index);

    const newCardData = contentList;

    if (
      newCardData[index].position !==
      newCardData[index].imageUrl.length - 1
    ) {
      newCardData[index].position += 1;

      console.log("Position", newCardData[index].position);

      console.log(newCardData[index].imageUrl.length - 1);

      // setContentList([
      //   ...newCardData,
      //   { ...newCardData[index], position: newCardData[index].position + 1 },
      // ]);
      setContentList([...newCardData]);
    }
  };

  console.log(contentList);

  const activateCarousel = (cardData: any, index: any) => {
    const newCardData2 = contentList;
    console.log("card posi", cardData.position);

    newCardData2[index].isButtonVisible = true;

    setContentList([...newCardData2]);
  };

  const deactivateCarousel = (cardData: any, index: any) => {
    const newCardData2 = contentList;
    console.log("card pos", cardData.position);
    newCardData2[index].isButtonVisible = false;

    setContentList([...newCardData2]);
  };

  return (
    <div className=" min-h-[100%]  px-[40px]">
      <div className="grid grid-cols-6 gap-2 h-full w-full flex-wrap ">
        {contentList.map((eachObj, index) => {
          return (
            <div className="flex flex-col  h-[340px] w-[290px] mr-3 cursor-pointer ">
              <div
                className=" flex h-[220px] w-full rounded-lg mb-2 relative "
                onMouseOver={() => activateCarousel(eachObj, index)}
                onMouseOut={() => deactivateCarousel(eachObj, index)}
              >
                <img
                  src={eachObj.imageUrl[eachObj.position]}
                  alt={eachObj.place}
                  className="custom-img h-[220px] w-full rounded-lg mb-2 absolute left-0 top-0 bottom-0 left-0 right-0 z-1 cursor-pointer"
                />

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6  absolute right-3 top-[8%] z-4 cursor-pointer opacity-[0.5] "
                >
                  <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                </svg>

                <button
                  type="button"
                  className={` ${
                    eachObj.isButtonVisible && eachObj.position !== 0
                      ? "inline"
                      : "hidden"
                  }   two-buttons absolute left-0 top-[50%] z-4   `}
                  onClick={() => onPrevClicked(eachObj, index)}
                  // hidden={
                  //   eachObj.isButtonVisible === true && eachObj.position === 0
                  //     ? true
                  //     : false
                  // }
                >
                  <i
                    className="fa-solid fa-circle-chevron-left fa-xl"
                    style={{ color: "#ffffff" }}
                  ></i>
                </button>

                <button
                  type="button"
                  onClick={() => onNextClicked(eachObj, index)}
                  className={`${
                    eachObj.isButtonVisible && eachObj.position !== 4
                      ? "inline"
                      : "hidden"
                  } two-buttons absolute right-0 top-[50%] z-4`}
                  // hidden={
                  //   eachObj.isButtonVisible === true && eachObj.position === 4
                  //     ? true
                  //     : false
                  // }
                >
                  <i
                    className="fa-solid fa-circle-chevron-right fa-xl"
                    style={{ color: "#ffffff" }}
                  ></i>
                </button>
                <div className="flex justify-center items-center  absolute bottom-2 left-[40%] z-4">
                  <span
                    className={`${
                      eachObj.position === 0 ? "bg-[#ffffff]" : "bg-[#b2beb5]"
                    } w-2 h-2  rounded-full mr-2`}
                  ></span>
                  <span
                    className={`${
                      eachObj.position === 1 ? "bg-[#e0e0e0]" : "bg-[#b2beb5]"
                    } w-2 h-2  rounded-full mr-2`}
                  ></span>
                  <span
                    className={`${
                      eachObj.position === 2 ? "bg-[#e0e0e0]" : "bg-[#b2beb5]"
                    } w-[6px] h-[6px]  rounded-full mr-2`}
                  ></span>
                  <span
                    className={`${
                      eachObj.position === 3 ? "bg-[#e0e0e0]" : "bg-[#b2beb5]"
                    } w-[6px] h-[6px]  rounded-full mr-2`}
                  ></span>
                  <span
                    className={`${
                      eachObj.position === 4 ? "bg-[#e0e0e0]" : "bg-[#b2beb5]"
                    } w-1 h-1  rounded-full mr-2`}
                  ></span>
                </div>
              </div>

              <div className="flex justify-between ">
                <span className="font-sans text-[15px] font-[500]">
                  {eachObj.place}
                </span>
                <div className="flex justify-center items-center ">
                  <i className="fa-sharp fa-solid fa-star fa-xs mr-1"></i>
                  <span className="self-center opacity-[0.8]">
                    {eachObj.rating}
                  </span>
                </div>
              </div>
              <span className="font-sans text-[15px] opacity-[0.67] ">
                {eachObj.subPlace}
              </span>
              <span className="font-sans text-[15px] mb-1 opacity-[0.67]">
                {eachObj.date}
              </span>
              <div className="flex">
                <span className="font-sans text-[15px] font-[500] mr-1">
                  &#8377;
                  {eachObj.price}{" "}
                </span>
                <span className="font-sans text-[15px]">night</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CardsContainer;
