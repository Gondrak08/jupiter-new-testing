import React, { SVGProps } from "react";

const ArrowSvg = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="16"
      height="10"
      viewBox="0 0 16 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        // d="M1 1L8 8L15 1"
        d="M1 8L8 1L15 8"
        stroke="black"
        strokeOpacity="0.4"
        strokeWidth="1.5"
      />
    </svg>
  );
};

export default ArrowSvg;
