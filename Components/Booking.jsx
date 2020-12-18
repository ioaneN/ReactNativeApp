import React from "react";
import { View, TouchableOpacity } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import { SCREEN_WIDTH, SCREEN_HEIGHT } from "../Constants";
import { CustomText } from "./CustomText";
import { Coming } from "./Coming";

export const Booking = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        padding: 0,
        width: wp(80),
        height: hp((44 / 812) * 100),
        alignSelf: "center",
        backgroundColor: "#2C2C2C",
        borderRadius: 6,
        marginHorizontal: wp((26 / 375) * 100),
        marginTop: hp((4 / 812) * 100),
        alignItems: "center",
      }}
    >
      <TouchableOpacity>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            height: hp((24 / 812) * 100),
            marginTop: hp((3 / 812) * 100),
          }}
        >
          <CustomText
            fontStyle={"Regular"}
            content={"25/12/2020  02:00 PM"}
            additional={{
              fontSize: hp((14 / 812) * 100),
              lineHeight: hp((24 / 812) * 100),
              marginLeft: wp((30 / 375) * 100),
              marginRight: wp((100 / 375) * 100),
            }}
          />
          <Coming amount={12} textColor={"white"} />
        </View>
      </TouchableOpacity>
    </View>
  );
};
