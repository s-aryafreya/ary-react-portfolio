import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, ImageBackground, TouchableOpacity, Image, Linking, TextInput } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import * as Font from 'expo-font';

// Components
import Header from './components/Header';
import RetroWindow from './components/RetroWindow';

// Assets - Background
import bgImage from './assets/smoon_bg.png';

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  
  // Form State
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [error, setError] = useState(null);

  // Hover State for Button Interactivity
  const [isHovered, setIsHovered] = useState(false);

  const handleSend = () => {
    if (!form.name || !form.email || !form.message) {
      setError("Error: All fields must be initialized before transmission.");
      return;
    }
    if (!form.email.includes('@')) {
      setError("Error: Invalid return address (Email).");
      return;
    }
    
    setError(null);
    alert("Message sent to saturnianmoons.exe successfully!");
    setForm({ name: '', email: '', message: '' });
  };

  useEffect(() => {
    async function loadFonts() {
      try {
        await Font.loadAsync({
          'W95FA': require('./assets/W95FA.otf'),
        });
      } catch (e) {
        console.warn("Font loading failed, falling back to system font.");
      } finally {
        setFontsLoaded(true);
      }
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
        
        <View style={localStyles.mainContainer}>
          <Header />
          
          <View style={localStyles.banner}>
            <Text style={localStyles.title}>salem arya freya</Text>
            <Text style={localStyles.subtitle}>
              web design · interactive media · game dev
            </Text>
          </View>

          <View style={localStyles.windowContainer}>
            
            {/* ABOUT ME */}
            <RetroWindow title="about-me.txt">
              <Text style={localStyles.statusText}>Sport Club Council President @ UCF</Text>
              <Text style={localStyles.bodyText}>
                Hello my name is Salem, but everyone calls me Ary. I am about to be a senior @ UCF and play for the D1 Women's Ultimate Club.
                {"\n"}{"\n"}
                Specializing in web development, game development, competitive athletics, risk and injury management. Adult CPR Certified. 
                Focusing on creativity and leadership in all avenues.
              </Text>
            </RetroWindow>

            {/* PROJECTS */}
            <RetroWindow title="projects.exe">
  
              {/* PROJECT 1: RETRO QUIZ */}
              <TouchableOpacity 
                style={localStyles.linkAction}
                onPress={() => Linking.openURL('https://s-aryafreya.github.io/quiz-app/')}
              >
                <Text style={localStyles.linkText}>{">"} View Retro Quiz v0.7 App</Text>
              </TouchableOpacity>
              <Text style={localStyles.appIntroText}>
                A solar system themed trivia application featuring a 1990s aesthetic. 
              </Text>
              <ScrollView horizontal showsHorizontalScrollIndicator={true} style={localStyles.carouselContainer}>
                <View style={localStyles.screenshotCard}>
                  <Image source={{ uri: './assets/q1.png' }} style={localStyles.appScreenshot} resizeMode='contain' />
                </View>
                <View style={localStyles.screenshotCard}>
                  <Image source={{ uri: './assets/q2.png' }} style={localStyles.appScreenshot} resizeMode='contain' />
                </View>
                <View style={localStyles.screenshotCard}>
                  <Image source={{ uri: './assets/q3.png' }} style={localStyles.appScreenshot} resizeMode='contain' />
                </View>
              </ScrollView>

              {/* PROJECT 2: TODO LIST */}
              <TouchableOpacity 
                style={localStyles.linkAction}
                onPress={() => Linking.openURL('https://s-aryafreya.github.io/expotodoapp/')}
              >
                <Text style={localStyles.linkText}>{">"} View Expo ToDo List App</Text>
              </TouchableOpacity>
              <Text style={localStyles.appIntroText}>
                A simple ToDo list creator to help track tasks and show completed ones. 
              </Text>
              <ScrollView horizontal showsHorizontalScrollIndicator={true} style={localStyles.carouselContainer}>
                <View style={localStyles.screenshotCard}>
                  <Image source={{ uri: './assets/td1.png' }} style={localStyles.appScreenshot} resizeMode='contain' />
                </View>
                <View style={localStyles.screenshotCard}>
                  <Image source={{ uri: './assets/td2.png' }} style={localStyles.appScreenshot} resizeMode='contain' />
                </View>
                <View style={localStyles.screenshotCard}>
                  <Image source={{ uri: './assets/td3.png' }} style={localStyles.appScreenshot} resizeMode='contain' />
                </View>
              </ScrollView>

              {/* PROJECT 3: EXERCISE APP */}
              <TouchableOpacity 
                style={localStyles.linkAction}
                onPress={() => Linking.openURL('https://s-aryafreya.github.io/exercise-app/')}
              >
                <Text style={localStyles.linkText}>{">"} View Exercise App</Text>
              </TouchableOpacity>
              <Text style={localStyles.appIntroText}>
                An exercise app with set workouts to show increments and time, with lapping. 
              </Text>
              <ScrollView horizontal showsHorizontalScrollIndicator={true} style={localStyles.carouselContainer}>
                <View style={localStyles.screenshotCard}>
                  <Image source={{ uri: './assets/ex1.png' }} style={localStyles.appScreenshot} resizeMode='contain' />
                </View>
                <View style={localStyles.screenshotCard}>
                  <Image source={{ uri: './assets/ex2.png' }} style={localStyles.appScreenshot} resizeMode='contain' />
                </View>
                <View style={localStyles.screenshotCard}>
                  <Image source={{ uri: './assets/ex3.png' }} style={localStyles.appScreenshot} resizeMode='contain' />
                </View>
                <View style={localStyles.screenshotCard}>
                  <Image source={{ uri: './assets/ex4.png' }} style={localStyles.appScreenshot} resizeMode='contain' />
                </View>
              </ScrollView>
            </RetroWindow>

            {/* CONTACT FORM */}
            <RetroWindow title="contact_form.exe">
              <Text style={localStyles.statusText}>Send a message to the system:</Text>
              
              <TextInput
                style={localStyles.input}
                placeholder="Name"
                placeholderTextColor="#999"
                value={form.name}
                onChangeText={(text) => setForm({...form, name: text})}
              />
              
              <TextInput
                style={localStyles.input}
                placeholder="Email"
                placeholderTextColor="#999"
                value={form.email}
                onChangeText={(text) => setForm({...form, email: text})}
                keyboardType="email-address"
              />
              
              <TextInput
                style={[localStyles.input, { height: 80 }]}
                placeholder="Message"
                placeholderTextColor="#999"
                value={form.message}
                onChangeText={(text) => setForm({...form, message: text})}
                multiline
              />

              {error && <Text style={localStyles.errorText}>{error}</Text>}

              <TouchableOpacity 
                style={[
                    localStyles.sendButton, 
                    { backgroundColor: isHovered ? '#b08083' : '#d0a0a3' } 
                ]} 
                onPress={handleSend}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <Text style={localStyles.sendButtonText}>SEND</Text>
              </TouchableOpacity>
            </RetroWindow>
            
            {/* TERMINAL */}
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
  },
  screenshotCard: {
    width: 200, 
    height: 130,
    marginRight: 15,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#d0a0a3',
    justifyContent: 'center',
    alignItems: 'center',
  },
  appScreenshot: {
    width: 194,
    height: 122,
  },
  input: {
    backgroundColor: 'white',
    borderWidth: 2,
    borderTopColor: '#808080', 
    borderLeftColor: '#808080',
    borderBottomColor: '#ffffff',
    borderRightColor: '#ffffff',
    padding: 8,
    fontFamily: 'W95FA',
    fontSize: 12,
    marginBottom: 10,
    color: '#000',
  },
  sendButton: {
    padding: 10,
    borderWidth: 2,
    borderColor: '#f8bbd0',
    alignItems: 'center',
    marginTop: 5,
  },
  sendButtonText: {
    color: 'white',
    fontFamily: 'W95FA',
    fontSize: 14,
  },
  errorText: {
    color: '#A30262',
    fontFamily: 'W95FA',
    fontSize: 10,
    marginBottom: 10,
    textAlign: 'center',
  }
});