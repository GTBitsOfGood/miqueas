import NavigationBar from '../frontend/components/NavigationBar';
import '../public/add.css';
import {addItemVariation, updateItemVariation, getItemVariation} from '../frontend/actions/itemVariation.js';
import {addItem} from '../frontend/actions/items.js'
import {Button} from 'react-bootstrap';
import { get } from 'mongoose';

async function addHandler(content) {
  const docs = await addItemVariation(content);
  console.log(docs);
}

async function updateHandler(content) {
  const docs = await updateItemVariation(content);
  console.log(docs);
}

async function addTestHandler(content) {
  const docs = await addItem(content);
  console.log(docs);
}



export default function ItemVariationTest() {
  // name gender size typeColor
  const exampleVariation = [{
    name: "asdf",
    gender: "male",
    size: "big",
    typeColor: "green"
  }, {
    name: "asdfasdf",
    gender: "female",
    size: "small",
    typeColor: "red"
  }];

  const updateVariation = {
    name: "asdf",
    gender: "female",
    size: "small",
    typeColor: "yellow"
  };

  const item1 = {
    name: "james",
    stock: 1,
    category: "test",
    gender: "boy",
    typeColor: "blue",
    size: "small",
    location: "closet",
    reorder_level: 0,
  }

  return (
    <div className="Clean">
        <h1>Item Variation API tests</h1>
        <Button onClick={() => addHandler(exampleVariation)}> testAdd </Button>
        <Button onClick={() => updateHandler(updateVariation)}> testUpdate </Button>
        <Button onClick={() => addTestHandler(item1)}> add one item </Button>
        <p id="result"> View get result </p>
        <div className="Footer"><NavigationBar/></div>
    </div>
  );
}
