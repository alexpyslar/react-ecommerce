import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: "AIzaSyDpWfr7T08V7FBvg8S_9SlsBWLO1LFaM-0",
	authDomain: "alex-db.firebaseapp.com",
	databaseURL: "https://alex-db.firebaseio.com",
	projectId: "alex-db",
	storageBucket: "alex-db.appspot.com",
	messagingSenderId: "920524748678",
	appId: "1:920524748678:web:cf1a937522839a8da1de07",
	measurementId: "G-TN3BPCM2V3"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;