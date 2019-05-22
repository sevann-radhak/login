import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBEvM_F3C_npIYaqxYW98M_f-0mhPDU2cY",
    authDomain: "login-facilito-react.firebaseapp.com",
    databaseURL: "https://login-facilito-react.firebaseio.com",
    projectId: "login-facilito-react",
    storageBucket: "login-facilito-react.appspot.com",
    messagingSenderId: "715666543101"
};

firebase.initializeApp(config);

export default firebase;