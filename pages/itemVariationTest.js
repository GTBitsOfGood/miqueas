import NavigationBar from '../frontend/components/NavigationBar';
import '../public/add.css';
import {addItemVariation, updateItemVariation, getItemVariation} from '../frontend/actions/itemVariation.js';
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

  return (
    <div className="Clean">
        <h1>Item Variation API tests</h1>
        <Button onClick={() => addHandler(exampleVariation)}> testAdd </Button>
        <Button onClick={() => updateHandler(updateVariation)}> testUpdate </Button>
        <p id="result"> View get result </p>
        <div className="Footer"><NavigationBar/></div>
    </div>
  );
}
