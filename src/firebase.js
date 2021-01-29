import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyANE39sgac-2bJHy3UQ5UcCLonpJ4OfQ8A",
    authDomain: "drive-clone-e32b9.firebaseapp.com",
    projectId: "drive-clone-e32b9",
    storageBucket: "drive-clone-e32b9.appspot.com",
    messagingSenderId: "1065309532898",
    appId: "1:1065309532898:web:58ae8cce733671b27fe4bb"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()
const storage = firebase.storage()
const db = firebaseApp.firestore()

export { auth, provider, db, storage }