import * as React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import Svg, { Path, Rect } from "react-native-svg";

function SvgComponent() {
  return (
    <TouchableOpacity>
      <Svg
        width={46}
        height={44}
        viewBox="0 0 46 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Path
          d="M31.333 18.583A4.584 4.584 0 0026.75 14 5.3 5.3 0 0023 15.725 5.3 5.3 0 0019.25 14a4.583 4.583 0 00-4.583 4.583c0 3.267 3.958 6.875 5.833 8.75l1.9 1.9a.625.625 0 00.442.184h.316a.625.625 0 00.442-.184l1.9-1.9c1.875-1.875 5.833-5.483 5.833-8.75z"
          fill="#fff"
        />
        <Rect
          x={1.667}
          y={1}
          width={42.667}
          height={41.417}
          rx={20.708}
          stroke="#fff"
          strokeWidth={2}
        />
      </Svg>
    </TouchableOpacity>
  );
}

export default SvgComponent;
