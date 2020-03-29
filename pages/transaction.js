import React from 'react';
import TransactionForm
  from '../frontend/components/TransactionForm/TransactionForm';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Transaction({language, transactionState, setTransactionState}) {
  let items = transactionState.transactionItems;
  let recentItem = items[items.length - 1];
  
  return (
    <div>
      <TransactionForm
        language={language}
        transactionState={transactionState}
        setTransactionState={setTransactionState}
        name={recentItem ? recentItem.item.name : ""}
        category={recentItem ? recentItem.item.category : ""}
      />
    </div>
  );
}
