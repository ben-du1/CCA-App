import { Linking, StyleSheet, TouchableOpacity, View } from "react-native";
import { Text } from "react-native-elements";
import SERVER_PATH  from "../constants/SERVER_PATH"


import React, { useEffect, useState } from "react";

import Weather from "./Weather";

const FeedHeader = () => {
  const [tvUrl, setTvUrl] = useState("");
  const [bulletinUrl, setBulletinUrl] = useState("");

  const getTvUrl = async () => {
    const response = await fetch(SERVER_PATH+"/api/tv");
    const data = await response.json();
    setTvUrl(data.tv);
  };

  const getBulletinUrl = async () => {
    const response = await fetch(SERVER_PATH+"/api/bulletin");
    const data = await response.json();
    setBulletinUrl(data.bulletin);
  };

  useEffect(() => {
    getTvUrl();
    getBulletinUrl();
  });

  async function onCCATVPress() {
    const canOpen = await Linking.canOpenURL(tvUrl);

    if (canOpen) {
      await Linking.openURL(tvUrl);
    }
  }
  async function onBulletinPress() {
    const canOpen = await Linking.canOpenURL(bulletinUrl);

    if (canOpen) {
      await Linking.openURL(bulletinUrl);
    }
  }

  return (
    <View style={styles.feedHeader}>
      <Text h3 style={{ fontWeight: "700" }}>
        Today
      </Text>
      <Text style={{ fontSize: 17 }}>at Canyon Crest Academy</Text>
      <View style={[styles.temperatureContainer]}>
        <Weather />
      </View>
      <View style={[styles.topButtonsContainer]}>
        <TouchableOpacity style={styles.topButton} onPress={onCCATVPress}>
          <Text style={{ color: "black" }}>CCA-TV</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.topButton} onPress={onBulletinPress}>
          <Text style={{ color: "black" }}>Bulletin</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  temperatureContainer: {
    paddingHorizontal: 20,
    paddingVertical: 5,
    marginTop: 10,
    borderRadius: 15,
    backgroundColor: "orange",
    flexDirection: "row",
    justifyContent: "center",
    minWidth: "auto",
    width: "20%",
  },
  topButtonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  topButton: {
    margin: 10,
    paddingHorizontal: 20,
    paddingVertical: 9,
    borderColor: "grey",
    borderWidth: 1,
    borderRadius: 10,
  },
  feedHeader: {
    // borderColor:'red',
    // borderWidth:1,
    width: "100%",
    alignItems: "center",
  },
});

export default FeedHeader;
