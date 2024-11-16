import React, { useEffect, useRef } from "react";
import { Card } from "antd";
import { Snippet } from "@nextui-org/react";
import { colorMap } from "../utils/data";

function GradientCard({ gradientColor, type }) {
  const { start, end, image, gradientType } = gradientColor;
  const reference = useRef(null);

  const startColor = colorMap[start] || "gray-300";
  const endColor = colorMap[end] || "gray-300";

  useEffect(() => {
    if (type === "advanced" && reference.current) {
      reference.current.style.setProperty("--color-a", start);
      reference.current.style.setProperty("--color-b", end);
    }
  }, [start, end, type]);

  return (
    <div className="box-border flex flex-col p-4 text-lg md:text-2xl font-semibold gap-2">
      <Card
        ref={reference}
        className={`relative overflow-hidden h-72 md:h-96 border-1 border-neutral-300 ${
          type === "advanced"
            ? "bg-gradient-to-br from-[--color-a] via-[--color-b] duration-500 ease-in [transition-property:_--color-a,_--color-b] before:absolute before:left-[20%] before:top-[10%] before:h-[50%] before:w-[70%] before:origin-[60%] before:animate-blob before:rounded-3xl before:bg-gradient-to-br before:from-[--color-a] before:to-[--color-b] before:blur-[50px] before:brightness-125 after:absolute after:left-[40%] after:top-[30%] after:h-[80%] after:w-[70%] after:origin-[60%] after:animate-blob-reverse after:rounded-3xl after:bg-gradient-to-br after:from-[--color-a] after:to-[--color-b] after:blur-[50px] after:brightness-125 animate-gradient-moving bg-[200%]"
            : ""
        }`}
        style={{
          backgroundImage: image
            ? `url(${image})`
            : gradientType === "linear"
            ? `linear-gradient(to right, ${start}, ${end})`
            : gradientType === "radial"
            ? `radial-gradient(circle, ${start}, ${end})`
            : `linear-gradient(to right, ${start}, ${end})`,
        }}
      >
        <div className="overflow-visible py-2" />
        <p className="absolute top-4 right-2">BACKGROUND</p>
      </Card>
      {!image ? (
        <>
          <p>CSS Code:</p>
          <div className="overflow-auto">
            <Snippet color="secondary">
              {gradientType === "linear"
                ? `linear-gradient(to right, ${start}, ${end});`
                : gradientType === "radial"
                ? `radial-gradient(circle, ${start}, ${end});`
                : `linear-gradient(to right, ${start}, ${end});`}
            </Snippet>
          </div>
          <p>Tailwind Code:</p>
          <div className="overflow-auto">
            <Snippet color="warning">
              {gradientType === "linear"
                ? `bg-gradient-to-r from-${startColor} to-${endColor}`
                : gradientType === "radial"
                ? `bg-radial-gradient from-${startColor} to-${endColor}`
                : `bg-gradient-to-r from-${startColor} to-${endColor}`}
            </Snippet>
          </div>
        </>
      ) : (
        <div className="overflow-auto">
          <Snippet color="secondary">
            The URL will be available in the next update
          </Snippet>
        </div>
      )}
    </div>
  );
}

export default GradientCard;
