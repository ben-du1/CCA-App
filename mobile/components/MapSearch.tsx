import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  useColorScheme,
  View,
} from "react-native";
import { ravensColor } from "../constants/Colors";
import MapSearchResults, { MapSearchProps } from "./MapSearchResults";

const MapSearch = (props: MapSearchProps) => {
  const teachers = props.teachers;
  const showTeacher = props.showTeacher;

  const colorScheme = useColorScheme();
  const styles = StyleSheet.create({
    input: {
      color: colorScheme == "dark" ? "white" : "black",
      minWidth:500,
      height: 60,
      padding: 10,
      fontSize:21,
      backgroundColor: colorScheme == "dark" ? "black" : "white",
    // borderColor:'red',
    //   borderWidth:2,
    },
    hide: {
      display: "none",
    },
    mapSearch: {
      backgroundColor: colorScheme == "dark" ? "black" : "white",
      position: "relative",
      zIndex: 1,
      // borderColor:'red',
      // borderWidth:2,
      height:150,
      top:-50,
      display:'flex',
      flexDirection:"row",
      alignItems:'flex-end',
      
    },
  });

  const [resultsOpen, setResultsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [focus, setFocus] = useState(false);

  const search = (q: string) => {
    setQuery(q);
  };

  return (
    <View style={styles.mapSearch}>
      <SafeAreaView>
        <TextInput
          onBlur={() => setFocus(false)}
          onPress={() => setFocus(true)}
          onChangeText={(q) => search(q)}
          placeholder="Search Teachers"
          placeholderTextColor={"grey"}
          style={styles.input}
        />
        {query != "" && focus ? (
          <MapSearchResults
            showTeacher={showTeacher}
            teachers={teachers}
            query={query}
            style={{}}
          />
        ) : (
          <></>
        )}
      </SafeAreaView>
    </View>
  );
};

export default MapSearch;

