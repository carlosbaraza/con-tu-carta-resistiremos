import 'firebase/auth';
import * as firebase from 'firebase/app';
import { useState, useEffect } from 'react';

export const useFirebaseReady = () => {
  const [firebaseReady, setFirebaseReady] = useState(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(() => setFirebaseReady(true));
  }, []);

  return firebaseReady;
};
