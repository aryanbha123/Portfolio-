// firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCMkn4CjsETFIp3nJZ5C1N4UVvgA8rrui0',
  authDomain: 'ecommerce-d962d.firebaseapp.com',
  projectId: 'ecommerce-d962d',
  storageBucket: 'ecommerce-d962d.appspot.com',
  messagingSenderId: '535149057118',
  appId: '1:535149057118:web:56e0383a1bf0b2e23e2e59',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    // The signed-in user info.
    const user = result.user;
    // You can also get the Google Access Token if needed
    // const credential = GoogleAuthProvider.credentialFromResult(result);
    // const token = credential.accessToken;
    console.log('User signed in:', user);
  } catch (error) {
    // Handle Errors here.
    console.error('Error during sign-in:', error);
  }
};

export const logout = async () => {
  try {
    await signOut(auth);
    console.log('User signed out');
  } catch (error) {
    console.error('Error during sign-out:', error);
  }
};
