import React from 'react';

const EntryList = () => {
  return(
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
  );
}

export default EntryList;