import NavigationBar from '../frontend/components/NavigationBar';
import '../public/add.css';
import {addItem} from '../frontend/actions/Items.js';
import {Button} from 'react-bootstrap';

export default function Add() {
  const exampleItem = { name: 'test', stock: 10, category: 'examples',
    location: 'Atlanta', reorder_level: 10 }

  return (
    <div className="Clean">
        <h1>This will be the add screen!</h1>
        <h2>Where you land if you press the '+' on the footer (unless we use a modal)</h2>
        {/*For this button it goes to: frontend action -> api call -> backend action.
        The frontend/backend actions are for reusability. */}
        <Button onClick={()=>addItem(exampleItem)}>Example Add Item</Button>
        <div className="Footer"><NavigationBar selector={2}/></div>
    </div>
  );
}
