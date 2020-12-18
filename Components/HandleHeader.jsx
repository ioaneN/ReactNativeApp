import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

export const HandleHeader = () => {
  return (
    <View style={styles.handle}>
      <Image
        source={{
          uri: 'http://192.168.1.25:3001/receivePicture',
        }}
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  handle: {
    backgroundColor: "#fff",
    height: wp((50.5 / 375) * 100),
    borderTopRightRadius: 34,
    borderTopLeftRadius: 34,
  },
  image: {
    width: wp((101 / 375) * 100),
    height: wp((101 / 375) * 100),
    alignSelf: "center",
    borderRadius: wp((50.5 / 375) * 100),
    bottom: wp((50.5 / 375) * 100),
  },
});
