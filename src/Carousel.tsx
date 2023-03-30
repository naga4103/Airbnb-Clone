import React, { useState } from "react";

import "./index.css";

type Props = {};

const originalList = [
  {
    urls: "https://a0.muscache.com/pictures/6ad4bd95-f086-437d-97e3-14d12155ddfe.jpg",
    name: "Countryside",
  },
  {
    urls: "https://a0.muscache.com/pictures/c5a4f6fc-c92c-4ae8-87dd-57f1ff1b89a6.jpg",
    name: "OMG!",
  },
  {
    urls: "https://a0.muscache.com/pictures/bcd1adc0-5cee-4d7a-85ec-f6730b0f8d0c.jpg",
    name: "Beachfront",
  },
  {
    urls: "https://a0.muscache.com/pictures/677a041d-7264-4c45-bb72-52bff21eb6e8.jpg",
    name: "Lakefront",
  },
  {
    urls: "https://a0.muscache.com/pictures/78ba8486-6ba6-4a43-a56d-f556189193da.jpg",
    name: "Mansions",
  },
  {
    urls: "https://a0.muscache.com/pictures/3fb523a0-b622-4368-8142-b5e03df7549b.jpg",
    name: "Amazing pools",
  },
  {
    urls: "https://a0.muscache.com/pictures/eb7ba4c0-ea38-4cbb-9db6-bdcc8baad585.jpg",
    name: "Private rooms",
  },
  {
    urls: "https://a0.muscache.com/pictures/aaa02c2d-9f0d-4c41-878a-68c12ec6c6bd.jpg",
    name: "Farms",
  },
  {
    urls: "https://a0.muscache.com/pictures/4d4a4eba-c7e4-43eb-9ce2-95e1d200d10e.jpg",
    name: "Treehouses",
  },
  {
    urls: "https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg",
    name: "Amazing views",
  },
  {
    urls: "https://a0.muscache.com/pictures/c8e2ed05-c666-47b6-99fc-4cb6edcde6b4.jpg",
    name: "Luxe",
  },
  {
    urls: "https://a0.muscache.com/pictures/677a041d-7264-4c45-bb72-52bff21eb6e8.jpg",
    name: "Lakefront",
  },
  {
    urls: "https://a0.muscache.com/pictures/78ba8486-6ba6-4a43-a56d-f556189193da.jpg",
    name: "Mansions",
  },
  {
    urls: "https://a0.muscache.com/pictures/33dd714a-7b4a-4654-aaf0-f58ea887a688.jpg",
    name: "Hitorical homes",
  },
  {
    urls: "https://a0.muscache.com/pictures/ed8b9e47-609b-44c2-9768-33e6a22eccb2.jpg",
    name: "Iconic cities",
  },
  {
    urls: "https://a0.muscache.com/pictures/8e507f16-4943-4be9-b707-59bd38d56309.jpg",
    name: "Islands",
  },
  {
    urls: "https://a0.muscache.com/pictures/1b6a8b70-a3b6-48b5-88e1-2243d9172c06.jpg",
    name: "Castles",
  },
  {
    urls: "https://a0.muscache.com/pictures/c0a24c04-ce1f-490c-833f-987613930eca.jpg",
    name: "National parks",
  },
  {
    urls: "https://a0.muscache.com/pictures/3726d94b-534a-42b8-bca0-a0304d912260.jpg",
    name: "Trending",
  },
  {
    urls: "https://a0.muscache.com/pictures/3726d94b-534a-42b8-bca0-a0304d912260.jpg",
    name: "Design",
  },
  {
    urls: "https://a0.muscache.com/pictures/a4634ca6-1407-4864-ab97-6e141967d782.jpg",
    name: "Lake",
  },
  {
    urls: "https://a0.muscache.com/pictures/35919456-df89-4024-ad50-5fcb7a472df9.jpg",
    name: "Tiny homes",
  },
  {
    urls: "https://a0.muscache.com/pictures/ca25c7f3-0d1f-432b-9efa-b9f5dc6d8770.jpg",
    name: "Camping",
  },
  {
    urls: "https://a0.muscache.com/pictures/9a2ca4df-ee90-4063-b15d-0de7e4ce210a.jpg",
    name: "Off-the-grid",
  },

  {
    urls: "https://a0.muscache.com/pictures/4221e293-4770-4ea8-a4fa-9972158d4004.jpg",
    name: "Houseboats",
  },
  {
    urls: "https://a0.muscache.com/pictures/0ff9740e-52a2-4cd5-ae5a-94e1bfb560d6.jpg",
    name: "Containers",
  },

  {
    urls: "https://a0.muscache.com/pictures/60ff02ae-d4a2-4d18-a120-0dd274a95925.jpg",
    name: "Vineyards",
  },
  {
    urls: "https://a0.muscache.com/pictures/5ed8f7c7-2e1f-43a8-9a39-4edfc81a3325.jpg",
    name: "Bed & Breakfasts",
  },
  {
    urls: "https://a0.muscache.com/pictures/248f85bf-e35e-4dc3-a9a1-e1dbff9a3db4.jpg",
    name: "Top of the world",
  },
  {
    urls: "https://a0.muscache.com/pictures/c0fa9598-4e37-40f3-b734-4bd0e2377add.jpg",
    name: "New",
  },
  {
    urls: "https://a0.muscache.com/pictures/c8bba3ed-34c0-464a-8e6e-27574d20e4d2.jpg",
    name: "Skiing",
  },
  {
    urls: "https://a0.muscache.com/pictures/1d477273-96d6-4819-9bda-9085f809dad3.jpg",
    name: "A-frames",
  },
  {
    urls: "https://a0.muscache.com/pictures/f0c5ca0f-5aa0-4fe5-b38d-654264bacddf.jpg",
    name: "Play",
  },
  {
    urls: "https://a0.muscache.com/pictures/957f8022-dfd7-426c-99fd-77ed792f6d7a.jpg",
    name: "Surfing",
  },
  {
    urls: "https://a0.muscache.com/pictures/8a43b8c6-7eb4-421c-b3a9-1bd9fcb26622.jpg",
    name: "Creative spaces",
  },
  {
    urls: "https://a0.muscache.com/pictures/757deeaa-c78f-488f-992b-d3b1ecc06fc9.jpg",
    name: "Ski-in/out",
  },
  {
    urls: "https://a0.muscache.com/pictures/4759a0a7-96a8-4dcd-9490-ed785af6df14.jpg",
    name: "Yurts",
  },
  {
    urls: "https://a0.muscache.com/pictures/687a8682-68b3-4f21-8d71-3c3aef6c1110.jpg",
    name: "Boats",
  },
  {
    urls: "https://a0.muscache.com/pictures/6b639c8d-cf9b-41fb-91a0-91af9d7677cc.jpg",
    name: "Golfing",
  },
  {
    urls: "https://a0.muscache.com/pictures/5cdb8451-8f75-4c5f-a17d-33ee228e3db8.jpg",
    name: "Windmills",
  },
  {
    urls: "https://a0.muscache.com/pictures/89faf9ae-bbbc-4bc4-aecd-cc15bf36cbca.jpg",
    name: "Domes",
  },
  {
    urls: "https://a0.muscache.com/pictures/ddd13204-a5ae-4532-898c-2e595b1bb15f.jpg",
    name: "Chef's kitchens",
  },
  {
    urls: "https://a0.muscache.com/pictures/f60700bc-8ab5-424c-912b-6ef17abc479a.jpg",
    name: "Barns",
  },

  {
    urls: "https://a0.muscache.com/pictures/a6dd2bae-5fd0-4b28-b123-206783b5de1d.jpg",
    name: "Desert",
  },
  {
    urls: "https://a0.muscache.com/pictures/8b44f770-7156-4c7b-b4d3-d92549c8652f.jpg",
    name: "Arctic",
  },
  {
    urls: "https://a0.muscache.com/pictures/d721318f-4752-417d-b4fa-77da3cbc3269.jpg",
    name: "Towers",
  },
  {
    urls: "https://a0.muscache.com/pictures/827c5623-d182-474a-823c-db3894490896.jpg",
    name: "Ryokans",
  },
  {
    urls: "https://a0.muscache.com/pictures/7ff6e4a1-51b4-4671-bc9a-6f523f196c61.jpg",
    name: "Riads",
  },
];

