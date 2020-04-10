import React, {useState} from 'react';

const EntryList = ({addEntry}) => {

  const [inputName, setInputName] = useState('');
  const [inputMoney, setInputMoney] = useState(0);

  const formHandler = (e) =>{
    e.preventDefault();
    if(inputName && inputMoney){
      addEntry({name: inputName, money: Number(inputMoney)});
      setInputName('');
      setInputMoney(0);
    }
  }
  return(
    <form className='add-entry'>
      <div className='form-control'>
        <label htmlFor='name'>Name:</label>
        <input id='name'  name='name' type='text' value={inputName} onChange={(e) => setInputName(e.target.value)}/>
      </div>

      <div className='form-control'>
      <label htmlFor='money'>Money:</label>
        <input type='number' id='money' name='money' value={inputMoney} onChange={(e) => setInputMoney(e.target.value)}/>
      </div>

      <button type='submit' className='btn btn-add-entry' onClick={formHandler}> Add Entry</button>
    </form>
  );
}

export default EntryList;