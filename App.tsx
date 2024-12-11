import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Navbar from './components/Navbar';
import Chat from './components/Chat';
import {useAuthState} from 'react-firebase-hooks/auth';
import {auth} from './firebase'; // Firebase setup file

export default function App() {
  const [user, loading, error] = useAuthState(auth);

  if (loading) {
    return (
      <View style={styles.centered}>
        <Text>Loading...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.centered}>
        <Text>Error: {error.message}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Navbar />
      {user ? (
        <Chat />
      ) : (
        <Text style={styles.text}>Please sign in to continue</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    paddingTop: 50,
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
    color: '#333',
    fontSize: 18,
    marginTop: 20,
  },
});
