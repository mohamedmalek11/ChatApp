import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

const firebaseConfig = {
  apiKey: 'AIzaSyClEGEzbNpzm_YtcauVfdHQw8YBAiGA_C4',
  authDomain: 'chat-app-a3c42.firebaseapp.com',
  projectId: 'chat-app-a3c42',
  storageBucket: 'chat-app-a3c42.appspot.com',
  messagingSenderId: '304654635037',
  appId: '1:304654635037:web:606867ff65cbbac9c436f4',
};
GoogleSignin.configure({
  webClientId:
    '304654635037-ulannmjiu2ab130hvhueqlo5t2p4ls6b.apps.googleusercontent.com',
  offlineAccess: true,
});

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
