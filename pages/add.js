import NavigationBar from '../frontend/components/NavigationBar';
import QrCode from '../frontend/components/qrcode.js';
import translate from '../frontend/components/translate.js';

export default function Add({language, transactionState, setTransactionState}) {

  return (
    <div className="Clean">
      <center>
        <div className="qrBox">
          <QrCode 
            language={language}
            transactionState={transactionState}
            setTransactionState={setTransactionState}
          > 
          </QrCode>
        </div>
      </center>
        <div className="Footer"><NavigationBar selector={2}/></div>
    </div>
  );
}
