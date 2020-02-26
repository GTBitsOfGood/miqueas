import NavigationBar from '../frontend/components/NavigationBar';
import '../public/add.css';
import {addItem} from '../frontend/actions/items.js';
import {Button} from 'react-bootstrap';

export default function Add() {
  const exampleItem = {name: 'test', quantityChanged: 0, category: 'examples', 
    location: 'Atlanta', date_checked: new Date, original_stock: 2, recipient:['me']}

  return (
    <div className="Clean">
        <h1>This will be the add screen!</h1>
        <h2>Where you land if you press the '+' on the footer (unless we use a modal)</h2>
        {/*For this button it goes to: frontend action -> api call -> backend action. 
        The frontend/backend actions are for reusability. */}
        <Button onClick={()=>addItem(exampleItem)}>Example Add Item</Button>
        <div className="Footer"><NavigationBar/></div>
    </div>
  );
}

