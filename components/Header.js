import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Header() {
    const [time, setTime] = useState("");
    const [weather, setWeather] = useState("loading...");

    useEffect(() => {
        // Live Clock Logic
        const timer = setInterval(() => {
            const now = new Date();
            setTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }));
        }, 1000);

        /**
         * WEB-SAFE FIX: We remove the 'User-Agent' and 'headers' entirely.
         * Using format=3 gives us a clean "City: Condition Temp" string 
         * that works in browsers without causing CORS errors.
         */
        fetch('https://wttr.in/Orlando?format=3')
        .then(res => res.text())
        .then(data => {
            // This will look like "Orlando: Clear +75°F"
            setWeather(data.trim().toLowerCase());
        })
        .catch(() => setWeather("weather offline"));

        return () => clearInterval(timer);
    }, []);

    return (
        <View style={styles.headerContainer}>
            <Text style={styles.logo}>🪐 saturnianmoons</Text>
            <Text style={styles.status}>
                {time} | {weather}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(163, 2, 98, 0.2)',
        paddingBottom: 10,
        marginBottom: 20,
        width: '100%',
    },
    logo: { 
        color: '#A30262', 
        fontSize: 14,
        fontFamily: 'W95FA' 
    },
    status: { 
        color: '#A30262', 
        fontSize: 11,
        fontFamily: 'W95FA',
        textTransform: 'uppercase'
    }
});