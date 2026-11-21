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
        placeholderTextColor="#888888"
        keyboardType="email-address"
      />

      <TextInput
        style={styles.inputBox}
        value={password}
        onChangeText={setPassword}
        placeholder="Password"
        placeholderTextColor="#888888"
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
