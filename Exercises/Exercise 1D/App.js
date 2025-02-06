import React,{useState, useEffect} from 'react';
import {StatusBar, Button, StyleSheet, Text, View} from 'react-native';
import {Barometer} from "expo-sensors";

const styles = StyleSheet.create({
  container: {

  },
});

export default function App() {
    const [data, setData] = useState({ pressure: 0, relativeAltitude: 0 });

    useEffect(() => {
        Barometer.setUpdateInterval(100);
        const subscription = Barometer.addListener(({ pressure, relativeAltitude }) => {
            setData({ pressure, relativeAltitude });
        });
        return () => subscription.remove();
    }, []);


    return (
    <View style={{marginTop: 50}}>
      <StatusBar />
        <Text>Test Barometer</Text>
        <Text>Pressure: {data.pressure}</Text>
        <Text>Relative Attitude: {data.relativeAltitude}</Text>
    </View>
  );
};

