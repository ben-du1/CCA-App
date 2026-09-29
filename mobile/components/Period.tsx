import React from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-elements";
import { Int32 } from "react-native/Libraries/Types/CodegenTypes";
import { getCurrentPeriod } from "../lib/periods/schedules";

interface PeriodProps {
  date: Date
}

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function nth(n: number) {
  const leastSignificantDigit = n % 10;
  let suffix = "th";
  if (leastSignificantDigit === 1) {
    suffix = "st";
  } else if (leastSignificantDigit === 2) {
    suffix = "nd";
  } else if (leastSignificantDigit === 3) {
    suffix = "rd";
  }
  return n + suffix;
}

function formatDate(date: Date) {
  return MONTHS[date.getMonth()] + ' ' + nth(date.getDate());
}

function Period(props: PeriodProps) {
  const date = props.date;

  const period = getCurrentPeriod(date);
  const display = period?.title ?? "";
  
  return (
    <View>
      <Text h2 style={styles.date}>{formatDate(date)}</Text>
      <Text h4 style={styles.period}>{display}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  period: {
    fontWeight: 800,
    color: 'white',
  },
  date: {
    color: 'white',
    fontWeight: 700
  }
});

export default Period;
