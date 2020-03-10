import React from 'react';
import TransactionForm
  from '../frontend/components/TransactionForm/TransactionForm';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Transaction({language, transactionState, setTransactionState}) {
  let items = transactionState.transactionItems;
  return (
    <div>
      <TransactionForm
        language={language}
        transactionState={transactionState}
        setTransactionState={setTransactionState}
        name={items[items.length-1].item.name}
        category={items[items.length - 1].item.category}
      />
    </div>
  );
}
