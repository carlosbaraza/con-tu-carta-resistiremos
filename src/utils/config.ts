export let API_URL: string;
switch (window.location.hostname) {
  case 'localhost':
    API_URL = 'http://localhost:3001';
    break;
  case 'con-tu-carta-resistiremos.com':
    API_URL = 'https://api.con-tu-carta-resistiremos.com';
    break;
}

export const firebaseConfig = {
  apiKey: 'AIzaSyBC2lQkBe648RMHBN8XLO-BXf19csnVLS0',
  authDomain: 'con-tu-carta-resistiremos.firebaseapp.com',
  databaseURL: 'https://con-tu-carta-resistiremos.firebaseio.com',
  projectId: 'con-tu-carta-resistiremos',
  storageBucket: 'con-tu-carta-resistiremos.appspot.com',
  messagingSenderId: '766507366941',
  appId: '1:766507366941:web:1b351c96c00fe9adc064f4',
  measurementId: 'G-MFNK15FE60'
};
