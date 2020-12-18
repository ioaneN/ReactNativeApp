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
          d="M9 13.425c-4.854 0-9 .68-9 3.4 0 2.721 4.12 3.425 9 3.425 4.854 0 9-.679 9-3.4s-4.119-3.425-9-3.425zM9 10.75c2.776 0 5-2.225 5-5s-2.224-5-5-5c-2.775 0-5 2.225-5 5s2.225 5 5 5z"
          fill="#6B6B6B"
        />
      </Svg>
    </TouchableOpacity>
  );
}

export default SvgComponent;
