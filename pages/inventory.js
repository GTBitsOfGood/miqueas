import InventoryHeader from '../components/InventoryHeader'
import ItemForm from '../components/ItemForm.js';
import Card from 'react-bootstrap/Card';

export default function Inventory() {
  return (
    <div>
      <InventoryHeader />
      <Card style={{ width: '50rem' }}>
        <Card.Body>
          <ItemForm/>
        </Card.Body>
      </Card>
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
        crossOrigin="anonymous"
      />
    </div>
  );
}
