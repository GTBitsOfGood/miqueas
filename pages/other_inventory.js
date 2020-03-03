import NavigationBar from '../frontend/components/NavigationBar';
import '../public/other_inventory.css';
import translate from '../frontend/components/translate.js';

export default function OtherInventory({language}) {
  return (
    <div className="Clean">
        <h1>Other Inventory</h1>
        <div className="Footer"><NavigationBar/></div>
    </div>
  );
}
