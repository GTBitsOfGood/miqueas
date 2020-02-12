import NavigationBar from '../components/NavigationBar';
import '../public/add.css';

export default function Add() {
  return (
    <div class="Clean">
        <h1>This will be the add screen!</h1>
        <h2>Where you land if you press the '+' on the footer (unless we use a modal)</h2>
        <div class="Footer"><NavigationBar/></div>
    </div>
  );
}