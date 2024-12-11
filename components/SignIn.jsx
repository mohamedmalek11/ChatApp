import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../firebase';
import Svg, { Path, ClipPath, Defs } from 'react-native-svg';

const SignIn = () => {
  const googleSignIn = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      console.log('Signed in successfully');
    } catch (error) {
      console.error('Error signing in: ', error);
    }
  };

  return (
    <View style={styles.buttonWrapper}>
      <TouchableOpacity onPress={googleSignIn} style={styles.button}>
        <Svg
          style={styles.svg}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
        >
          <Defs>
            <Path
              id="a"
              d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"
            />
          </Defs>
          <ClipPath id="b">
            <Path d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z" />
          </ClipPath>
          <Path clipPath="url(#b)" fill="#FBBC05" d="M0 37V11l17 13z" />
          <Path
            clipPath="url(#b)"
            fill="#EA4335"
            d="M0 11l17 13 7-6.1L48 14V0H0z"
          />
          <Path
            clipPath="url(#b)"
            fill="#34A853"
            d="M0 37l30-23 7.9 1L48 0v48H0z"
          />
          <Path
            clipPath="url(#b)"
            fill="#4285F4"
            d="M48 48L17 24l-4-3 35-10z"
          />
        </Svg>
        <Text style={styles.text}>Sign with Google</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  button: {
    flexDirection: 'row',
    backgroundColor: '#32CD32',
    height: 50,
    paddingHorizontal: 16,
    alignItems: 'center',
    borderRadius: 8,
  },
  svg: {
    width: 24,
    height: 24,
  },
  text: {
    color: '#fff',
    fontSize: 16,
    marginLeft: 8,
  },
});

export default SignIn;
