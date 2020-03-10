import NavigationBar from '../frontend/components/NavigationBar';
import Link from 'next/link';
import '../public/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {isMobile} from 'react-device-detect';
import translate from '../frontend/components/translate.js';

export default function Index({language}) {

  return (
    <div className = 'Introduction'>
      <h1> Miqueas Inventory Management Solution </h1>
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
      <Link href="/itemVariationTest">
        <a title="itemVariationTest">ItemVariationTest</a>
      </Link>
    </div>
  );
}
