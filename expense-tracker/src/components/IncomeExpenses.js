import React from 'react';

const IncomeExpenses = ({getFinData}) => {
  const finData = getFinData();
  return(
    <div className='income-expenses '>
      <div className='income'>Income: <span>{finData.income}</span>$</div>
      <div className='expenses'>Expenses: <span>{finData.expenses}</span>$ </div>
    </div>
  );
}

export default IncomeExpenses;