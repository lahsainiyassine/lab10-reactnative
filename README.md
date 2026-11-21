# Lab 10 : Configuration de la Bottom Tab Navigation dans une application React Native

- **URL de la plateforme** : https://mliaedu.toubkalit.com/student/courses/38/labs/323
- **Formation** : React Native

---

## 1. Objectifs
- Remplacer une Stack Navigation par une navigation par onglets (**Bottom Tab Navigation**).
- Installer et configurer `@react-navigation/bottom-tabs` et `@react-navigation/native`.
- Déclarer deux routes principales :
  - `Login` (`LoginScreen`)
  - `Welcome` (`WelcomeScreen`)
- Définir `initialRouteName="Login"` et configurer les options d'affichage.

---

## 2. Dépendances requises
```bash
npm install @react-navigation/native @react-navigation/bottom-tabs react-native-screens react-native-safe-area-context
```

---

## 3. Structure des fichiers
```text
tp10/
  LoginScreen.js
  WelcomeScreen.js
  App.js
  package.json
```

---

## 4. Composant LoginScreen.js
**Fichier : `LoginScreen.js`**
```javascript
import React, { useState } from 'react';
import { ScrollView, Text, StyleSheet, TextInput, View, Pressable } from 'react-native';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.headerText}>Welcome to Little Lemon</Text>
      <Text style={styles.regularText}>Login to continue</Text>

      <TextInput
        style={styles.inputBox}
        value={email}
        onChangeText={setEmail}
        placeholder="Email"
        keyboardType="email-address"
      />

      <TextInput
        style={styles.inputBox}
        value={password}
        onChangeText={setPassword}
        placeholder="Password"
        secureTextEntry={true}
      />

      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Log in</Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333333',
  },
  headerText: {
    padding: 40,
    fontSize: 28,
    color: '#EDEFEE',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  regularText: {
    fontSize: 22,
    padding: 10,
    color: '#EDEFEE',
    textAlign: 'center',
  },
  inputBox: {
    height: 45,
    marginHorizontal: 20,
    marginVertical: 10,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: '#EDEFEE',
    borderRadius: 8,
    fontSize: 16,
    backgroundColor: '#FFFFFF',
    color: '#000000',
  },
  button: {
    padding: 12,
    marginHorizontal: 50,
    marginVertical: 20,
    backgroundColor: '#EE9972',
    borderRadius: 8,
  },
  buttonText: {
    color: '#333333',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
```

---

## 5. Composant WelcomeScreen.js
**Fichier : `WelcomeScreen.js`**
```javascript
import React from 'react';
import { ScrollView, Text, StyleSheet, View } from 'react-native';

export default function WelcomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.headerText}>Little Lemon Bistro</Text>
      <Text style={styles.regularText}>
        Little Lemon is a charming neighborhood bistro that serves simple food
        and classic cocktails in a lively but casual environment.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333333',
    padding: 20,
  },
  headerText: {
    paddingTop: 40,
    paddingBottom: 20,
    fontSize: 30,
    color: '#EDEFEE',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  regularText: {
    fontSize: 20,
    color: '#EDEFEE',
    textAlign: 'center',
    lineHeight: 28,
  },
});
```

---

## 6. Code complet App.js
**Fichier : `App.js`**
```javascript
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
```
