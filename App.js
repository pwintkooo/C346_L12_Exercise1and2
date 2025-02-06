import React, { useState, useEffect } from 'react';
import { StatusBar, Button, StyleSheet, View } from 'react-native';
import { Audio } from 'expo-av';

const styles = StyleSheet.create({
    container: {},
});

//Exercise 2

export default function App() {
    const [mySound, setMySound] = useState(null);

    async function playSound() {
        const soundFile = require('./95326__ramas26__a.wav');
        const {sound} = await Audio.Sound.createAsync(soundFile);
        setMySound(sound);
        await sound.playAsync();
    }

    useEffect(() => {
        return mySound ?
            () => {
            console.log('Unloading Sound');
            mySound.unloadAsync();
            } :
            undefined
    }, [mySound]);


    return (
        <View style={{ marginTop: 50 }}>
            <StatusBar />
            <Button title="Play Sound" onPress={playSound} />
        </View>
    );
}
