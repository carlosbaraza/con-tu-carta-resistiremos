import { firebaseConfig } from './config';
import 'firebase/auth';
import * as firebase from 'firebase/app';

if (!firebase.apps[0]) {
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
}

const DEFAULT_ERROR_MESSAGE =
  'Something went wrong. If the problem persists, please get in touch with us.';

export async function signIn(email: string, password: string) {
  const credential = await firebase
    .auth()
    .signInWithEmailAndPassword(email, password);
  const { user } = credential;
  if (!user) throw new Error(DEFAULT_ERROR_MESSAGE);
}

export async function signOut() {
  return firebase.auth().signOut();
}

export async function getIdToken() {
  const user = firebase.auth().currentUser;
  const idToken = await user?.getIdToken();
  return idToken;
}
