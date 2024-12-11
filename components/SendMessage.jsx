import React, {useRef, useState} from 'react';
import {
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from 'react-native'; // Import Platform

import {auth, db} from '../firebase';
import {addDoc, serverTimestamp, collection} from 'firebase/firestore';

const SendMessage = ({scroll}) => {
  const inputRef = useRef(null);
  const [input, setInput] = useState('');

  const sendMessage = async () => {
    if (input.trim() === '') {
      console.log('No value entered');
      return;
    }

    try {
      const {uid, displayName} = auth.currentUser;
      await addDoc(collection(db, 'messages'), {
        text: input,
        name: displayName,
        uid,
        timestamp: serverTimestamp(),
      });
      setInput('');
      inputRef.current?.focus();
      scroll.current?.scrollToEnd({animated: true});
    } catch (error) {
      console.error('Error sending message: ', error);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Message"
        placeholderTextColor="#aaa"
        ref={inputRef}
        value={input}
        onChangeText={setInput}
        onSubmitEditing={sendMessage} // Optionally send message on pressing Enter/Return
      />
      <TouchableOpacity style={styles.button} onPress={sendMessage}>
        <Text style={styles.buttonText}>Send</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  input: {
    flex: 1,
    padding: 10,
    fontSize: 16,
    backgroundColor: '#333',
    color: '#fff',
    borderRadius: 8,
    marginRight: 10,
  },
  button: {
    backgroundColor: '#f43f5e',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default SendMessage;
