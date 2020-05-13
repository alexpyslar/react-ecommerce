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

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) return;

	const userRef = firestore.doc(`/users/${userAuth.uid}`);

	const snapShot = await userRef.get();

	if (!snapShot.exists) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData
			});
		} catch (e) {
			console.log('error creating user', e.message);
		}
	}

	return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;