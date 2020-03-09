import React from 'react';
import TransactionForm
  from '../frontend/components/TransactionForm/TransactionForm';

export default function Transaction({language}) {
  return (
    <div>

      <TransactionForm name={'pants'} category={'clothing'}/>
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
        crossOrigin="anonymous"
      />
    </div>
  );
}