const Carousel = (props: Props) => {
  const [index, setIndex] = useState(16);

  const [iconsList, setIconsList] = useState([
    {
      urls: "https://a0.muscache.com/pictures/6ad4bd95-f086-437d-97e3-14d12155ddfe.jpg",
      name: "Countryside",
    },
    {
      urls: "https://a0.muscache.com/pictures/c5a4f6fc-c92c-4ae8-87dd-57f1ff1b89a6.jpg",
      name: "OMG!",
    },
    {
      urls: "https://a0.muscache.com/pictures/bcd1adc0-5cee-4d7a-85ec-f6730b0f8d0c.jpg",
      name: "Beachfront",
    },
    {
      urls: "https://a0.muscache.com/pictures/677a041d-7264-4c45-bb72-52bff21eb6e8.jpg",
      name: "Lakefront",
    },
    {
      urls: "https://a0.muscache.com/pictures/78ba8486-6ba6-4a43-a56d-f556189193da.jpg",
      name: "Mansions",
    },
    {
      urls: "https://a0.muscache.com/pictures/3fb523a0-b622-4368-8142-b5e03df7549b.jpg",
      name: "Amazing pools",
    },
    {
      urls: "https://a0.muscache.com/pictures/eb7ba4c0-ea38-4cbb-9db6-bdcc8baad585.jpg",
      name: "Private rooms",
    },
    {
      urls: "https://a0.muscache.com/pictures/aaa02c2d-9f0d-4c41-878a-68c12ec6c6bd.jpg",
      name: "Farms",
    },
    {
      urls: "https://a0.muscache.com/pictures/4d4a4eba-c7e4-43eb-9ce2-95e1d200d10e.jpg",
      name: "Treehouses",
    },
    {
      urls: "https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg",
      name: "Amazing views",
    },
    {
      urls: "https://a0.muscache.com/pictures/c8e2ed05-c666-47b6-99fc-4cb6edcde6b4.jpg",
      name: "Luxe",
    },
    {
      urls: "https://a0.muscache.com/pictures/677a041d-7264-4c45-bb72-52bff21eb6e8.jpg",
      name: "Lakefront",
    },
    {
      urls: "https://a0.muscache.com/pictures/78ba8486-6ba6-4a43-a56d-f556189193da.jpg",
      name: "Mansions",
    },
    {
      urls: "https://a0.muscache.com/pictures/33dd714a-7b4a-4654-aaf0-f58ea887a688.jpg",
      name: "Hitorical homes",
    },
    {
      urls: "https://a0.muscache.com/pictures/ed8b9e47-609b-44c2-9768-33e6a22eccb2.jpg",
      name: "Iconic cities",
    },
    {
      urls: "https://a0.muscache.com/pictures/8e507f16-4943-4be9-b707-59bd38d56309.jpg",
      name: "Islands",
    },
  ]);

  const onPrevClicked = () => {
    console.log("Hello");
    console.log(index);
    console.log("hii");
    if (index > 16) {
      const items = originalList.slice(index - 32, index - 16);
      setIconsList(items);

      setIndex(index - 16);
    }
  };

  const onNextClicked = () => {
    console.log(index);
    if (index < originalList.length) {
      const items = originalList.slice(index, index + 16);
      setIconsList(items);
      // console.log("Items", items);

      setIndex(index + 16);
      // console.log("index", index);
    }
  };

  // console.log("index ", index);

  return (
    <div className="border-t-2 border-black-600 px-[60px] h-[98px] bg-[#ffffff] drop-shadow-md mb-5">
      <div className="flex justify-center items-center relative h-full   ">
        <button
          type="button"
          className="  absolute left-0 z-5 mr-4 h-8   "
          // onClick={() => console.log("something")}
          onClick={onPrevClicked}
          hidden={index === 16 ? true : false}
        >
          <i className="fa-solid fa-circle-chevron-left"></i>
        </button>
        <br />

        <div className="flex justify-between  overflow-hidden w-[1700px]   h-full absolute ml-4  z-2 ">
          {iconsList.map((eachIcon) => {
            return (
              <div className="!flex flex-col justify-center items-center  mr-3    p-3 opacity-[.67] cursor-pointer hover:opacity-[1] hover:border-b-2 border-[#000000] ">
                <img alt="hii" src={eachIcon.urls} className="h-8" />
                <p className="text-[13px]">{eachIcon.name}</p>
              </div>
            );
          })}
        </div>

        <button
          type="button"
          onClick={onNextClicked}
          className="justify-self-end   absolute right-0 z-4  ml-4 h-8"
          hidden={index === originalList.length ? true : false}
        >
          <i className="fa-solid fa-circle-chevron-right"></i>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
