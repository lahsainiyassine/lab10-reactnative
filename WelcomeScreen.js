import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';

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
