import NavigationBar from '../frontend/components/NavigationBar';
import '../public/add.css';
import {searchQuery} from '../frontend/actions/searchQuery';
import {Button} from 'react-bootstrap';

async function handler() {
  const text = "asdf";
  const docs = await searchQuery(text);
  document.getElementById("result").textContent = JSON.stringify(docs);
  console.log(docs);
}

export default function Search() {
  
  return (
    <div className="Clean">
        <h2>Search Something</h2>
        {/*For this button it goes to: frontend action -> api call -> backend action. 
        The frontend/backend actions are for reusability. */}
        <input type="text" id="searchText" />
        <Button onClick={() => handler()}> Search </Button>
        <div className="Footer"><NavigationBar/></div>
        <p id="result"></p>
    </div>
  );
}

