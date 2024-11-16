import React, { useState } from "react";
import { End, Start, images } from "../utils/data";
import { Button } from "antd";
import BtnGroup from "./BtnGroup";

function Sidebar({ onGenerateGradient }) {
  const [selectedColor, setSelectedColor] = useState({
    start: null,
    end: null,
  });
  const [selectedImage, setSelectedImage] = useState(null);
  const [gradientType, setGradientType] = useState("linear");

  const handleColorClick = (color, type) => {
    setSelectedColor({ ...selectedColor, [type]: color });
    setSelectedImage(null);
  };

  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl);
    setSelectedColor({ start: null, end: null });
  };

  const handleGenerateGradient = () => {
    onGenerateGradient({
      start: selectedColor.start,
      end: selectedColor.end,
      image: selectedImage,
      gradientType: gradientType,
    });
  };

  const handleGradientType = (type) => {
    setGradientType(type);
  };

  const data = [
    {
      id: 1,
      heading: "Starting Color",
      position: Start,
      type: "start",
    },
    {
      id: 2,
      heading: "Ending Color",
      position: End,
      type: "end",
    },
  ];

  return (
    <aside className="aside md:overflow-y-auto scrollbar-hidden">
      {data.map((item) => (
        <div key={item.id}>
          <p>{item.heading}</p>
          <div className="w-4/5 md:w-11/12 flex flex-wrap gap-2">
            {item.position.map((color) => (
              <div
                key={color}
                className={`p-0.5 flex justify-center items-center border-[1px] border-neutral-200 rounded-md ${
                  selectedColor[item.type] === color ? "border-sky-900" : ""
                }`}
                onClick={() => handleColorClick(color, item.type)}
              >
                <div
                  className="h-6 w-6 cursor-pointer rounded-md"
                  style={{ backgroundColor: color }}
                />
              </div>
            ))}
          </div>
        </div>
      ))}
      <BtnGroup onChange={handleGradientType} />
      <div className="flex flex-col gap-2">
        <p>Background Images</p>
        <div className="flex justify-between flex-wrap gap-2">
          {images.map((imageUrl) => (
            <div
              className={`p-0.5 flex justify-center items-center border-[1px] border-neutral-200 w-[30%] rounded-md ${
                selectedImage === imageUrl ? "border-sky-900" : ""
              }`}
              key={imageUrl}
              onClick={() => handleImageClick(imageUrl)}
            >
              <img
                loading="lazy"
                src={imageUrl}
                alt={imageUrl}
                className="w-28 h-10 rounded-md cursor-pointer"
              />
            </div>
          ))}
        </div>
      </div>
      <Button onClick={handleGenerateGradient} className="h-10 font-semibold">
        Generate Gradient
      </Button>
    </aside>
  );
}

export default Sidebar;
