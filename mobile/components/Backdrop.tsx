import React from "react";
import { Image, ImageSourcePropType, StyleSheet, View } from "react-native";
import Top from "./Top";

const Backdrop = () => {
  const styles = StyleSheet.create({
    backdrop: {
      height: "30%",
    },
    image: {
      height: "150%",
      width: null,
      zIndex: -1,
      // overflow:'visible'
    },
  });

  const backdropSource: ImageSourcePropType = require("../assets/images/backdrop.png");

  return (
    <View style={styles.backdrop}>
      <Top />
      <Image style={styles.image} source={backdropSource} />
    </View>
  );
};

export default Backdrop;
