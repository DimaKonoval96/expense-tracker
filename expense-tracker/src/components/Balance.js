import React from 'react';

const Balance = ({getBalance}) => {
  return(
    <div className='balance'>
      <div>Balance: <span>{getBalance()}</span>$</div>
    </div>
  );
}

export default Balance;