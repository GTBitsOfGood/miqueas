import TransactionForm from '../frontend/components/TransactionForm.js';
import translate from '../frontend/components/translate.js';

export default function Transaction({language}) {
  return (
    <div>

      <TransactionForm></TransactionForm>
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
        crossOrigin="anonymous"
      />
    </div>
  );
}
