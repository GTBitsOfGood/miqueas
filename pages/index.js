import Link from 'next/link';
import '../public/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from '../frontend/components/NavigationBar';
import {isMobile} from 'react-device-detect';
import translate from '../frontend/components/translate.js';

export default function Index({language}) {

  return (
    <div className = 'Introduction'>
      <h1> Miqueas Inventory Management Solution </h1>
      <Link href="/inventory">
        <a title="Inventory"> {translate("Inventory", {language})} </a>
      </Link>
      <Link href="/transaction">
        <a title="Transaction"> Transaction </a>
      </Link>
      <div className='Footer'><NavigationBar/></div>
      <Link href="/qrcode">
        <a title="qrcode"> QRCode </a>
      </Link>
      <Link href="/search">
        <a title="search">Search</a>
      </Link>
    </div>
  );
}
