import React,{useState, useEffect} from 'react';
import {StatusBar, Button, StyleSheet, Text, View} from 'react-native';
import {Magnetometer} from "expo-sensors";

const styles = StyleSheet.create({
  container: {

  },
});

export default function App() {
    const [{x, y, z}, setData] = useState({x:0, y:0, z:0})

    useEffect(() => {
        Magnetometer.setUpdateInterval(100);
        const subscription = Magnetometer.addListener(setData);
        return() => subscription.remove();
    }, []);

  return (
    <View style={{marginTop: 50}}>
      <StatusBar />
        <Text>Test Magnetometer</Text>
        <Text>x: {x}</Text>
        <Text>y: {y}</Text>
        <Text>z: {z}</Text>
    </View>
  );
};

