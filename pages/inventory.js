import InventoryHeader from '../frontend/components/InventoryHeader'
import NavigationBar from '../frontend/components/NavigationBar';
import '../public/school_inventory.css';
import translate from '../frontend/components/translate.js';


export default function Inventory({language}) {
  return (
    <div className="Clean">
      <InventoryHeader />
      <div className="Footer"><NavigationBar/></div>
    </div>
  );
}
