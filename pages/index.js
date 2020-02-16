import Link from 'next/link';
import '../public/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Index() {
  return (
    <div className = 'Introduction'>
      <h1> Miqueas Inventory Management Solution </h1>
      <Link href="/inventory">
        <a title="Inventory"> Inventory </a>
      </Link>
      <Link href="/transaction">
        <a title="Transaction"> Transaction </a>
      </Link>
    </div>
  );
}
