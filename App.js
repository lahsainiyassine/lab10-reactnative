import React from 'react';
import { View, StyleSheet } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import LoginScreen from './LoginScreen';
import WelcomeScreen from './WelcomeScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <View style={styles.content}>
          <Tab.Navigator
            initialRouteName="Login"
            screenOptions={{
              headerShown: false,
              tabBarActiveTintColor: '#EE9972',
              tabBarInactiveTintColor: '#888888',
              tabBarStyle: {
                backgroundColor: '#333333',
              },
            }}
          >
            <Tab.Screen name="Login" component={LoginScreen} />
            <Tab.Screen name="Welcome" component={WelcomeScreen} />
          </Tab.Navigator>
        </View>
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  content: { flex: 1 },
});
