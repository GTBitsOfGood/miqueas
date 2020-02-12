import ActiveLink from './ActiveLink'
import { Button} from 'react-bootstrap';
import {ShoppingCart, Person} from 'styled-icons/material'
import {Plus} from 'styled-icons/boxicons-regular'
import {Clipboard} from 'styled-icons/boxicons-regular'
import {Clock} from 'styled-icons/feather'
import '../public/navbar.css';

export default () => (
  <div>
    <ActiveLink href="/profile"><Button class="inline-block"><Person size="48"/></Button></ActiveLink>
    <ActiveLink href="/inventory"><Button class="inline-block"><ShoppingCart size="48"/></Button></ActiveLink>
    <ActiveLink href="/add"><Button variant="secondary" class="inline-block"><Plus size="48"/></Button></ActiveLink>
    <ActiveLink href="/log"><Button class="inline-block"><Clipboard size="48"/></Button></ActiveLink>
    <ActiveLink href="/"><Button class="inline-block"><Clock size="48"/></Button></ActiveLink>

  </div>
) 