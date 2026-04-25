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
         * FIX: We add 'User-Agent': 'curl' to the headers.
         * This tricks the weather server into thinking it's a command line tool,
         * forcing it to return ONLY the plain text you requested.
         */
        fetch('https://wttr.in/Orlando?format=%C+%t', {
            headers: {
                'Accept': 'text/plain',
                // This is the "magic" line that stops the HTML code from appearing
                'User-Agent': 'curl' 
            }
        })
        .then(res => res.text())
        .then(data => {
            // Clean up any extra whitespace and set state
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