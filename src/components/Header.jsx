import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Header() {
    const [time, setTime] = useState("");
    const [weather, setWeather] = useState("loading...");

    useEffect(() => {
        const timer = setInterval(() => {
            const now = new Date();
            setTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }));
        }, 1000);

        fetch('https://wttr.in/Orlando?u&format=%C+%t')
            .then(res => res.text())
            .then(data => setWeather(data.toLowerCase()))
            .catch(() => setWeather("weather offline"));

        return () => clearInterval(timer);
    }, []);

    return (
        <View style={styles.header}>
            <Text style={styles.logo}>🪐 saturnianmoons</Text>
            <Text style={styles.status}>
                {time} | ☀️ {weather}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(163, 2, 98, 0.2)',
        paddingBottom: 10,
        marginBottom: 15,
    },
    logo: { color: '#A30262', fontSize: 13 },
    status: { color: '#A30262', fontWeight: 'bold', fontSize: 11, textTransform: 'uppercase' }
});