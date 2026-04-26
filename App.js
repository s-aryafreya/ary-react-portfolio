import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, ImageBackground, TouchableOpacity, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import * as Font from 'expo-font';
import { Linking } from 'react-native';

// Components
import Header from './components/Header';
import RetroWindow from './components/RetroWindow';

// Assets
import bgImage from './assets/smoon_bg.png';
// Instead of importing, use URI references:
const qim1 = { uri: 'https://s-aryafreya.github.io/ary-react-portfolio/assets/q1.png' };
const qim2 = { uri: 'https://s-aryafreya.github.io/ary-react-portfolio/assets/q2.png' };
const qim3 = { uri: 'https://s-aryafreya.github.io/ary-react-portfolio/assets/q3.png' };
const tdim1 = { uri: 'https://s-aryafreya.github.io/ary-react-portfolio/assets/td1.png' };
const tdim2 = { uri: 'https://s-aryafreya.github.io/ary-react-portfolio/assets/td2.png' };
const tdim3 = { uri: 'https://s-aryafreya.github.io/ary-react-portfolio/assets/td3.png' };
const exim1 = { uri: 'https://s-aryafreya.github.io/ary-react-portfolio/assets/ex1.png' };
const exim2 = { uri: 'https://s-aryafreya.github.io/ary-react-portfolio/assets/ex2.png' };
const exim3 = { uri: 'https://s-aryafreya.github.io/ary-react-portfolio/assets/ex3.png' };
const exim4 = { uri: 'https://s-aryafreya.github.io/ary-react-portfolio/assets/ex4.png' };


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

          {/* Windows Section */}
          <View style={localStyles.windowContainer}>
            
            <RetroWindow title="about-me.txt">
              <Text style={localStyles.statusText}>Sport Club Council President @ UCF</Text>
              <Text style={localStyles.bodyText}>
                Hello my name is Salem, but everyone calls me Ary, I'm am about to be a senior @ UCF and play for the D1 Women's Ultimate Club
                {"\n"}
                {"\n"}
                Specializing web development, game development, competitive athletics, risk and injury management. Adult CPR Certified. 
                Focusing on creativity and leadership in all avenues.
              </Text>
            </RetroWindow>

            <RetroWindow title="projects.exe">
              {/* APP 1: RETRO QUIZ */}
              <TouchableOpacity 
                style={localStyles.linkAction}
                onPress={() => Linking.openURL('https://s-aryafreya.github.io/quiz-app/')}
              >
                <Text style={localStyles.linkText}>{">"} View Retro Quiz v0.7 App</Text>
              </TouchableOpacity>
              
              <Text style={localStyles.appIntroText}>
                A solar system themed trivia application featuring a 1990s aesthetic. 
                Demonstrates complex state management and custom font integration.
              </Text>

              <ScrollView horizontal showsHorizontalScrollIndicator={true} style={localStyles.carouselContainer}>
                <View style={localStyles.screenshotCard}><Image source={qim1} style={localStyles.appScreenshot} resizeMode='contain'></Image></View>
                <View style={localStyles.screenshotCard}><Image source={qim2} style={localStyles.appScreenshot} resizeMode='contain'></Image></View>
                <View style={localStyles.screenshotCard}><Image source={qim3} style={localStyles.appScreenshot} resizeMode='contain'></Image></View>
              </ScrollView>

              {/* APP 2: EXPO TODO */}
              <TouchableOpacity 
                style={localStyles.linkAction}
                onPress={() => Linking.openURL('https://s-aryafreya.github.io/expotodoapp/', '_blank')}
              >
                <Text style={localStyles.linkText}>{">"} View Expo ToDo List App</Text>
              </TouchableOpacity>

              <Text style={localStyles.appIntroText}>
                A clean, functional task manager built with Expo. 
                Focuses on persistent storage and intuitive UI interactions.
              </Text>

              <ScrollView horizontal showsHorizontalScrollIndicator={true} style={localStyles.carouselContainer}>
                <View style={localStyles.screenshotCard}><Image source={tdim1} style={localStyles.appScreenshot} resizeMode='contain'></Image></View>
                <View style={localStyles.screenshotCard}><Image source={tdim2} style={localStyles.appScreenshot} resizeMode='contain'></Image></View>
                <View style={localStyles.screenshotCard}><Image source={tdim3} style={localStyles.appScreenshot} resizeMode='contain'></Image></View>
              </ScrollView>

              {/* APP 3: EXERCISE APP */}
              <TouchableOpacity 
                style={localStyles.linkAction}
                onPress={() => Linking.openURL('https://s-aryafreya.github.io/exercise-app/', '_blank')}
              >
                <Text style={localStyles.linkText}>{">"} View Exercise App</Text>
              </TouchableOpacity>

              <Text style={localStyles.appIntroText}>
                A mobile-first workout tracker optimized for injury management. 
                Integrated tracking for recovery and performance metrics.
              </Text>

              <ScrollView horizontal showsHorizontalScrollIndicator={true} style={localStyles.carouselContainer}>
                <View style={localStyles.screenshotCard}><Image source={exim1} style={localStyles.appScreenshot} resizeMode='contain'></Image></View>
                <View style={localStyles.screenshotCard}><Image source={exim2} style={localStyles.appScreenshot} resizeMode='contain'></Image></View>
                <View style={localStyles.screenshotCard}><Image source={exim3} style={localStyles.appScreenshot} resizeMode='contain'></Image></View>
                <View style={localStyles.screenshotCard}><Image source={exim4} style={localStyles.appScreenshot} resizeMode='contain'></Image></View>
              </ScrollView>
            </RetroWindow>

            <RetroWindow title="terminal.bat">
              <Text style={localStyles.bodyText}>
                System Initialized...{"\n"}
                Build v0.9.0 Active. All modules stable.
              </Text>
            </RetroWindow>

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
  windowContainer: {
    width: '100%',
    gap: 15, 
  },
  statusText: {
    color: '#A30262',
    fontFamily: 'W95FA',
    fontSize: 14,
    marginBottom: 5,
    fontWeight: 'bold',
  },
  bodyText: {
    color: '#A30262',
    fontFamily: 'W95FA',
    fontSize: 12,
    lineHeight: 20,
  },
  linkAction: {
    marginTop: 8,
    padding: 4,
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: '#A30262',
    backgroundColor: 'rgba(163, 2, 98, 0.05)',
  },
  linkText: {
    color: '#A30262',
    fontFamily: 'W95FA',
    fontSize: 12,
  },
  appIntroText: {
    fontFamily: 'W95FA',
    fontSize: 12,
    color: '#A30262',
    lineHeight: 18,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    padding: 8,
    borderLeftWidth: 3,
    borderLeftColor: '#d0a0a3',
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
  },
  carouselContainer: {
    marginTop: 5,
    marginBottom: 25,
    paddingBottom: 10,
  },
  screenshotCard: {
    width: 200, 
    height: 130,
    marginRight: 15,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#d0a0a3',
    padding: 3,
  },
  // Change this in your localStyles
  appScreenshot: {
    width: 194,  // Use a fixed number slightly smaller than the 200px card
    height: 122,
    backgroundColor: '#d0a0a3', 
  }
});