import * as React from "react";
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg";

function HeaderVector(props) {
  return (
    <Svg
      width={129}
      height={143}
      viewBox="0 0 129 143"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        opacity={0.45}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M.714 70.29c.557-21.378 31.764-23.901 45.549-39.818 13.86-16.003 12.865-48.337 33.47-51.424 20.416-3.058 31.351 24.224 45.733 39.559 12.723 13.566 28.902 24.743 32.004 43.329 3.411 20.436-1.837 42.206-15.148 57.675-13.371 15.539-33.758 24.09-53.878 22.543-18.303-1.407-29.91-18.299-44.308-30.093C28.026 98.864.162 91.473.714 70.289z"
        fill="url(#paint0_linear_2299_26509)"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_2299_26509"
          x1={0.371832}
          y1={65.2712}
          x2={157.664}
          y2={56.8699}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#0693C8" />
          <Stop offset={1} stopColor="#386FFF" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}

export default HeaderVector;
