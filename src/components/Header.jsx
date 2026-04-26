import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Header() {
    const [time, setTime] = useState("");
    const [weather, setWeather] = useState("loading...");

    useEffect(() => {
        // Live Clock Logic
        const timer = setInterval(() => {
            const now = new Date();
            setTime(now.toLocaleTimeString([], { 
                hour: '2-digit', 
                minute: '2-digit', 
                second: '2-digit' 
            }));
        }, 1000);

        /**
         * WEB-SAFE WEATHER FETCH
         * Using format=3 provides a stable "City: Condition +Temp" string.
         * This avoids custom headers that cause CORS blocks on GitHub Pages.
         */
        fetch('https://wttr.in/Orlando?format=3')
            .then(res => {
                if (!res.ok) throw new Error();
                return res.text();
            })
            .then(data => {
                // Returns clean text like "orlando: sunny +75°f"
                setWeather(data.trim().toLowerCase());
            })
            .catch(() => setWeather("weather offline"));

        return () => clearInterval(timer);
    }, []);

    return (
        <View style={styles.header}>
            <Text style={styles.logo}>🪐 saturnianmoons</Text>
            <View style={styles.statusContainer}>
                <Text style={styles.status}>
                    {time} {weather ? `| ${weather}` : ""}
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
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
        fontFamily: 'W95FA' // Matches your main app font
    },
    statusContainer: {
        flexDirection: 'row',
    },
    status: { 
        color: '#A30262', 
        fontSize: 11,
        fontFamily: 'W95FA',
        textTransform: 'uppercase'
    }
});