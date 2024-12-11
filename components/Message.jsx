import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { auth } from '../firebase';

function Message({ message }) {
  const isCurrentUser = message.uid === auth.currentUser?.uid;

  const messageStyle = isCurrentUser
    ? [styles.message, styles.messageEnd]
    : [styles.message, styles.messageStart];

  const textStyle = isCurrentUser
    ? [styles.text, styles.sent]
    : [styles.text, styles.received];

  return (
    <View style={messageStyle}>
      {!isCurrentUser && <Text style={styles.name}>{message.name}</Text>}
      <View style={textStyle}>
        <Text>{message.text}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  message: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginVertical: 5,
  },
  messageStart: {
    alignSelf: 'flex-start',
  },
  messageEnd: {
    alignSelf: 'flex-end',
  },
  name: {
    fontSize: 10,
    color: '#666',
    marginHorizontal: 8,
  },
  text: {
    marginVertical: 4,
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  sent: {
    backgroundColor: '#32CD32',
    color: 'white',
    alignSelf: 'flex-end',
  },
  received: {
    backgroundColor: '#e5e5ea',
    color: 'black',
    alignSelf: 'flex-start',
  },
});

export default Message;
