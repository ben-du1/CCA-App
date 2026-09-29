import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import React from "react";
import { Image, ScrollView, StyleSheet, View,Pressable, Linking} from "react-native";
import { Text } from "react-native-elements";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { Post } from "../lib/types";
import Markdown from '@jonasmerlin/react-native-markdown-display'
import SERVER_PATH  from "../constants/SERVER_PATH"

interface ExpandedPostProps {
  post: Post;
  hidden: boolean;
  setPostHidden: (hide: boolean) => void;
}



const PostExpanded = (props: ExpandedPostProps) => {
  const post = props.post;
  const hidden = props.hidden;
  const setPostHidden = props.setPostHidden;

  if (!post) return;

  return (

    <ScrollView style={[styles.PostExpanded, hidden ? styles.hide : null]}>
      <View style={styles.topBar}>
        <Pressable onPress={() => {setPostHidden(true)}}>

             <MaterialIcons name="keyboard-backspace" size={42} color="black" />
          
        </Pressable>
        <Text h3 style={{ fontWeight: "600" }}>
          {post.title}
        </Text>
      </View>
      <Image
        source={{ uri: SERVER_PATH+"/api/image/" + post.image }}
        style={[styles.image]}
      />
      <Text h4 style={{ fontWeight: "500" }}>
        {post.author}
      </Text>
      <Text style={{ fontWeight: "500", fontSize: 15 }}>
        {new Date(+post.date).toLocaleDateString()}
      </Text>
      <View
        style={{
          width: "90%",
          alignSelf: "center",
          borderBottomColor: "grey",
          borderWidth: 0.5,
          marginTop: 10,
          marginBottom: 10,
        }}
      ></View>
      <Text style={{ marginBottom: 50 }}>
        <Markdown>{post.content}</Markdown>
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  PostExpanded: {
    // borderWidth:1,
    // borderColor:'red',
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "white",
    zIndex: 1,
    padding: 25,
  },
  hide: {
    display: "none",
  },
  image: {
    resizeMode: "contain",
    height: 250,
    borderRadius: 10,
    marginTop: 25,
    marginBottom: 25,
  },
  topBar: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
});

export default PostExpanded;
