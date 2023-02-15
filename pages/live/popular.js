import React from "react";
import Link from "next/link";

const popular = () => {
  return (
    <div className="mt-28">
      <div className="flex flex-row space-x-4 ml-4">
        <Link href='/live/popular'>
        <div className="bg-accent text-white px-4 lg:px-12 py-2 rounded-3xl font-bold cursor-pointer">
          Popular
        </div>
        </Link>
        <Link href='/live/following'>
        <div className="bg-[#fff] text-purple-500 px-4 lg:px-12 py-2 rounded-3xl font-bold cursor-pointer">
          Following
        </div>
        </Link>
        <Link href='/live/upcoming'>
        <div className="bg-[#fff] text-purple-500 px-4 lg:px-12 py-2 rounded-3xl font-bold cursor-pointer">
          Upcoming
        </div>
        </Link>
      </div>
      <div className="flex justify-center flex-col mt-[250px]">
      <div className="flex justify-center mb-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="95.723"
          height="102.287"
          viewBox="0 0 95.723 102.287"
          webcrx=""
        >
          <g
            id="Group_56914"
            data-name="Group 132240"
            transform="translate(-141 -337)"
          >
            <g
              id="Group_40966"
              data-name="Group 40966"
              transform="translate(0 86.287)"
            >
              <g id="noun_live_2146891" transform="translate(124.262 248.213)">
                <g
                  id="Group_56912"
                  data-name="Group 56912"
                  transform="translate(16.738 2.5)"
                >
                  <path
                    id="Path_170900"
                    data-name="Path 170900"
                    d="M16.08,19.835a4.1,4.1,0,0,0,2.8-1.184A28.11,28.11,0,0,1,38.8,10.36h0a28.009,28.009,0,0,1,19.919,8.183,3.959,3.959,0,0,0,5.6-5.6A36.177,36.177,0,0,0,38.8,2.5h0A35.827,35.827,0,0,0,13.281,13.052a4.031,4.031,0,0,0,0,5.6A3.523,3.523,0,0,0,16.08,19.835Z"
                    transform="translate(-4.99 -2.5)"
                    fill="#9063FD"
                  />
                  <path
                    id="Path_170901"
                    data-name="Path 170901"
                    d="M53.013,28.236a4.031,4.031,0,0,0,0-5.6,21.317,21.317,0,0,0-29.932,0,4.031,4.031,0,0,0,0,5.6,3.9,3.9,0,0,0,5.6,0,13.257,13.257,0,0,1,18.735,0A4.031,4.031,0,0,0,53.013,28.236Z"
                    transform="translate(-4.238 -1.426)"
                    fill="#9063FD"
                  />
                  <circle
                    id="Ellipse_1739"
                    data-name="Ellipse 1739"
                    cx="6.137"
                    cy="6.137"
                    r="6.137"
                    transform="translate(27.671 29.932)"
                    fill="#9063FD"
                  />
                  <path
                    id="Path_170902"
                    data-name="Path 170902"
                    d="M91.381,55.421,76.63,62.2a3.065,3.065,0,0,0-1.83,2.907v16.9a3.242,3.242,0,0,0,1.83,2.907L91.381,91.6A3.17,3.17,0,0,0,95.9,88.691V58.328A3.146,3.146,0,0,0,91.381,55.421Z"
                    transform="translate(-0.184 1.536)"
                    fill="#9063FD"
                  />
                  <path
                    id="Path_170903"
                    data-name="Path 170903"
                    d="M66.226,46.9H12.283A6.755,6.755,0,0,0,5.5,53.683V94.6a6.755,6.755,0,0,0,6.783,6.783H66.226A6.755,6.755,0,0,0,73.009,94.6V53.683A6.824,6.824,0,0,0,66.226,46.9ZM39.309,90.507A16.366,16.366,0,1,1,55.567,74.141,16.359,16.359,0,0,1,39.309,90.507Z"
                    transform="translate(-5.5 0.906)"
                    fill="#9063FD"
                  />
                  <path
                    id="Path_170904"
                    data-name="Path 170904"
                    d="M34.5,65.223a1.8,1.8,0,0,0-2.8,1.507V78.79A1.769,1.769,0,0,0,34.5,80.3l9.044-6.03a1.81,1.81,0,0,0,0-3.015Z"
                    transform="translate(-3.49 2.286)"
                    fill="#9063FD"
                  />
                </g>
              </g>
            </g>
            <g
              id="Group_56913"
              data-name="Group 56913"
              transform="translate(-17 8)"
            >
              <rect
                id="Rectangle_27474"
                data-name="Rectangle 27474"
                width="28"
                height="28"
                rx="14"
                transform="translate(209 362)"
                fill="#fff"
              />
              <g
                id="exclamation-mark-in-a-circle"
                transform="translate(211 364)"
              >
                <path
                  id="Path_170905"
                  data-name="Path 170905"
                  d="M12,0A12,12,0,1,0,24,12,12,12,0,0,0,12,0Zm0,19.66A1.569,1.569,0,0,1,10.42,18,1.57,1.57,0,0,1,12,16.34,1.541,1.541,0,0,1,13.58,18,1.554,1.554,0,0,1,12,19.66Zm.622-6.339c-.239.815-.992.829-1.243,0a30.045,30.045,0,0,1-1.316-6.942c0-3.11,3.891-3.125,3.891,0A30.755,30.755,0,0,1,12.622,13.321Z"
                  fill="#ec1818"
                />
              </g>
            </g>
          </g>
        </svg>
        </div>
        <div className="flex justify-center">
        <p className="font-bold text-xl">No Streams Available</p>
        </div>
      </div>
    </div>
  );
};

export default popular;
