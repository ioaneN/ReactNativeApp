import React from "react";
import { View, Animated, StyleSheet, Pressable, Easing } from "react-native";
import GestureRecognizer from "react-native-swipe-gestures";
import { MoreInfo } from "./InfoScreen";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import BottomSheet, { BottomSheetScrollView } from "@gorhom/bottom-sheet";

import { OtherSlots } from "../Components/OtherSlots";
import { Card } from "../Components/Card";
import { HandleHeader } from "../Components/HandleHeader";
import { SCREEN_HEIGHT } from "../Constants";

export const MainScreen = () => {
  const valueY = React.useRef(new Animated.Value(0)).current;
  // const cardLift = () => {
  //   Animated.timing(valueY, {
  //     toValue: -hp(43),
  //     duration: 250,
  //     easing: Easing.out(Easing.linear),
  //     useNativeDriver: true,
  //   }).start();
  // };
  const cardDrop = () => {
    Animated.timing(valueY, {
      toValue: 0,
      duration: 250,
      easing: Easing.out(Easing.linear),
      useNativeDriver: true,
    }).start();
  };
  const revealTop = () => {
    Animated.timing(valueY, {
      toValue: hp(38),
      duration: 250,
      easing: Easing.out(Easing.linear),
      useNativeDriver: true,
    }).start();
  };

  let bottomSheetRef = React.createRef();
  return (
    <GestureRecognizer
      onSwipeUp={(state) => {
        if (state.y0 > SCREEN_HEIGHT * 0.55) {
          bottomSheetRef.current.snapTo(1);
        }
        // cardLift();
      }}
      onSwipeDown={(state) => {
        revealTop();
        // bottomSheetRef.current.snapTo(0);
        console.log(state.y0);
      }}
      config={config}
    >
      <View style={styles.container}>
        <OtherSlots />
        <Card
          additional={{
            transform: [
              {
                translateY: valueY,
              },
            ],
          }}
          onPress={() => {
            bottomSheetRef.current.snapTo(0);
            cardDrop();
          }}
        />

        <View
          style={{
            flex: 1,
            width: "94.6%",
            marginHorizontal: wp((10 / 375) * 100),
            shadowColor: "black",
            shadowOffset: { width: 0, heigh: -20 },
            shadowOpacity: 0.5,
            shadowRadius: 10,
          }}
        >
          <BottomSheet
            ref={bottomSheetRef}
            snapPoints={[-hp(10), "60%"]}
            initialSnapIndex={0}
            animationDuration={500}
            handleComponent={HandleHeader}
            enableHandlePanningGesture={false}
          >
            <BottomSheetScrollView>
              <MoreInfo />
            </BottomSheetScrollView>
          </BottomSheet>
        </View>
      </View>
    </GestureRecognizer>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    width: "100%",
    height: "100%",
    position: "relative",
    backgroundColor: "#000",
  },
});

const config = {
  velocityThreshold: 0.3,
  directionalOffsetThreshold: 40,
};
