import React from 'react';

const EntryList = () => {
  return(
    <ul className='entry-list'>
      <h3>Entries:</h3>
      <li class='entry entry-expense'>Book <span>-50$</span></li>
      <li class='entry entry-income'>Salary <span>1000$</span></li>
    </ul>
  );
}

export default EntryList;