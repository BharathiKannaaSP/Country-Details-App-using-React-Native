import * as React from "react";
import {addDays} from 'date-fns';
import  {useState} from 'react';
import {Button, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import WeekCalendar from "./Schedule";

const App: React.FC = () => {
  const [date, setDate] = useState(new Date());

  return (
    <SafeAreaView style={styles.safe}>
      <WeekCalendar date={date} onChange={(newDate) => setDate(newDate)} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: {
    flex: 1,
  },
});

export default App;