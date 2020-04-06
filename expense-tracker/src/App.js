import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
    <div className='main container'>
      <h1>Expense Tracker</h1>
      <div class='income-expenses '>
        <div class='income'>Income: <span>0</span>$</div>
        <div class='expenses'>Expenses: <span>0</span>$ </div>
      </div>

      <div class='balance'>
        <div>Balance: <span>0</span>$</div>
      </div>

      <ul className='entry-list'>
        <h3>Entries:</h3>
        <li class='entry entry-expense'>Book <span>-50$</span></li>
        <li class='entry entry-income'>Salary <span>1000$</span></li>
      </ul>

      <form className='add-entry'>
      <div className='form-control'>
        <label htmlFor='name'>Name:</label>
        <input id='name'  name='name' type='text'/>
      </div>

      <div className='form-control'>
      <label id='money'>Money:</label>
        <input type='number' id='money' name='money'/>
      </div>

        <button type='submit' className='btn btn-add-entry'> Add Entry</button>
      </form>
      </div>
    </div>
  );
}

export default App;