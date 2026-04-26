import React, { useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Platform, Animated } from 'react-native';

export default function RetroWindow({ title, children }) {
  // Animation setup: Start at 0 opacity and slightly lower position
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(10)).current;

  useEffect(() => {
    // Sequence: Fade in and slide up simultaneously
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 600,
        useNativeDriver: Platform.OS !== 'web', // Native driver doesn't support opacity on some web configs
      }),
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 600,
        useNativeDriver: Platform.OS !== 'web',
      })
    ]).start();
  }, [fadeAnim, slideAnim]);

  const handleClose = () => {
    if (Platform.OS === 'web') {
      window.confirm(`System process ${title} is currently active. Terminate anyway?`);
    }
  };

  return (
    <Animated.View 
      style={[
        winStyles.windowFrame, 
        { 
          opacity: fadeAnim, 
          transform: [{ translateY: slideAnim }] 
        }
      ]}
    >
      <View style={winStyles.titleBar}>
        <View style={winStyles.titleContainer}>
          {/* Small folder icon placeholder for extra retro vibes */}
          <Text style={winStyles.titleText}>📄 {title}</Text>
        </View>
        <View style={winStyles.controls}>
          <TouchableOpacity style={winStyles.button}>
            <Text style={winStyles.buttonText}>_</Text>
          </TouchableOpacity>
          <TouchableOpacity style={winStyles.button} onPress={handleClose}>
            <Text style={winStyles.buttonText}>X</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={winStyles.content}>
        {children}
      </View>
    </Animated.View>
  );
}

const winStyles = StyleSheet.create({
  windowFrame: {
    backgroundColor: '#fce4ec',
    // Authentic 3D Bevel effect
    borderLeftWidth: 2,
    borderTopWidth: 2,
    borderRightWidth: 2,
    borderBottomWidth: 2,
    borderLeftColor: '#ffffff',
    borderTopColor: '#ffffff',
    borderRightColor: '#a30262',
    borderBottomColor: '#a30262',
    padding: 2,
    marginBottom: 20,
    width: '100%',
  },
  titleBar: {
    backgroundColor: '#d0a0a3',
    paddingVertical: 3,
    paddingHorizontal: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleText: {
    color: 'white',
    fontFamily: 'W95FA',
    fontSize: 14,
    marginLeft: 4,
  },
  controls: {
    flexDirection: 'row',
  },
  button: {
    width: 18,
    height: 18,
    backgroundColor: '#fce4ec',
    marginLeft: 2,
    // Button bevel effect
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderLeftColor: '#ffffff',
    borderTopColor: '#ffffff',
    borderRightColor: '#7a014a',
    borderBottomColor: '#7a014a',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 10,
    fontFamily: 'W95FA',
    color: '#000',
    fontWeight: 'bold',
  },
  content: {
    padding: 15,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    // Inset effect for the content area
    borderWidth: 1,
    borderTopColor: '#808080',
    borderLeftColor: '#808080',
    borderBottomColor: '#ffffff',
    borderRightColor: '#ffffff',
  },
});