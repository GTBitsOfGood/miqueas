import React, { useState } from 'react';

//Global style
import 'bootstrap/dist/css/bootstrap.min.css';
import '../public/navbar.css';
import '../public/main.css';
import '../public/category.css';
import '../public/log.css';
import '../public/review-form.css';
import '../public/signup.css';
import '../public/logtable.css';
import '../public/categoryitems.css';
import '../public/categorylist.css';
import '../public/components.css';

function MyApp({ Component, pageProps }) {
  const [language, setLanguage] = useState("English");
  const [transactionState, setTransactionState] = useState({
    transactionItems : [],
    transaction_date : new Date(),
    staff_name : "Staff 1"
  });
  return <Component
            language = {language}
            setLanguage = {(language) => setLanguage(language)}
            transactionState = {transactionState}
            setTransactionState={(transactionState) => setTransactionState(transactionState)}
          />
}
export default MyApp;
