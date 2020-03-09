import React from 'react';
import TransactionForm
  from '../frontend/components/TransactionForm/TransactionForm';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Transaction({language}) {
  return (
    <div>
      <TransactionForm name={'pants'} category={'clothing'}/>
    </div>
  );
}
