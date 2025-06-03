import React, { SVGProps } from "react";

const FilledArrowSvg = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="18"
      height="11"
      viewBox="0 0 18 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M9 11L0.339745 0.499998L17.6603 0.5L9 11Z" fill="white" />
    </svg>
  );
};

export default FilledArrowSvg;
