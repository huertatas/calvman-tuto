import firebase from "firebase";

const config = {
  apiKey: "AIzaSyCUw4Fqy0ZiFBRcC5sziwMIUzydZr1dnAc",
  authDomain: "udemy-coursehuertatas.firebaseapp.com",
  projectId: "udemy-coursehuertatas",
  storageBucket: "udemy-coursehuertatas.appspot.com",
  messagingSenderId: "793527774869",
  appId: "1:793527774869:web:78eee67307752f40bbb59c",
  measurementId: "G-K3LV5RGGSN",
};

if (!firebase.app.length) {
  firebase.initializeApp(config);
}

export default firebase;
