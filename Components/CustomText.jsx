import React from "react";
import { AppLoading } from "expo";
import { View, Text } from "react-native";
import {
  useFonts,
  Manrope_400Regular,
  Manrope_700Bold,
  Manrope_300Light,
} from "@expo-google-fonts/manrope";

export const CustomText = (props) => {
  let [fontLoaded, error] = useFonts({
    Regular: Manrope_400Regular,
    Light: Manrope_300Light,
    Bold: Manrope_700Bold,
  });

  if (!fontLoaded) return <AppLoading />;

  return (
    <View>
      <Text
        style={{
          fontFamily: props.fontStyle,
          color: "#FFF",
          textAlign: "center",
          ...props.additional,
        }}
      >
        {props.content}
      </Text>
    </View>
  );
};
