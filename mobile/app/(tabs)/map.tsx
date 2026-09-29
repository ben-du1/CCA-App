import React, { useEffect, useState } from "react";
import { Keyboard, TouchableWithoutFeedback, View } from "react-native";
import MapModel from "../../components/MapModel";
import { teacher } from "../../lib/types";
import SERVER_PATH  from "../../constants/SERVER_PATH"

const MapScreen = () => {
  // const [teachers,setTeachers] = useState([
  //     {
  //         name:"Hare",
  //         coordinate:[32.958336237462305, -117.19084339861656],
  //         floor:0,
  //         room:'F104',
  //         classes:['AP Computer Science Principles','AP Computer Science A'],
  //         officeHours:"None",
  //         department: <EvilIcons size={ICON_SIZE} name="gear"/>
  //     },
  //     {
  //         name:"Happ",
  //         coordinate:[32.958710465230496, -117.1905651839748],
  //         floor:0,
  //         room:'E104',
  //         classes:['AP Computer Science Principles','AP Computer Science A'],
  //         officeHours:"None",
  //         department: <MaterialCommunityIcons name="math-compass" size={ICON_SIZE} />
  //     },
  //     {
  //         name:"Malanga",
  //         coordinate:[32.95806652401647, -117.19102175350137],
  //         floor:0,
  //         room:'F102',
  //         classes:['AP Language','English 10', 'English 10 Honors', 'Creative Writing'],
  //         officeHours:"None",
  //         department: <FontAwesome name="book" size={ICON_SIZE} />
  //     },
  //     {
  //         name:"Corman",
  //         coordinate:[32.959525595252586, -117.18967905230625],
  //         floor:0,
  //         room:'B203',
  //         classes:['Biology','AP Physics 1','AP Physics 2'],
  //         officeHours:"None",
  //         department: <MaterialIcons name="science" size={ICON_SIZE} />
  //     },

  // ])

  const [teachers, setTeachers] = useState<Array<teacher>>([]);

  const getTeachers = async () => {
    const response = await fetch(SERVER_PATH+"/api/teachers");
    const data = await response.json();
    setTeachers(data as Array<teacher>);
  };

  useEffect(() => {
    getTeachers();
  }, []);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View>
        <MapModel teachers={teachers} setTeachers={setTeachers} />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default MapScreen;
