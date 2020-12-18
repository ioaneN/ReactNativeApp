import React,{useState,useEffect} from "react";
import { View, StyleSheet, Image, Animated, Pressable } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import SVG, { Line } from "react-native-svg";

import Like from "../assets/SVG/Like";
import Glasses from "../assets/SVG/Glasses";
import { CustomText } from "./CustomText";

export const Card = (props) => {
  const [name,setName]=useState()
  //const [price,setPrice]=useState()
  const [date,setDate]=useState()
  const [time,setTime]=useState()
  const [location,setLocation]=useState()
  const [description,setDescription]=useState()
  const [price,setPrice]=useState()
  
  
  useEffect(()=>{
    fetch('http://192.168.1.25:3001/receiveEvent')
   .then(response => response.json())
    .then(response => {
      setName(response.Name);
      setDate(response.Date);
      setTime(response.Time);
      setLocation(response.Location)
      setDescription(response.Description)
      setPrice(response.Price)

    })
    
   // .then(response=>setPrice(response.Price))


    
    // `data:image/png;base64,${res.Picture.data}`
  console.log('text')
   
  },[])
  
  return (
    <Animated.View
      style={{
        ...styles.card,
        ...props.additional,
      }}
    >
      <View style={{ flex: 1 }}>
        <Pressable onPress={props.onPress}>
          <Image
           source={{
            uri: 'http://192.168.1.25:3001/receivePicture',
          }}
            style={styles.image}
          />
        </Pressable>
      </View>
      <View
        style={{
          flex: 1.27,
          backgroundColor: "#2c2c2c",
          borderBottomLeftRadius: 34,
          borderBottomRightRadius: 34,
        }}
      >
        <EventInfo
          date={date}
          time={time}
          location={location}
          name={name}
          review={description}
        />
        <Glasses
          style={{
            alignSelf: "center",
            justifyContent: "flex-end",
            flex: 0.7,
          }}
        />
        <Footer price={price} />
      </View>
    </Animated.View>
  );
};

const EventInfo = (props) => {
  return (
    <View style={styles.eventInfo}>
      <CustomText
        content={props.date + " / " + props.time}
        fontStyle={"Light"}
        additional={styles.eventDate}
      />
      <CustomText
        content={props.name}
        fontStyle={"Bold"}
        additional={styles.eventTitle}
      />
      <CustomText
        content={"at " + props.location}
        fontStyle={"Regular"}
        additional={{
          color: "#969696",
          fontSize: hp((12 / 812) * 100),
          lineHeight: 14,
        }}
      />
      <SVG
        style={{ alignSelf: "center" }}
        width="61"
        height="1"
        viewBox="0 0 61 1"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Line x1="0.5" y1="0.5" x2="60.5" y2="0.5" stroke="#747474" />
      </SVG>
      <CustomText
        content={props.review}
        fontStyle={"Regular"}
        additional={styles.eventReview}
      />
    </View>
  );
};

const Footer = ({price}) => {
  return (
    <View style={styles.footer}>
      <Like />
      <Group price={price}/>
      <CustomText
        content={price}
        fontStyle={"Bold"}
        additional={{
          fontSize: hp((18 / 812) * 100),
          lineHeight: hp((34 / 812) * 100),
          letterSpacing: -1,
          display: "flex",
        }}
      />
    </View>
  );
};

const Group = ({price}) => {
  return (
    <View
      style={{
        flexDirection: "column",
        alignItems: "center",
        right: wp(2),
        justifyContent: "flex-end",
      }}
    >
      <CustomText
        content={price}
        fontStyle={"Bold"}
        additional={{
          fontSize: hp((26 / 812) * 100),
          height: hp((36 / 812) * 100),
          textAlign: "center",
          justifyContent: "center",
          // marginVertical: 5,
          // marginLeft: 5,
        }}
      />
      <CustomText
        content={"GROUP PRICE"}
        fontStyle={"Regular"}
        additional={{
          fontSize: hp((9 / 812) * 100),
          color: "#969696",
          letterSpacing: 1,
          lineHeight: hp((16 / 812) * 100),
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    alignSelf: "center",
    width: wp(94.6),
    height: hp(83.6),
    borderRadius: 34,
  },
  image: {
    justifyContent: "center",
    height: hp(44),
    borderTopLeftRadius: 34,
    borderTopRightRadius: 34,
    width: "100%",
  },
  like: {
    // justifyContent: "center",
  },
  eventInfo: {
    flex: 5,
    justifyContent: "space-evenly",
    // position: "absolute",
    alignSelf: "center",
    // top: "59.79%",
    // bottom: "22.53%",
  },
  eventDate: {
    letterSpacing: 3,
    textTransform: "uppercase",
    lineHeight: hp((16 / 812) * 100),
    fontSize: hp((12 / 812) * 100),
  },
  eventTitle: {
    fontSize: hp((26 / 812) * 100),
    lineHeight: hp((28 / 812) * 100),
    letterSpacing: -1,
    alignItems: "flex-end",
  },
  eventReview: {
    width: wp(80),
    alignSelf: "center",
    fontSize: hp((16 / 812) * 100),
    lineHeight: hp((20 / 812) * 100),
    marginHorizontal: 12,
  },
  footer: {
    flex: 1.5,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    padding: 0,
    width: wp(90),
    alignSelf: "center",
  },
});
