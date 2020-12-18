import React,{useState,useEffect} from "react";
import { Image, TouchableOpacity, View } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

import { CustomText } from "../Components/CustomText";
import { Location } from "../Components/Location";
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "../Constants";
import { Booking } from "../Components/Booking";
import { Reviews } from "../Components/Review";
import { Occupation } from "../Components/Occupation";

export const MoreInfo = () => {
  const [name,setName]=useState()
  const [date,setDate]=useState()
  const [time,setTime]=useState()
  const [location,setLocation]=useState()
  const [text,setText]=useState()
  
  useEffect(()=>{
    fetch('http://192.168.1.25:3001/receiveEvent')
   .then(response => response.json())
    .then(response => {
      setName(response.Name);
      setDate(response.Date);
      setTime(response.Time);
      setLocation(response.Location)
      setText(response.Text)
    })
  },[])
  return (
    <View
      style={{
        width: wp(95),
        alignContent: "center",
        // borderTopLeftRadius: 34,
        // borderTopRightRadius: 34,
        backgroundColor: "#fff",
        zIndex: 1,
        // marginTop: 50,
      }}
    >
      <CustomText
        content={`${date} ${time}`}
        fontStyle={"Regular"}
        additional={{
          color: "black",
          fontSize: hp((12 / 812) * 100),
          letterSpacing: 1,
          lineHeight: hp((16 / 812) * 100),
          textTransform: "uppercase",
          marginTop: hp(5),
        }}
      />
      <CustomText
        content={name}
        fontStyle={"Bold"}
        additional={{
          color: "black",
          fontSize: hp((24 / 812) * 100),
          width: wp(80),
          alignSelf: "center",
          marginTop: hp(2),
          letterSpacing: -1,
        }}
      />
      <Location location={location}/>
      <Occupation />
      <CustomText
        fontStyle={"Regular"}
        content={text}
        additional={{
          color: "#000",
          marginTop: hp((30 / 812) * 100),
          lineHeight: 24,
          fontSize: hp((14 / 812) * 100),
          textAlign: "justify",
          width: wp(80),
          alignSelf: "center",
        }}
      />
      <View
        style={{
          marginTop: hp((30 / 812) * 100),
          flexDirection: "row",
          justifyContent: "space-between",
          width: wp(80),
          alignSelf: "center",
        }}
      >
        <TouchableOpacity>
          <View
            style={{
              width: wp((65 / 375) * 100),
              height: wp((65 / 375) * 100),
              backgroundColor: "#000",
              borderRadius: 10,
            }}
          ></View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View
            style={{
              width: wp((65 / 375) * 100),
              height: wp((65 / 375) * 100),
              backgroundColor: "#000",
              borderRadius: 10,
            }}
          ></View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View
            style={{
              width: wp((65 / 375) * 100),
              height: wp((65 / 375) * 100),
              backgroundColor: "#000",
              borderRadius: 10,
            }}
          ></View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View
            style={{
              width: wp((65 / 375) * 100),
              height: wp((65 / 375) * 100),
              backgroundColor: "#000",
              borderRadius: 10,
            }}
          ></View>
        </TouchableOpacity>
      </View>

      <Reviews />
    </View>
  );
};
