import * as React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import Svg, { Path } from "react-native-svg";

function SvgComponent() {
  return (
    <TouchableOpacity>
      <Svg
        width={18}
        height={21}
        viewBox="0 0 18 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Path
          opacity={0.4}
          d="M13.191.5H4.81C1.77.5 0 2.28 0 5.33v10.33c0 3.1 1.77 4.84 4.81 4.84h8.381C16.28 20.5 18 18.76 18 15.66V5.33C18 2.28 16.28.5 13.191.5z"
          fill="#fff"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5.08 5.15v.01a.78.78 0 000 1.56h2.989c.431 0 .781-.35.781-.791a.781.781 0 00-.781-.779H5.08zm7.84 6.09H5.08a.78.78 0 010-1.561h7.84a.781.781 0 010 1.561zm0 4.57H5.08c-.3.04-.59-.11-.75-.36a.795.795 0 01.75-1.21h7.84c.399.04.7.38.7.79 0 .399-.301.74-.7.78z"
          fill="#fff"
        />
      </Svg>
    </TouchableOpacity>
  );
}

export default SvgComponent;
