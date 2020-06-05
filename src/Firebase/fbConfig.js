import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: "AIzaSyCss7BBF4q4F3rmy4nTFouXd5EBfkIEGaI",
    authDomain: "weworld-f6888.firebaseapp.com",
    databaseURL: "https://weworld-f6888.firebaseio.com",
    projectId: "weworld-f6888",
    storageBucket: "weworld-f6888.appspot.com",
    messagingSenderId: "97289787459",
    appId: "1:97289787459:web:2ee02dfcea2b4f6eb85cf6"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


export default firebase;
