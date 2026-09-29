import * as React from "react";
import { StyleSheet, useColorScheme, View,Pressable } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import BottomSheet from "@gorhom/bottom-sheet";
import { useMemo, useState } from "react";
import Backdrop from "../../components/Backdrop";
import FeedHeader from "../../components/FeedHeader";
import PostExpanded from "../../components/PostExpanded";
import Posts from "../../components/Posts";
import { blankPost, Post } from "../../lib/types";

// const images = require('../resources/period1');
// const imageList = images.keys().map((image: any) => images(image));
// const disconnectedScheduleList: period[] = [
//   { name: "Period 1", start: convertTime(8, 30), end: convertTime(10, 0) },
//   { name: "Period 2", start: convertTime(10, 8), end: convertTime(11, 42) },
//   { name: "Lunch", start: convertTime(11, 42), end: convertTime(12, 14) },
//   { name: "Period 3", start: convertTime(12, 22), end: convertTime(13, 52) },
//   { name: "Period 4", start: convertTime(14, 0), end: convertTime(15, 30) },
// ];

// async function onCCATVPress() {
//   const url = "https://www.youtube.com/watch?v=ioIXu8r1pag";

//   const canOpen = await Linking.canOpenURL(url);

//   if (canOpen) {
//     await Linking.openURL(url);
//   }
// }

function App(): JSX.Element {
  /* bottom sheet config stuff */
  const [postHidden, setPostHidden] = useState(true);
  const [currentPost, setCurrentPost] = useState<Post>(blankPost);
  const [bottomSheetState, setBottomSheetState] = useState(0);

  const snapPoints = useMemo(() => ["65%", "90%"], []);
  const handleSheetChange = (index: number) => {
    setBottomSheetState(index);
    if (index === 1) {
      // Bottom sheet is at the 90% snap point
      console.log("Bottom sheet is at 90%");
    } else {
      console.log("Bottom sheet is at 70%");
    } /* THIS ONLY WORKS ON THE EXPO GO APP FOR SOME REASON */
  };
  const isDarkMode = useColorScheme() === "dark";
  // const [scheduleList, setScheduleList] = React.useState(
  //   disconnectedScheduleList,
  // );
  // const [date, setDate] = React.useState(new Date());
  // React.useEffect(() => {
  //   setTimeout(() => {
  //     setDate(new Date());
  //   }, 1000);
  // });

  // const post1 = new Post({
  //   title: "CCA App Development Club",
  //   content: "We're presenting this cool thing, isn't that neat?",
  //   date: new Date(),
  //   author: { name: "App Dev Club" },
  // });
  // const post2 = new Post({
  //   title: "CCA App Development Club",
  //   content:
  //     "We're presenting something, but this time with a Call to Action attached.",
  //   date: new Date(),
  //   author: { name: "App Dev Club" },
  // });

  return (
    <View style={styles.rootContainer}>
      <Backdrop />
      <BottomSheet
        index={bottomSheetState}
        snapPoints={snapPoints}
        onChange={handleSheetChange}
      >
        <PostExpanded
          hidden={postHidden}
          post={currentPost}
          setPostHidden={setPostHidden}
        />
        <Pressable onPressIn={() => setBottomSheetState(1)}>

        <ScrollView style={styles.feed} contentContainerStyle={styles.centered}>
          {/* <View style={[styles.centered, styles.feedItem]}>
            <Period date={date} scheduleList={scheduleList}></Period>
            <Text>at Canyon Crest Academy</Text>
            <View style={[styles.centered, styles.temperatureContainer]}>
              <Weather />
            </View>
          </View>
          <View
            style={[
              styles.centered,
              styles.feedItem,
              styles.topButtonsContainer,
            ]}
          >
            <TouchableOpacity style={styles.topButton} onPress={onCCATVPress}>
              <Text style={{ color: "black" }}>CCA-TV</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.topButton}>
              <Text style={{ color: "black" }}>Bulletin</Text>
            </TouchableOpacity>
          </View> */}

          <FeedHeader />
          <View style={styles.horizontalRule}></View>

          {/* <View style={[styles.centered, styles.feedItem]}>
            <PostComponent post={post1} />
          </View>
          <View style={[styles.centered, styles.feedItem]}>
            <PostComponent post={post2} callToAction="Get Yours Now" />
          </View> */}
          <Posts
            setCurrentPost={setCurrentPost}
            setPostHidden={setPostHidden}
            setBottomSheetState={setBottomSheetState}
          />
        </ScrollView>
        </Pressable>
      </BottomSheet>
    </View>
  );
}

// <Bulletin src='https://docs.google.com/presentation/d/1wqRM8frUFWcIRlxVAcClOgpKgc2QfRfI7kV2fWCK_tM/export/pdf' />

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  centered: {
    alignItems: "center",
    justifyContent: "center",
  },
  horizontalRule: {
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    width: "80%",
    margin: 10,
  },
  backgroundImage: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  feed: {
    marginTop: 0,
    // padding: 15,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: "white",
    position: "relative",
  },
  feedItem: {
    width: "100%",
    marginVertical: 5,
  },
  temperatureContainer: {
    paddingHorizontal: 20,
    paddingVertical: 5,
    marginTop: 10,
    borderRadius: 15,
    backgroundColor: "orange",
  },
  topButtonsContainer: {
    flex: 1,
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
});

export default App;
