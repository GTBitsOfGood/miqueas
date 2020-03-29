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
      <div className='Footer'><NavigationBar/></div>
    </div>
  );
}
