import React from "react";
import { View } from "react-native";
import { CustomText } from "./CustomText";
import { Booking } from "./Booking";
import { heightPercentageToDP } from "react-native-responsive-screen";

export const OtherSlots = () => {
  return (
    <View
      style={{
        zIndex: -1,
        position: "absolute",
        left: 0,
        right: 0,
      }}
    >
      <CustomText
        content={"Other available slots"}
        fontStyle={"Bold"}
        additional={{
          fontSize: heightPercentageToDP((18 / 812) * 100),
          marginVertical: heightPercentageToDP((40 / 812) * 100),
          textAlign: "center",
        }}
      />
      <Booking />
      <Booking />
      <Booking />
      <Booking />
    </View>
  );
};
