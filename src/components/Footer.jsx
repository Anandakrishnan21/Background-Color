import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <p className="w-full text-center text-sm text-neutral-400">
      &copy; {currentYear} ColorGrad. All rights reserved{" "}
    </p>
  );
}

export default Footer;
