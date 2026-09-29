import FontAwesome from "@expo/vector-icons/FontAwesome";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import {
  Dimensions,
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { Post } from "../lib/types";
import SERVER_PATH from "../constants/SERVER_PATH";

type PostProps = {
  post: Post;
  callToAction?: string;
  setCurrentPost: Function;
  setPostHidden: Function;
  setBottomSheetState: Function;
};

function PostHeader(props: { post: Post }) {
  // For now, just use dummy images
  const avatarSource: ImageSourcePropType = require("../assets/images/cat.jpg");

  return (
    <View style={styles.header}>
      <LinearGradient
        start={{ x: 0, y: 1 }}
        end={{ x: 0, y: 0 }}
        colors={["#000000e0", "#000000d0", "#00000000"]}
        locations={[0, 0.35, 1]}
        style={styles.headerGradient}
      />
      {/* <Image source={avatarSource} style={styles.avatar} /> */}
      <View style={styles.heading}>
        <View>
          <Text style={styles.title}>{props.post.title}</Text>
          <Text style={styles.content}>{props.post.author}</Text>
        </View>
      </View>
    </View>
  );
}

function PostCallToAction(props: { callToAction: string }) {
  return (
    <View style={styles.callToActionContainer}>
      <FontAwesome name={"angle-right"} size={48} color={"white"} />
      <Text style={styles.callToAction}>{props.callToAction}</Text>
    </View>
  );
}

export default function PostComponent(props: PostProps) {
  // For now, just use dummy images
  // const imageSource: ImageSourcePropType = {uri: props.post.image};
  const imageSource: ImageSourcePropType = require("../assets/images/cat.jpg");
  // Only add call to action if it's provided
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        props.setCurrentPost(props.post);
        props.setPostHidden(false);
        props.setBottomSheetState(1);
      }}
    >
      <View style={styles.container}>
        <Image
          source={{
            uri: SERVER_PATH+"/api/image/" + props.post.image,
          }}
          style={styles.backgroundImage}
        />
        <PostHeader post={props.post} />
        {props.callToAction && (
          <PostCallToAction callToAction={props.callToAction} />
        )}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  // PostComponent styles
  container: {
    width: Dimensions.get("window").width * 0.9,
    height: Dimensions.get("window").height * 0.45,
    borderRadius: 24,
    overflow: "hidden",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "flex-start",
  },
  backgroundImage: {
    position: "absolute",
    left: 0,
    top: 0,
    width: "100%",
    height: "100%",
  },

  // PostHeader styles
  header: {
    width: "120%",
    height: 144,
    padding: 24,
    gap: 36,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-end",
  },
  headerGradient: {
    position: "absolute",
    left: 0,
    bottom: 0,
    width: "100%",
    height: 256,
  },
  avatar: {
    width: 96,
    height: 96,
    borderRadius: 48,
  },
  title: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },
  content: {
    color: "white",
    fontSize: 16,
  },
  heading: {
    height: 96,
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
  },

  // PostCallToAction styles
  callToActionContainer: {
    width: "100%",
    backgroundColor: "#222",
    padding: 32,
    gap: 24,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  callToAction: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },
});
