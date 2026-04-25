import React from 'react';
import { View, Text, TouchableOpacity, Alert, Platform } from 'react-native';
import winStyles from '../Window.module.css';

export default function RetroWindow({ title, children }) {
  const handleClose = () => {
    if (Platform.OS === 'web') {
      window.confirm(`Closing ${title}... (This is just a demo!)`);
    } else {
      Alert.alert("System", `Closing ${title}`);
    }
  };

  return (
    <View className={winStyles.windowFrame}>
      <View className={winStyles.titleBar}>
        <Text className={winStyles.titleText}>{title}</Text>
        <View className={winStyles.controls}>
          <TouchableOpacity style={winStyles.button}>
            <Text style={winStyles.buttonText}>_</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={winStyles.button} 
            onPress={handleClose}
          >
            <Text style={winStyles.buttonText}>X</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View className={winStyles.content}>
        {children}
      </View>
    </View>
  );
}