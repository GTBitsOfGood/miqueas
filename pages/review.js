import ReviewForm from '../frontend/components/ReviewForm.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../public/review-form.css';

export default function Review({language, transactionState, setTransactionState}) {
  return (
    <div>
      <ReviewForm
        language={language}
        transactionState={transactionState}
        setTransactionState={setTransactionState}
      ></ReviewForm>
    </div>
  );
}
