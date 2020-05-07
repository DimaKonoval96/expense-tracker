import firebase from 'firebase/app';
import 'firebase/firestore';

const config = {
	apiKey: 'AIzaSyCNJVkTE61gYBw_1MkMocvEn6uOhlTciI0',
	authDomain: 'expense-tracker-dc19d.firebaseapp.com',
	databaseURL: 'https://expense-tracker-dc19d.firebaseio.com',
	projectId: 'expense-tracker-dc19d',
	storageBucket: 'expense-tracker-dc19d.appspot.com',
	messagingSenderId: '11579697404',
	appId: '1:11579697404:web:b7f4eb36f80f341b700f79',
	measurementId: 'G-6YNJYP21Q0',
};
// Initialize Firebase
firebase.initializeApp(config);
// firebase.analytics();

export const firestore = firebase.firestore();

export default config;
