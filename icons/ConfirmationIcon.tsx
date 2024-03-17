import React from "react";

export default function ConfirmationIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="328"
      height="194"
      viewBox="0 0 328 194"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="163.5" cy="94" r="70" fill="#FAFAFA" />
      <g filter="url(#filter0_d_31_574)">
        <circle cx="163.5" cy="94" r="44" fill="white" />
      </g>
      <circle cx="267.5" cy="7" r="3" fill="#66C87B" />
      <circle cx="47.5" cy="141" r="3" fill="#66C87B" />
      <circle cx="63.5" cy="21" r="3" fill="#66C87B" />
      <circle cx="253.5" cy="121" r="3" fill="#66C87B" />
      <path
        d="M163.5 57.3333C143.297 57.3333 126.833 73.7966 126.833 93.9999C126.833 114.203 143.297 130.667 163.5 130.667C183.703 130.667 200.167 114.203 200.167 93.9999C200.167 73.7966 183.703 57.3333 163.5 57.3333ZM181.027 85.5666L160.237 106.357C159.723 106.87 159.027 107.163 158.293 107.163C157.56 107.163 156.863 106.87 156.35 106.357L145.973 95.9799C144.91 94.9166 144.91 93.1566 145.973 92.0933C147.037 91.0299 148.797 91.0299 149.86 92.0933L158.293 100.527L177.14 81.6799C178.203 80.6166 179.963 80.6166 181.027 81.6799C182.09 82.7433 182.09 84.4666 181.027 85.5666Z"
        fill="#66C87B"
      />
      <defs>
        <filter
          id="filter0_d_31_574"
          x="79.5"
          y="26"
          width="168"
          height="168"
          filterUnits="userSpaceOnUse"
          colorInterpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="16" />
          <feGaussianBlur stdDeviation="20" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0.305882 0 0 0 0 0.698039 0 0 0 0.16 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_31_574"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_31_574"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}
