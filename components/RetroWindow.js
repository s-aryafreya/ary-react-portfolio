import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Platform } from 'react-native';

export default function RetroWindow({ title, children }) {
  const handleClose = () => {
    if (Platform.OS === 'web') {
      window.confirm(`Closing ${title}...`);
    }
  };

  return (
    <View style={winStyles.windowFrame}>
      <View style={winStyles.titleBar}>
        <Text style={winStyles.titleText}>{title}</Text>
        <View style={winStyles.controls}>
          <TouchableOpacity style={winStyles.button}><Text style={winStyles.buttonText}>_</Text></TouchableOpacity>
          <TouchableOpacity style={winStyles.button} onPress={handleClose}><Text style={winStyles.buttonText}>X</Text></TouchableOpacity>
        </View>
      </View>
      <View style={winStyles.content}>
        {children}
      </View>
    </View>
  );
}

const winStyles = StyleSheet.create({
  windowFrame: {
    backgroundColor: '#fce4ec',
    borderLeftWidth: 2,
    borderTopWidth: 2,
    borderColor: '#ffffff',
    borderRightWidth: 2,
    borderBottomWidth: 2,
    borderRightColor: '#a30262',
    borderBottomColor: '#a30262',
    padding: 2,
    marginBottom: 20,
    width: '100%',
  },
  titleBar: {
    backgroundColor: '#d0a0a3',
    paddingVertical: 4,
    paddingHorizontal: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titleText: {
    color: 'white',
    fontFamily: 'W95FA',
    fontSize: 14,
  },
  controls: {
    flexDirection: 'row',
    gap: 4,
  },
  button: {
    width: 18,
    height: 18,
    backgroundColor: '#fce4ec',
    borderWidth: 1,
    borderColor: '#a30262',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 10,
    fontFamily: 'W95FA',
    color: '#a30262',
  },
  content: {
    padding: 15,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
  },
});