import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Login from './App/Screens/Login';
import { ClerkProvider, SignedIn, SignedOut } from '@clerk/clerk-expo';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigation from './App/Navigations/TabNavigation';
import { useFonts } from 'expo-font';

export default function App() {
  //This is how we can call the fontFamily in styles by the name we give it
  const [fontsLoaded] = useFonts({
    'appfont': require('./assets/fonts/Outfit-Regular.ttf'),
    'appfont-bold': require('./assets/fonts/Outfit-Bold.ttf'),
    'appfont-semi': require('./assets/fonts/Outfit-SemiBold.ttf'),
    'appfont-light': require('./assets/fonts/Outfit-Light.ttf'),

  });

  if(!fontsLoaded){
    return null
  }

  return (
    <ClerkProvider publishableKey={"pk_test_bGVuaWVudC1sb2N1c3QtOTcuY2xlcmsuYWNjb3VudHMuZGV2JA"}>
      <SafeAreaView style={styles.container}>
        <StatusBar hidden />
        <SignedIn>
          <NavigationContainer>
            <TabNavigation />
          </NavigationContainer>
        </SignedIn>
        <SignedOut>
          <Login />
        </SignedOut>
      </SafeAreaView>
    </ClerkProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
