import Link from 'next/link';
import '../public/index.css'

export default function Index() {
  return (
    <div className = 'Introduction'>
      <h1> Miqueas Inventory Management Solution </h1>
      <Link href="/inventory">
        <a title="Inventory"> Inventory </a>
      </Link>
      <Link href="/qrcode">
        <a title="qrcode"> QRCode </a>
      </Link>
    </div>
  );
}
