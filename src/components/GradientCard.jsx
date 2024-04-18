import React from "react";
import { Card } from "antd";
import { Snippet } from "@nextui-org/react";
import { colorMap } from "../utils/data";

function GradientCard({ gradientColor }) {
  const { start, end, image } = gradientColor;

  const startColor = colorMap[start] || "gray-300";
  const endColor = colorMap[end] || "gray-300";
  const currentYear = new Date().getFullYear();

  return (
    <div className="box-border flex flex-col p-4 text-lg md:text-2xl font-semibold gap-2">
      <Card
        className="relative h-96 border-1 border-neutral-300"
        style={{
          backgroundImage: image
            ? `url(${image})`
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
              {`linear-gradient(to right, ${start}, ${end});`}
            </Snippet>
          </div>
          <p>Tailwind Code:</p>
          <div className="overflow-auto">
            <Snippet color="warning">
              {`bg-gradient-to-r from-${startColor} to-${endColor}`}
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

      <span className="text-center text-sm text-neutral-400">&copy; {currentYear} ColorGrad. All rights reserved </span>
    </div>
  );
}

export default GradientCard;
