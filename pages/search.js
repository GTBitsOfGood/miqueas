import NavigationBar from '../frontend/components/NavigationBar';
import '../public/add.css';
import {searchQuery} from '../frontend/actions/searchQuery';
import {Button} from 'react-bootstrap';

export default function Search() {
  const text = "asdf";
  return (
    <div className="Clean">
        <h2>Search Something</h2>
        {/*For this button it goes to: frontend action -> api call -> backend action. 
        The frontend/backend actions are for reusability. */}
        <input type="text" id="searchText" />
        <Button onClick={()=>searchQuery(document.getElementById("searchText").textContent)}>Search</Button>
        <div className="Footer"><NavigationBar/></div>
    </div>
  );
}

