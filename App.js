import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, ImageBackground } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import * as Font from 'expo-font';

// Components & Styles
import Header from './components/Header';
import styles from './style.module.css';

// Assets
import bgImage from './assets/smoon_bg.png';

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      try {
        await Font.loadAsync({
          'W95FA': require('./assets/W95FA.otf'),
        });
      } catch (e) {
        console.warn("Font loading failed, falling back to system font.");
      }
      setFontsLoaded(true);
    }
    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return null; 
  }

  // The return must be INSIDE the App function braces
  return (
    <ImageBackground 
      source={bgImage} 
      style={localStyles.fullBackground}
      imageStyle={{ resizeMode: 'repeat' }}
    >
      <ScrollView contentContainerStyle={localStyles.scrollWrapper}>
        <StatusBar style="auto" />
        
        {/* Main Glassmorphism Container */}
        <View style={localStyles.mainContainer}>
          <Header />
          
          <View style={localStyles.banner}>
            <Text style={localStyles.title}>salem arya freya</Text>
            <Text style={localStyles.subtitle}>
              web design · interactive media · game dev
            </Text>
          </View>

          <View style={localStyles.retroBox}>
            <Text style={localStyles.statusText}>[ system status: online ]</Text>
            <Text style={localStyles.bodyText}>
              Build v0.8.0 Active. Fetching modules...
            </Text>
          </View>

          <View style={localStyles.footer}>
            <Text style={localStyles.footerText}>© 2026 saturnianmoons.exe</Text>
          </View>
        </View>

      </ScrollView>
    </ImageBackground>
  );
}

const localStyles = StyleSheet.create({
  fullBackground: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fce4ec',
  },
  scrollWrapper: {
    flexGrow: 1,
    alignItems: 'center',
    paddingVertical: 50,
    paddingHorizontal: 20,
  },
  mainContainer: {
    width: '100%',
    maxWidth: 777,
    backgroundColor: 'rgba(255, 230, 235, 0.85)',
    borderRadius: 7,
    borderWidth: 2,
    borderColor: '#f8bbd0',
    padding: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
  },
  banner: {
    backgroundColor: '#d0a0a3',
    paddingVertical: 40,
    paddingHorizontal: 20,
    borderRadius: 7,
    alignItems: 'center',
    width: '100%',
    marginBottom: 30,
    borderWidth: 2,
    borderColor: '#f8bbd0',
  },
  title: {
    fontSize: 42,
    color: 'white',
    fontFamily: 'W95FA',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    color: 'white',
    opacity: 0.9,
    marginTop: 10,
    fontFamily: 'W95FA',
    textAlign: 'center',
    letterSpacing: 1,
  },
  retroBox: {
    padding: 20,
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: '#d0a0a3',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
  statusText: {
    color: '#A30262',
    fontFamily: 'W95FA',
    fontSize: 14,
    marginBottom: 5,
  },
  bodyText: {
    color: '#A30262',
    fontFamily: 'W95FA',
    fontSize: 12,
    lineHeight: 18,
  },
  footer: {
    marginTop: 40,
    paddingTop: 20,
    alignItems: 'center',
  },
  footerText: {
    fontFamily: 'W95FA',
    color: '#d0a0a3',
    fontSize: 10,
  }
});