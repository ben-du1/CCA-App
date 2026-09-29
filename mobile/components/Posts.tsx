import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { Post } from "../lib/types";
import PostComponent from "./PostComponent";
import { View } from "./Themed";
import SERVER_PATH  from "../constants/SERVER_PATH"

interface PostsPageProps {
  setCurrentPost: (post: Post) => void;
  setPostHidden: (post: boolean) => void;
  setBottomSheetState: (size: number) => void;
}
const Posts = (props: PostsPageProps) => {
  const setCurrentPost = props.setCurrentPost;
  const setPostHidden = props.setPostHidden;
  const setBottomSheetState = props.setBottomSheetState;

  const [posts, setPosts] = useState<Array<Post>>([]);

  const getPosts = async () => {
    const response = await fetch(SERVER_PATH+"/api/posts");
    const data = await response.json();

    data.sort((a: Post, b: Post) => b.date - a.date);

    setPosts(data);
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <View style={styles.postsContainer}>
      {posts.map((post) => (
        <View
          style={[styles.feedItem, styles.centered]}
          key={`${post.title}-${post.date}`}
        >
          <PostComponent
            post={post}
            setCurrentPost={setCurrentPost}
            setPostHidden={setPostHidden}
            setBottomSheetState={setBottomSheetState}
          />
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  feedItem: {
    width: "100%",
    marginVertical: 5,
    backgroundColor: "#ffffff",
  },
  centered: {
    alignItems: "center",
    justifyContent: "center",
  },
  postsContainer: {
    backgroundColor: "#ffffff",
  },
});

export default Posts;
