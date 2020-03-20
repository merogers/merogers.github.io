import React from "react";

const Logo = () => {
  return (
    <div className="logo">
      <svg
        width="60"
        height="60"
        viewBox="0 0 60 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="30"
          cy="30"
          r="27.5"
          fill="#262429"
          stroke="url(#paint0_linear)"
          strokeWidth="5"
        />
        <path
          d="M28.0736 45.2307L25.2144 44.1935C24.9145 44.088 24.7457 43.6954 24.8301 43.3204L31.228 15.7675C31.3124 15.3925 31.6264 15.1815 31.9264 15.287L34.7856 16.3242C35.0855 16.4297 35.2543 16.8223 35.1699 17.1973L28.772 44.7502C28.6829 45.1252 28.3736 45.342 28.0736 45.2307ZM22.7303 38.656L24.7692 35.937C24.9848 35.6499 24.9707 35.1928 24.7317 34.9291L20.4851 30.2588L24.7317 25.5886C24.9707 25.3249 24.9895 24.8678 24.7692 24.5807L22.7303 21.8617C22.5193 21.5805 22.1631 21.5629 21.9334 21.8324L15.1793 29.7432C14.9402 30.0186 14.9402 30.4932 15.1793 30.7686L21.9334 38.6853C22.1631 38.9548 22.5193 38.9431 22.7303 38.656ZM38.0666 38.6911L44.8207 30.7745C45.0598 30.4991 45.0598 30.0244 44.8207 29.749L38.0666 21.8266C37.8416 21.5629 37.4854 21.5746 37.2697 21.8559L35.2308 24.5748C35.0152 24.8619 35.0293 25.319 35.2683 25.5827L39.5149 30.2588L35.2683 34.9291C35.0293 35.1928 35.0105 35.6499 35.2308 35.937L37.2697 38.656C37.4807 38.9431 37.8369 38.9548 38.0666 38.6911Z"
          fill="url(#paint1_linear)"
        />
        <circle
          cx="30"
          cy="30"
          r="25"
          fill="url(#paint2_linear)"
          fillOpacity="0.15"
        />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="30"
            y1="5"
            x2="30"
            y2="55"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#A585E5" />
            <stop offset="1" stopColor="#65BAA9" />
          </linearGradient>
          <linearGradient
            id="paint1_linear"
            x1="30"
            y1="15.2599"
            x2="30"
            y2="45.2599"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#A585E5" />
            <stop offset="1" stopColor="#65BAA9" />
          </linearGradient>
          <linearGradient
            id="paint2_linear"
            x1="11.25"
            y1="9.75"
            x2="30"
            y2="55"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
      merogers.dev
    </div>
  );
};

export default Logo;
