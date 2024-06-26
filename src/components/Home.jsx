import React, { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import GradientCard from "./GradientCard";
import Footer from "./Footer";

function Home() {
  const [gradientColor, setGradientColor] = useState({
    start: "#E2E2E2",
    end: "#E2E2E2",
    image: null,
    gradientType: "linear",
  });

  const handleGradient = (selectedData) => {
    setGradientColor({ ...selectedData });
  };

  return (
    <div className="max-h-screen flex flex-col">
      <Header />
      <div className="h-screen grid grid-cols-1 md:grid-cols-[auto,1fr] flex-grow-1 overflow-auto">
        <Sidebar onGenerateGradient={handleGradient} />
        <div className="w-full md:overflow-x-hidden justify-center">
          <GradientCard gradientColor={gradientColor} />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Home;
