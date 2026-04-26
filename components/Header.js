import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Header() {
    const [time, setTime] = useState("");
    const [date, setDate] = useState("");

    useEffect(() => {
        const updateDateTime = () => {
            const now = new Date();
            
            // Format: 10:30:05 PM
            setTime(now.toLocaleTimeString([], { 
                hour: '2-digit', 
                minute: '2-digit', 
                second: '2-digit' 
            }));

            // Format: APR 25, 2026
            setDate(now.toLocaleDateString([], { 
                month: 'short', 
                day: 'numeric', 
                year: 'numeric' 
            }));
        };

        // Initial call and then set interval
        updateDateTime();
        const timer = setInterval(updateDateTime, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <View style={styles.header}>
            <Text style={styles.logo}>🪐 saturnianmoons</Text>
            <View style={styles.statusContainer}>
                <Text style={styles.status}>
                    {date} | {time}
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
        fontFamily: 'W95FA' 
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