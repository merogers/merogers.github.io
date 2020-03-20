import React from "react";

import Showcase from "./Showcase";

const Landing = () => {
  return (
    <div className="landing">
      <Showcase />
      <div className="scroll-indicator">
        <svg
          width="38"
          height="22"
          viewBox="0 0 38 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.2322 20.7678C18.2085 21.7441 19.7915 21.7441 20.7678 20.7678L36.6777 4.85788C37.654 3.88157 37.654 2.29865 36.6777 1.32234C35.7014 0.34603 34.1185 0.346029 33.1421 1.32234L19 15.4645L4.85787 1.32232C3.88156 0.34601 2.29865 0.346009 1.32234 1.32232C0.346029 2.29863 0.346028 3.88154 1.32234 4.85785L17.2322 20.7678ZM16.5 16L16.5 19L21.5 19L21.5 16L16.5 16Z"
            fill="#A585E5"
          />
        </svg>
      </div>
    </div>
  );
};

export default Landing;
