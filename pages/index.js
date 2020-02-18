import Link from 'next/link';
import '../public/index.css';
import NavigationBar from '../components/NavigationBar';
import {isMobile} from 'react-device-detect';

export default function Index() {

  return (
    <div className = 'Introduction'>
      <h1> Miqueas Inventory Management Solution </h1>
      <Link href="/inventory">
        <a title="Inventory"> Inventory </a>
      </Link>
      <div className='Footer'><NavigationBar/></div>
    </div>
  );
}
