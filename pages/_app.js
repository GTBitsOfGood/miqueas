import React, { useState } from 'react';
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
