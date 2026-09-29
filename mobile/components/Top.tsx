import React, {useState} from 'react'
import { View,Text,Linking,TouchableOpacity  } from 'react-native'
import Period from './Period'
import Weather from './Weather'
import { StyleSheet } from 'react-native'
import { getCurrentPeriod } from '../lib/periods/schedules'


const Top = () => {
    //   async function onCCATVPress() {
    //     const url = "https://www.youtube.com/watch?v=ioIXu8r1pag";
      
    //     const canOpen = await Linking.canOpenURL(url);
      
    //     if (canOpen) {
    //       await Linking.openURL(url);
    //     }
    //   }

      const [date, setDate] = React.useState(new Date());
      React.useEffect(() => {
        setTimeout(() => {
          setDate(new Date());
        }, 1000);
      });
      
    return (
        <View style={styles.top}>
            <View style={[/*styles.centered, styles.feedItem*/]}>
            <Period date={date}></Period>
            {/* <View style={[styles.centered, styles.temperatureContainer]}>
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
            </TouchableOpacity> */}
      </View>
    </View>
  );
};

export default Top;

const styles = StyleSheet.create({
  top: {
    position: "absolute",
    // borderColor:"red",
    // borderWidth:2,
    width: "100%",
    marginTop: 10,
    paddingLeft: 25,
    top: "70%",
    zIndex: 0,
  },

  // transparent: {
  //     backgroundColor: 'transparent',
  // },

  centered: {
    alignItems: "center",
    justifyContent: "center",
  },
  //   feed: {
  //     marginTop: 0,
  //     padding: 15,
  //     borderTopLeftRadius: 20,
  //     borderTopRightRadius: 20,
  //     backgroundColor: "white",

  //   },
  //   temperatureContainer: {
  //     paddingHorizontal: 20,
  //     paddingVertical: 5,
  //     marginTop: 10,
  //     borderRadius: 15,
  //     backgroundColor: "orange",

  //   },
  //   topButtonsContainer: {
  //     flex: 1,
  //     flexDirection: "row",
  //     justifyContent: "center",
  //     alignItems: "center",

  //   },
  //   topButton: {
  //     margin: 10,
  //     paddingHorizontal: 20,
  //     paddingVertical: 9,
  //     borderColor: "grey",
  //     borderWidth: 1,
  //     borderRadius: 10,
  //   },
  //   feedItem: {
  //     width: "100%",
  //     marginVertical: 5,
  //   },
});
