import NavigationBar from '../frontend/components/NavigationBar';
import '../public/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Index({language}) {

  return (
    <div className = 'Introduction'>
      <h1> Miqueas Inventory Management Solution </h1>
      <div className='Footer'><NavigationBar/></div>
    </div>
  );
}
