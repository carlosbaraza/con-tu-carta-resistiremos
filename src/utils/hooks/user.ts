import { useEffect, useState } from 'react';
import 'firebase/auth';
import * as firebase from 'firebase/app';

export const useUser = () => {
  const [user, setUser] = useState(firebase.auth().currentUser);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  }, []);

  return user;
};

export const useIsAdmin = () => {
  const user = useUser();
  return !!user?.uid.includes('TFwYCinXp7NmUfko');
};
