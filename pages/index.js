import Link from 'next/link';
import '../public/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from '../frontend/components/NavigationBar';
import {isMobile} from 'react-device-detect';
import translate from '../frontend/components/translate.js';
import QrCode from '../frontend/components/qrcode.js';

export default function Index({language}) {

  return (
    <div className = 'Introduction'>
      <center>
        <div className="qrBox">
          <QrCode> </QrCode>
        </div>
      </center>
      <div className='Footer'><NavigationBar/></div> 
    </div>
  );
}
