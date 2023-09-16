import React from "react";
import Svg, { Circle, Path } from "react-native-svg";

function ProfileIcon(props) {
  return (
    <Svg
      width="90"
      height="90"
      viewBox="0 0 90 90"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Circle cx="45" cy="45" r="45" fill="#EDEDED" />
      <Path
        d="M21 63C21 59.8174 22.2643 56.7652 24.5147 54.5147C26.7652 52.2643 29.8174 51 33 51H57C60.1826 51 63.2348 52.2643 65.4853 54.5147C67.7357 56.7652 69 59.8174 69 63C69 64.5913 68.3679 66.1174 67.2426 67.2426C66.1174 68.3679 64.5913 69 63 69H27C25.4087 69 23.8826 68.3679 22.7574 67.2426C21.6321 66.1174 21 64.5913 21 63Z"
        fill="#2F4858"
        fill-opacity="0.7"
        stroke="#2F4858"
        stroke-opacity="0.7"
        stroke-width="1.5"
        stroke-linejoin="round"
      />
      <Path
        d="M45 39C49.9706 39 54 34.9706 54 30C54 25.0294 49.9706 21 45 21C40.0294 21 36 25.0294 36 30C36 34.9706 40.0294 39 45 39Z"
        fill="#2F4858"
        fill-opacity="0.7"
        stroke="#2F4858"
        stroke-opacity="0.7"
        stroke-width="1.5"
      />
    </Svg>
  );
}

export default ProfileIcon;
