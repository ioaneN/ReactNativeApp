import React from "react";
import { View } from "react-native";
import { CustomText } from "./CustomText";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

export const SingleReview = () => {
  return (
    <View style={{ paddingHorizontal: 28, marginVertical: "5%" }}>
      <View style={{ flexDirection: "row" }}>
        <View
          style={{
            height: wp((33 / 375) * 100),
            width: wp((33 / 375) * 100),
            backgroundColor: "black",
            borderRadius: wp((16.5 / 375) * 100),
          }}
        />
        <CustomText
          content={"FirstName LastName"}
          fontStyle={"Bold"}
          additional={{
            color: "black",
            fontSize: hp((13 / 812) * 100),
            lineHeight: hp((18 / 812) * 100),
            letterSpacing: 1,
            top: "25%",
            left: "10%",
          }}
        />
      </View>
      <View>
        <CustomText
          content={
            "Eget fames est mi mauris lectus nulla sem. Porttitor vel volutpat est neque, massa. Commodo et nisl aliquet viverra."
          }
          fontStyle={"Regular"}
          additional={{
            marginTop: hp(2),
            color: "#656565",
            textAlign: "justify",
            fontSize: hp((13 / 812) * 100),
            lineHeight: hp((18 / 812) * 100),
            letterSpacing: 1,
          }}
        />
      </View>
    </View>
  );
};
