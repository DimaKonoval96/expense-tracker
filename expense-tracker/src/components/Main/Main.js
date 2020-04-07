import React from 'react';
import IncomeExpenses from '../IncomeExpenses';
import Balance from '../Balance';
import EntryList from '../EntryList';
import AddEntry from '../AddEntry';

const Main = () =>{
  return(
    <div className='main container'>
      <h1>Expense Tracker</h1>
      <IncomeExpenses />
      <Balance />
      <EntryList />
      <AddEntry />
    </div>
  );
}

export default Main;