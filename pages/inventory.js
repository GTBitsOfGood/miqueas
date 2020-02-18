import InventoryHeader from '../components/InventoryHeader'
import NavigationBar from '../components/NavigationBar';
import '../public/school_inventory.css';


export default function Inventory() {
  return (
    <div className="Clean">
      <InventoryHeader />
      <div className="Footer"><NavigationBar/></div>
    </div>
  );
}
