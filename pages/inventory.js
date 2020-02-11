import InventoryHeader from '../components/InventoryHeader'
import NavigationBar from '../components/NavigationBar';
import '../public/school_inventory.css';

export default function Inventory() {
  return (
    <div class="Clean">
      <InventoryHeader />
      <div class="Footer"><NavigationBar/></div>
    </div>
  );
}
