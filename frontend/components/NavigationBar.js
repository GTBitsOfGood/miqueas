import ActiveLink from './ActiveLink'
import {Button} from 'react-bootstrap';
import {ShoppingCart, Person} from 'styled-icons/material'
import {Plus} from 'styled-icons/boxicons-regular'
import {Clipboard} from 'styled-icons/boxicons-regular'
import {Menu} from 'styled-icons/boxicons-regular/Menu'
import '../../public/navbar.css';

function NavigationBar(props) {
  let isProfile = false; let isShopping = false; let isAdd = false; let isLog = false; let isInventory = false;
  switch(props.selector){
    case 0:
      isProfile = true;
      break;
    case 1:
      isShopping = true;
      break;
    case 2:
      isAdd = true;
      break;
    case 3: 
      isLog = true;
      break;
    case 4:
      isInventory = true;
      break;
  }
  return(
  <div>
    <ActiveLink href="/profile">
      <Button style={isProfile ? {backgroundColor:'#51ADA9'} : {backgroundColor:'gray'}}>
        <Person size="40%"/><span className="caption">profile</span></Button>
      </ActiveLink>
    <ActiveLink href="/">
      <Button style={isShopping ? {backgroundColor:'#51ADA9'} : {backgroundColor:'gray'}}>
        <ShoppingCart size="40%"/><span className="caption">shopping list</span></Button>
      </ActiveLink>
    <ActiveLink href="/add">
      <Button variant="secondary" style={isAdd ? {backgroundColor:'#51ADA9'} : {backgroundColor:'gray'}}>
      <Plus size="55%" /><div className="caption"></div></Button>
      </ActiveLink>
    <ActiveLink href="/log">
      <Button style={isLog ? {backgroundColor:'#51ADA9'} : {backgroundColor:'gray'}}>
        <Clipboard size="40%"/><span className="caption">log</span></Button>
      </ActiveLink>
    <ActiveLink href="/inventory">
      <Button style={isInventory ? {backgroundColor:'#51ADA9'} : {backgroundColor:'gray'}}>
        <Menu size="40%"/><span className="caption">inventory</span></Button>
      </ActiveLink>
  </div>)
}
export default NavigationBar;