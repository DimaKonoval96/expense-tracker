import React from 'react';

const EntryList = ({entries, deleteEntry}) => {

  return(
    <ul className='entry-list'>
      <h3>Entries:</h3>
      {
        entries.map(entry => {
         return <li className={`entry ${entry.money > 0 ? 'entry-income' : 'entry-expense'}`} key={entry.id}><span className='delete-entry' onClick={(id) => deleteEntry(entry.id)}>-</span>{entry.name}<span>{entry.money}$</span></li>
        })
      }
    </ul>
  );
}

export default EntryList;