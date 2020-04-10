import React, {useState} from 'react';
import uuid from 'react-uuid';
import IncomeExpenses from '../IncomeExpenses';
import Balance from '../Balance';
import EntryList from '../EntryList';
import AddEntry from '../AddEntry';

const Main = () =>{
  const [entries, setEntries] = useState([{id: uuid(), name: 'Book', money: -50}, {id: uuid(), name: 'Salary', money:1000}]);

  const addEntry = (entry) =>{
    entry.id = uuid();
    setEntries([...entries, entry])
  }

  const deleteEntry = (id) => {
    const filteredEntries = entries.filter(entry => entry.id !== id);
    setEntries([...filteredEntries]);
  }
  return(
    <div className='main container'>
      <h1>Expense Tracker</h1>
      <IncomeExpenses />
      <Balance />
      <EntryList entries={entries} deleteEntry={deleteEntry}/>
      <AddEntry addEntry={addEntry}/>
    </div>
  );
}

export default Main;