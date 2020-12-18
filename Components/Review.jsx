import React from "react";
import { View } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

import { CustomText } from "./CustomText";
import { SingleReview } from "./SingleReview";

export const Reviews = () => {
  return (
    <View
      style={{
        paddingHorizontal: 5,
        flex: 1,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginHorizontal: wp(7),
          marginTop: hp(5),
        }}
      >
        <CustomText
          content={"Reviews"}
          fontStyle={"Bold"}
          additional={{
            color: "black",
            fontSize: hp((18 / 812) * 100),
            lineHeight: hp((22 / 812) * 100),
          }}
        />
        <CustomText
          content={"35"}
          fontStyle={"Bold"}
          additional={{
            color: "black",
            lineHeight: hp((22 / 812) * 100),
            fontSize: hp((12 / 812) * 100),
          }}
        />
      </View>
      <CustomText
        content={"TOP REVIEWS"}
        fontStyle={"Bold"}
        additional={{
          color: "black",
          fontSize: hp((12 / 812) * 100),
          lineHeight: hp((18 / 812) * 100),
          textAlign: "left",
          paddingHorizontal: wp((27 / 375) * 100),
          marginTop: wp((15 / 812) * 100),
        }}
      />
      <SingleReview />
      <SingleReview />
      <SingleReview />
    </View>
  );
};
