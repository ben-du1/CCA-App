import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { View, StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import React, {
  useState,
  useRef,
  useCallback,
  useMemo,
  useEffect,
  cloneElement,
} from "react";
import BottomSheet from "@gorhom/bottom-sheet";
import MapSearch from "./MapSearch";
import { departmentIcons } from "../lib/map/departmentIcons";

import { mapStyle } from "../lib/map/mapStyle";
import { useColorScheme } from "react-native";
import FloorToggle from "./FloorToggle";
import { blankTeacher, teacher } from "../lib/types";
import { ravensColor } from "../constants/Colors";
interface MapModelProps {
  teachers: Array<teacher>;
  setTeachers: (arg0: Array<teacher>) => void;
}
const MapModel = (props: MapModelProps) => {
  const teachers = props.teachers;
  const setTeachers = props.setTeachers;
  const bottomSheetRef = useRef<BottomSheet>(null);
  const [currentTeacher, setCurrentTeacher] = useState<teacher>(blankTeacher);
  const [currentFloor, setCurrentFloor] = useState(0);

  const colorScheme = useColorScheme();

  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
  }, []);

  const snapPoints = useMemo(() => ["60%"], []);

  const showTeacher = (teacher: teacher,searched:boolean) => {
    if (teacher.floor != currentFloor && !searched) return;
    setCurrentFloor(teacher.floor);
    bottomSheetRef.current!.expand();
    setCurrentTeacher(teacher);
  };

  return (
    <View style={styles.MapModel}>
       <View style={{ position: "absolute", width: "100%", zIndex:1, top:-20 }}>
        <MapSearch teachers={teachers} showTeacher={showTeacher} />
      </View>
      <FloorToggle
        currentFloor={currentFloor}
        setCurrentFloor={setCurrentFloor}
      />
      <MapView
        // use google maps sdk (this is neccessary for production) NOTE: expo go on ios will crash as it is not compatible with maps api, but it will work in production
        provider={PROVIDER_GOOGLE} 
        style={{ height: "100%", width: "100%" }}
        // loadingEnabled={true}
        region={{
          latitude: 32.95627525458134,
          longitude: -117.18956068201973,
          latitudeDelta: 0.0075,
          longitudeDelta: 0.001,
        }}
        customMapStyle={colorScheme == 'dark' ?   mapStyle : null }
      >
        {teachers.map((teacher) => (
          <Marker
            key={teacher.name}
            onPress={() => {
              showTeacher(teacher,false);
            }}
            coordinate={{
              latitude: teacher.coordinate[0],
              longitude: teacher.coordinate[1],
            }}
          >
            {cloneElement(departmentIcons[teacher.department], {
              color:
                teacher === currentTeacher
                  ? ravensColor
                  : colorScheme == "dark"
                    ? "white"
                    : "black",
                opacity: teacher.floor == currentFloor ? 1 : 0.25
            })}
          </Marker>
        ))}
      </MapView>

      <BottomSheet
        index={-1}
        style={styles.bottomSheet}
        enablePanDownToClose={true}
        ref={bottomSheetRef}
        onChange={handleSheetChanges}
        snapPoints={snapPoints}
      >
        <View style={styles.teacherHeader}>
          <Text>
            {currentTeacher.department
              ? cloneElement(departmentIcons[currentTeacher.department], {
                  size: 42,
                })
              : null}
          </Text>
          <Text style={styles.teacherTitle}>{currentTeacher.name}</Text>
          <Text style={styles.teacherRoom}>{currentTeacher.room}</Text>
        </View>
        <View style={styles.classes}>
          {currentTeacher.classes
            ? currentTeacher.classes.map((c) => (
                <Text style={styles.class}>{c}</Text>
              ))
            : null}
        </View>
        <View style={styles.horizontalRule}></View>
        <View style={styles.officeHours}>
          <Text h4 style={styles.officeHoursHeader}>
            Office Hours
          </Text>
          {currentTeacher.officeHours ? (
            currentTeacher.officeHours.map((session) => (
              <Text>
                <Text
                  style={{ color: "grey", fontWeight: "600", fontSize: 16 }}
                >
                  {session.day}
                </Text>
                :{" "}
                <Text style={{ fontWeight: "700", fontSize: 16 }}>
                  {session.time}
                </Text>
              </Text>
            ))
          ) : (
            <Text style={{ color: "grey", fontWeight: "600", fontSize: 16 }}>
              Office Hours Unavailable
            </Text>
          )}
        </View>
      </BottomSheet>
    </View>
  );
};

const styles = StyleSheet.create({
  teacherTitle: {
    fontWeight: "800",
    fontSize: 40,
  },
  bottomSheet: {
    padding: 15,
  },
  teacherRoom: {
    color: "gray",
    fontWeight: "600",
    fontSize: 25,
  },
  MapModel: {
    marginTop: "10%",
  },
  teacherHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
    width: "100%",
    flexWrap: "wrap",
  },
  class: {
    backgroundColor: "#a8312b",
    color: "white",
    padding: 7.5,
    overflow: "hidden",
    borderRadius: 10,
    fontWeight: "500",
  },
  classes: {
    marginTop: 10,
    flexDirection: "row",
    gap: 10,
    flexWrap: "wrap",
  },
  officeHours: {
    marginTop: 15,
  },
  officeHoursHeader: {
    fontWeight: "700",
    marginBottom: 10,
  },
  horizontalRule: {
    borderBottomColor: "grey",
    borderWidth: 0.5,
    marginTop: 15,
    width: "80%",
  },
});

export default MapModel;