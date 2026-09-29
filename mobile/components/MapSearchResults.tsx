import React from "react";
import { StyleSheet } from "react-native";
import { teacher } from "../lib/types";
import MapSearchResult from "./MapSearchResult";
import { View } from "./Themed";
export interface MapSearchProps {
  teachers: Array<teacher>;
  showTeacher: (arg0: teacher) => void;
}
interface MapSearchResultsProps extends MapSearchProps {
  style: Object;
  query: string;
}
const MapSearchResults = (props: MapSearchResultsProps) => {
  const query = props.query;
  const teachers = props.teachers;
  const showTeacher = props.showTeacher;

  return (
    <View style={styles.results}>
      {teachers
        .filter((self: teacher) =>
          self.name.toLowerCase().includes(query.toLowerCase())
        )
        .slice(0, 3)
        .map((self: teacher, index: number) => (
          <MapSearchResult
            showTeacher={showTeacher}
            teacher={self}
            key={self.name}
          />
        ))}
    </View>
  );
};

const styles = StyleSheet.create({
  results: {
    position: "absolute",
    top: 50,
    backgroundColor: "black",
    opacity: 0.75,
    width: "100%",
  },
});

export default MapSearchResults;
