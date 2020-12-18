import React from "react";
import GestureRecognizer from "react-native-swipe-gestures";
import { createStackNavigator } from "@react-navigation/stack";

import { MainScreen } from "./Screens/MainScreen";
import HeaderText from "./assets/SVG/HeaderText";
import MenuButton from "./assets/SVG/MenuButton";
import ProfileButton from "./assets/SVG/ProfileButton";
import { NavigationContainer } from "@react-navigation/native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

const Stack = createStackNavigator();

export default function App() {
  
    

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={MainScreen}
          options={headerOptions}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// width - 375
// height - 812

const headerOptions = {
  headerTitleAlign: "center",
  headerTitle: <HeaderText />,
  headerMode: "screen",
  headerStyle: {
    backgroundColor: "#000",
    height: hp(14),
    shadowColor: "transparent",
  },
  headerRight: (props) => (
    <ProfileButton
      onPress={() => {
        // Do something
      }}
    />
  ),
  headerRightContainerStyle: {
    marginRight: wp(10),
  },
  headerLeft: (props) => (
    <MenuButton
      {...props}
      onPress={() => {
        // Do something
      }}
    />
  ),
  headerLeftContainerStyle: {
    marginLeft: wp(10),
  },
};
