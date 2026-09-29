import {
  View,
  StyleSheet,
  TouchableOpacity,
  useColorScheme,
  Text,
} from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
interface floorToggleProps {
  currentFloor: number;
  setCurrentFloor: (floor: number) => void;
}
const FloorToggle = (props: floorToggleProps) => {
  const currentFloor = props.currentFloor;
  const setCurrentFloor = props.setCurrentFloor;
  const toggleFloor = () => {
    setCurrentFloor(Math.abs(currentFloor - 1));
  };

  const colorScheme = useColorScheme();

  const styles = StyleSheet.create({
    FloorToggle: {
      backgroundColor: colorScheme == "dark" ? "black" : "white",
      borderRadius: 100,
      position: "absolute",
      padding: 15,
      right: "5%",
      bottom: "5%",
      zIndex: 2,
    },
    FloorText:{
      color:colorScheme == "dark" ? "white" : "black",
      alignSelf:'center',
      marginTop:5
    }
  });

  return (
    <View style={styles.FloorToggle}>
      <TouchableOpacity onPress={toggleFloor}>
        <Ionicons
          name="layers-sharp"
          size={24}
          color={colorScheme == "dark" ? "white" : "black"}
        />
        <Text style={styles.FloorText}>{currentFloor ? "2" : "1"}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FloorToggle;
