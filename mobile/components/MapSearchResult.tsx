import React from "react";
import { StyleSheet } from "react-native";
import { departmentIcons } from "../lib/map/departmentIcons";
import { teacher } from "../lib/types";
import { Text, View } from "./Themed";
export interface MapSearchResultProps {
  teacher: teacher;
  showTeacher: (arg0: teacher, arg1:boolean) => void;

}
const MapSearchResult = (props: MapSearchResultProps) => {
  const teacher = props.teacher;
  const showTeacher = props.showTeacher;
  return (
    <View
      style={styles.result}
      onTouchEnd={ () => {
        showTeacher(teacher,true);
      }}
    >
      <Text>{departmentIcons[teacher.department]} </Text>
      <Text style={styles.resultText}>{teacher.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  result: {
    padding: 15,
    // borderColor:'red',
    // borderWidth:1,
    flexDirection: "row",
  },
  resultText: {
    fontWeight: "600",
    fontSize: 20,
  },
});

export default MapSearchResult;
