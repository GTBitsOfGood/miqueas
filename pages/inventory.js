import InventoryHeader from '../frontend/components/InventoryHeader'
import NavigationBar from '../frontend/components/NavigationBar';
import '../public/school_inventory.css';


export default function Inventory() {
  return (
    <div className="Clean">
      <InventoryHeader />
      <div className="Footer"><NavigationBar/></div>
    </div>
  );
}
