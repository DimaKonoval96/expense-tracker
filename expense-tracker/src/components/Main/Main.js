import React, { useState, useEffect } from 'react';
import uuid from 'react-uuid';
import IncomeExpenses from '../IncomeExpenses';
import Balance from '../Balance';
import EntryList from '../EntryList';
import AddEntry from '../AddEntry';
import { firestore } from '../../firebase';
const Main = () => {
	const [entries, setEntries] = useState([]);

	useEffect(() => {
		const unsubscribeFromFirestore = firestore
			.collection('entries')
			.get()
			.then((snapshot) => {
				const entriesArr = snapshot.docs.map((doc) => {
					return { id: doc.id, ...doc.data() };
				});
				setEntries([...entriesArr]);
			})
			.catch(function (error) {
				console.error('Error adding document: ', error);
			});
		// return () => unsubscribeFromFirestore();
	}, [entries]);

	const addEntry = (entry) => {
		firestore.collection('entries').add(entry);
	};

	const deleteEntry = (id) => {
		firestore.doc(`entries/${id}`).delete();
	};

	const getFinData = () => {
		const finData = {};
		finData.income = entries.reduce(
			(acc, entry) => (entry.money > 0 ? acc + entry.money : acc),
			0
		);
		const expenses = entries.reduce(
			(acc, entry) => (entry.money < 0 ? acc + entry.money : acc),
			0
		);
		finData.expenses = Math.abs(expenses);
		return finData;
	};
	const getBalance = () => {
		return entries.reduce((sum, entry) => sum + entry.money, 0);
	};
	return (
		<div className='main container'>
			<h1>Expense Tracker</h1>
			<IncomeExpenses getFinData={getFinData} />
			<Balance getBalance={getBalance} />
			<EntryList entries={entries} deleteEntry={deleteEntry} />
			<AddEntry addEntry={addEntry} />
		</div>
	);
};

export default Main;
